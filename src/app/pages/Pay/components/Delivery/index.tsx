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
      <div className="delivery">
        <div>
          <p style={{ padding: '8px 0', fontSize: 18 }}>Giao hàng</p>
        </div>
        <div>
          <div className="form-group">
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Tên người nhận"
              className="form-control tch-delivery__input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Số điện thoại"
              className="form-control tch-delivery__input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Địa chỉ giao hàng"
              className="form-control tch-delivery__input"
            />
          </div>
        </div>
      </div>
    </>
  );
}
