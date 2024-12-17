import styles from "./Users.module.css";

const Users = ({ onAddUserClick, updateUser }) => {
  const handleUpdate = () => {
    updateUser();
  };

  return (
    <>
      <div className={styles.content} style={{ marginTop: "50px" }}>
        <div className={styles.tableContainer}>
          <h3>All Users</h3>
          <a
            href="#"
            className={styles.addNewBtn}
            onClick={(e) => {
              e.preventDefault(); // Mencegah reload halaman
              onAddUserClick(); // Panggil fungsi untuk mengubah konten
            }}
          >
            <i className="fas fa-plus"> </i> Add New
          </a>
          <table>
            <thead>
              <tr>
                <th>User Images</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img alt="User Image" height="30" src="/src/assets/img/foto.webp" width="30" />
                </td>
                <td>Dony Benaya Dinova</td>
                <td>+802-370-2430</td>
                <td>donybenaya@gmail.com</td>
                <td className={styles.actions}>
                  <i className="fas fa-eye"> </i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-edit" onClick={handleUpdate}></i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-trash-alt"> </i>
                </td>
              </tr>
              <tr>
                <td>
                  <img alt="User Image" height="30" src="/src/assets/img/foto.webp" width="30" />
                </td>
                <td>Marudut Dearman Damanik</td>
                <td>+720-276-9403</td>
                <td>marudutdamanik@gmail.com</td>
                <td className={styles.actions}>
                  <i className="fas fa-eye"> </i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-edit" onClick={handleUpdate}></i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-trash-alt"> </i>
                </td>
              </tr>
              <tr>
                <td>
                  <img alt="User Image" height="30" src="/src/assets/img/foto.webp" width="30" />
                </td>
                <td>Rega Nurcahya</td>
                <td>+351-756-654</td>
                <td>reganurcahya@gmail.com</td>
                <td className={styles.actions}>
                  <i className="fas fa-eye"> </i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-edit" onClick={handleUpdate}></i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-trash-alt"> </i>
                </td>
              </tr>
              <tr>
                <td>
                  <img alt="User Image" height="30" src="/src/assets/img/foto.webp" width="30" />
                </td>
                <td>Siti Aisyah</td>
                <td>+912-265-1550</td>
                <td>sitiaisyah@gmail.com</td>
                <td className={styles.actions}>
                  <i className="fas fa-eye"> </i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-edit" onClick={handleUpdate}></i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-trash-alt"> </i>
                </td>
              </tr>
              <tr>
                <td>
                  <img alt="User Image" height="30" src="/src/assets/img/foto.webp" width="30" />
                </td>
                <td>Siti Aulia Rahmah</td>
                <td>+304-921-8122</td>
                <td>sitiaulia@gmail.com</td>
                <td className={styles.actions}>
                  <i className="fas fa-eye"> </i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-edit" onClick={handleUpdate}></i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-trash-alt"> </i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
