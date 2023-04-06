import React from 'react';
import './index.css';

// import axios from './axios';
export default function Product(props) {
  const productFitered = props.product.filter(e => e.id === props.ProductKey);
  console.log(productFitered);
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
                <h1>{product.name}</h1>
                <div className="product_price">
                  <span className="price" data-price="49000">
                    {product.price}
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
