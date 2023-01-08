import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "/src/assets/image/logo.png";
import { Link } from "react-router-dom";
import "./PaymentTemplate.scss";
import ModalLogin from "/src/Modal/ModalLogin";

function PaymentTemplate() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="PaymentTemplate">
      <header className="header">
        <nav>
            <Link className="logo" to="/home">
                GaNe
            </Link>
            <Link className="profile nav-link mx-2 text-uppercase" onClick={()=>handleShow()}>
              <i className="fa-solid fa-circle-user me-1" /> Account
            </Link>
        </nav>
        <ModalLogin handleClose={handleClose} show={show} />
      </header>
      <Outlet />
    </div>
  );
}

export default PaymentTemplate;
