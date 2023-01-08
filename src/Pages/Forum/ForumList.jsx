import React from 'react'
import './ForumList.scss'
import img1 from '/src/assets/image/news1.png'
import img2 from '/src/assets/image/news2.png'
import img3 from '/src/assets/image/news3.png'
import { Link } from 'react-router-dom'
import ForumHome from './ForumHome'
function ForumList() {
  return (
    <div className="forum">
      <div className="container">
        <div className="bread">
          <div className="title">Xu Hướng</div>
        </div>
        <div className="content-box bg-light row">
          <div className="d-flex col-10">
            <img clas src={img1} />
            <div className="text">
              <p className="title">Forum CKTG</p>
              <div className="d-flex flex-column">
                <small className="date">Thành Lập: 11/11/2022</small>
                <small className="date">Thành Viên: 111111</small>
              </div>
              <span className="detail d-inline-block">
                Kết bạn giao lưu và chia sẻ kiến thức
              </span>
            </div>
          </div>
          <Link to="/forum-detail" className="col-2 button d-flex align-items-center justify-content-end">
            <button>JOIN</button>
          </Link>
        </div>
        <div className="content-box bg-light row">
          <div className="d-flex col-10">
            <img clas src={img2} />
            <div className="text">
              <p className="title">Forum CKTG</p>
              <div className="d-flex flex-column">
                <small className="date">Thành Lập: 11/11/2022</small>
                <small className="date">Thành Viên: 111111</small>
              </div>
              <span className="detail d-inline-block">
                Kết bạn giao lưu và chia sẻ kiến thức
              </span>
            </div>
          </div>
          <Link to="/forum-detail"  className="col-2 button d-flex align-items-center justify-content-end">
            <button>JOIN</button>
          </Link>
        </div>
        <div className="content-box bg-light row">
          <div className="d-flex col-10">
            <img clas src={img3} />
            <div className="text">
              <p className="title">Forum CKTG</p>
              <div className="d-flex flex-column">
                <small className="date">Thành Lập: 11/11/2022</small>
                <small className="date">Thành Viên: 111111</small>
              </div>
              <span className="detail d-inline-block">
                Kết bạn giao lưu và chia sẻ kiến thức
              </span>
            </div>
          </div>
          <Link to="/forum-detail"  className="col-2 button d-flex align-items-center justify-content-end">
            <button>JOIN</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForumList
