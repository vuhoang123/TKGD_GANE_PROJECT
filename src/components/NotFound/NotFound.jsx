import React from "react";
import img404 from "/src/assets/image/404.svg";
import "./NotFound.scss";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <div className="content">
          <img src={img404} />
          <p className="text">
            Một lỗi bất thường đã xảy ra, vui lòng quay về trang chủ.
          </p>
          <Link to="/home ">
            <button className="btn btn-home">Trang chủ</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
