import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalLogin.scss";

function ModalLogin({ show, handleClose }) {
  return (
    <Modal
      id="ModalLogin"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <h4 className="mb-0">
          <span className="text-main-1">Sign</span> In
        </h4>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="nk-gap-1" />
          <form action="#" className="nk-form text-white">
            <div className="row vertical-gap">
              <div className="col-md-6">
                Use email and password:
                <div className="nk-gap" />
                <input
                  type="email"
                  name="email"
                  className=" form-control"
                  placeholder="Email"
                />
                <div className="nk-gap" />
                <input
                  type="password"
                  name="password"
                  className="required form-control"
                  placeholder="Password"
                />
              </div>
              <div className="col-md-6">
                Or social account:
                <div className="nk-gap" />
                <ul className="nk-social-links-2">
                  <li>
                    <a className="nk-social-facebook" href="#">
                      <span className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="nk-social-google-plus" href="#">
                      <span className="fab fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a className="nk-social-twitter" href="#">
                      <span className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nk-gap-1" />
            <div className="row vertical-gap">
              <div className="col-md-6">
                <a
                  href="#"
                  className="nk-btn nk-btn-rounded nk-btn-color-white nk-btn-block"
                >
                  Sign In
                </a>
              </div>
              <div className="col-md-6">
                <div className="mnt-5" style={{ marginTop: 10 }}>
                  <small>
                    <a href="#">Forgot your password?</a>
                  </small>
                </div>
                <div className="mnt-5">
                  <small>
                    <a href="#">Not a member? Sign up</a>
                  </small>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalLogin;
