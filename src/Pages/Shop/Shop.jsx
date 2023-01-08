import React from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.scss";

function Shop() {
  const navigate = useNavigate();

  return (
    <div className="Shop">
      <div className="container">
        <div className="bread">
          <div className="title">hot trending</div>
        </div>

        <div className="trend">
          <div className="item">
            <div className="thumbnail">
              <img src="/src/assets/image/trend1.png" />
            </div>
            <span className="trend-name">
              mechanical
              <br />
              keyboard
            </span>
          </div>
          <div className="item">
            <div className="thumbnail">
              <img src="/src/assets/image/trend2.png" />
            </div>
            <span className="trend-name">Switch & lube</span>
          </div>
          <div className="item">
            <div className="thumbnail">
              <img src="/src/assets/image/trend3.png" />
            </div>
            <span className="trend-name">Gaming mouse</span>
          </div>
          <div className="item">
            <div className="thumbnail">
              <img src="/src/assets/image/trend4.png" />
            </div>
            <span className="trend-name">mousepad</span>
          </div>
          <div className="item">
            <div className="thumbnail">
              <img src="/src/assets/image/trend5.png" />
            </div>
            <span className="trend-name">Keycap</span>
          </div>
          <div className="item">
            <div className="thumbnail">
              <img src="/src/assets/image/trend6.png" />
            </div>
            <span className="trend-name">feet mouse</span>
          </div>
        </div>

        <div className="bread border-light mt-5">
          <div className="title bg-light">Best seller</div>
        </div>

        <div className="best-seller">
          <div className="col col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="item">
              <div className="thumbnail" onClick={() => navigate("/productDetail")}>
                <img src="/src/assets/image/seller1.png" />
              </div>
              <div className="content">
                <span className="brand">Glorious</span>
                <p className="title">Kit bàn phím cơ Glorious GMMK PRO</p>
                <div className="vote">
                  <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <span className="rate">3 đánh giá</span>
                </div>
                <div className="buy">
                  <span className="price">4.488.000₫</span>
                  <button onClick={() => navigate("/payment")}>Mua</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="item">
              <div className="thumbnail" onClick={() => navigate("/productDetail")}>
                <img src="/src/assets/image/seller2.png" />
              </div>
              <div className="content">
                <span className="brand">Pulsar</span>
                <p className="title">Lót chuột Pulsar ParaControl V2</p>
                <div className="vote">
                  <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <span className="rate">9 đánh giá</span>
                </div>
                <div className="buy">
                  <span className="price">Từ 605.000₫</span>
                  <button onClick={() => navigate("/payment")}>Mua</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="item">
              <div className="thumbnail" onClick={() => navigate("/productDetail")}>
                <img src="/src/assets/image/seller3.png" />
              </div>
              <div className="content">
                <span className="brand">Filco</span>
                <p className="title">Filco Majestouch Minila-R Convertible</p>
                <div className="vote">
                  <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <span className="rate">3 đánh giá</span>
                </div>
                <div className="buy">
                  <span className="price">4.180.000₫</span>
                  <button onClick={() => navigate("/payment")}>Mua</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="item">
              <div className="thumbnail" onClick={()=>navigate("/productDetail")}>
                <img src="/src/assets/image/seller4.png" />
              </div>
              <div className="content">
                <span className="brand">Glorious</span>
                <p className="title">Glorious Panda Tactile - 36 switch</p>
                <div className="vote">
                  <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <span className="rate">2 đánh giá</span>
                </div>
                <div className="buy">
                  <span className="price">Từ 715.000₫</span>
                  <button onClick={() => navigate("/payment")}>Mua</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="item">
              <div className="thumbnail" onClick={()=>navigate("/productDetail")}>
                <img src="/src/assets/image/seller5.png" />
              </div>
              <div className="content">
                <span className="brand">Phong Cách Xanh</span>
                <p className="title">Túi đựng bàn phím cơ PCX (Xám)</p>
                <div className="vote">
                  <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <span className="rate">2 đánh giá</span>
                </div>
                <div className="buy">
                  <span className="price">380.000₫</span>
                  <button onClick={() => navigate("/payment")}>Mua</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
