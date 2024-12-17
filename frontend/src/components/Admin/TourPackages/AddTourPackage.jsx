import styles from './AddTourPackage.module.css';

const AddTourPackage = ({backToTours}) => {
  const handleCancel = () => {
    // Kembali ke halaman Users saat tombol Cancel diklik
    backToTours();
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h3>Add New Tour Packages</h3>
        <label htmlFor="tour-name"> Tour Name </label>
        <input id="tour-name" placeholder="Tour Name" type="text" />
        <label htmlFor="package-price"> Package Price </label>
        <input id="package-price" placeholder="Price" type="number" />
        <label htmlFor="tour-duration"> Tour Duration </label>
        <input id="tour-duration" placeholder="Tour Duration" type="text" />
        <label htmlFor="tour-image"> Upload Tour image here </label>
        <div className={styles.fileUpload}>
          <i className="fas fa-cloud-upload-alt"> </i>
          <p>Choose a file or drag &amp; drop it here</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.submitBtn}>Submit</button>
          <button className={styles.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTourPackage;
