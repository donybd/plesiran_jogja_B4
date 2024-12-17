import Footer from "../../../../components/User/Footer";
import Navbar from "../../../../components/User/Navbar";
import BannerDiscover from "./BannerDiscover";
import BootstrapClient from "../../../../components/BootstrapClient";
import Title from "./Title";
import DestinationSlider from "../destination/ListDestination";
import "../../../../styles/discover/discover.css";

const Discover = () => {
  return (
    <>
      <BootstrapClient />
      <Navbar />
      <BannerDiscover />
      <Title />
      <DestinationSlider />
      <Footer />
    </>
  );
};

export default Discover;
