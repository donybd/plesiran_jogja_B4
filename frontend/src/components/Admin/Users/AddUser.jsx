import styles from './AddUser.module.css';

const AddUser = ({backToUsers}) => {
  const handleCancel = () => {
    // Kembali ke halaman Users saat tombol Cancel diklik
    backToUsers();
  };

  return (
    <div className={styles.content}>
      <h3>Add New User</h3>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="username">User Name</label>
          <input id="username" placeholder="User Name" type="text" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input id="email" placeholder="Email Address" type="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contact">Contact Number</label>
          <input id="contact" placeholder="Contact Number" type="text" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="file-upload">Upload user image here</label>
          <div className={styles.fileUpload} id="file-upload">
            <i className="fas fa-cloud-upload-alt"></i>
            <p>Choose a file or drag &amp; drop it here</p>
          </div>
        </div>
        <div className={styles.formActions}>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
          <button type="button" className={styles.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
