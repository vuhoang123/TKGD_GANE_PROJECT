import React, { useState } from "react";
import { Checkbox, Divider } from "antd";
const CheckboxGroup = Checkbox.Group;
import "./Cart.scss";

function Cart() {
  return (
    <div className="Cart">
      <div className="container content">
        <div className="left">
          <div className="bread">
            <div className="title">
              <Checkbox>Sellect all</Checkbox>
            </div>
          </div>
          <div className="cart-item">
            <div className="content">
              <Checkbox />
              <div className="thumbnail">
                <img
                  className="w-100"
                  src="/src/assets/image/Rectangle 7.png"
                />
              </div>
              <span className="detail">
                X27 Ear-mounted Wired Headset With Hd Microphone Luminous Rgb
                Noise-cancelling
              </span>
              <div className="price">536.000 ₫</div>
              <div className="count">
                  <div className="minus">-</div>
                  <span className="num">1</span>
                  <div className="plus">+</div>
                </div>
            </div>
          </div>
          <div className="cart-item">
            <div className="content">
              <Checkbox />
              <div className="thumbnail">
                <img
                  className="w-100"
                  src="/src/assets/image/Rectangle 21.png"
                />
              </div>
              <span className="detail">
                X27 Ear-mounted Wired Headset With Hd Microphone Luminous Rgb
                Noise-cancelling
              </span>
              <div className="price">536.000 ₫</div>
              <div className="count">
                  <div className="minus">-</div>
                  <span className="num">1</span>
                  <div className="plus">+</div>
                </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <p className="title">Địa điểm</p>
            <p addrress>
              <i class="fa-solid fa-location-dot me-2"></i>
              <span>Đông hoà, dĩ an, bình dương</span>
            </p>
            <p className="title">Thông tin đơn hàng</p>
            <div className="priceSum">
              <p>Tổng tiền hàng</p>
              <span>0 đ</span>
            </div>
            <div className="priceShip">
              <p>Phí vận chuyển</p>
              <span>0 đ</span>
            </div>
            <div className="total mt-5">
              <p>Tổng thanh toán</p>
              <span>0 đ</span>
            </div>
            <button className="btn-buy">Thanh toán</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
