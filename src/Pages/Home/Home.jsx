import React from "react";
import img1 from "/src/assets/image/img1_work.png";
import img2 from "/src/assets/image/img2_work.png";
import img3 from "/src/assets/image/img3_work.png";
import img4 from "/src/assets/image/img4_work.png";
import img5 from "/src/assets/image/img5_work.png";
import img6 from "/src/assets/image/img6_work.png";

import "./Home.scss";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div id="Home">
      <div className="container">
        <div className="bread">
          <div className="title">Shop</div>
        </div>
        <section className="portfolio my-5">
          <div className="container">
            <div className="main">
              <div className="row">
                <div className="col col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="item text-center">
                    <div className="thumbnail">
                      <img
                        src="/src/assets/image/seller5.png"
                        alt="React Creative Agency"
                      />
                    </div>
                    <div className="content">
                      <h1>BÀN PHÍM</h1>
                      <div className="hover">
                        <p>
                          Lorem ipsum dolor sit amet, conse ctetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="item text-center">
                    <div className="thumbnail">
                      <img
                        src="/src/assets/image/seller4.png"
                        alt="React Creative Agency"
                      />
                    </div>
                    <div className="content">
                      <h1>SWITCH</h1>
                      <div className="hover">
                        <p>
                          Lorem ipsum dolor sit amet, conse ctetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="item text-center">
                    <div className="thumbnail">
                      <img
                        src="/src/assets/image/seller3.png"
                        alt="React Creative Agency"
                      />
                    </div>
                    <div className="content">
                      <h1>CUSTOM</h1>
                      <div className="hover">
                        <p>
                          Lorem ipsum dolor sit amet, conse ctetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="item text-center">
                    <div className="thumbnail">
                      <img
                        src="./src/assets/image/seller2.png"
                        alt="React Creative Agency"
                      />
                    </div>
                    <div className="content">
                      <h1>TRANG TRÍ</h1>
                      <div className="hover">
                        <p>
                          Lorem ipsum dolor sit amet, conse ctetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="item text-center">
                    <div className="thumbnail">
                      <img
                        src="/src/assets/image/seller1.png"
                        alt="React Creative Agency"
                      />
                    </div>
                    <div className="content">
                      <h1>CHUỘT</h1>
                      <div className="hover">
                        <p>
                          Lorem ipsum dolor sit amet, conse ctetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="item text-center">
                    <div className="thumbnail">
                      <img
                        src="/src/assets/image/seller1.png"
                        alt="React Creative Agency"
                      />
                    </div>
                    <div className="content">
                      <h1>TAI NGHE</h1>
                      <div className="hover">
                        <p>
                          Lorem ipsum dolor sit amet, conse ctetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Link to="/shop" className="d-block button text-center mb-5">
          <button className="btn btn-more">GET MORE</button>
        </Link>

        <div className="bread">
          <div className="title">News</div>
        </div>
        <section className="work my-5">
          <div className="container_work">
            <div className="work_content">
              <div className="work_content">
                <div className="work_grid">
                  <div className="grid_item">
                    <img src={img1} alt="img1" />
                    <div className="detail">
                      <h3>ZEROS BỊ UNIVERSAL BAN</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        orem ipsum dolor sit amet, consectetur adipiscing
                        elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                      </p>
                      <Link to="/newsDetail">
                        Read News <BsArrowRight className="arrow" />{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="grid_item">
                    <img src={img2} alt="img2" />
                    <div className="detail">
                      <h3>CẬP NHẬT TIỀN MÙA GIẢI 2023</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        orem ipsum dolor sit amet, consectetur adipiscing
                        elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                      </p>
                      <Link to="/newsDetail">
                        Read News <BsArrowRight className="arrow" />
                      </Link>
                    </div>
                  </div>
                  <div className="grid_item">
                    <img src={img3} alt="img3" />
                    <div className="detail">
                      <h3>LỐI CHƠI MỚI VỚI YASUO AP</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        orem ipsum dolor sit amet, consectetur adipiscing
                        elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                      </p>
                      <Link to="/newsDetail">
                        Read News <BsArrowRight className="arrow" />
                      </Link>
                    </div>
                  </div>
                  <div className="grid_item">
                    <img src={img4} alt="img4" />
                    <div className="detail">
                      <h3>RA MẮT VALORANT MOBILE</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        orem ipsum dolor sit amet, consectetur adipiscing
                        elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                      </p>
                      <Link to="/newsDetail">
                        Read News <BsArrowRight className="arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Link to="/news" className="d-block button text-center mb-5">
          <button className="btn btn-more">GET MORE</button>
        </Link>

        <div className="bread">
          <div className="title">Forum</div>
        </div>
        <section className="service my-5">
          <div className="container">
            <div className="service_content mt-5">
              <div className="service_grid">
                <div className="grid_item">
                  <div className="item_content">
                    <h3>ANH EM TUI CHƠI VALORANT</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      orem ipsum dolor sit amet, consectetur adipiscing
                      elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                    <a>
                      Join Forum <BsArrowRight className="arrow" />{" "}
                    </a>
                  </div>
                  <div className="item_footer">
                    <p>12000 Member</p>
                  </div>
                </div>
                <div className="grid_item">
                  <div className="item_content">
                    <h3>ANH EM TUI CHƠI VALORANT</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      orem ipsum dolor sit amet, consectetur adipiscing
                      elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                    <a>
                      Join Forum <BsArrowRight className="arrow" />{" "}
                    </a>
                  </div>
                  <div className="item_footer">
                    <p>12000 Member</p>
                  </div>
                </div>
                <div className="grid_item">
                  <div className="item_content">
                    <h3>CSGO GOGO GO GO GO GO </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      orem ipsum dolor sit amet, consectetur adipiscing
                      elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                    <a>
                      Join Forum <BsArrowRight className="arrow" />{" "}
                    </a>
                  </div>
                  <div className="item_footer">
                    <p>12000 Member</p>
                  </div>
                </div>
                <div className="grid_item">
                  <div className="item_content">
                    <h3>LIÊN QUÂN KHÔNG PHẢI GAME NHÁI</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      orem ipsum dolor sit amet, consectetur adipiscing
                      elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                    <a>
                      Join Forum <BsArrowRight className="arrow" />{" "}
                    </a>
                  </div>
                  <div className="item_footer">
                    <p>12000 Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Link to="/forum" className="d-block button text-center mb-5">
          <button className="btn btn-more">GET MORE</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
