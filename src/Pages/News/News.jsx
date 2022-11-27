import React from "react";
import "./News.scss";
import img1 from "/src/assets/image/news1.png";
import img2 from "/src/assets/image/news2.png";
import img3 from "/src/assets/image/news3.png";
import img4 from "/src/assets/image/news4.png";
import img5 from "/src/assets/image/news5.png";
import img6 from "/src/assets/image/news6.png";
function News() {
  return (
    <div className="news">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="bread">
              <div className="title">Xu Hướng</div>
            </div>
            <div className="content-box d-flex bg-light gap-3">
              <img src={img1} />
              <div className="text">
                <p className="title">
                  Valorant Mobile bắt đầu thử nghiệm trên nền tảng iOS, iPhone
                  5s cũng có thể chơi được
                </p>
                <small className="date">11/11/2022</small>
                <span className="detail d-inline-block">
                  Có vẻ như thời điểm phát hành Valorant Mobile đã rất gần khi
                  tựa game này liên tục có những cập nhật trong thời gian gần
                  đây..
                </span>
              </div>
            </div>
            <div className="content-box d-flex bg-light gap-3">
              <img src={img2} />
              <div className="text">
                <p className="title">
                  Valorant Mobile bắt đầu thử nghiệm trên nền tảng iOS, iPhone
                  5s cũng có thể chơi được
                </p>
                <small className="date">11/11/2022</small>
                <span className="detail d-inline-block">
                  Có vẻ như thời điểm phát hành Valorant Mobile đã rất gần khi
                  tựa game này liên tục có những cập nhật trong thời gian gần
                  đây..
                </span>
              </div>
            </div>
            <div className="content-box d-flex bg-light gap-3">
              <img src={img3} />
              <div className="text">
                <p className="title">
                  Valorant Mobile bắt đầu thử nghiệm trên nền tảng iOS, iPhone
                  5s cũng có thể chơi được
                </p>
                <small className="date">11/11/2022</small>
                <span className="detail d-inline-block">
                  Có vẻ như thời điểm phát hành Valorant Mobile đã rất gần khi
                  tựa game này liên tục có những cập nhật trong thời gian gần
                  đây..
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="bread">
              <div className="title">Tin nổi bật</div>
            </div>
            <div className="content-box-small d-flex bg-light gap-3 align-items-center">
              <img src={img4} />
              <p className="title">
                Phép bổ trợ Trừng Phạt sẽ được Riot Games thay đổi toàn diện tại
                Tiền Mùa Giải 2023
              </p>
            </div>
            <div className="content-box-small d-flex bg-light gap-3 align-items-center">
              <img src={img5} />
              <p className="title">
                Phép bổ trợ Trừng Phạt sẽ được Riot Games thay đổi toàn diện tại
                Tiền Mùa Giải 2023
              </p>
            </div>
            <div className="content-box-small d-flex bg-light gap-3 align-items-center">
              <img src={img6} />
              <p className="title">
                Phép bổ trợ Trừng Phạt sẽ được Riot Games thay đổi toàn diện tại
                Tiền Mùa Giải 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
