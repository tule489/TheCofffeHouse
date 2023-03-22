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
// import axios from './axios';
export default function Product(props) {
  const productFitered = props.product.filter(
    e => e.products.id === props.setProductId,
  );
  return (
    <>
      {productFitered.map(product => {
        return (
          <div className="body-content">
            <div className="body-content-left">
              <div className="slider-content">
                <div className="silder-content-top-list">
                  <div className="silder-content-top">
                    <a href="#">
                      <img src={product.image} alt="" />
                    </a>
                    <a href="#">
                      <img src={product.image} alt="" />
                    </a>
                    <a href="#">
                      <img src={product.image} alt="" />
                    </a>
                    <a href="#">
                      <img src={product.image} alt="" />
                    </a>
                  </div>
                  <div className="silder-content-top-btn">
                    <button>
                      <img
                        className="slider-icon-left"
                        src="../image/spcaffe-img/icon-left.png"
                        alt=""
                      />
                    </button>
                    <button>
                      <img
                        className="silder-icon-right"
                        src="../image/spcaffe-img/icon-right.png"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <div className="silder-content-bottom">
                  <li className="action">
                    <img src="../image/spcaffe-img/4.png" alt="" />
                  </li>
                  <li>
                    <img src="../image/spcaffe-img/5.png" alt="" />
                  </li>
                  <li>
                    <img src="../image/spcaffe-img/6.png" alt="" />
                  </li>
                  <li>
                    <img src="../image/spcaffe-img/7.png" alt="" />
                  </li>
                </div>
              </div>
            </div>
            <div className="body-content-right">
              <div className="body-content-right-top">
                <h1>Cà Phê Rang Xay Original 1 250gr</h1>
                <div className="product_price">
                  <span className="price" data-price="49000">
                    49.000 đ
                  </span>
                  <del className="price_original">59.000 đ</del>
                  <span className="sale_percent">17% giảm</span>
                </div>
              </div>
              <div className="body-content-right-bottom">
                <ul className="order_methods">
                  <li className="">
                    <a href="#">
                      <span>Đặt giao tận nơi</span>
                    </a>
                  </li>

                  <li className="">
                    <a target="_blank" href="../html/cuahang.html">
                      <span>Mua tại cửa hàng</span>
                    </a>
                  </li>
                  <li className="take_away">
                    <a href="#">
                      <span>Mua mang đi</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
