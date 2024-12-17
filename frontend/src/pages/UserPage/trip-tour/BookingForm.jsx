import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/trip-tour/payment-prambanan-temple");
  };
  return (
    <div className="booking-form-kk">
      <div className="txt-content">
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit} method="POST">
          <label for="name" className="txt-form">
            Name
          </label>
          <input type="text" id="name" name="name" className="txt-form" />

          <label for="email" className="txt-form">
            Email
          </label>
          <input type="email" id="email" name="email" className="txt-form" />

          <label for="participants" className="txt-form">
            Number of Participants
          </label>
          <select id="participants" name="participants" className="txt-form">
            <option value="2-5">2-5</option>
            <option value="6-10">6-10</option>
            <option value="11-15">11-15</option>
            <option value="16-20">16-20</option>
          </select>

          <button type="submit" className="btn btn-custom mb-4">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
