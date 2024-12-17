import DiscoverNav from "../../../../components/User/DiscoverNav";
import Navbar from "../../../../components/User/Navbar";
import Footer from "../../../../components/User/Footer";
import { useLocation } from "react-router-dom";

const DetailBudaya = () => {
  const location = useLocation();
  console.log(location.state); // Log to check if cultureItem is being passed
  const { dataCulture } = location.state || {}; // Destructure the 'cultureItem' object from location.state

  if (!dataCulture) {
    return <h1>Culture Not Found</h1>; // Show this if 'cultureItem' is not found
  }

  return (
    <>
      <Navbar />
      <div className="hero-culture">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero-overlay"></div>
            </div>
          </div>
          <DiscoverNav />
        </div>
      </div>
      <section className="discover text-center py-3">
        <h2>Information</h2>
        <hr className="dashed-line" />
      </section>
      <section id="Culture-info" className="Culture-info container mb-3">
        <h2>{dataCulture.name}</h2>
        <p>{dataCulture.description}</p>
      </section>
      <Footer />
    </>
  );
};

export default DetailBudaya;
