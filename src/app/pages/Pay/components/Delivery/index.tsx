import React, { useEffect, useState } from 'react';
import './index.css';

export default function Coffee(props: any) {
  const listDeliveryAddress = [
    {
      quan: 'Quận Ba Đình',
      phuong: [
        {
          ten: 'Cống Vị',
          gia: 12000,
        },
        {
          ten: 'Điện Biên',
          gia: 13000,
        },
        {
          ten: 'Đội Cấn',
          gia: 15000,
        },
        {
          ten: 'Giảng Võ',
          gia: 20000,
        },
        {
          ten: 'Kim Mã',
          gia: 10000,
        },
        {
          ten: 'Liễu Giai',
          gia: 10000,
        },
        {
          ten: 'Ngọc Hà',
          gia: 10000,
        },
        {
          ten: 'Nguyễn Trung Trực',
          gia: 10000,
        },
        {
          ten: 'Phúc Xá',
          gia: 10000,
        },
        {
          ten: 'Quán Thánh',
          gia: 10000,
        },
        {
          ten: 'Thành Công',
          gia: 10000,
        },
        {
          ten: 'Trúc Bạch',
          gia: 10000,
        },
        {
          ten: 'Vĩnh Phúc',
          gia: 10000,
        },
      ],
    },
    {
      quan: 'Quận Hoàn Kiếm',
      phuong: [
        {
          ten: 'Chương Dương Độ',
          gia: 15000,
        },
        {
          ten: 'Cửa Đông',
          gia: 15000,
        },
        {
          ten: 'Cửa Nam',
          gia: 15000,
        },
        {
          ten: 'Đồng Xuân',
          gia: 15000,
        },
        {
          ten: 'Hàng Bạc',
          gia: 15000,
        },
        {
          ten: 'Hàng Bài',
          gia: 15000,
        },
        {
          ten: 'Hàng Bồ',
          gia: 15000,
        },
        {
          ten: 'Hàng Bông',
          gia: 15000,
        },
        {
          ten: 'Hàng Buồm',
          gia: 15000,
        },
        {
          ten: 'Hàng Đào',
          gia: 15000,
        },
        {
          ten: 'Hàng Gai',
          gia: 15000,
        },
        {
          ten: 'Hàng Mã',
          gia: 15000,
        },
        {
          ten: 'Hàng Trống',
          gia: 15000,
        },
        {
          ten: 'Lý Thái Tổ',
          gia: 15000,
        },
        {
          ten: 'Phan Chu Trinh',
          gia: 15000,
        },
        {
          ten: 'Phúc Tân',
          gia: 15000,
        },
        {
          ten: 'Trần Hưng Đạo',
          gia: 15000,
        },
        {
          ten: 'Tràng Tiền',
          gia: 15000,
        },
      ],
    },
    {
      quan: 'Quận Tây Hồ',
      phuong: [
        {
          ten: 'Bưởi',
          gia: 14000,
        },
        {
          ten: 'Thụy Khuê',
          gia: 14000,
        },
        {
          ten: 'Yên Phụ',
          gia: 14000,
        },
        {
          ten: 'Tứ Liên',
          gia: 14000,
        },
        {
          ten: 'Nhật Tân',
          gia: 14000,
        },
        {
          ten: 'Quảng An',
          gia: 14000,
        },
        {
          ten: 'Xuân La',
          gia: 14000,
        },
        {
          ten: 'Phú Thượng',
          gia: 14000,
        },
      ],
    },
    {
      quan: 'Quận Cầu Giấy',
      phuong: [
        {
          ten: 'Nghĩa Đô',
          gia: 10000,
        },
        {
          ten: 'Quan Hoa',
          gia: 10000,
        },
        {
          ten: 'Dịch Vọng',
          gia: 10000,
        },
        {
          ten: 'Dịch Vọng Hậu',
          gia: 10000,
        },
        {
          ten: 'Trung Hòa',
          gia: 10000,
        },
        {
          ten: 'Nghĩa Tân',
          gia: 10000,
        },
        {
          ten: 'Mai Dịch',
          gia: 10000,
        },
        {
          ten: 'Yên Hòa',
          gia: 10000,
        },
      ],
    },

    {
      quan: 'Quận Hoàng Mai',
      phuong: [
        {
          ten: 'Định Công',
          gia: 18000,
        },
        {
          ten: 'Đại Kim',
          gia: 18000,
        },
        {
          ten: 'Giáp Bát',
          gia: 18000,
        },
        {
          ten: 'Hoàng Liệt',
          gia: 18000,
        },
        {
          ten: 'Hoàng Văn Thụ',
          gia: 18000,
        },
        {
          ten: 'Lĩnh Nam',
          gia: 18000,
        },
        {
          ten: 'Mai Động',
          gia: 18000,
        },
        {
          ten: 'Tân Mai',
          gia: 18000,
        },
        {
          ten: 'Thanh Trì',
          gia: 18000,
        },
        {
          ten: 'Thịnh Liệt',
          gia: 18000,
        },
        {
          ten: 'Trần Phú',
          gia: 18000,
        },
        {
          ten: 'Tương Mai',
          gia: 18000,
        },
        {
          ten: 'Vĩnh Hưng',
          gia: 18000,
        },
        {
          ten: 'Yên Sở',
          gia: 18000,
        },
      ],
    },
    {
      quan: 'Quận Thanh Xuân',
      phuong: [
        {
          ten: 'Hạ Đình',
          gia: 24000,
        },
        {
          ten: 'Kim Giang',
          gia: 24000,
        },
        {
          ten: 'Khương Đình',
          gia: 24000,
        },
        {
          ten: 'Khương Mai',
          gia: 24000,
        },
        {
          ten: 'Khương Trung',
          gia: 24000,
        },
        {
          ten: 'Nhân Chính',
          gia: 24000,
        },
        {
          ten: 'Phương Liệt',
          gia: 24000,
        },
        {
          ten: 'Thanh Xuân Bắc',
          gia: 24000,
        },
        {
          ten: 'Thanh Xuân Nam',
          gia: 24000,
        },
        {
          ten: 'Thanh Xuân Trung',
          gia: 24000,
        },
        {
          ten: 'Thượng Đình',
          gia: 24000,
        },
      ],
    },
    {
      quan: 'Quận Bắc Từ Liêm',
      phuong: [
        {
          ten: 'Cổ Nhuế 1',
          gia: 16000,
        },
        {
          ten: 'Cổ Nhuế 2',
          gia: 16000,
        },
        {
          ten: 'Đông Ngạc',
          gia: 16000,
        },
        {
          ten: 'Đức Thắng',
          gia: 16000,
        },
        {
          ten: 'Liên Mạc',
          gia: 16000,
        },
        {
          ten: 'Minh Khai',
          gia: 16000,
        },
        {
          ten: 'Phú Diễn',
          gia: 16000,
        },
        {
          ten: 'Phúc Diễn',
          gia: 16000,
        },
        {
          ten: 'Tây Tựu',
          gia: 16000,
        },
        {
          ten: 'Thượng Cát',
          gia: 16000,
        },
        {
          ten: 'Thụy Phương',
          gia: 16000,
        },
        {
          ten: 'Xuân Đỉnh',
          gia: 16000,
        },
        {
          ten: 'Xuân Tảo',
          gia: 16000,
        },
      ],
    },
    {
      quan: 'Quận Nam Từ Liêm',
      phuong: [
        {
          ten: 'Cầu Diễn',
          gia: 13000,
        },
        {
          ten: 'Đại Mỗ',
          gia: 13000,
        },
        {
          ten: 'Mễ Trì',
          gia: 13000,
        },
        {
          ten: 'Mỹ Đình 1',
          gia: 13000,
        },
        {
          ten: 'Mỹ Đình 2',
          gia: 13000,
        },
        {
          ten: 'Phú Đô',
          gia: 13000,
        },
        {
          ten: 'Phương Canh',
          gia: 13000,
        },
        {
          ten: 'Tây Mỗ',
          gia: 13000,
        },
        {
          ten: 'Trung Văn',
          gia: 13000,
        },
        {
          ten: 'Xuân Phương',
          gia: 13000,
        },
      ],
    },
  ];

  const [quan, setQuan] = useState('');
  const [phuong, setPhuong] = useState('');

  useEffect(() => {
    setQuan('');
    setPhuong('');
  }, [props.isSuccess]);

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
              value={props.customerName}
              onChange={e => props.setCustomerName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Số điện thoại"
              className="form-control tch-delivery__input"
              value={props.phoneNumber}
              onChange={e => props.setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <select
              name=""
              id=""
              value={quan}
              onChange={e => setQuan(e.target.value)}
              className="form-control tch-delivery__input"
            >
              <option value="" disabled selected hidden>
                <span>Địa điểm giao hàng</span>
              </option>
              {listDeliveryAddress.map(e => {
                return <option value={e.quan}>{e.quan}</option>;
              })}
            </select>
          </div>
          {quan ? (
            <div className="form-group">
              <select
                value={phuong}
                onChange={event => {
                  setPhuong(event.target.value);
                  props.setDeliveryPrice(
                    listDeliveryAddress
                      .filter(e => e.quan === quan)[0]
                      .phuong.filter(e => e.ten === event.target.value)[0].gia,
                  );
                  props.setDeliveryAddress(`${event.target.value} - ${quan}`);
                }}
                className="form-control tch-delivery__input"
              >
                <option value="" disabled selected hidden>
                  <span>Địa điểm giao hàng</span>
                </option>
                {listDeliveryAddress
                  .filter(e => e.quan === quan)[0]
                  .phuong.map(e => {
                    return <option value={e.ten}>{e.ten}</option>;
                  })}
              </select>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}
