import Login from "./pages/UserPage/LoginRegister/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/UserPage/LoginRegister/Regitser";
import Homepage from "./pages/UserPage/homepage/Homepage";
import Discover from "./pages/UserPage/discover/Discover/Discover";
import DetailTourPrambanan from "./pages/UserPage/trip-tour/DetailTourPrambanan";
// import PaymentPrambanan from "./pages/UserPage/trip-tour/PaymentPrambanan";
// import ActivityPackage from "./pages/UserPage/trip-tour/ActivityPackage";
import TourDate from "./pages/UserPage/trip-tour/TourDate";
import AboutUs from "./pages/UserPage/AboutUs/AboutUs";
import Culture from "./pages/UserPage/discover/culture/Culture";
import ListBudaya from "./pages/UserPage/discover/culture/ListBudaya";
import DetailBudaya from "./pages/UserPage/discover/culture/DetailBudaya";
import TripTour from "./pages/UserPage/trip-tour/TripTour";
import Culinary from "./pages/UserPage/discover/culinery/Culinary";
import Hotels from "./pages/UserPage/Hotel/Hotels";
import DetailHotel from "./pages/UserPage/Hotel/DetailHotel";
import DetailRoom from "./pages/UserPage/Hotel/DetailRoom";
import DetailPaymentHotel from "./pages/UserPage/Hotel/DetailPaymentHotel";
import DetailPaymentHotel2 from "./pages/UserPage/Hotel/DetailPaymentHotel2";
import DetailPaymentHotel3 from "./pages/UserPage/Hotel/DetailPaymentHotel3";
import DetailPaymentHotel4 from "./pages/UserPage/Hotel/DetailPaymentHotel4";
import HotelLastPayment from "./pages/UserPage/Hotel/HotelLastPayment";
import Rent from "./pages/UserPage/Rental/Rent";
import RentDetail from "./pages/UserPage/Rental/RentDetail";
import Profile from "./pages/UserPage/profile/Profile";
import MyReservation from "./pages/UserPage/profile/MyReservation";
import ContactUs from "./pages/UserPage/ContactUs/ContactUs";
import DetailPaymentTour from "./pages/UserPage/trip-tour/DetailPaymentTour";
import DetailPaymentTour2 from "./pages/UserPage/trip-tour/DetailPaymentTour2";
import DetailPaymentTour3 from "./pages/UserPage/trip-tour/DetailPaymentTour3";
import TourLastPayment from "./pages/UserPage/trip-tour/TourLastPayment";
import DetailPaymentRent from "./pages/UserPage/Rental/DetailPaymentRent";
import DetailPaymentRent2 from "./pages/UserPage/Rental/DetailPaymentRent2";
import DetailPaymentRent3 from "./pages/UserPage/Rental/DetailPaymentRent3";

import RentalLastPayment from "./pages/UserPage/Rental/RentalLastPayment";
import DetailTempat from "./pages/UserPage/discover/culinery/DetailTempat";
import DetailMakanan from "./pages/UserPage/discover/culinery/DetailMakanan";
import Admin from "./pages/AdminPage/Admin";
import DestinationDetail from "./pages/UserPage/discover/destination/DestinationDetail";
import EtiketHotel from "././pages/UserPage/profile/e-ticket";
import DetailReservasi from "././pages/UserPage/profile/detReserv";
import Riview from "././pages/UserPage/profile/riview";

function App() {
  return (
    <Routes>
      {/* Pop Up */}
      <Route path="/e-ticket" element={<EtiketHotel />} />
      <Route path="/detail-reservasi" element={<DetailReservasi />} />
      <Route path="/riview" element={<Riview />} />

      {/* auth */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Home */}
      {/* <Route path="/" element={<Homepage />} /> */}
      <Route path="/homepage" element={<Homepage />} />

      {/* discover */}
      <Route path="/discover" element={<Discover />} />
      <Route path="/discover/culture" element={<Culture />} />
      <Route path="/discover/list-budaya" element={<ListBudaya />} />
      <Route path="/discover/detail-budaya" element={<DetailBudaya />} />
      <Route path="/discover/culinary" element={<Culinary />} />
      <Route path="/discover/culinary-places" element={<DetailTempat />} />
      <Route path="/discover/culinary-food" element={<DetailMakanan />} />

      <Route path="/discover/detail-destination" element={<DestinationDetail />} />

      {/* trip-tour */}
      <Route path="/trip-tour" element={<TripTour />} />
      <Route path="/trip-tour/:id" element={<DetailTourPrambanan />} />
      {/* <Route path="/trip-tour/payment-prambanan-temple" element={<PaymentPrambanan />} />
      <Route path="/trip-tour/activity-package" element={<ActivityPackage />} />
      <Route path="/trip-tour/tour-date" element={<TourDate />} /> */}
      <Route path="/trip-tour/detail-payment-tour" element={<DetailPaymentTour />} />
      <Route path="/trip-tour/detail-payment-tour-2" element={<DetailPaymentTour2 />} />
      <Route path="/trip-tour/detail-payment-tour-3" element={<DetailPaymentTour3 />} />
      <Route path="/trip-tour/detail-last-payment" element={<TourLastPayment />} />

      {/* about us */}
      <Route path="/about-us" element={<AboutUs />} />

      {/* Hotel */}
      <Route path="/hotel" element={<Hotels />} />
      <Route path="/hotel/detail-hotel/:id" element={<DetailHotel />} />
      <Route path="/hotel/detail-room" element={<DetailRoom />} />
      <Route path="/hotel/detail-hotel-payment" element={<DetailPaymentHotel />} />
      <Route path="/hotel/detail-hotel-payment-2" element={<DetailPaymentHotel2 />} />
      <Route path="/hotel/detail-hotel-payment-3" element={<DetailPaymentHotel3 />} />
      <Route path="/hotel/detail-hotel-payment-4" element={<DetailPaymentHotel4 />} />
      <Route path="/hotel/detail-payment-last" element={<HotelLastPayment />} />

      {/* rent */}
      <Route path="/rental" element={<Rent />} />
      <Route path="/rental/rent-detail" element={<RentDetail />} />
      <Route path="/rental/rent-booking" element={<DetailPaymentRent />} />
      <Route path="/rental/rent-booking-2" element={<DetailPaymentRent2 />} />
      <Route path="/rental/rent-booking-3" element={<DetailPaymentRent3 />} />
      <Route path="/rental/detail-payment-last" element={<RentalLastPayment />} />

      {/* Profile */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/reservation" element={<MyReservation />} />

      {/* contact us */}
      <Route path="/contactus" element={<ContactUs />} />

      {/* admin */}
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
