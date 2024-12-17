import styles from './AddHotel.module.css';

const AddDiscover = ({backToHotels}) => {
  const handleCancel = () => {
    // Kembali ke halaman Users saat tombol Cancel diklik
    backToHotels();
  };

  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.formSection}>
          <h3>Add New Hotels</h3>
          <label htmlFor="hotel-name"> Hotel Name </label>
          <input id="hotel-name" type="text" />
          <label htmlFor="address"> Address </label>
          <input id="address" type="text" />
          <label htmlFor="hotel-image"> Upload Hotel Image Here </label>
          <div className={styles.uploadBox}>
            <i className="fas fa-cloud-upload-alt"> </i>
            <p>Choose a file or drag it here</p>
          </div>
          <div className={styles.formActions}>
            <button className={styles.submitBtn}>Submit</button>
            <button className={styles.cancelBtn} onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
        <div className={styles.formSection}>
          <h3>Room Details</h3>
          <label htmlFor="room-category"> Room Category </label>
          <input id="room-category" type="text" />
          <label htmlFor="room-price"> Room Price </label>
          <input id="room-price" type="text" />
          <div className={styles.checkboxGroup}>
            <label>
              <input type="checkbox" />
              Swimming Pool
            </label>
            <label>
              <input type="checkbox" />
              WiFi
            </label>
            <label>
              <input type="checkbox" />
              Breakfast
            </label>
            <label>
              <input type="checkbox" />
              Gym
            </label>
            <label>
              <input type="checkbox" />
              Game Corner
            </label>
            <label>
              <input type="checkbox" />
              Laundry
            </label>
            <label>
              <input type="checkbox" />
              Parking Space
            </label>
          </div>
          <label htmlFor="room-image"> Upload Room Image Here </label>
          <div className={styles.uploadBox}>
            <i className="fas fa-cloud-upload-alt"> </i>
            <p>Choose a file or drag it here</p>
          </div>
          <label htmlFor="room-description"> Room Description </label>
          <textarea name="room_description" id="room_description"></textarea>
          <div className="editor">
            <div className="editor-toolbar">
              <button>
                <i className="fas fa-bold"> </i>
              </button>
              <button>
                <i className="fas fa-italic"> </i>
              </button>
              <button>
                <i className="fas fa-underline"> </i>
              </button>
              <button>
                <i className="fas fa-list-ul"> </i>
              </button>
              <button>
                <i className="fas fa-list-ol"> </i>
              </button>
              <button>
                <i className="fas fa-align-left"> </i>
              </button>
              <button>
                <i className="fas fa-align-center"> </i>
              </button>
              <button>
                <i className="fas fa-align-right"> </i>
              </button>
              <button>
                <i className="fas fa-align-justify"> </i>
              </button>
            </div>
          </div>
          <div className={styles.formActions}>
            <button className={styles.submitBtn}>Submit</button>
            <button className={styles.cancelBtn} onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDiscover;
