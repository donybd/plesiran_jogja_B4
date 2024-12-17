import React from "react";

const Review = () => {
  const css = `
      body {
          background-color: #fff;
          font-family: 'Times New Roman', Times, serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200vh;
          margin: 100px;
        }
        .review-container {
          background-color: #e6d7be;
          padding: 20px;
          border-radius: 15px;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        .review-container h1 {
          font-size: 24px;
          margin-bottom: 20px;
          font-weight: bold;
        }
        .review-container label {
          display: block;
          margin-bottom: 10px;
          font-weight: bold;
        }
        .review-container input[type='text'],
        .review-container textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }
        .review-container textarea {
          height: 100px;
          resize: none;
        }
        .review-container .stars {
          margin-bottom: 20px;
          text-align: center;
        }
        .review-container .stars i {
          font-size: 24px;
          color: #f5c518;
          cursor: pointer;
        }
        .review-container .add-photo {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-bottom: 20px;
          background-color: #f5f5f5;
        }
        .review-container .add-photo i {
          font-size: 36px;
          color: #ccc;
        }
        .review-container .send-review {
          display: flex;
          justify-content: center;
        }
        .review-container .send-review button {
          background-color: #8b6b4a;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }
        .review-container .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 20px;
          color: red;
          cursor: pointer;
        }
    `;
  return (
    <>
      <style>{css}</style>
      <div className="review-container">
        <div className="close-btn">&times;</div>
        <h1>Write a Review</h1>
        <label>My Rate :</label>
        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <label>Overview :</label>
        <input type="text" placeholder="Write a Overview" />
        <label>Review :</label>
        <textarea placeholder="Write a Review"></textarea>
        <label>Add Photo:</label>
        <div className="add-photo">
          <i className="fas fa-camera"></i>
        </div>
        <div className="send-review">
          <button>Send Review</button>
        </div>
      </div>
    </>
  );
};

export default Review;
