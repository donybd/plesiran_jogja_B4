import React, { useState, useEffect } from "react";
import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import "../../../styles/profile.css";

const Profile = () => {
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Load saved profile data
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setName(savedUser.name || "");
      setEmail(savedUser.email || "");
      setProfileImage(savedUser.profileImage || "https://via.placeholder.com/150");
    }
  }, []);

  return (
    <>
      <Navbar />
      <section className="info" style={{ marginTop: "150px" }}>
        <div className="Information mt-5">
          <div className="row">
            <div className="poto col-md-4 text-center">
              <img src={profileImage} alt="Profile" className="rounded-circle" width="150" />
              <h5 className="mt-3">{name}</h5>
            </div>
            <div className="col-md-8">
              <div className="mb-4">
                <div className="card-body">
                  <h5 className="card-title">Personal Information</h5>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" value={name} readOnly />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input type="email" className="form-control" id="email" value={email} readOnly />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
