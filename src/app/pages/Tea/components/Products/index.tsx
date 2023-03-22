import React from 'react';
import './index.css';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import img9 from './assets/9.png';
import img10 from './assets/10.png';
import img11 from './assets/11.png';
import img12 from './assets/12.png';
import img13 from './assets/13.png';

export default function Coffee() {
  return (
    <>
      <div id="coffee">
        <div className="coffee-container">
          <h3>Cà Phê Tại Nhà</h3>
          <div className="coffee-menu">
            <div className="coffee-item">
              <div className="menu-item">
                <a href="../html/spcaphe.html">
                  <img src={img5} alt="" />
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a
                    href="../html/spcaphe.html"
                    title="Cà Phê Rang Xay Original 1 250gr"
                  >
                    Cà Phê Rang Xay Original 1 250gr
                  </a>
                </h3>
                <h4 className="original_price">49.000 đ</h4>
                <del className="price_product_item ">59.000 đ</del>
              </div>
            </div>

            <div className="coffee-item">
              <div className="menu-item">
                <a href="#">
                  <img src={img6} alt="" />
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#" title="Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G">
                    Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G
                  </a>
                </h3>
                <h4 className="original_price">79.000 đ</h4>
                <del className="price_product_item ">98.000 đ</del>
              </div>
            </div>
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#">
                  <img src={img7} alt="" />
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#" title="Cà Phê Sữa Đá Hòa Tan Hộp 10 gói">
                    Cà Phê Sữa Đá Hòa Tan Hộp 10 gói
                  </a>
                </h3>
                <h4 className="original_price">39.000 đ</h4>
                <del className="price_product_item ">44.000 đ</del>
              </div>
            </div>
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#">
                  <img src={img8} alt="" />
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a
                    href="#"
                    title="Cà Phê Sữa Đá Hòa Tan Đậm Vị Hộp 18 gói x 16gr"
                  >
                    Cà Phê Sữa Đá Hòa Tan Đậm Vị Hộp 18 gói x 16gr
                  </a>
                </h3>
                <h4 className="original_price">39.000 đ</h4>
                <del className="price_product_item ">48.000 đ</del>
              </div>
            </div>
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#">
                  <img src={img9} alt="" />
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#" title="Cà Phê Sữa Đá Hòa Tan Túi 25 x 22gr">
                    Cà Phê Sữa Đá Hòa Tan Túi 25 x 22gr
                  </a>
                </h3>
                <h4 className="original_price">79.000 đ</h4>
                <del className="price_product_item ">98.000 đ</del>
              </div>
            </div>
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#">
                  <img src={img10} alt="" />
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#" title="Cà Phê Sữa Đá Hòa Tan Túi 25 x 22gr">
                    Cà Phê Sữa Đá Hòa Tan Túi 25 x 22gr
                  </a>
                </h3>
                <h4 className="original_price">79.000 đ</h4>
                <del className="price_product_item ">98.000 đ</del>
              </div>
            </div>
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#">
                  {' '}
                  <img src={img11} alt="" />
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#" title="Cà phê sữa đá pack 6 lon">
                    Cà phê sữa đá pack 6 lon
                  </a>
                </h3>
                <h4 className="original_price">69.000 đ</h4>
                <del className="price_product_item ">83.000 đ</del>
              </div>
            </div>
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#">
                  <img src={img12} alt="" />
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#" title="Thùng 24 Lon Cà Phê Sữa Đá">
                    Thùng 24 Lon Cà Phê Sữa Đá
                  </a>
                </h3>
                <h4 className="original_price">269.000 đ</h4>
                <del className="price_product_item ">330.000 đ</del>
              </div>
            </div>
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#">
                  <img src={img13} alt="" />
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#" title="Cà Phê Rang Xay Original 1 Túi 1KG">
                    Cà Phê Rang Xay Original 1 Túi 1KG
                  </a>
                </h3>
                <div className="price_product_item">230.000 đ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
