import React from "react";

const DetailReservasi = () => {
  const css = `
          body {
          background-color: #3a3a3a;
          font-family: 'Times New Roman', Times, serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .modal-custom {
          background-color: #e8dfd1;
          border-radius: 10px;
          padding: 20px;
          width: 500px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          position: relative;
        }
        .modal-custom h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .modal-custom hr {
          border: none;
          border-top: 1px solid #000;
          margin: 10px 0;
        }
        .modal-custom .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: #ff4d4d;
          border: none;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .modal-custom .close-btn i {
          color: #fff;
          font-size: 16px;
        }
        .modal-custom .content {
          font-size: 16px;
        }
        .modal-custom .content .section {
          margin-bottom: 20px;
        }
        .modal-custom .content .section .title {
          font-weight: bold;
          margin-bottom: 5px;
          display: flex;
          justify-content: space-between;
        }
        .modal-custom .content .section .detail {
          display: flex;
          justify-content: space-between;
        }
      `;

  return (
    <>
      <style>{css}</style>
      <div className="modal-custom">
        <button className="close-btn">
          <i className="fas fa-times"></i>
        </button>
        <h2>Detail Reservation</h2>
        <hr />
        <div className="content">
          <div className="section">
            <div className="title">
              <span>Executive Suite - 2 Adults</span>
              <span>5.782.000 IDR</span>
            </div>
            <div className="detail">
              <div>
                <div>Date Reservation : 10 November 2024 to 11 November 2024</div>
                <div>Check-in from : 3:00 PM</div>
                <div>Check-in before : 12:00 PM</div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="title">Room Detail</div>
            <div className="detail">
              <div>Executive Suite King</div>
            </div>
            <div className="detail">
              <div>Bedding Options : King</div>
            </div>
            <div className="detail">
              <div>Breakfast included : Tentrem Breakfast</div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default DetailReservasi;
