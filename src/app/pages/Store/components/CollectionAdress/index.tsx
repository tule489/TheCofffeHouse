import React from 'react';
import './index.css';
import img14 from './assets/14.png';
import img15 from './assets/15.png';
import img16 from './assets/16.png';
import img11 from './assets/12.png';
import img12 from './assets/12.png';
import img13 from './assets/13.png';
import iconleft from './assets/icon-left.png';
import iconright from './assets/icon-right.png';
import fb from './assets/facebook.png';
import insta from './assets/instagram.png';
import link from './assets/link.png';
import mess from './assets/message.png';

export default function Recruit() {
  return (
    <>
      <div className="page-content-right">
        <h3 className="page_title">
          Khám phá <span>74</span> cửa hàng của chúng tôi ở
          <span> Tp Hồ Chí Minh</span>
        </h3>
        <div className="page_filter">
          <div className="custom_select_wrap">
            <select className="filter_district">
              <option value="default"> Quận/Huyện</option>
              <option value="Bình Chánh">Bình Chánh</option>
              <option value="Bình Thạnh">Bình Thạnh</option>
              <option value="Bình Tân">Bình Tân</option>
              <option value="Gò Vấp">Gò Vấp</option>
              <option value="Hóc Môn">Hóc Môn</option>
              <option value="Phú Nhuận">Phú Nhuận</option>
              <option value="Quận 1">Quận 1</option>
              <option value="Quận 10">Quận 10</option>
              <option value="Quận 11">Quận 11</option>
              <option value="Quận 3">Quận 3</option>
              <option value="Quận 4">Quận 4</option>
              <option value="Quận 5">Quận 5</option>
              <option value="Quận 6">Quận 6</option>
              <option value="Quận 7">Quận 7</option>
              <option value="TP. Thủ Đức">TP. Thủ Đức</option>
              <option value="Tân Bình">Tân Bình</option>
              <option value="Tân Phú">Tân Phú</option>
            </select>
          </div>
        </div>
        <div className="store-list">
          <div className="store-loop">
            <div className="store-loop-top">
              <div className="slider-content">
                <div className="silder-content-top-list">
                  <div className="silder-content-top">
                    <a href="#">
                      <img
                        className="silder-content-top-img"
                        src={img11}
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <img
                        className="silder-content-top-img"
                        src={img12}
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <img
                        className="silder-content-top-img"
                        src={img13}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="silder-content-top-btn">
                    <button>
                      <img className="slider-icon-left" src={iconleft} alt="" />
                    </button>
                    <button>
                      <img
                        className="silder-icon-right"
                        src={iconright}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <div className="silder-content-bottom">
                  <li className="action"></li>
                  <li></li>
                  <li></li>
                </div>
              </div>
            </div>
            <div className="store-loop-bottom">
              <h4 className="store_name">HCM Hoàng Việt</h4>
              <div className="store_actions">
                <a className="view-map animate_btn reverse" href="#">
                  Xem bản đồ
                </a>
                <ul>
                  <li>Chia sẻ trên:</li>
                  <li>
                    <a
                      className="sharing"
                      title="Chia sẻ qua facebook"
                      href="#"
                    >
                      <img src={fb} alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="sharing" title="Chia sẻ qua zalo" href="#">
                      <img src={insta} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="sharing"
                      title="Chia sẻ qua tin nhắn"
                      href="#"
                    >
                      <img src={mess} alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="sharing clipboard" title="Copy link" href="#">
                      <img src={link} alt="" />
                    </a>
                  </li>
                </ul>
              </div>

              <p className="store_address">
                16/3 Hoàng Việt, Q. Tân Bình, Hồ Chí Minh
              </p>
              <p className="store_wktime">07:00 - 21:30</p>
              <div className="store_meta">
                <span className="parking">Có chỗ đỗ xe hơi</span>
                <span className="self_serving">Phục vụ tại chỗ</span>
                <span className="take_away">Mua mang đi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
