import React from "react";
import "./NewsDetail.scss";
import img1 from "/src/assets/image/news1.png";
import img2 from "/src/assets/image/news2.png";
import img4 from "/src/assets/image/news4.png";
import img5 from "/src/assets/image/news5.png";
import img6 from "/src/assets/image/news6.png";
function NewsDetail() {
  return (
    <div className="news-detail">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="content-box">
              <h2 className="title">
                Valorant Mobile bắt đầu thử nghiệm trên nền tảng iOS, iPhone 5s
                cũng có thể chơi được
              </h2>
              <span className="date">11/11/2022 12:59</span>
              <p className="detail">
                Cách đây không lâu, hình ảnh Valorant Mobile xuất hiện trên kho
                tải Google Play đã khiến cho cộng đồng game thủ hào hứng. Thành
                công của Valorant trên nền tảng PC đã tạo tiền đề để Riot Games
                quyết định đẩy nhanh quá trình phát triển tựa game này trên nền
                tảng di động. Những dự án tạo được tiếng vang trên di động của
                Riot như Liên Minh: Tốc Chiến, Đấu Trường Chân Lý Mobile… là
                động lực không nhỏ khiến cho Valorant Mobile sớm được phát hành.
              </p>
              <img src={img1} />
              <p className="detail">
                Nếu như vào tháng trước, hình ảnh Valorant Mobile được thử
                nghiệm trên nền tảng Android thì giờ đây, tựa game này tiếp tục
                có bước tiến mới trên hệ máy của Apple. Được biết, Valorant
                Mobile sẽ được tối ưu cho các thiết bị từ iPhone 5s trở lên,
                thậm chí là đã hỗ trợ cho thế hệ iPad mới nhất. Như vậy có thể
                thấy rằng, Valorant Mobile tỏ ra rất tối ưu trên nền tảng iOS.
                Đặc biệt là không đòi hỏi một cấu hình quá cao. Việc Valorant
                Mobile sớm phát hành trên nền tảng di động cũng không có gì quá
                bất ngờ. Việc các tựa game chuyển dịch nền tảng sang thiết bị di
                động, đặc biệt là thể thao điện tử đã thúc đẩy những ông lớn của
                làng game thế giới phải tăng tốc độ phát triển của mình. Trước
                đó, NetEase đã tung ra một trò chơi rất giống với Valorant trên
                di động là Hyper Front và sớm tạo được sự chú ý của cộng đồng
                game thủ.
              </p>
              <img src={img2} />
              <p className="detail">
                Vì vậy, việc Valorant Mobile sẽ ra mắt trong tương lai gần mà
                rất có thể là đầu năm 2023 khiến cho game thủ tựa game này có lý
                do để vui mừng. Bởi lẽ, dù sao chơi một sản phẩm được phát triển
                và phát hành "chính chủ" cũng vẫn sẽ tốt hơn nhiều so với một
                phiên bản sao chép. Hơn hết, Valorant đang rất thành công trên
                PC và game thủ khao khát được trải nghiệm phiên bản di động của
                trò chơi này. Hy vọng rằng, game thủ sẽ sớm được trên tay
                Valorant Mobile trong thời gian sớm nhất.
              </p>
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

export default NewsDetail;
