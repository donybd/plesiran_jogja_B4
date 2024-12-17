import React from "react";

const EtiketHotel = () => {
  const css = `
      body {
          background-color: #3a3a3a;
          font-family: 'Times New Roman', Times, serif;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .ticket-container {
          background-color: #e8e1d0;
          width: 700px;
          padding: 20px;
          border-radius: 10px;
          position: relative;
        }
        .ticket-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ticket-header h1 {
          margin: 0;
          font-size: 24px;
        }
        .close-button {
          font-size: 24px;
          color: #ff0000;
          cursor: pointer;
        }
        .itinerary-id {
          font-size: 24px;
          font-weight: bold;
          margin: 20px 0;
        }
        .hotel-info {
          margin-bottom: 20px;
        }
        .hotel-info h2 {
          margin: 0;
          font-size: 20px;
        }
        .hotel-info p {
          margin: 5px 0;
        }
        .check-info {
          display: flex;
          justify-content: space-between;
          margin: 20px 0;
        }
        .check-info div {
          text-align: center;
        }
        .check-info p {
          margin: 5px 0;
        }
        .divider {
          border-top: 1px solid black;
          margin: 20px 0;
        }
        .booking-info {
          display: flex;
          align-items: center;
        }
        .booking-info img {
          width: 150px;
          height: 100px;
          margin-right: 20px;
        }
        .booking-details {
          flex-grow: 1;
        }
        .booking-details p {
          margin: 5px 0;
        }
        .footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
        }
        .footer img {
          width: 100px;
        }
      `;

  return (
    <>
      <style>{css}</style>
      <div className="ticket-container">
        <div className="ticket-header">
          <h1>E-Ticket Hotel</h1>
          <div className="close-button">
            <i className="fas fa-times"> </i>
          </div>
        </div>
        <div className="itinerary-id">
          Itinerary ID
          <br />
          209220856
        </div>
        <div className="hotel-info">
          <h2>Hotel Tentrem Yogyakarta</h2>
          <p>Jl. P. Mangkubumi 72A, Yogyakarta 55233 Indonesia</p>
        </div>
        <div className="check-info">
          <div>
            <p>Check-in from :</p>
            <p>
              <strong> 13 November 2024 </strong>
            </p>
            <p>3:00 PM</p>
          </div>
          <div>
            <p>Check-out before :</p>
            <p>
              <strong> 14 November 2024 </strong>
            </p>
            <p>12:00 PM</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="booking-info">
          <img alt="Image of a luxurious hotel room with a large bed, seating area, and elegant decor." height="100" src="https://storage.googleapis.com/a1aa/image/Nufj93MREZSqSyIsfohqeNncXlwe7lX8ziLlf9zfkeRXInO6JA.jpg" width="150" />
          <div className="booking-details">
            <p>
              <strong> Booking Hotel </strong>
            </p>
            <p>Guest: John Doe</p>
            <p>Room Type: Executive Suite</p>
            <p>Number of rooms: 1</p>
            <p>Include breakfast?: Yes</p>
          </div>
        </div>
        <div className="footer">
          <img alt="Logo of the hotel or booking agency." height="50" src="aset/logo.png" width="50" />
        </div>
      </div>
    </>
  );
};

export default EtiketHotel;
