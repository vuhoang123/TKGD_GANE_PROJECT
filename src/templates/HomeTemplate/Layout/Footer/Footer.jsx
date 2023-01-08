import React from "react";
import "./Footer.scss";
import logo from "/src/assets/image/logo.png";
import QR from "/src/assets/image/QRcode.svg";
function Footer() {
  return (
    <footer id="Footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="logo">
              <img src={logo} />
              <p>Trang web tin tức và mua sắm gaming gear hàng đầu Việt Nam</p>
            </div>
          </div>
          <div className="col-6 row mid-content">
            <div className="col-3">
              <p>Product</p>
              <hr className="line" />
              <ul>
                <li>
                  <a>Landing Page</a>
                </li>
                <li>
                  <a>News</a>
                </li>
                <li>
                  <a>Gamming Gear</a>
                </li>
                <li>
                  <a>Content</a>
                </li>
                <li>
                  <a>Community</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <p>Company</p>
              <hr className="line" />
              <ul>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Careers</a>
                </li>
                <li>
                  <a>FAQs</a>
                </li>
                <li>
                  <a>Team</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <p>Follow us</p>
              <hr className="line" />
              <ul>
                <li className="d-flex align-items-center gap-1">
                  <i className=" fa-brands fa-facebook" />
                  <a>Facebook</a>
                </li>
                <li className="d-flex align-items-center gap-1">
                  <i className=" fa-brands fa-twitter" />
                  <a>Twitter</a>
                </li>
                <li className="d-flex align-items-center gap-1">
                  <i className=" fa-brands fa-instagram" />
                  <a>Instagram</a>
                </li>
                <li className="d-flex align-items-center gap-1">
                  <i className=" fa-brands fa-youtube" />
                  <a>Youtube</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <p>Contact</p>
              <hr className="line" />
              <ul>
                <li className="d-flex align-items-center gap-1">
                  <i class="fa-solid fa-location-dot"></i>
                  <a>Dĩ An, Bình Dương</a>
                </li>
                <li className="d-flex align-items-center gap-1">
                  <i class="fa-regular fa-envelope"></i>
                  <a>ganeinc@gmail.com</a>
                </li>
                <li className="d-flex align-items-center gap-1">
                  <i class="fa-solid fa-phone"></i>
                  <a>0009990009</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="vertical-line" />
          <div className="col-3 left-content">
            <div className=" d-flex flex-column align-items-center justyfy-content-center gap-4">
              <img src={QR}></img>
              <div className="d-flex gap-3">
                <button className=" d-flex align-items-center justify-content-around btn btn-outline-light btn-icon-text btn-download px-1">
                  <i className="fa-brands fa-apple btn-icon-prepend icon "></i>
                  <span className="d-inline-block text-left">
                    <small className="font-weight-light d-flex text-left">
                      Available on the
                    </small>
                    App Store
                  </span>
                </button>
                <button className="d-flex align-items-center justify-content-around btn btn-outline-light btn-icon-text btn-download px-1">
                  <i className="fa-brands fa-google-play btn-icon-prepend icon"></i>
                  <span className="d-inline-block text-left">
                    <small className="font-weight-light d-flex text-left">
                      Get it on
                    </small>
                    Google Play
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
