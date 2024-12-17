import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import BannerAboutUs from "./BannerAboutUs";
import DesriptionAboutUs from "./DesriptionAboutUs";
import TouristDestination from "./TouristDestination";
import VisiMisi from "./VisiMisi";
import "../../../styles/aboutus.css";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <BannerAboutUs />
      <DesriptionAboutUs />
      <VisiMisi />
      <Footer />
    </>
  );
};

export default AboutUs;
