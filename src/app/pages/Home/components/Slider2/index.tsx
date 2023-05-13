import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import iconleft from './assets/icon-left.png';
import iconright from './assets/icon-right.png';
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <>
        <div id="slider">
          <Slider {...settings}>
            <div>
              <a href="#">
                <img src={img4} alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={img5} alt="" />
              </a>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
