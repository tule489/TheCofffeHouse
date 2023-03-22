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
      <div className="order">
        <div className="order-header">
          <p style={{ padding: '8px 0', fontSize: 18 }}>Các món đã chọn </p>
          <p
            style={{
              padding: '8px',
              borderRadius: '20px',
              border: '1px solid black',
              alignItems: 'center',
            }}
          >
            Thêm món
          </p>
        </div>
        <div className="order-container">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>The Coffee House Sữa Đá</p>
            <p>Lớn</p>
            <p>Xóa</p>
          </div>
          <div>
            <p>98.000đ</p>
          </div>
        </div>
        <div className="order-total">
          <h4 className="padding02010">Tổng cộng</h4>
          <div className="thanhtien padding01020">
            <p>Thành tiền</p>
            <p>98.000đ</p>
          </div>
          <div className="phigiaohang padding01020">
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <p>Phí giao hàng</p>
              <p>18.000đ</p>
            </div>
          </div>
        </div>
        <div className="thanhtoan">
          <div style={{ paddingLeft: '18px' }}>
            <p>Thành tiền</p>
            <p>116.000đ</p>
          </div>
          <p
            style={{
              marginRight: '18px',
              padding: '8px',
              borderRadius: '20px',
              border: '1px solid transparent',
              backgroundColor: 'white',
              color: '#fa8c16',
            }}
          >
            Đặt hàng
          </p>
        </div>
      </div>
    </>
  );
}
