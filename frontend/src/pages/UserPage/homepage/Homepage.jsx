import BootstrapClient from "../../../components/BootstrapClient";
import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import "../../../styles/homepage.css";
import Banner from "./Banner";
import FavDestination from "./FavDestination";
import Package from "./Package";
import Testimonials from "./Testimonials";
import TravelTrip from "./TravelTrip";

const Homepage = () => {
  return (
    <>
      <BootstrapClient />
      <Navbar />
      <Banner />
      <FavDestination />
      <Package />
      <Testimonials />
      <TravelTrip />
      <Footer />
    </>
  );
};

export default Homepage;
