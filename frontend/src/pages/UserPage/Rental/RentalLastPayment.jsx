import React from "react";
import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import { useLocation } from "react-router-dom"; // Import useLocation untuk mengambil data state yang diteruskan
import PaymentDetails from "../../../components/User/Payment"; // Import komponen Payment yang sudah dibuat

const RentLastPayment = () => {
  // Mengambil data dari location.state
  const location = useLocation();
  const { vehicleData, totalPrice, startDate, endDate, finalTotal, VAT, serviceCharge } = location.state || {}; // Default ke objek kosong jika tidak ada data

  if (!vehicleData) {
    return <div>Data not found</div>; // Tampilkan pesan error jika data tidak ditemukan
  }

  // Membuat array totalPrice berdasarkan data yang diterima
  const totallPrice = [
    { label: "Total", amount: `${totalPrice.toLocaleString("id-ID")} IDR` },
    { label: "Not included: VAT / Consumption tax 12%", amount: `${VAT.toLocaleString("id-ID")} IDR` },
    { label: "Not included: Service Charge 10%", amount: `${serviceCharge.toLocaleString("id-ID")} IDR` },
    { label: "The total amount is:", amount: `${(totalPrice + VAT + serviceCharge).toLocaleString("id-ID")} IDR` },
  ];

  // Instruction for payment (optional)
  const instructions = {
    title: "How to Pay?",
    steps: [
      "Choose Your payment method ",
      "Enter the Virtual Account number  and select Send.",
      "Check the information on the screen.",
      "Make sure the Merchant, Total bill is correct and your username. If correct, select YES.",
      "Enter your PIN and select OK.",
    ],
  };

  return (
    <>
      <Navbar />
      <PaymentDetails
        title="Rental Payment"
        paymentInfo={vehicleData} // Mengirim data kendaraan
        totalPrice={totallPrice} // Mengirim data harga total
        instructions={instructions} // Mengirim instruksi pembayaran
      />
      <Footer />
    </>
  );
};

export default RentLastPayment;
