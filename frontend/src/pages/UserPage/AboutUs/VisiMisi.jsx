import visimisi from "../../../assets/img/visimisi.png";
const VisiMisi = () => {
  return (
    <section className="visimisi py-5">
      <div className="container d-flex align-items-center">
        <div className="vision-icon text-center">
          <img src={visimisi} alt="Vision Icon" className="img-fluid" style={{ height: "auto" }} />
        </div>
        <div className="vision-text ms-4 text-light">
          <h3 className="judul">Our vision:</h3>
          <p>To be a trusted travel partner that connects tourists with the wonders of Yogyakarta, while preserving culture and the environment.</p>
          <h3 className="judul">Our mission:</h3>
          <p>
            Wisata Pelesiran Jogja is committed to providing professional, friendly, and high-quality tourism services, introducing Yogyakarta's cultural, historical, and natural riches in an interesting and educational way, and providing a
            personalized tourism experience that suits the needs of each tourist. We also support local economic development and the welfare of the people of Yogyakarta
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
