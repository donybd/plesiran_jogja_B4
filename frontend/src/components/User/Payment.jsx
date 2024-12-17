// const Payment = () => {
// 	return (

// 	);
// }

// export default Payment;

import React from "react";
import bcaLogo from "../../assets/img/HOTEL/bca logo.png";
import "../../styles/hotel-payment-detail-last.css";

import bniLogo from "../../assets/img/HOTEL/bni logo.png";
import mandiriLogo from "../../assets/img/HOTEL/mandiri logo.png";
import gopayLogo from "../../assets/img/HOTEL/gopay logo.png";
import ovoLogo from "../../assets/img/HOTEL/ovo logo.png";
import linkAjaLogo from "../../assets/img/HOTEL/link aja logo.png";
import shopeePayLogo from "../../assets/img/HOTEL/shopeepay logo.png";

const PaymentDetails = ({ title, totalPrice, instructions }) => {
  const bankPayments = [
    { logo: bcaLogo, name: "BCA Virtual Account", account: "1234567890" },
    { logo: bniLogo, name: "BNI Virtual Account", account: "9876543210" },
    { logo: mandiriLogo, name: "Mandiri Virtual Account", account: "1122334455" },
  ];

  const eMoneyPayments = [
    { logo: gopayLogo, name: "GoPay", account: "081234567890" },
    { logo: ovoLogo, name: "OVO", account: "081098765432" },
    { logo: linkAjaLogo, name: "LinkAja", account: "085678901234" },
    { logo: shopeePayLogo, name: "ShopeePay", account: "082345678901" },
  ];

  return (
    <div className="payment" style={{ marginTop: "130px" }}>
      <h3>{title}</h3>
      <div className="payment-method">
        <h4>Payment Methods</h4>

        <h4>Bank Transfer</h4>
        <div className="payment-method-list">
          {bankPayments.map((bank, index) => (
            <div className="payment-option" key={index}>
              <img src={bank.logo} alt={bank.name} />
              <p>
                {bank.name}: {bank.account}
              </p>
            </div>
          ))}
        </div>

        <h4>Electronic Money</h4>
        <div className="payment-method-list">
          {eMoneyPayments.map((eMoney, index) => (
            <div className="payment-option" key={index}>
              <img src={eMoney.logo} alt={eMoney.name} />
              <p>
                {eMoney.name}: {eMoney.account}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="total">
        {totalPrice.map((item, index) => (
          <div className="total-item" key={index}>
            <strong>{item.label}</strong>
            <strong>{item.amount}</strong>
          </div>
        ))}
      </div>

      <div className="instructions">
        <h2>{instructions.title}</h2>
        <ol>
          {instructions.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default PaymentDetails;
