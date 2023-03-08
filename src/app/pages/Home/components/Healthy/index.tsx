import React from 'react';
import './index.css';
import img15 from './assets/15.png';
import img16 from './assets/16.png';
import img17 from './assets/17.png';
import img18 from './assets/18.png';
import img19 from './assets/19.png';

export default function Healthy() {
  return (
    <>
      <div id="healthy">
        <div className="healthy-top">
          <div className="healthy-top-img">
            <h1>
              <img src={img15} alt="" />
            </h1>
          </div>
          <p>
            Được chiết xuất từ 100% hoa Hibiscus tự nhiên, không chứa caffeine
            cùng topping trái cây đa dạng, Hi-Tea Healthy là lựa chọn cho những
            ai muốn chăm sức khoẻ và yêu chiều bản thân. Nay có thêm 4 vị mới
            cực hấp dẫn kèm topping Aloe Vera ngon ngất ngây, đẹp đắm say.
          </p>
          <h3>Thử đi chờ chi!</h3>
        </div>
        <div className="healthy-center">
          <div className="healthy-center-left">
            <img src={img16} alt="" />
          </div>
          <div className="healthy-center-right">
            <h3>Hi-Tea Dâu Tây Mận Muối Aloe Vera</h3>
            <p>
              Sự kết hợp độc đáo giữa 3 sắc thái hương vị khác nhau: trà hoa
              Hibiscus chua thanh, Mận muối mặn mặn và Dâu tây tươi Đà Lạt cô
              đặc ngọt dịu. Ngoài ra, topping Aloe Vera tươi mát, ngon ngất
              ngây, đẹp đắm say, hứa hẹn sẽ khuấy đảo hè này.
            </p>
            <div className="animate-btn-warp">
              <a className="animate-btn" href="#">
                Thử Ngay
              </a>
            </div>
          </div>
        </div>
        <div className="healthy-bottom">
          <div className="healthy-bottom-item">
            <div className="healthy-bottom-item-top">
              <img src={img17} alt="" />
            </div>
            <div className="healthy-bottom-item-center">
              <h3>Hi-Tea Xoài Aloe Vera</h3>
              <p>
                Vị ngọt thanh, thơm phức từ xoài chín mọng kết hợp cùng vị chua
                đặc trưng của trà hoa Hibiscus tự nhiên, sẽ khiến bạn khó lòng
                quên được thức uống “chân ái” này. Đặc biệt, topping Aloe Vera
                tự nhiên không chỉ nhâm nhi vui miệng mà còn giúp bạn “nâng tầm
                nhan sắc”.
              </p>
            </div>
            <div className="healthy-bottom-btn">
              <a className="healthy-btn" href="#">
                Thử Ngay
              </a>
            </div>
          </div>
          <div className="healthy-bottom-item marginlr32 ">
            <div className="healthy-bottom-item-top">
              <img src={img18} alt="" />
            </div>
            <div className="healthy-bottom-item-center">
              <h3>Hi-Tea Đá Tuyết Yuzu Aloe Vera</h3>
              <p>
                Vị chua tươi mát của trà hoa Hibiscus, cùng đá tuyết Yuzu (quýt
                Nhật) chua dịu sẽ trở nên hài hòa hơn nhờ topping Aloe Vera giòn
                ngọt, sẽ khiến bạn thích thú ngay lần chạm môi đầu tiên.
              </p>
            </div>
            <div className="healthy-bottom-btn">
              <a className="healthy-btn" href="#">
                Thử Ngay
              </a>
            </div>
          </div>
          <div className="healthy-bottom-item">
            <div className="healthy-bottom-item-top">
              <img src={img19} alt="" />
            </div>
            <div className="healthy-bottom-item-center">
              <h3>Hi-Tea Đá Tuyết Mận Muối Aloe Vera</h3>
              <p>
                “Have a mặn mà” và chua chua từ Mận muối xay cùng đá tuyết, hoà
                quyện với vị trà hoa Hibiscus chua dịu và chút ngọt thanh tao
                bởi topping Aloe Vera, Hi-Tea Đá Tuyết Mận Muối Aloe Vera là
                thức uống “must try” để đánh tan cơn khát mùa hè.
              </p>
            </div>
            <div className="healthy-bottom-btn">
              <a className="healthy-btn" href="#">
                Thử Ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
