import React from "react";
import img1 from "/src/assets/image/news1.png";
import img2 from "/src/assets/image/news2.png";
import img3 from "/src/assets/image/news3.png";
import img4 from "/src/assets/image/news4.png";
import img5 from "/src/assets/image/news5.png";
import img6 from "/src/assets/image/news6.png";
import "./Home.scss";
import { BsArrowRight } from "react-icons/bs";
function Home() {
  return (
    <div className="Home">
      <section className="News">
        <div className="container">
          <div className="bread">
            <div className="title">News</div>
          </div>
          <div className="work">
            <div className="container_work">
              <div className="work_content">
                <div className="work_content">
                  <div className="work_grid">
                    <div className="grid_item">
                      <img src={img1} alt="img1" />
                      <div className="detail">
                        <h3>Abstract Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. orem ipsum dolor sit amet, consectetur
                          adipiscing elit.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit.
                        </p>
                        <a>
                          See Project <BsArrowRight className="arrow" />{" "}
                        </a>
                      </div>
                    </div>
                    <div className="grid_item">
                      <img src={img2} alt="img2" />
                      <div className="detail">
                        <h3>Abstract Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. orem ipsum dolor sit amet, consectetur
                          adipiscing elit.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit.
                        </p>
                        <a>
                          See Project <BsArrowRight className="arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="grid_item">
                      <img src={img3} alt="img3" />
                      <div className="detail">
                        <h3>Abstract Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. orem ipsum dolor sit amet, consectetur
                          adipiscing elit.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit.
                        </p>
                        <a>
                          See Project <BsArrowRight className="arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="grid_item">
                      <img src={img4} alt="img4" />
                      <div className="detail">
                        <h3>Abstract Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. orem ipsum dolor sit amet, consectetur
                          adipiscing elit.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit.
                        </p>
                        <a>
                          See Project <BsArrowRight className="arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="grid_item">
                      <img src={img5} alt="img5" />
                      <div className="detail">
                        <h3>Abstract Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. orem ipsum dolor sit amet, consectetur
                          adipiscing elit.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit.
                        </p>
                        <a>
                          See Project <BsArrowRight className="arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="grid_item">
                      <img src={img6} alt="img6" />
                      <div className="detail">
                        <h3>Abstract Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. orem ipsum dolor sit amet, consectetur
                          adipiscing elit.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit.
                        </p>
                        <a>
                          See Project <BsArrowRight className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
