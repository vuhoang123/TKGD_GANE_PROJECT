import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";
import logoLanding from "/src/assets/image/Lol_worlds_logo.svg";
function LandingPage() {
  return (
    <div id="landing-page">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className=" col-4 left-content">
          <h1>SLOGAN</h1>
        </div>
        <div className="mid-content col-4">
          <div className="logo">
            <img src={logoLanding} />
          </div>
          <Link to="/home">
            <button className="btn btn-start">STARTED</button>
          </Link>
        </div>
        <div className="login-form col-4">
          <div className="login-wrap p-0">
            <h3 className="mb-4 text-center">Have an account?</h3>
            <form action="#" className="signin-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  id="password-field"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
                <span
                  toggle="#password-field"
                  className="fa fa-fw fa-eye field-icon toggle-password"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="form-control btn btn-primary submit px-3"
                >
                  Sign In
                </button>
              </div>
              <div className="form-group d-md-flex">
                <div className="w-50">
                  <label className="checkbox-wrap checkbox-primary">
                    Remember Me
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="w-50 text-md-right">
                  <a href="#" style={{ color: "#fff" }}>
                    Forgot Password
                  </a>
                </div>
              </div>
            </form>
            <p className="w-100 text-center">— Or Sign In With —</p>
            <div className="social d-flex text-center gap-3">
              <button
                type="button"
                class="d-flex justify-content-center align-items-center login-with-social-btn"
              >
                <i className="fa-brands fa-google" />
                Sign in with Google
              </button>

              <button
                type="button"
                class="d-flex justify-content-center align-items-center login-with-social-btn"
              >
                <i className="fa-brands fa-facebook" />
                Sign in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
