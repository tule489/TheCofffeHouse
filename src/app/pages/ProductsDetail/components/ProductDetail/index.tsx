import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

// import axios from './axios';
export default function ProductDetail(prop) {
  // const productFitered = prop.product.filter(e => e.id === prop.productId);
  // const categoryFitered = prop.product.filter(
  //   e => e.detailedCategoryId === prop.productId,
  // );
  // console.log(categoryFitered);

  return (
    <>
      <>
        <div id="breadcrumb">
          <div className="container">
            <ul className="breadcrumb-arrow">
              <li>
                <Link to="/Menu">Menu</Link>
                <span>/</span>
              </li>
              <li>
                <a href="../html/caphe.html">
                  {/* {categoryFitered.map(detailCategory => {
                        return (
                          <>
                            <h3>{detailCategory.name}</h3>
                          </>
                        );
                      })} */}
                </a>
                <span>/</span>
              </li>
              <li className="active">
                <a href="#"> {prop.product.name}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="body-content">
          <div className="body-content-left">
            <div className="slider-content">
              <div className="silder-content-top-list">
                <div className="silder-content-top">
                  <a href="#">
                    <img src={prop.product.image} alt="" />
                  </a>
                  <a href="#">
                    <img src={prop.product.image} alt="" />
                  </a>
                  <a href="#">
                    <img src={prop.product.image} alt="" />
                  </a>
                  <a href="#">
                    <img src={prop.product.image} alt="" />
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
                  <img src={prop.product.image} alt="" />
                </li>
              </div>
            </div>
          </div>
          <div className="body-content-right">
            <div className="body-content-right-top">
              <h1 style={{ fontSize: 28 }}>{prop.product.name}</h1>
              <div className="product_price">
                <span className="price">{prop.product.price}đ</span>
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
        <div className="product-all">
          <div className="product-info-story">
            <div className="product-info">
              <h4>Mô tả sản phẩm</h4>
              <p>- {prop.product.description}</p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
