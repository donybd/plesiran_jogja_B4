import styles from './UpdateRental.module.css';

const UpdateRental = ({backToRental}) => {
  const handleCancel = () => {
    // Kembali ke halaman Users saat tombol Cancel diklik
    backToRental();
  };

  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <h3>Update Rentals</h3>
          <div className={styles.formGroup}>
            <label htmlFor="vehicle-name">Vehicle Name</label>
            <input id="vehicle-name" type="text" value="Porsche GT4-RS" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="rental-price">Rental Price</label>
            <input id="rental-price" type="text" value="120.000 IDR/days" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="type-vehicle">Type Vehicle</label>
            <input id="type-vehicle" type="text" value="Car" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="upload-image">Upload Vehicle image here</label>
            <div className={styles.fileUpload}>
              <i className="fas fa-cloud-upload-alt"></i>
              <p>Choose a file or drag &amp; drop it here</p>
            </div>
          </div>
          <div className={styles.formActions}>
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

export default UpdateRental;
