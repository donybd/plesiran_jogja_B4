import Navbar from "../../../../components/User/Navbar";
import Footer from "../../../../components/User/Footer";
import BannerCulinary from "./BannerCulinary";
import "../../../../styles/discover/culinary.css";
import CulinaryTitle from "./CulinaryTitle";
import FoodAndDrinkSwiper from "./FoodAndDrinkSwiper";

const Culinary = () => {
  return (
    <>
      <Navbar />
      <BannerCulinary />
      <CulinaryTitle />
      <FoodAndDrinkSwiper />
      <Footer />
    </>
  );
};

export default Culinary;
