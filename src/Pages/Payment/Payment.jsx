import React from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.scss";

function Payment() {
  const navigate = useNavigate();
  return (
    <div className="Payment">
      <div className="container">
        <div className="content">
        <div className="left">
          <img src="/src/assets/image/Group 46.png" alt="" />
        </div>
        <div className="right">
          <img src="/src/assets/image/Group 45.png" alt="" />
          <button>Xác nhận mua</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
