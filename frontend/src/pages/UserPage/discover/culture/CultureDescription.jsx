import candi from "../../../../assets/img/BUDAYA/candi.jpg";
import upacaraLabuhan from "../../../../assets/img/BUDAYA/upacara-labuhan.jpg";
import seniTari from "../../../../assets/img/BUDAYA/seni-tari-jogjakarta.jpg";
import wayangKulit from "../../../../assets/img/BUDAYA/wayang-kulit.jpg";
import karawitan from "../../../../assets/img/BUDAYA/karawitan-jogja.jpg";
import upacaraSekaten from "../../../../assets/img/BUDAYA/upacara-sekaten.jpg";
import { Link } from "react-router-dom";

const CultureDescription = () => {
  return (
    <>
      <section className="culture mt-2">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-7 align-items-center d-flex justify-content-center">
              <img src={candi} className="img-fluid rounded-4 img-cult" alt="Prambanan Temple" />
            </div>
            <div className="col-md-5 d-flex flex-column justify-content-center mb-5">
              <h2>Tourist Wonders and</h2>
              <h2>Culture in One Destination</h2>
              <p>
                Welcome to Yogyakarta, a city full of cultural heritage, history, and the natural beauty of the Yogyakarta Palace, from the majestic Prambanan Temple to the panoramic view of Mount Merapi. Every corner of Jogja hides an
                unforgettable story.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="culture mb-1">
        <div className="container">
          <div className="row gy-4">
            <div className="col-sm-4">
              <img src={upacaraLabuhan} alt="Culture 1" className="img-fluid" />
            </div>
            <div className="col-sm-4">
              <img src={seniTari} alt="Culture 2" className="img-fluid" />
            </div>
            <div className="col-sm-4">
              <img src={wayangKulit} alt="Culture 3" className="img-fluid" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-8">
              <img src={karawitan} alt="Culture 4" className="img-fluid" />
            </div>
            <div className="col-sm-4">
              <img src={upacaraSekaten} alt="Culture 5" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="culture mt-3 mb-5">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-6">
              <h1>
                Visit Jogjakarta's <br />
                Most Famous <br />
                Culture
              </h1>
              <button className="btn">
                <Link to={`/discover/list-budaya`}>see more</Link>
              </button>
            </div>
            <div className="col-md-6">
              <div className="card shadow" style={{ width: "100%" }}>
                <img src={karawitan} className="card-img-top h-100" alt="Cultural Image" />
                <div className="card-body p-3">
                  <h3 className="card-title mt-1 fw-bold">Sekatenan</h3>
                  <p className="card-text p-0">A traditional celebration held to commemorate the birth of the Prophet Muhammad SAW and is a legacy of the Yogyakarta and Surakarta Sultanates.</p>
                  <Link to={`/discover/detail-budaya`} className="btn stretched-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CultureDescription;
