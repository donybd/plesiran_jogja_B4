import styles from './UpdateUser.module.css';

const UpdateUser = ({backToUsers}) => {
  const handleCancel = () => {
    // Kembali ke halaman Users saat tombol Cancel diklik
    backToUsers();
  };

  return (
    <>
      <div className={styles.updateUser}>
        <h3>Update User</h3>
        <label htmlFor="username"> User Name </label>
        <input id="username" type="text" value="Dony Benaya Dinova" />
        <label htmlFor="email"> Email Address </label>
        <input id="email" type="email" value="donybenaya@gmail.com" />
        <label htmlFor="contact"> Contact Number </label>
        <input id="contact" type="text" value="+802-370-2430" />
        <label htmlFor="upload"> Upload user image here </label>
        <div className={styles.fileUpload}>
          <i className="fas fa-cloud-upload-alt"> </i>
          <p>Choose a file or drag &amp; drop it here</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.updateBtn}>Update</button>
          <button className={styles.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
