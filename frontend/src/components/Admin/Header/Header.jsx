import { useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // State untuk mengelola dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Fungsi toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div className={styles.header} style={{ width: "100%", display: "flex" }}>
        <div className={styles.logo}>
          <img alt="Logo" height="40" src="/src/assets/img/logo.png" width="100" />
        </div>
        <div className={styles.searchBar}>
          <input placeholder="Search" type="text" />
        </div>
        <div className={styles.userInfo}>
          <img alt="User profile picture" height="40" src="https://storage.googleapis.com/a1aa/image/k8mAFwLnDk7fACMg5YgDJYwisTvzMKkvVnung7gdho3bm83JA.jpg" width="40" />
          <span> Ammanda admin </span>
          <span className={styles.dropdown} onClick={toggleDropdown}>
            {/* Render ikon berdasarkan state */}
            <i className={`fas ${isDropdownOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
          </span>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li onClick={() => handleLogout()}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
