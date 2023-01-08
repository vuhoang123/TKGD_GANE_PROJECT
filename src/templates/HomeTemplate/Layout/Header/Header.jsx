import React, { useState } from "react";
import "./Header.scss";
import logo from "/src/assets/image/logo.png";
import { Link, NavLink } from "react-router-dom";
import ModalLogin from "/src/Modal/ModalLogin";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header id="Header">
      <nav className="navbar navbar-expand-lg navbar-light p-3 shadow-sm ">
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            <img src={logo} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
            <div className="input-group">
              <span className="btn-search border-warning input-group-text text-white">
                <i className=" fa-solid fa-magnifying-glass" />
              </span>
              <input type="text" className="form-control border-warning" />
              <button className="btn btn-search text-white">Search</button>
            </div>
          </div>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto d-none d-lg-block">
              <div className="input-group">
                <span className="border-warning input-group-text btn-search text-white">
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
                <input
                  type="text"
                  className="form-control border-warning"
                  style={{ color: "#7a7a7a" }}
                />
                <button className="btn btn-search text-white">Search</button>
              </div>
            </div>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <NavLink
                  className="nav-link mx-2 text-uppercase active"
                  aria-current="page"
                  to="/home"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2 text-uppercase" to="news">
                  NEWS
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  FORUM
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2 text-uppercase" to="shop">
                  SHOP
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto ">
              <li className="cart">
                <Link to="cart">
                  <img className="w-100" src="/src/assets/image/cart.png" />
                </Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2 text-uppercase" onClick={()=>handleShow}>
                  <i className="fa-solid fa-circle-user me-1" /> Account
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ModalLogin handleClose={handleClose} show={show}/>
    </header>
  );
}

export default Header;
