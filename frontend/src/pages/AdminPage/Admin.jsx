import { useState } from "react";
import Header from "../../components/Admin/Header/Header";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import Discover from "../../components/Admin/Discover/Discover";
import AddDiscover from "../../components/Admin/Discover/AddDiscover";
import Users from "../../components/Admin/Users/Users";
import TourPackages from "../../components/Admin/TourPackages/TourPackages";
import Hotel from "../../components/Admin/Hotel/Hotel";
import Rental from "../../components/Admin/Rental/Rental";
import Booking from "../../components/Admin/Booking/Booking";
import Notification from "../../components/Admin/Notification/Notification";
import Settings from "../../components/Admin/Settings/Settings";
import Logout from "../../components/Admin/Logout/Logout";
import AddUser from "../../components/Admin/Users/AddUser";
import UpdateUser from "../../components/Admin/Users/UpdateUser";
import AddTourPackage from "../../components/Admin/TourPackages/AddTourPackage";
import UpdateTourPackage from "../../components/Admin/TourPackages/UpdateTourPackage";
import AddHotel from "../../components/Admin/Hotel/AddHotel";
import UpdateHotel from "../../components/Admin/Hotel/UpdateHotel";
import AddRental from "../../components/Admin/Rental/AddRental";
import UpdateRental from "../../components/Admin/Rental/UpdateRental";

const Admin = () => {
  const [activeMenu, setActiveMenu] = useState("Discover");
  const [props, setProps] = useState();
  // Fungsi untuk menentukan komponen yang akan dirender
  const renderContent = () => {
    switch (activeMenu) {
      case "Discover":
        return (
          <Discover
            onAddDiscoverClick={(x) => {
              setProps(x);
              setActiveMenu("AddDiscover");
            }}
          />
        );
      case "AddDiscover":
        return <AddDiscover backToDiscover={() => setActiveMenu("Discover")} props={props} />;

      // Users Section
      case "Users":
        return (
          <Users
            onAddUserClick={() => setActiveMenu("AddUser")} // Untuk pindah ke AddUser
            updateUser={() => setActiveMenu("UpdateUser")} // Untuk pindah ke UpdateUser
          />
        );
      case "AddUser":
        return <AddUser backToUsers={() => setActiveMenu("Users")} />;
      case "UpdateUser":
        return <UpdateUser backToUsers={() => setActiveMenu("Users")} />;

      // Tour Package Section
      case "Tour Packages":
        return (
          <TourPackages
            onAddTourClick={() => setActiveMenu("AddTourPackage")} // Untuk pindah ke AddTourPackage
            updateTour={() => setActiveMenu("UpdateTourPackage")} // Untuk pindah ke UpdateTourPackage
          />
        );
      case "AddTourPackage":
        return <AddTourPackage backToTours={() => setActiveMenu("Tour Packages")} />;
      case "UpdateTourPackage":
        return <UpdateTourPackage backToTours={() => setActiveMenu("Tour Packages")} />;

      // Hotel Section
      case "Hotel":
        return (
          <Hotel
            onAddHotelClick={() => setActiveMenu("AddHotel")} // Untuk pindah ke AddHotel
            updateHotel={() => setActiveMenu("UpdateHotel")} // Untuk pindah ke UpdateHotel
          />
        );
      case "AddHotel":
        return <AddHotel backToHotel={() => setActiveMenu("Hotel")} />;
      case "UpdateHotel":
        return <UpdateHotel backToHotel={() => setActiveMenu("Hotel")} />;

      // Rental Section
      case "Rental":
        return (
          <Rental
            onAddRentalClick={() => setActiveMenu("AddRental")} // Untuk pindah ke AddRental
            updateRental={() => setActiveMenu("UpdateRental")} // Untuk pindah ke UpdateRental
          />
        );
      case "AddRental":
        return <AddRental backToRental={() => setActiveMenu("Rental")} />;
      case "UpdateRental":
        return <UpdateRental backToRental={() => setActiveMenu("Rental")} />;

      // Booking Section
      case "Booking":
        return (
          <Booking
            onAddBookingClick={() => setActiveMenu("AddBooking")} // Untuk pindah ke AddBooking
            updateBooking={() => setActiveMenu("UpdateBooking")} // Untuk pindah ke UpdateBooking
          />
        );
      case "AddBooking":
        return <AddBooking backToBookings={() => setActiveMenu("Booking")} />;
      case "UpdateBooking":
        return <UpdateBooking backToBookings={() => setActiveMenu("Booking")} />;

      // Notification Section
      case "Notification":
        return (
          <Notification
            onAddNotificationClick={() => setActiveMenu("AddNotification")} // Untuk pindah ke AddNotification
            updateNotification={() => setActiveMenu("UpdateNotification")} // Untuk pindah ke UpdateNotification
          />
        );
      case "AddNotification":
        return <AddNotification backToNotifications={() => setActiveMenu("Notification")} />;
      case "UpdateNotification":
        return <UpdateNotification backToNotifications={() => setActiveMenu("Notification")} />;

      // Settings Section
      case "Settings":
        return (
          <Settings
            onAddSettingsClick={() => setActiveMenu("AddSettings")} // Untuk pindah ke AddSettings
            updateSettings={() => setActiveMenu("UpdateSettings")} // Untuk pindah ke UpdateSettings
          />
        );
      case "AddSettings":
        return <AddSettings backToSettingss={() => setActiveMenu("Settings")} />;
      case "UpdateSettings":
        return <UpdateSettings backToSettingss={() => setActiveMenu("Settings")} />;

      // Log Out
      case "Log Out":
        return (
          <Logout
            onAddLogoutClick={() => setActiveMenu("AddLogout")} // Untuk pindah ke AddLogout
            updateLogout={() => setActiveMenu("UpdateLogout")} // Untuk pindah ke UpdateLogout
          />
        );
      case "AddLogout":
        return <AddLogOut backToLogouts={() => setActiveMenu("Logout")} />;
      case "UpdateLogout":
        return <UpdateLogout backToLogouts={() => setActiveMenu("Logout")} />;

      // default
      default:
        return <Discover />;
    }
  };
  return (
    <>
      <Header />
      <div style={{ marginTop: "30px", display: "flex" }}>
        <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />
        <div style={{ marginLeft: "250px", padding: "20px", flex: 1 }}>{renderContent()}</div>
      </div>
    </>
  );
};

export default Admin;
