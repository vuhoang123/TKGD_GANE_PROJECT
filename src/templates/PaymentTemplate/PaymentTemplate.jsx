import React from "react";
import { Outlet } from "react-router-dom";
import logo from "/src/assets/image/logo.png";
import { Link } from "react-router-dom";
import "./PaymentTemplate.scss";

function PaymentTemplate() {
  return (
    <div id="PaymentTemplate">
      <header className="header">
        <nav>
            <Link className="logo" to="/home">
                GaNe
            </Link>
            <Link className="profile nav-link mx-2 text-uppercase" to="profile">
              <i className="fa-solid fa-circle-user me-1" /> Account
            </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default PaymentTemplate;
