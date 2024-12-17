import React, { useState, useEffect } from "react";
import styles from "./Discover.module.css";

const URL = import.meta.env.VITE_BE_API;

const Discover = ({ onAddDiscoverClick }) => {
  const [activeMenu, setActiveMenu] = useState("Destination");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setData([]);
      try {
        const endpointMap = {
          Destination: "discover/dest",
          Culinary: "discover/culinary",
          Culture: "discover/culture",
        };

        const endpoint = endpointMap[activeMenu];
        if (!endpoint) throw new Error("Invalid menu selected");

        const response = await fetch(URL + endpoint);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        console.log("API Response:", result);

        // Transform data for consistency
        const transformedData = result.data.map((item) => ({
          id: item.id_dest || item.id_cul || item.culture_id,
          name: item.name_dest || item.name || item.name,
          image: item.image_destination || item.image_1 || item.image_budaya,
        }));
        setData(transformedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeMenu]);

  const handleEdit = async (id) => {
    const newName = prompt("Enter new name:");
    if (newName) {
      try {
        const response = await fetch(`${URL}discover/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: newName }),
        });
        if (!response.ok) throw new Error("Failed to edit item");
        const updatedData = data.map((item) => (item.id === id ? { ...item, name: newName } : item));
        setData(updatedData);
      } catch (err) {
        alert(err.message);
      }
    }
  };

  const handleDelete = async (id) => {
    console.log("Deleting ID:", id);
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const deleteEndpointMap = {
          Destination: `discover/dest/${id}`,
          Culinary: `discover/culinary/${id}`,
          Culture: `discover/culture/${id}`,
        };

        const deleteEndpoint = deleteEndpointMap[activeMenu];
        if (!deleteEndpoint) throw new Error("Invalid delete endpoint");

        const response = await fetch(`${URL}${deleteEndpoint}`, {
          method: "DELETE",
        });
        console.log("Delete Response:", response);
        if (!response.ok) throw new Error("Failed to delete item");

        const filteredData = data.filter((item) => item.id !== id);
        setData(filteredData);
      } catch (err) {
        alert(err.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h3>Discover</h3>
        <ul>
          {["Destination", "Culinary", "Culture"].map((menu) => (
            <li key={menu} className={activeMenu === menu ? styles.active : null} onClick={() => setActiveMenu(menu)}>
              {menu}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h2>{activeMenu}</h2>
          <button className={styles.addButton} onClick={() => onAddDiscoverClick(activeMenu)}>
            Add New +
          </button>
        </div>
        <div className={styles.grid}>
          {loading && <p>Loading...</p>}
          {error && <p className={styles.error}>{error}</p>}
          {!loading && !error && data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className={styles.card}>
                <img src={`../../../img/` + item.image} alt={item.name} />
                <h3 className={styles.cardTitle}>{item.name}</h3>
                <div className={styles.buttonGroup}>
                  <button className={styles.editButton} onClick={() => handleEdit(item.id)}>
                    Edit
                  </button>
                  <button className={styles.deleteButton} onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : !loading ? (
            <p>No data available</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Discover;
