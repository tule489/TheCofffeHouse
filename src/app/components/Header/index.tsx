import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import './index.css';
import img0 from './assets/0.png';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import iconmenu from './assets/icon-menu.png';
import ItemMenu from './components/ItemMenu';
interface category {
  name?: string;
  id?: string;
  isOpen?: boolean;
}
interface DetailedCategory {
  id?: string;
  categoryId?: string;
  name?: string;
}
export default function Header() {
  const [DetailcategoryKey, setDetailCategoryKey] = useState();
  const [productKey, setProductKey] = useState();
  const [categories, setCategories] = useState<category[]>([]);
  const [detailedCategory, setDetailedCategory] = useState<DetailedCategory[]>(
    [],
  );
  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get(
          'https://thecoffeehousebe-production.up.railway.app/api/v1/categories/getAll',
        );
        const res1 = await axios.get(
          'https://thecoffeehousebe-production.up.railway.app/api/v1/detailedCategories/getAll',
        );

        setCategories(res.data);
        setDetailedCategory(res1.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);
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
                  <NavLink className="menu-org" to="/Coffee" target="_parent">
                    Cà phê
                  </NavLink>
                </li>
                <li>
                  <Link className="menu-org" to="/Tea " target="_parent">
                    Trà
                  </Link>
                </li>
                <li className="has-child">
                  <NavLink
                    className="menu-org"
                    to="/Menu"
                    target="_parent"
                    onClick={() => {
                      sessionStorage.removeItem('categoryId');
                      sessionStorage.removeItem('categoryDetailId');
                    }}
                  >
                    Menu <img src={iconmenu} alt="" />
                  </NavLink>
                  <ul className="menu_child1">
                    <li className="lv2_title">
                      <a className="menu-org1" title="Tất cả">
                        Tất cả
                      </a>
                    </li>
                    <ItemMenu
                      categories={categories}
                      detailedCategory={detailedCategory}
                    />
                  </ul>
                </li>
                <li className="has-child">
                  <NavLink
                    className="menu-org"
                    to="/HouseStory"
                    target="_parent"
                  >
                    Chuyện Nhà <img src={iconmenu} alt="" />
                  </NavLink>
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
                  <NavLink className="menu-org" to="/Store" target="_parent">
                    Của hàng
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menu-org" to="/Recruits" target="_parent">
                    Tuyển dụng
                  </NavLink>
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
            <div className="header-menu-right">
              <NavLink className="menu-org" to="/Pay" target="_parent">
                <i className="header-menu-right-shop fa-solid fa-cart-shopping"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
