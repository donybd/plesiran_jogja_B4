import styles from './UpdateTourPackage.module.css';

const UpdateTourPackage = ({backToTours}) => {
  const handleCancel = () => {
    // Kembali ke halaman Users saat tombol Cancel diklik
    backToTours();
  };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <h3>Update Tour Packages</h3>
          <label htmlFor="tour-name"> Tour Name </label>
          <input id="tour-name" type="text" value="Prambanan Temple Tour" />
          <label htmlFor="package-price"> Package Price </label>
          <input id="package-price" type="text" value="2.000.000 IDR" />
          <label htmlFor="tour-duration"> Tour Duration </label>
          <input id="tour-duration" type="text" value="3 days" />
          <label htmlFor="tour-image"> Upload Tour image here </label>
          <div className={styles.fileUpload}>
            <i className="fas fa-cloud-upload-alt"></i>
            <p>Choose a file or drag &amp; drop it here</p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.updateBtn}>Update</button>
            <button className={styles.cancelBtn} onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTourPackage;
