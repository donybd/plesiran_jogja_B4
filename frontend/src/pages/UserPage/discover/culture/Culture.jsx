import Footer from "../../../../components/User/Footer";
import Navbar from "../../../../components/User/Navbar";
import BannerCulture from "./BannerCulture";
import "../../../../styles/discover/culture.css";
import CultureDescription from "./CultureDescription";
const Culture = () => {
  return (
    <>
      <Navbar />
      <BannerCulture />
      <CultureDescription />
      <Footer />
    </>
  );
};

export default Culture;
