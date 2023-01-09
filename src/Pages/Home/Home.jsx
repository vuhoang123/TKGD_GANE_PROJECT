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
                        src="/src/assets/image/keyboard.png"
                        alt="React Creative Agency"
                        height="350"
                      />
                    </div>
                    <div className="content">
                      <h1>BÀN PHÍM</h1>
                      <div className="hover">
                        <p>
                          Mọi bàn phím bạn cần đề ở đây, đủ kích cỡ, kiểu dáng.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="item text-center">
                    <div className="thumbnail">
                      <img
                        src="/src/assets/image/switch.png"
                        alt="React Creative Agency"
                        height="350"
                      />
                    </div>
                    <div className="content">
                      <h1>SWITCH</h1>
                      <div className="hover">
                        <p>
                          Tích hợp nhiều loại Switch cho bạn lựa chọn.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="item text-center">
                    <div className="thumbnail">
                      <img
                        src="/src/assets/image/keyboard2.png"
                        alt="React Creative Agency"
                        height="350"
                      />
                    </div>
                    <div className="content">
                      <h1>CUSTOM</h1>
                      <div className="hover">
                        <p>
                          Nhiều sản phẩm, nhiều lựa chọn hơn cho bạn.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="item text-center">
                    <div className="thumbnail">
                      <img
                        src="./src/assets/image/figure.png"
                        alt="React Creative Agency"
                        height="350"
                      />
                    </div>
                    <div className="content">
                      <h1>TRANG TRÍ</h1>
                      <div className="hover">
                        <p>
                          Vật dụng trang trí góc gaming của bạn.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="item text-center">
                    <div className="thumbnail">
                      <img
                        src="/src/assets/image/mouse.png"
                        alt="React Creative Agency"
                        height="350"
                      />
                    </div>
                    <div className="content">
                      <h1>CHUỘT</h1>
                      <div className="hover">
                        <p>
                          Đủ mọi loại chuột tha hồ cho bạn chọn.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="item text-center">
                    <div className="thumbnail">
                      <img
                        src="/src/assets/image/headphone.png"
                        alt="React Creative Agency"
                        height="350"
                      />
                    </div>
                    <div className="content">
                      <h1>TAI NGHE</h1>
                      <div className="hover">
                        <p>
                          Đa dạng tai nghe, từ màu sắc, kiểu dáng.
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
                    <img src={img1} alt="img1" height="350"/>
                    <div className="detail">
                      <h3>ZEROS BỊ UNIVERSAL BAN</h3>
                      <p>
                      Trong khoảng thời gian vừa qua, cộng đồng Esports Việt đang rất xôn xao về vấn đề Zeros (tên đầy đủ là Phạm Minh Lộc) bị BTC giải đấu VCS cấm vĩnh viễn khỏi giải đấu. Điều này bắt nguồn từ việc anh đã phát ngôn không đúng mực trên livestream cá nhân.
                      </p>
                      <Link to="/newsDetail">
                        Chi tiết <BsArrowRight className="arrow" />{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="grid_item">
                    <img src={img2} alt="img2" />
                    <div className="detail">
                      <h3>CẬP NHẬT TIỀN MÙA GIẢI 2023</h3>
                      <p>
                      Sau khi bản cập nhật LMHT 12.23 “trình làng”, Riot Games đã thông báo rằng sẽ có những thay đổi quan trọng xung quanh hệ thống Xếp hạng ở mùa giải 2023. Những thay đổi này sẽ sớm có mặt trên máy chủ PBE trong thời gian tới. Hiện tại, hệ thống Xếp hạng mới được Riot Games thông báo thay đổi như sau:
                      </p>
                      <Link to="/newsDetail">
                        Chi tiết <BsArrowRight className="arrow" />
                      </Link>
                    </div>
                  </div>
                  <div className="grid_item">
                    <img src={img3} alt="img3" />
                    <div className="detail">
                      <h3>LỐI CHƠI MỚI VỚI YASUO AP</h3>
                      <p>
                      Yasuo - Kẻ bất dung thứ là vị tướng LMHT cực kỳ hot tại máy chủ Việt Nam nói riêng và thế giới nói chung với tỉ lệ chọn kỉ lục. Để thuần phục và đánh Yasuo hiệu quả không phải chuyện đơn giản. Bài viết sẽ hướng dẫn bạn cách chơi Yasuo guide mùa 11 qua bảng ngọc Yasuo, cách lên đồ Yasuo và combo skill chuẩn nhất.
                      </p>
                      <Link to="/newsDetail">
                        Chi tiết <BsArrowRight className="arrow" />
                      </Link>
                    </div>
                  </div>
                  <div className="grid_item">
                    <img src={img4} alt="img4" />
                    <div className="detail">
                      <h3>RA MẮT VALORANT MOBILE</h3>
                      <p>
                      Valorant Mobile bản chính có thể ra mắt vào nửa cuối năm 2022 hoặc 2023. Hiện chưa rõ ngày chính xác nhưng Anna Donlon - Riot Games chia sẻ rằng game đang trong quá trình hoàn thiện. Nhà sản xuất cho biết phiên bản di động sẽ sẵn sàng vào cuối năm 2022 này.
                      </p>
                      <Link to="/newsDetail">
                        Chi tiết <BsArrowRight className="arrow" />
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
        <Link to="/forum-list" className="d-block button text-center mb-5">
          <button className="btn btn-more">GET MORE</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
