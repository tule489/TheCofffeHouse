import React from 'react';
import './index.css';
import search from './assets/search.png';
import star from './assets/star.png';
import img14 from './assets/14.png';
import img15 from './assets/15.png';
import img9 from './assets/9.png';
import img10 from './assets/10.png';
import img11 from './assets/11.png';
import img12 from './assets/12.png';
import img13 from './assets/13.png';

export default function Recruit() {
  return (
    <>
      <div className="main-job-container">
        <div className="search-box">
          <div className="main-job__search-wapper">
            <div className="main-job__search-input">
              <div className="text-small">
                <p className="vartical-inderhit">Bạn đang tìm kiếm</p>
              </div>
              <input name="myinput" placeholder="Workwork, location for ..." />
            </div>
            <div className="main-job__search-address">
              <div className="mr-2">
                <div className="text-small">
                  <p className="vartical-inderhit">Nơi bạn muốn làm việc</p>
                </div>
                <div>
                  <span>
                    <p className="vartical-inderhit">Select tỉnh thành</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="main-job__search-btn-box">
              <div className="main-job__search-btn">
                <img src={search} alt="" />
                <p className="vartical-inderhit">Tìm kiếm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-job__wapper">
          <p className="main-job__sub-title">Power on position</p>
        </div>
        <div className="main-job-list">
          <div className="main-job-list-menu">
            <span className="khoi">
              <img src={star} alt="" />
            </span>
            <div className="main-job-list-item">
              <p>Tiếp đón khách hàng(Bảo vệ)</p>
            </div>
          </div>
          <div className="main-job-list-menu">
            <span className="khoi">
              <img src={star} alt="" />
            </span>
            <div className="main-job-list-item">
              <p>Thợ pha cà phê</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-apply-job">
        <div className="main-apply-menu">
          <div className="main-apply-item">
            <div className="main-apply-item-top">
              <img src={img14} alt="" />
            </div>
            <div className="main-apply-item-center">
              <h4>Của hàng khối</h4>
              <ul>
                <li>Của hàng quản lý</li>
                <li>Giám sát ca</li>
                <li>Tiếp đón khách hàng(Bảo vệ)</li>
                <li>Thợ pha cà phê</li>
              </ul>
            </div>
            <div className="main-apply-item-bottom">
              <a href="#">View all the public block window</a>
            </div>
          </div>
          <div className="main-apply-item">
            <div className="main-apply-item-top">
              <img src={img15} alt="" />
            </div>
            <div className="main-apply-item-center">
              <h4>Office block</h4>
              <ul>
                <li>Head group Kế toán Tài sản</li>
                <li>Người điều hành khoản thu cấp cao</li>
                <li>Điều hành dịch vụ khách hàng nội bộ</li>
              </ul>
            </div>
            <div className="main-apply-item-bottom">
              <a href="#">View all the public block window</a>
            </div>
          </div>
        </div>
        <script src="../js/tuyendung.js"></script>
      </div>
    </>
  );
}
