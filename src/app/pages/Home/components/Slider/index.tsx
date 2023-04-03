import React from 'react';
import './index.css';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import iconleft from './assets/icon-left.png';
import iconright from './assets/icon-right.png';

export default function Slider() {
  const imgnumber = document.querySelectorAll('.silder-content-top1 img');
  console.log(imgnumber);
  let index = 0;
  const leftbtn = document.querySelector('.slider-icon-left');
  const rightbtn = document.querySelector('.silder-icon-right');
  leftbtn?.addEventListener('click', function () {
    index--;
    if (index < 0) {
      index = imgnumber.length - 1;
    }
    // document.querySelector('.silder-content-top1').style.right =
    //   index * 100 + '%';
    // window.scroll({
    //   top: 0,
    //   left: 100,
    //   behavior: 'smooth',
    // });
    removeaction();
    imgnumberli[index].classList.add('action');
  });
  rightbtn?.addEventListener('click', function () {
    index++;
    if (index > imgnumber.length - 1) {
      index = 0;
    }
    // document.querySelector('.silder-content-top1').style.right =
    //   index * 100 + '%';
    removeaction();
    imgnumberli[index].classList.add('action');
  });

  const imgnumberli = document.querySelectorAll('.silder-content-bottom li');
  imgnumberli.forEach(function (image, index) {
    image.addEventListener('click', function () {
      removeaction();
      // document.querySelector('.silder-content-top1').style.right =
      //   index * 100 + '%';
      image.classList.add('action');
    });
  });
  function removeaction() {
    let imgaction = document.querySelector('.action');
    imgaction?.classList.remove('action');
  }
  // setInterval(function(){
  //     rightbtn.click()
  // },4000)
  function imgauto() {
    index += 1;
    if (index > imgnumber.length - 1) {
      index = 0;
    }
    removeaction();
    // document.querySelector('.silder-content-top1').style.right =
    //   index * 100 + '%';
    imgnumberli[index].classList.add('action');
  }
  setInterval(imgauto, 4000);
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
