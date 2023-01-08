import React from 'react'
import './ForumHome.scss'
import img1 from '/src/assets/image/avatar-1.jpg'
import img2 from '/src/assets/image/avatar-2.jpg'
import img3 from '/src/assets/image/avatar-3.jpg'
function ForumHome() {
  return (
    <div className="forum">
      <div className="container">
        <div className="bread">
          <div className="title">Bài đăng</div>
        </div>
        <ul className="nk-forum text-start">
          <li>
            <div className="nk-forum-icon">
              <span className="ion-pin" />
            </div>
            <div className="nk-forum-title">
              <h3>
                <a >Suggestions</a>
              </h3>
              <div className="nk-forum-title-sub">
                Started by <a href="#">nK</a> on January 17, 2023
              </div>
            </div>
            <div className="nk-forum-count">178 posts</div>
            <div className="nk-forum-activity-avatar">
              <a >
                <img src={img2} alt="Hitman" />
              </a>
            </div>
            <div className="nk-forum-activity">
              <div className="nk-forum-activity-title" title="Hitman">
                <a href="#">Hitman</a>
              </div>
              <div className="nk-forum-activity-date">September 11, 2023</div>
            </div>
          </li>
          <li className='pt-40'>
            <div className="nk-forum-icon">
              <span className="ion-chatboxes" />
            </div>
            <div className="nk-forum-title">
              <h3>
                <a >
                  When will be next closed beta?
                </a>
              </h3>
              <div className="nk-forum-title-sub">
                Started by <a href="#">Hitman</a> on August 9, 2023
              </div>
            </div>
            <div className="nk-forum-count">4 posts</div>
            <div className="nk-forum-activity-avatar">
              <a >
                <img src={img1} alt="Wolfenstein" />
              </a>
            </div>
            <div className="nk-forum-activity">
              <div className="nk-forum-activity-title" title="Wolfenstein">
                <a href="#">Wolfenstein</a>
              </div>
              <div className="nk-forum-activity-date">August 15, 2023</div>
            </div>
          </li>
          <li className='pt-40'>
            <div className="nk-forum-icon">
              <span className="ion-chatboxes" />
            </div>
            <div className="nk-forum-title">
              <h3>
                <a >Add new post types</a>
              </h3>
              <div className="nk-forum-title-sub">
                Started by <a href="#">Witch Murder</a> on Jule 28, 2023
              </div>
            </div>
            <div className="nk-forum-count">1 post</div>
            <div className="nk-forum-activity-avatar">
              <a >
                <img src={img3} alt="Witch Murder" />
              </a>
            </div>
            <div className="nk-forum-activity">
              <div className="nk-forum-activity-title" title="Witch Murder">
                <a href="#">Witch Murder</a>
              </div>
              <div className="nk-forum-activity-date">Jule 28, 2023</div>
            </div>
          </li>
          <li className='pt-40'>
            <div className="nk-forum-icon">
              <span className="ion-chatboxes" />
            </div>
            <div className="nk-forum-title">
              <h3>
                <a >Clan Wars functionality</a>
              </h3>
              <div className="nk-forum-title-sub">
                Started by <a href="#">Hitman</a> on June 17, 2023
              </div>
            </div>
            <div className="nk-forum-count">8 posts</div>
            <div className="nk-forum-activity-avatar">
              <a >
                <img src={img1} alt="Hitman" />
              </a>
            </div>
            <div className="nk-forum-activity">
              <div className="nk-forum-activity-title" title="Hitman">
                <a href="#">Hitman</a>
              </div>
              <div className="nk-forum-activity-date">Jule 6, 2023</div>
            </div>
          </li>
          <li className='pt-40'>
            <div className="nk-forum-icon">
              <span className="ion-chatboxes" />
            </div>
            <div className="nk-forum-title">
              <h3>
                <a >
                  Some questions before start
                </a>
              </h3>
              <div className="nk-forum-title-sub">
                Started by <a href="#">Hitman</a> on June 28, 2023
              </div>
            </div>
            <div className="nk-forum-count">1 post</div>
            <div className="nk-forum-activity-avatar">
              <a >
                <img src={img1} alt="Hitman" />
              </a>
            </div>
            <div className="nk-forum-activity">
              <div className="nk-forum-activity-title" title="Hitman">
                <a href="#">Hitman</a>
              </div>
              <div className="nk-forum-activity-date">June 28, 2023</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ForumHome
