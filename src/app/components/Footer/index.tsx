import React, { useEffect } from 'react';
import './index.css';
import support from './assets/support.png';
import tichxanh from './assets/tichxanh.png';
import phone from './assets/phone.png';
import addres from './assets/addres.png';
import iconfb from './assets/iconfb.png';
import angpage from './assets/angpage.png';
import fb from './assets/fb.png';
import insta from './assets/insta.png';
import iconshare from './assets/icon-share.png';
import page from './assets/page.png';

export default function Footer() {
  const handleClick = () => {
    const btnhotline = document.getElementById('fixed-hotline-support');
    const modalcontent = document.querySelector('.modal-content');
    const modal = document.querySelector('.modal');
    const modalclose = document.querySelector('.js-modal-close');
    btnhotline?.addEventListener('click', () => modal?.classList.add('open'));
    modalclose?.addEventListener('click', () =>
      modal?.classList.remove('open'),
    );
    modal?.addEventListener('click', () => modal?.classList.remove('open'));
    modalcontent?.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const element1 = document.getElementById('btnhotline');
  //     element1?.classList.add('open');
  //   };

  //   const addClassOnScroll = () => {
  //     window.addEventListener('scroll', handleScroll);
  //   };

  //   addClassOnScroll();

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <>
      <footer id="footer">
        <div className="footer-content">
          <div className="footer-row">
            <div className="footer-item">
              <h3 className="footer-title">Giới thiệu</h3>
              <ul className="footer-linklists">
                <li>
                  <a href="#" title="Về Chúng Tôi">
                    Về Chúng Tôi
                  </a>
                </li>
                <li>
                  <a href="#" title="Sản phẩm">
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#" title="Khuyến mãi">
                    Khuyến mãi
                  </a>
                </li>
                <li>
                  <a href="#" title="Chuyện cà phê">
                    Chuyện cà phê
                  </a>
                </li>
                <li>
                  <a href="#" title="Cửa Hàng">
                    Cửa Hàng
                  </a>
                </li>
                <li>
                  <a href="#" title="Tuyển dụng">
                    Tuyển dụng
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h3 className="footer-title">Điều khoản</h3>
              <ul className="footer-linklists">
                <li>
                  <a href="#" title="Điều khoản sử dụng">
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a href="#" title="Quy tắc bảo mật">
                    Quy tắc bảo mật
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <div className="hotline-footer">
                <p>
                  <img src={phone} />
                  Đặt hàng: 1800 6936
                </p>
                <p>
                  <img src={addres} />
                  Liên hệ
                </p>
              </div>
              <div className="address-footer">
                <p>Tầng 3-4 Hub Building </p>
                <p>195/10E Điện Biên Phủ, P.15 ,</p>
                <p>Q.Bình Thạnh, TP.Hồ Chí Minh </p>
              </div>
            </div>
            <div className="footer-item">
              <div className="tch-page">
                <div className="_2zfs"></div>
                <img src={page} alt="" />
                <div className="tch-page-img">
                  <div className="tch-page-img-left">
                    <a href="#">
                      <img src={angpage} alt="" />
                    </a>
                  </div>
                  <div className="tch-page-img-right">
                    <div className="tch-page-img-right-top">
                      <a href="#/">The Coffee House </a>
                      <span></span>
                    </div>
                    <span>614.963 lượt thích</span>
                  </div>
                </div>
                <div className="tch-page-img-btn">
                  <a className="tch-page-img-btn1" href="#">
                    <img src={iconfb} alt="" /> Thích Trang
                  </a>
                  <a className="tch-page-img-btn2" href="#">
                    <img src={iconshare} alt="" /> Chia sẻ
                  </a>
                </div>
              </div>
              <ul className="tch-social-links">
                <li>
                  <a href="#">
                    <img src={fb} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={insta} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <a title="Hotline" id="fixed-hotline-support" onClick={handleClick}>
        <img src={support} />
      </a>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-content-top">
            <p>Gọi hỗ trợ 18006936</p>
          </div>
          <div className="modal-content-bottom">
            <p className="js-modal-close">Cancel</p>
            <p>Call</p>
          </div>
        </div>
      </div>
    </>
  );
}
