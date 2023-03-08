import React from 'react';
import './index.css';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import iconleft from './assets/icon-left.png';
import iconright from './assets/icon-right.png';

export default function Product() {
  return (
    <>
      <div id="slider">
        <div className="container">
          <div className="slider-content">
            <div className="silder-content-top-list">
              <div className="silder-content-top">
                <a href="#">
                  <img src={img5} alt="" />
                </a>
                <a href="#">
                  <img src={img4} alt="" />
                </a>
                <a href="#">
                  <img src={img6} alt="" />
                </a>
                <a href="#">
                  <img src={img7} alt="" />
                </a>
                <a href="#">
                  <img src={img8} alt="" />
                </a>
              </div>
              <div className="silder-content-top-btn">
                <button>
                  <img className="slider-icon-left" src={iconleft} alt="" />
                </button>
                <button>
                  <img className="silder-icon-right" src={iconright} alt="" />
                </button>
              </div>
            </div>
            <div className="silder-content-bottom">
              <li className="action"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
