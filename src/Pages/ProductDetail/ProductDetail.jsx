import { Modal } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductDetail.scss";

function ProductDetail() {
  const navigate = useNavigate();
  const addToCartSuccess = () => {
    Modal.success({
      title: "Notification!",
      content: "Successful add to cart!",
      onOk() {
        navigate("/cart");
      },
    });
  };
  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="item-box">
          <div className="content">
            <div className="thumbnail">
              <img className="w-100" src="/src/assets/image/Rectangle 21.png" />
            </div>
            <div className="detail">
              <span className="title">
                Chuột máy tính có dây HXSJ A867 6400 DPI
              </span>
              <div className="vote">
                <div className="star">
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <span className="rate">Chưa có đánh giá</span>
              </div>
              <p className="brand">
                Thương hiệu: <span>HXSJ</span>
              </p>
              <div className="price">225.000 đ</div>
            </div>
            <div className="action">
              <div className="sumary">
                <span>Số lượng</span>
                <div className="count">
                  <div className="minus">-</div>
                  <span className="num">1</span>
                  <div className="plus">+</div>
                </div>
              </div>
              <div className="btn-action">
                <button className="add" onClick={addToCartSuccess}>
                  Thêm vào giỏ hàng
                </button>
                <button className="buy" onClick={() => navigate("/payment")}>
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <img className="w-100" src="/src/assets/image/desc.png" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
