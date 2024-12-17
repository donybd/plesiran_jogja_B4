import Navbar from "../../../../components/User/Navbar";
import Footer from "../../../../components/User/Footer";
import BannerListBudaya from "./BannerListBudaya";
import SectionListBudaya from "./SectionListBudaya";
import "../../../../styles/discover/culture.css";

const ListBudaya = () => {
  return (
    <>
      <Navbar />
      <BannerListBudaya />
      <SectionListBudaya />
      <Footer />
    </>
  );
};

export default ListBudaya;
