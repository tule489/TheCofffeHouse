import React, { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
import { API_END_POINT } from 'environment';
import tickXanh from './assets/tich-xanh.png';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Coffee(props: any) {
  const [productsSelected, setProductsSelected] = useState([]);
  const [open, setOpen] = useState(false);
  var orderId;

  const onDeleteItem = (key: any) => {
    let list = sessionStorage.getItem('productId')?.split(',');
    list?.splice(key, 1);
    if (list) sessionStorage.setItem('productId', list?.toString());
    window.location.reload();
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/api/v1/products/getAll`);
      const listSelected: any = sessionStorage.getItem('productId')?.split(',');
      if (
        Number(sessionStorage.getItem('productId')?.split(',').length) >
        productsSelected.length
      ) {
        const temp: any = [];
        listSelected.map(productId => {
          res.data.map((product: any) => {
            if (product.id == productId) {
              temp.push(product);
            }
          });
        });
        setProductsSelected(temp);
      }
    } catch (er) {
      console.log(er);
    }
  };

  const onOrder = async () => {
    if (
      props.customerName !== '' &&
      props.phoneNumber !== '' &&
      props.deliveryAddress !== '' &&
      sessionStorage.getItem('productId')
    ) {
      const date = new Date();

      await axios
        .post(`${API_END_POINT}/api/v1/orders/addOrder`, {
          customerName: props.customerName,
          deliveryAddress: props.deliveryAddress,
          phoneNumber: props.phoneNumber,
          day: date.getDate(),
          month: date.getMonth() + 1,
          year: date.getFullYear(),
          time: date.toLocaleTimeString('vi-VN'),
          totalMoney:
            productsSelected.reduce(
              (total: number, product: any) =>
                total + Number(product.price) * 1000,
              0,
            ) + Number(props.deliveryPrice),
          status: 'Đang chuẩn bị',
        })
        .then(result => {
          orderId = Number(result.data.data.id);
          props.setIsSuccess(true);
          sessionStorage.removeItem('productId');
        });

      await axios
        .post(
          `${API_END_POINT}/api/v1/orders/addOrderDetails/${orderId}`,
          sessionStorage.getItem('productId')?.split(','),
        )
        .then(() => {
          sessionStorage.removeItem('productId');
        });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [props.isSuccess]);

  return (
    <>
      {props.isSuccess && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '1000px',
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 999,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#FFF',
              padding: '25px 25px',
              zIndex: 1000,
              borderRadius: 10,
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <img src={tickXanh} alt="" width={100} />
              <h1>Đặt hàng thành công</h1>
              Đặt hàng thành công vui lòng chờ nhân viên xác nhận đơn hàng
            </div>
            <div style={{ textAlign: 'center' }}>
              <button
                style={{
                  color: '#FFF',
                  backgroundColor: '#00FF33',
                  border: 0,
                  borderRadius: 10,
                  fontWeight: 600,
                  fontSize: 20,
                  padding: '5px 25px',
                  marginTop: 30,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  props.setIsSuccess(false);
                  sessionStorage.removeItem('productId');
                  window.location.reload();
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="order">
        <div className="order-header">
          <div>
            <p style={{ padding: '8px 0', fontSize: 18 }}>Các món đã chọn </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #000',
              borderRadius: '20px',
              padding: '8px',
              cursor: 'pointer',
            }}
            onClick={() => {
              sessionStorage.removeItem('productId');
              window.location.reload();
            }}
          >
            Xóa giỏ hàng
          </div>
        </div>
        <div className="order-wrap">
          {productsSelected.map((product: any, key) => {
            return (
              <div className="order-container" key={product.id}>
                <span>{key + 1}</span>
                <div style={{ width: '20%' }}>
                  <img src={product.image} alt="" style={{ width: '100%' }} />
                </div>
                <div style={{ width: '45%' }}>
                  <p>{product.name}</p>
                  <p>Lớn</p>
                  <p
                    style={{ cursor: 'pointer' }}
                    onClick={() => onDeleteItem(key)}
                  >
                    Xóa
                  </p>
                </div>
                <div style={{ marginRight: '7%' }}>
                  <p>
                    {(Number(product.price) * 1000).toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="order-total">
          <h4 className="padding02010">Tổng cộng</h4>
          <div className="thanhtien padding01020">
            <p>Thành tiền</p>
            <p>
              {productsSelected.length > 0
                ? productsSelected
                    .reduce(
                      (total: number, product: any) =>
                        total + Number(product.price) * 1000,
                      0,
                    )
                    .toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    })
                : ''}
            </p>
          </div>
          <div
            className="phigiaohang padding01020"
            style={{ marginBottom: '10px' }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <p>Phí giao hàng</p>
              <p>
                {parseInt(props.deliveryPrice).toLocaleString('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="thanhtoan">
          <div style={{ paddingLeft: '18px' }}>
            <p>Thành tiền</p>
            <p>
              {productsSelected != null
                ? (
                    productsSelected.reduce(
                      (total: number, product: any) =>
                        total + Number(product.price) * 1000,
                      0,
                    ) + Number(props.deliveryPrice)
                  ).toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  })
                : ''}
            </p>
          </div>
          <p
            style={{
              marginRight: '18px',
              padding: '8px',
              borderRadius: '20px',
              border: '1px solid transparent',
              backgroundColor: 'white',
              color: '#fa8c16',
              cursor: 'pointer',
            }}
            onClick={onOrder}
          >
            Đặt hàng
          </p>
        </div>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            autoHideDuration={6000}
            onClose={() => {
              setOpen(false);
            }}
          >
            <Alert
              onClose={() => {
                setOpen(false);
              }}
              severity="error"
              sx={{ width: '100%' }}
              style={{ fontSize: '16px' }}
            >
              Hãy nhập đủ thông tin cần thiết!
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    </>
  );
}
