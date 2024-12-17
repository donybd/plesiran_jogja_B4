import Footer from "../../../../components/User/Footer";
import Navbar from "../../../../components/User/Navbar";

import keraton from "../../../../assets/img/Berbagai_benda_peninggalan_Sultan_yang_ada_di_Keraton_Yogyakarta_2 2.png";
import second from "../../../../assets/img/restaurant/upacara-sekaten 2.png";
import logouser from "../../../../assets/img/HOTEL/logo user.png";
import "../../../../styles/tempat.css";
import "../../../../styles/review.css";

const DetailTempat = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={second} alt="Upacara-sekaten " className="d-block" />
            </div>
          </div>
        </div>
      </div>

      <section className="location mt-2">
        <div className="container">
          <h4 className="judul-info">Yu djum information</h4>
          <p className="text-p">
            Gudeg Yu Djum is the main kitchen and traditional food stall in Yogyakarta, started by a person who never gives up, named Djuwariyah or known as "Yu Djum", since 1951. Djuwariyah first sold his gudeg in Widjilan Village,
            precisely to the south of Pelengkung Widjilan, At that time it was still a small shop with very simple tables and chairs. Djuwariya never gave up selling his gudeg. By using a pedicab to go home in the morning, little by little
            he accumulated capital to buy land and build a house. In 1985, the Gudeg Yu Djum food stall opened in Widjilan.
          </p>
        </div>
      </section>

      <section className="containerinformasi">
        <div className="container">
          <div className="row">
            <div className="deskripsi col-lg-4 order-1 order-lg-1">
              <img src={keraton} alt="Borobudur Informasi" className="img-fluid rounded-4" />
            </div>
            <div className="deskripsi col-lg-8 order-2 order-lg-2 pe-lg-2 py-5 d-flex flex-column">
              <h4>location</h4>
              <div className="row" style={{ paddingLeft: "25px" }}>
                <div className="row col-1" style={{ alignItems: "center", justifyItems: "center", textAlign: "center" }}>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="col-11">
                  <p>Jl. Admiral Adisucipto No. KM 8.7, Kembang, Maguwoharjo, Kec. Depok, Sleman Regency, Yogyakarta Special Region 55281 See maps Directions</p>
                </div>
              </div>
              <h4>Operating Hours</h4>
              <div className="row" style={{ paddingLeft: "25px" }}>
                <div className="row col-1" style={{ alignItems: "center", justifyItems: "center", textAlign: "center" }}>
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div className="col-11">
                  <span>09:00 AM - 2:00AM</span>
                </div>
              </div>
              <h4>Facility</h4>
              <div className="row" style={{ paddingLeft: "25px" }}>
                <div className="col-12">
                  <span>Toilet</span>
                </div>
                <div className="col-12">
                  <span>Mushola</span>
                </div>
                <div className="col-12">
                  <span>Wifi</span>
                </div>
                <div className="col-12">
                  <span>Parking</span>
                  <div className="row" style={{ paddingLeft: "25px" }}>
                    <div className="col-6">
                      <span>Wifi</span>
                    </div>
                    <div className="col-6">
                      <span>IDR, 5,000</span>
                    </div>
                  </div>
                  <div className="row" style={{ paddingLeft: "25px" }}>
                    <div className="col-6">
                      <span>Motorcycle</span>
                    </div>
                    <div className="col-6">
                      <span>IDR, 10,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container reviews">
        <h2>REVIEWS</h2>
        <div className="row">
          <div className="col-6">
            <div className="review-overview">
              <div className="score-details">
                <h3>5.00</h3>
                <p>3,422 Reviews</p>
              </div>
              <div className="stars">★★★★★</div>
            </div>
          </div>
        </div>

        <div className="review-list">
          <div className="review-item">
            <div className="review-details">
              <div className="reviewer">
                <img src={logouser} alt="Reviewer" />
                <div>
                  <h4>Voyage47858908110</h4>
                  <p className="review-date">October 2024</p>
                </div>
              </div>
              <span className="stars">★★★★★</span>
            </div>
            <p className="review-text">Truly a 5 Star Experience in Yogya! I always choose to stay here for a family trip to Yogya. Spacious clean room, tasty food, and friendly smiles!</p>
            <div className="helpful">Helpful? Yes</div>
          </div>

          <div className="review-item">
            <div className="review-details">
              <div className="reviewer">
                <img src={logouser} />
                <div>
                  <h4>Dipta N</h4>
                  <p className="review-date">September 2024</p>
                </div>
              </div>
              <span className="stars">★★★★★</span>
            </div>
            <p className="review-text">Perfect! Best moment with kayumanis all perfect and best service with niken and dewi all good and hoping to visit again.</p>
            <div className="helpful">Helpful? Yes</div>
          </div>

          <div className="review-item">
            <div className="review-details">
              <div className="reviewer">
                <img src={logouser} alt="Reviewer" />
                <div>
                  <h4>Quest39477093230</h4>
                  <p className="review-date">September 2024</p>
                </div>
              </div>
              <span className="stars">★★★★★</span>
            </div>
            <p className="review-text">Nice Fragrant Hotel, Excellent Servicem, Good Restaurant. Plenty of food variants, Good Services, Worth it values, Trademark of Tentrem Hotel YES IT IS.</p>
            <div className="helpful">Helpful? Yes</div>
          </div>

          <div className="review-item">
            <div className="review-details">
              <div className="reviewer">
                <img src={logouser} alt="Reviewer" />
                <div>
                  <h4>Alby_Mangles</h4>
                  <p className="review-date">Agustus 2024</p>
                </div>
              </div>
              <span className="stars">★★★★★</span>
            </div>
            <p className="review-text">
              I have visited 70 countries and lived in 7 - so I can credibly say that this is one of the best hotels in the world within its class. I also stayed here for 6.5 weeks, so got to know it well. Standout features of this hotel
              are its service, food, pool, and the best hotel gym I’ve ever seen, which includes a sauna with hot and cold plunge pools.
            </p>
            <div className="helpful">Helpful? Yes</div>
          </div>

          <div className="review-item">
            <div className="review-details">
              <div className="reviewer">
                <img src={logouser} alt="Reviewer" />
                <div>
                  <h4>Aan S</h4>
                  <p className="review-date">Agustus 2024</p>
                </div>
              </div>
              <span className="stars">★★★★★</span>
            </div>
            <p className="review-text">
              For reason business, vacation etc. This hotel is the best. Why?? Because The room so cleanned, delicious breakfast, the best facility swimming pool,gymnastic, Excellent service from check-in untuk check-out and the best
              service from room attendant (utta), I recommend this hotel for you.
            </p>
            <div className="helpful">Helpful? Yes</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailTempat;
