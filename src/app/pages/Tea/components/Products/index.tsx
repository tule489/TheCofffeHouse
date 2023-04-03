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
          <h3>Trà tại Nhà</h3>
          <div className="coffee-menu">
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#/">
                  <img src={img5} alt="" />{' '}
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#" title="Giftset Trà Tearoma">
                    Giftset Trà Tearoma
                  </a>
                </h3>
                <h4 className="original_price">169.000 đ</h4>
              </div>
            </div>

            <div className="coffee-item">
              <div className="menu-item">
                <a href="#/">
                  <img src={img6} alt="" />{' '}
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#/" title="Trà Đào Túi Lọc Tearoma 20 x 2gr">
                    Trà Đào Túi Lọc Tearoma 20 x 2gr
                  </a>
                </h3>
                <h4 className="original_price">28.000 đ</h4>
              </div>
            </div>
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#/">
                  <img src={img7} alt="" />{' '}
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#/" title="Trà Lài Túi Lọc Tearoma 20 x 2gr">
                    Trà Lài Túi Lọc Tearoma 20 x 2gr
                  </a>
                </h3>
                <h4 className="original_price">28.000 đ</h4>
              </div>
            </div>
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#/">
                  <img src={img8} alt="" />{' '}
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#/" title="Trà Oolong Túi Lọc Tearoma 20 x 2gr">
                    Trà Oolong Túi Lọc Tearoma 20 x 2gr
                  </a>
                </h3>
                <h4 className="original_price">28.000 đ</h4>
              </div>
            </div>
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#/">
                  <img src={img9} alt="" />{' '}
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#/" title="Trà Sen Túi Lọc Tearoma 20 x 2gr">
                    Trà Sen Túi Lọc Tearoma 20 x 2gr
                  </a>
                </h3>
                <h4 className="original_price">28.000 đ</h4>
              </div>
            </div>
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#/">
                  <img src={img10} alt="" />{' '}
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#/" title="Trà Xanh Lá Tearoma 100gr">
                    Trà Xanh Lá Tearoma 100gr
                  </a>
                </h3>
                <h4 className="original_price">74.000 đ</h4>
              </div>
            </div>
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#/">
                  {' '}
                  <img src={img11} alt="" />
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#/" title="Trà Sen Lá Tearoma 100gr">
                    Trà Sen Lá Tearoma 100gr
                  </a>
                </h3>
                <h4 className="original_price">79.000 đ</h4>
              </div>
            </div>
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#/">
                  <img src={img12} alt="" />{' '}
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#" title="Trà Oolong Lá Tearoma 100gr">
                    Trà Oolong Lá Tearoma 100gr
                  </a>
                </h3>
                <h4 className="original_price">98.000 đ</h4>
              </div>
            </div>
            <div className="coffee-item">
              <div className="menu-item">
                <a href="#/">
                  <img src={img13} alt="" />
                </a>
              </div>
              <div className="menu_item_info">
                <h3>
                  <a href="#/" title="Cà Phê Rang Xay Original 1 Túi 1KG">
                    Cà Phê Rang Xay Original 1 Túi 1KG
                  </a>
                </h3>
                <h4 className="original_price">79.000 đ</h4>
              </div>
            </div>
          </div>
        </div>
        <script src="../js/tra.js"></script>
      </div>
    </>
  );
}
