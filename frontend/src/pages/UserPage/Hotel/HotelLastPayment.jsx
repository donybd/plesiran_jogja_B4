import React from "react";
import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import PaymentDetails from "../../../components/User/Payment"; // Import komponen yang sudah dibuat

const HotelLastPayment = () => {
  const paymentInfo = {
    payBefore: "10 November 2024, 9:41 WIB",
    virtualAccountNumber: "8077700812345678",
    total: "Rp7.047.560",
  };

  const totalPrice = [
    { label: "Total", amount: "5.782.000 IDR" },
    { label: "Not included: VAT / Consumption tax 12%", amount: "687.360 IDR" },
    { label: "Not included: Service Charge 10%", amount: "578.200 IDR" },
    { label: "The total amount is:", amount: "7.047.560 IDR" },
  ];

  const instructions = {
    title: "How to Pay Virtual Account BCA",
    steps: [
      "Choose m-transfer then BCA Virtual Account",
      "Enter the Virtual Account number 8077700812345678 and select Send.",
      "Check the information on the screen.",
      "Make sure the Merchant, Total bill is correct and your username. If correct, select YES.",
      "Enter your m-BCA PIN and select OK.",
      "If a notification appears 'Transaction Failed. Amount exceeds daily limit', please repeat the transaction using KlikBCA (iBanking) or ATM",
    ],
  };

  return (
    <>
      <Navbar />
      <PaymentDetails title="Hotel Payment" paymentInfo={paymentInfo} totalPrice={totalPrice} instructions={instructions} />
      <Footer />
    </>
  );
};

export default HotelLastPayment;
