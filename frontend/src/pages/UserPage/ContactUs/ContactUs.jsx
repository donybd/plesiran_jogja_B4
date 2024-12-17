import React from "react";
import tuguImage from "../../../assets/img/RENTAL/tugu.jpg";
import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import "../../../styles/contact/contact.css";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <section className="contact-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="contact-card">
                <i className="bi bi-telephone contact-icon"></i>
                <h4>Phone</h4>
                <p>0812345678</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <i className="bi bi-geo-alt contact-icon"></i>
                <h4>Address</h4>
                <p>Ketintang, Surabaya</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <i className="bi bi-envelope contact-icon"></i>
                <h4>Email</h4>
                <p>plesiranjogja@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="fototugu">
                <img src={tuguImage} className="" alt="BNI Building" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <h2 className="mb-4">Contact Us For Any Questions</h2>
                <p className="text-muted mb-4">Contact Us If You Have Any Question</p>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control-contactus" placeholder="Full Name" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control-contactus" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control-contactus" placeholder="Email" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control-contactus" placeholder="Subject" />
                    </div>
                  </div>
                  <textarea className="form-control-contactus mb-3" rows="5" placeholder="Message"></textarea>
                  <button type="submit" className="btn btn-send">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
