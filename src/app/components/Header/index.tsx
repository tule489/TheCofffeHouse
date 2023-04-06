import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import img0 from './assets/0.png';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import iconmenu from './assets/icon-menu.png';
export default function Header() {
  return (
    <>
      <div className="top-bar">
        <div className="container-top-bar">
          <div>
            <a>
              <img src={img1} alt="" />
              <span>154 Cửa hàng khắp cả nước</span>
            </a>
          </div>
          <div>
            <a>
              <img src={img2} alt="" />
              <span>Đặt hàng: 1800.6936</span>
            </a>
          </div>
          <div>
            <a>
              <img src={img3} alt="" />
              <span>Freeship từ 50.000vnd</span>
            </a>
          </div>
        </div>
      </div>
      <header id="header">
        <div className="container-header">
          <div className="header-nav">
            <div className="header-logo">
              <h1 className="hidden">
                <Link to="/" target="_parent">
                  THE CO̲FFEE HO̲USE
                </Link>
              </h1>
            </div>
            <div className="header-menu">
              <ul className="clearfix">
                <li>
                  <Link className="menu-org" to="/Coffee" target="_parent">
                    Cà phê
                  </Link>
                </li>
                <li>
                  <Link className="menu-org" to="/Tea " target="_parent">
                    Trà
                  </Link>
                </li>
                <li className="has-child">
                  <Link className="menu-org" to="/Menu" target="_parent">
                    Menu <img src={iconmenu} alt="" />
                  </Link>
                  <ul className="menu_child1">
                    <li className="lv2_title">
                      <a className="menu-org1" title="Tất cả">
                        Tất cả
                      </a>
                    </li>
                    <li className="lv2_title">
                      <a className="menu-org1" title="Hi-Tea Healthy">
                        Hi-Tea Healthy
                      </a>
                      <ul className="menu_child_lv3">
                        <li className="lv3_title">
                          <a className="menu-org2" title="Hi-Tea Trà">
                            Hi-Tea Trà
                          </a>
                        </li>
                        <li className="lv3_title">
                          <a className="menu-org2" title="Hi-Tea Đá Tuyết">
                            Hi-Tea Đá Tuyết
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="lv2_title">
                      <a className="menu-org1" title="Cà Phê">
                        Cà Phê
                      </a>
                      <ul className="menu_child_lv3">
                        <li className="lv3_title">
                          <a className="menu-org2" title="Cà Phê Việt Nam">
                            Cà Phê Việt Nam
                          </a>
                        </li>
                        <li className="lv3_title">
                          <a className="menu-org2" title="Cà Phê Máy">
                            Cà Phê Máy
                          </a>
                        </li>
                        <li className="lv3_title">
                          <a className="menu-org2" title="Cold Brew">
                            Cold Brew
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="lv2_title">
                      <Link className="menu-org1" to="/Tea" title="Trà">
                        Trà
                      </Link>
                      <ul className="menu_child_lv3">
                        <li className="lv3_title">
                          <a className="menu-org2" title="Trà trái cây">
                            Trà trái cây
                          </a>
                        </li>
                        <li className="lv3_title">
                          <a className="menu-org2" title="Trà sữa Macchiato">
                            Trà sữa Macchiato
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="lv2_title">
                      <a className="menu-org1" title="Món khác">
                        Món khác
                      </a>
                      <ul className="menu_child_lv3">
                        <li className="lv3_title">
                          <a className="menu-org2" title="Đá xay">
                            Đá xay
                          </a>
                        </li>
                        <li className="lv3_title">
                          <a className="menu-org2" title="Matcha - Sô cô la">
                            Matcha - Sô cô la
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="lv2_title">
                      <a className="menu-org1" title="Bánh &amp; Snack">
                        Bánh &amp; Snack
                      </a>
                      <ul className="menu_child_lv3">
                        <li className="lv3_title">
                          <a className="menu-org2" title="Bánh mặn">
                            Bánh mặn
                          </a>
                        </li>
                        <li className="lv3_title">
                          <a className="menu-org2" title="Bánh ngọt">
                            Bánh ngọt
                          </a>
                        </li>
                        <li className="lv3_title">
                          <a className="menu-org2" title="Snack">
                            Snack
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="lv2_title">
                      <a className="menu-org1" title="Tại nhà">
                        Tại nhà
                      </a>
                      <ul className="menu_child_lv3">
                        <li className="lv3_title">
                          <a className="menu-org2" title="Cà phê tại nhà">
                            Cà phê tại nhà
                          </a>
                        </li>
                        <li className="lv3_title">
                          <a className="menu-org2" title="Trà tại nhà">
                            Trà tại nhà
                          </a>
                        </li>
                        <li className="lv3_title">
                          <a className="menu-org2" title="Bộ sưu tập quà tặng">
                            Bộ sưu tập quà tặng
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-child">
                  <Link className="menu-org" to="/HouseStory" target="_parent">
                    Chuyện Nhà <img src={iconmenu} alt="" />
                  </Link>
                  <ul className="menu_child1">
                    <li className="lv2_title">
                      <a className="menu-org1" title="Coffeeholic">
                        Coffeeholic
                      </a>
                      <ul className="menu_child_lv3">
                        <li className="lv3_title">
                          <a className="menu-org2" title="Chuyện Cà Phê">
                            #chuyencaphe
                          </a>
                        </li>
                        <li className="lv3_title">
                          <a className="menu-org2" title="Pha Cà Phê">
                            #phacaphe
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="lv2_title">
                      <a className="menu-org1" title="Teaholic">
                        Teaholic
                      </a>
                      <ul className="menu_child_lv3">
                        <li className="lv3_title">
                          <a className="menu-org2" title="Pha Trà">
                            #phatra
                          </a>
                        </li>
                        <li className="lv3_title">
                          <a className="menu-org2" title="Câu chuyện về trà">
                            #cauchuyenvetra
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="lv2_title">
                      <a className="menu-org1" title="Blog">
                        Blog
                      </a>
                      <ul className="menu_child_lv3">
                        <li className="lv3_title">
                          <a className="menu-org2" title="In The Mood">
                            #inthemood
                          </a>
                        </li>
                        <li className="lv3_title">
                          <a className="menu-org2" title="Review">
                            #Review
                          </a>
                        </li>
                        <li className="lv3_title">
                          <a className="menu-org2" title="Human of TCH">
                            #HumanofTCH
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="menu-org"
                    href="../html/cuahang.html"
                    target="_parent"
                  >
                    Của hàng
                  </a>
                </li>
                <li>
                  <Link className="menu-org" to="/Recruits" target="_parent">
                    Tuyển dụng
                  </Link>
                </li>
                <li>
                  <a className="menu-org">Khai Trương Nhà Mới</a>
                </li>
              </ul>
            </div>
            {/* <div className="header-menu-right">
              <span className="header-menu-right-span">
                <img src="../image/trangchu-img/menu.png" alt="" />
                <ul className="header-menu-right-item">
                  <li className="header-menu-right-item1">Giỏ hàng </li>
                  <li className="header-menu-right-item1">Đăng nhập</li>
                  <li className="header-menu-right-item1">Đăng kí</li>
                </ul>
              </span>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}
