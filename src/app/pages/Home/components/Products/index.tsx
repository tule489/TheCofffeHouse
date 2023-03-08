import React from 'react';
import './index.css';
import img9 from './assets/9.png';
import img10 from './assets/10.png';
import img11 from './assets/11.png';
import img12 from './assets/12.png';
import img13 from './assets/13.png';
import img14 from './assets/14.png';

export default function Product() {
  return (
    <>
      <div id="products">
        <div className="product-menu">
          <div className="product-item-top">
            <div className="product-item1 pdright16">
              <a href="#">
                <img src={img9} alt="" />
              </a>
            </div>
            <div className="product-item2 pdlr16">
              <a href="#">
                <img src={img10} alt="" />
                Hi-Tea Đá Tuyết Mận Muối Aloe Vera
              </a>
              58.000 đ
            </div>
            <div className="product-item3 pdleft16">
              <a href="#">
                <img src={img11} alt="" />
                Hi-Tea Đá Tuyết Yuzu Aloe Vera
              </a>
              58.000 đ
            </div>
          </div>
          <div className="product-item-bottom">
            <div className="product-item4 pdright16">
              <a href="#">
                <img src={img12} alt="" />
                Hi-Tea Xoài Aloe Vera
              </a>
              45.000 đ
            </div>
            <div className="product-item4 pdlr16">
              <a href="#">
                <img src={img12} alt="" />
                Hi-Tea Dâu Tây Mận Muối Aloe Vera
              </a>
              49.000 đ
            </div>
            <div className="product-item4 pdlr16">
              <a href="#">
                <img src={img13} alt="" />
                Cà Phê Sữa Đá
              </a>
              29.000 đ
            </div>
            <div className="product-item4 pdleft16">
              <a href="#">
                <img src={img14} alt="" />
                Croissant Trứng Muối
              </a>
              35.000 đ
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
