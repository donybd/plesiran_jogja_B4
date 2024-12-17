import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../../../components/User/Footer";
import Navbar from "../../../../components/User/Navbar";
import "../../../../styles/tempat.css";
import "../../../../styles/review.css";

const DetailTempat = () => {
  const location = useLocation(); // Mengambil data yang dikirim melalui state
  const { dataCulinary } = location.state || {}; // Menangkap data kuliner

  if (!dataCulinary) {
    return <h1>Culinery Not Found</h1>; // Menangani error jika data kosong
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`./../../img/Kuliner/${dataCulinary.image_2}`} alt={`Gambar ${dataCulinary.name}`} className="d-block w-100 h-30" />
            </div>
          </div>
        </div>
      </div>
      <section className="location mt-2">
        <div className="container">
          <h4 className="judul-info" style={{ textAlign: "center" }}>
            {`About ${dataCulinary.name}`}
          </h4>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="deskripsi col-lg-4 order-1 order-lg-1" style={{ paddingLeft: "0px" }}>
            <img src={`./../../img/Kuliner/${dataCulinary.image_1}`} alt={`Gambar ${dataCulinary.name}`} className="img-fluid" />
          </div>
          <div className="deskripsi col-lg-8 order-2 order-lg-2 pe-lg-2 py-5 d-flex flex-column">
            <p className="text-p">{dataCulinary.description}</p>
          </div>
        </div>
      </div>

      {/* Gambar dan Deskripsi Tambahan */}
      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="deskripsi col-lg-9 order-1 order-lg-1">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2 className="text-p">{dataCulinary.location}</h2>
                <img src={`./../../img/Kuliner/${dataCulinary.image_1}`} alt={`Gambar ${dataCulinary.name}`} style={{ width: "30%", height: "30%", objectFit: "cover", round: "none" }} />
                <img src={`./../../img/Kuliner/${dataCulinary.image_2}`} alt={`Gambar ${dataCulinary.name}`} style={{ width: "30%", height: "30%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailTempat;
