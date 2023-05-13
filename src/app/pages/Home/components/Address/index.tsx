import React, { useEffect } from 'react';
import './index.css';
import img20 from './assets/20.png';
import img25 from './assets/25.png';
import img26 from './assets/26.png';
import img27 from './assets/28.png';
import img28 from './assets/28.png';
import img29 from './assets/29.png';
import img30 from './assets/30.png';
import img31 from './assets/31.png';
import img32 from './assets/32.png';
import img33 from './assets/33.png';
import iconleft from './assets/icon-left.png';
import iconright from './assets/icon-right.png';
import { useState } from 'react';
export default function Product() {
  const [imagePosition, setImagePosition] = useState(0);

  const handleLeftClick = () => {
    const newPosition = imagePosition - 1;
    setImagePosition(newPosition < 0 ? 0 : newPosition);
  };

  return (
    <>
      <div id="addres">
        <div className="addres-content">
          <div className="addres-menu">
            <div className="addres-left">
              <div className="addres-left-content">
                <h3>The Coffee House </h3>
                <h3> 149 Nguyễn Văn Cừ, Hà Nội</h3>
                <p>
                  Mừng khai trương Nhà mới tại Hà Nội.Nhà tặng bạn ưu đãi giảm
                  30% để nhâm nhi hương vị nhà và cùng bạn bè trải nghiệm không
                  gian mới
                </p>
              </div>
              <div className="animate-btn-warp1">
                <a className="animate-btn1" href="#">
                  Tìm Hiểu thêm
                </a>
              </div>
              <div className="addres-left-move">
                <span>
                  <img className="button-move-left" src={iconleft} alt="" />
                </span>
                <span>
                  <img className="button-move-right" src={iconright} alt="" />
                </span>
              </div>
            </div>
            <div className="addres-right">
              <div className="addres-right-menu">
                <div className="addres-right-item">
                  <a href="#">
                    <img className="addres-right-item-img" src={img20} alt="" />
                  </a>
                  <a href="#">
                    <img
                      className="addres-right-item-img"
                      src="../image/trangchu-img/21.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="addres-right-item-img"
                      src="../image/trangchu-img/22.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="addres-right-item-img"
                      src="../image/trangchu-img/23.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="addres-right-item-img"
                      src="../image/trangchu-img/24.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="addres-right-item-btn">
                  <button>
                    <img className="addres-icon-left" src={iconleft} alt="" />
                  </button>
                  <button>
                    <img className="addres-icon-right" src={iconright} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="addres-menu">
            <div className="addres-left">
              <div className="addres-left-content">
                <h3>The Coffee House - Vincom Mega Mall Smart City, Hà Nội</h3>
                <p>
                  Hà Nội chào Nhà mới tại đô thị Smart City, với không gian rộng
                  rãi cùng những ô cửa kính lớn cho nhiều ánh sáng và những góc
                  chụp sống ảo vô cùng lung linh.
                </p>
              </div>
              <div className="animate-btn-warp1">
                <a className="animate-btn1" href="#">
                  Tìm Hiểu thêm
                </a>
              </div>
              <div className="addres-left-move">
                <span>
                  <img
                    className="button-move-left"
                    src="../image/trangchu-img/icon-left.png"
                    alt=""
                  />
                </span>
                <span>
                  <img
                    className="button-move-right"
                    src="../image/trangchu-img/icon-right.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="addres-right">
              <div className="addres-right-menu">
                <div className="addres-right-item1">
                  <a href="#">
                    <img
                      className="addres-right-item-img1"
                      src="../image/trangchu-img/34.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="addres-right-item-img1"
                      src="../image/trangchu-img/35.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="addres-right-item-img1"
                      src="../image/trangchu-img/36.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="addres-right-item-img1"
                      src="../image/trangchu-img/37.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="addres-right-item-img1"
                      src="../image/trangchu-img/38.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="addres-right-item-btn">
                  <button>
                    <img
                      className="addres-icon-left1"
                      src="../image/trangchu-img/icon-left.png"
                      alt=""
                    />
                  </button>
                  <button>
                    <img
                      className="addres-icon-right1"
                      src="../image/trangchu-img/icon-right.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="addres-menu">
            <div className="addres-left">
              <div className="addres-left-content">
                <h3>The Coffee House </h3>
                <h3>Chung cư The Park Home, Cầu Giấy</h3>
                <p>
                  Nhà mới tại Cầu Giấy mang đến không gian “chanh sả” hiện đại
                  với tone cam trẻ trung, thiết kế nhấn nhá những ô cửa kính lớn
                  cùng hệ thống đèn chiếu sáng hứa hẹn cho ra đời những chiếc
                  ảnh check-in siêu xinh.
                </p>
              </div>
              <div className="animate-btn-warp1">
                <a className="animate-btn1" href="#">
                  Tìm Hiểu thêm
                </a>
              </div>
              <div className="addres-left-move">
                <span>
                  <img
                    className="button-move-left"
                    src="../image/trangchu-img/icon-left.png"
                    alt=""
                  />
                </span>
                <span>
                  <img
                    className="button-move-right"
                    src="../image/trangchu-img/icon-right.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="addres-right">
              <div className="addres-right-menu">
                <div className="addres-right-item2">
                  <a href="#">
                    <img
                      className="addres-right-item-img2"
                      src="../image/trangchu-img/39.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="addres-right-item-img2"
                      src="../image/trangchu-img/40.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="addres-right-item-img2"
                      src="../image/trangchu-img/41.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="addres-right-item-img2"
                      src="../image/trangchu-img/42.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="addres-right-item-img2"
                      src="../image/trangchu-img/43.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="addres-right-item-btn">
                  <button>
                    <img
                      className="addres-icon-left2"
                      src="../image/trangchu-img/icon-left.png"
                      alt=""
                    />
                  </button>
                  <button>
                    <img
                      className="addres-icon-right2"
                      src="../image/trangchu-img/icon-right.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="addres-menu">
            <div className="addres-left">
              <div className="addres-left-content">
                <h3>The Coffee House Lò Đúc</h3>
                <p>
                  Mừng khai trương Nhà mới tại Hà Nội.Nhà tặng bạn ưu đãi giảm
                  30% để nhâm nhi hương vị nhà và cùng bạn bè trải nghiệm không
                  gian mới
                </p>
              </div>
              <div className="animate-btn-warp1">
                <a className="animate-btn1" href="#">
                  Tìm Hiểu thêm
                </a>
              </div>
              <div className="addres-left-move">
                <span>
                  <img
                    className="button-move-left"
                    src="../image/trangchu-img/icon-left.png"
                    alt=""
                  />
                </span>
                <span>
                  <img
                    className="button-move-right"
                    src="../image/trangchu-img/icon-right.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="addres-right">
              <div className="addres-right-menu">
                <div className="addres-right-item3">
                  <a href="#">
                    <img
                      className="addres-right-item-img3"
                      src="../image/trangchu-img/44.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="addres-right-item-img3"
                      src="../image/trangchu-img/45.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="addres-right-item-img3"
                      src="../image/trangchu-img/46.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="addres-right-item-btn">
                  <button>
                    <img
                      className="addres-icon-left3"
                      src="../image/trangchu-img/icon-left.png"
                      alt=""
                    />
                  </button>
                  <button>
                    <img
                      className="addres-icon-right3"
                      src="../image/trangchu-img/icon-right.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
