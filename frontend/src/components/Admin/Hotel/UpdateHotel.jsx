import styles from './UpdateHotel.module.css';

const UpdateHotel = ({backToHotel}) => {
  const handleCancel = () => {
    backToHotel();
  };

  return (
    <div className={styles.mainContent}>
      {/* Hotel Form Section */}
      <div className={styles.formSection}>
        <h3>Add New Hotels</h3>
        <label htmlFor="hotel-name">Hotel Name</label>
        <input id="hotel-name" type="text" />

        <label htmlFor="address">Address</label>
        <input id="address" type="text" />

        <label htmlFor="hotel-image">Upload Hotel Image Here</label>
        <div className={styles.uploadBox}>
          <i className="fas fa-cloud-upload-alt"></i>
          <p>Choose a file or drag it here</p>
        </div>

        <div className={styles.formActions}>
          <button className={styles.updateBtn}>Save</button>
          <button className={styles.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>

      {/* Room Details Form Section */}
      <div className={styles.formSection}>
        <h3>Room Details</h3>
        <label htmlFor="room-category">Room Category</label>
        <input id="room-category" type="text" />

        <label htmlFor="room-price">Room Price</label>
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

        <label htmlFor="room-image">Upload Room Image Here</label>
        <div className={styles.uploadBox}>
          <i className="fas fa-cloud-upload-alt"></i>
          <p>Choose a file or drag it here</p>
        </div>

        <label htmlFor="room-description">Room Description</label>
        <div className={styles.editor}>
          <textarea
            id="room-description"
            rows="5"
            defaultValue="Experience the executive treatment in one of our superbly appointed Executive Suites. Our 100-square-meter Executive Suites offer a truly memorable experience. The elegant bedroom is equipped with a king-size bed, writing desk, and 55-inch flat-screen TV. The room comes with exclusive benefits including customized breakfast daily, daily refreshments, VIP check-in and check-out, and 24-hour access to the Family and Executive Lounge. In addition to complimentary food and beverages from the mini bar, guests at Executive Suite have the benefit to brew coffee from the pod coffee machine."></textarea>
        </div>

        <div className={styles.formActions}>
          <button className={styles.updateBtn}>Save</button>
          <button className={styles.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateHotel;
