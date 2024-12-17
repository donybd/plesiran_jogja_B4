import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SectionListBudaya = () => {
  const [culture, setCulture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL = import.meta.env.VITE_BE_API;
  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    const fetchCulture = async () => {
      try {
        const response = await fetch(`${URL}discover/culture`);
        if (!response.ok) {
          throw new Error("Failed to fetch Culture data");
        }
        const result = await response.json();
        setCulture(result.data);
      } catch (err) {
        setError("Unable to load Culture data. Please try again later.");
        console.error("Error fetching Culture data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCulture();
  }, [URL]);

  const handleDetailClick = (cultureItem) => {
    console.log(cultureItem);
    navigate("/discover/detail-budaya", {
      state: { dataCulture: cultureItem },
    });
  };

  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  return (
    <section className="culture py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            culture.map((cultureItem) => (
              <div className="col" key={cultureItem.id_cul}>
                <div className="card h-100 shadow">
                  <img src={`./../../img/budaya/${cultureItem.image_budaya}`} className="card-img-top h-auto" alt={cultureItem.name} />
                  <div className="card-body p-3">
                    <h3 className="card-title mt-0">{cultureItem.name}</h3>
                    <p className="card-text mt-2 p-0">{truncateText(cultureItem.description, 15)}</p>
                    <button
                      className="btn-budaya stretched-link no-hover"
                      onClick={() => handleDetailClick(cultureItem)}
                      style={{
                        transition: "none",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        cursor: "default",
                        border: "none",
                        padding: "0px",
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionListBudaya;
