import malioboro from "../../../assets/img/malioboro.jpg";
import keraton from "../../../assets/img/Keratonyogyakarta.jpeg";
import tamansari from "../../../assets/img/tamansari.jpg";
const TouristDestination = () => {
  return (
    <section className="otherdest">
      <div className="container my-5">
        <h4 className="judul-info2">Our Tourist Destinations</h4>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border">
              <img src={malioboro} className="card-img-top h-100" alt="Malioboro" />
              <div className="p-3">
                <h5 className="card-title">Malioboro</h5>
                <p className="card-text p-0">Discover fascinating historical stories and cultural heritage in every corner of Yogyakarta.</p>
                <a href="#" className="btn stretched-link">
                  See more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border">
              <img src={keraton} className="card-img-top h-100" alt="Keraton Yogyakarta" />
              <div className="p-3">
                <h5 className="card-title">Rich in Culture & History</h5>
                <p className="card-text p-0">Discover fascinating historical stories and cultural heritage in every corner of Yogyakarta.</p>
                <a href="#" className=" btn stretched-link">
                  See more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border">
              <img src={tamansari} className="card-img-top h-100" alt="Taman Sari" />
              <div className="p-3">
                <h5 className="card-title">Local Culinary & Experiences</h5>
                <p className="card-text p-0">Taste typical food and experience local life in Yogyakarta with us.</p>
                <a href="#" className="btn stretched-link">
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouristDestination;
