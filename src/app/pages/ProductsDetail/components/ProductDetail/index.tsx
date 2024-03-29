import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// import axios from './axios';
export default function ProductDetail(prop) {
  const [open, setOpen] = useState(false);
  // const productFitered = prop.product.filter(e => e.id === prop.productId);
  // const categoryFitered = prop.product.filter(
  //   e => e.detailedCategoryId === prop.productId,
  // );
  // console.log(categoryFitered);

  const onOrder = (productId: any): void => {
    if (sessionStorage.getItem('productId')) {
      sessionStorage.setItem(
        'productId',
        sessionStorage.getItem('productId') + `,${productId}`,
      );
    } else {
      sessionStorage.setItem('productId', productId);
    }
  };

  return (
    <>
      <>
        <div id="breadcrumb">
          <div className="container">
            <ul className="breadcrumb-arrow">
              <li>
                <Link to="/Menu">Menu</Link>
                <span>/</span>
              </li>
              <li>
                <a href="../html/caphe.html">
                  {/* {categoryFitered.map(detailCategory => {
                        return (
                          <>
                            <h3>{detailCategory.name}</h3>
                          </>
                        );
                      })} */}
                </a>
              </li>
              <li className="active">
                <a href="#"> {prop.product.name}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="body-content">
          <div className="body-content-left">
            <div className="slider-content">
              <div className="silder-content-top-list">
                <div className="silder-content-top">
                  <a href="#">
                    <img src={prop.product.image} alt="" />
                  </a>
                  <a href="#">
                    <img src={prop.product.image} alt="" />
                  </a>
                  <a href="#">
                    <img src={prop.product.image} alt="" />
                  </a>
                  <a href="#">
                    <img src={prop.product.image} alt="" />
                  </a>
                </div>
                <div className="silder-content-top-btn">
                  <button>
                    <img
                      className="slider-icon-left"
                      src="../image/spcaffe-img/icon-left.png"
                      alt=""
                    />
                  </button>
                  <button>
                    <img
                      className="silder-icon-right"
                      src="../image/spcaffe-img/icon-right.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="silder-content-bottom">
                <li className="action">
                  <img src={prop.product.image} alt="" />
                </li>
              </div>
            </div>
          </div>
          <div className="body-content-right">
            <div className="body-content-right-top">
              <h1 style={{ fontSize: 28 }}>{prop.product.name}</h1>
              <div className="product_price">
                <span className="price">{prop.product.price}đ</span>
              </div>
            </div>
            <div className="body-content-right-bottom">
              <ul className="order_methods">
                <li style={{ width: '80%' }}>
                  <a
                    href="/pay"
                    onClick={() => {
                      onOrder(prop.product.id);
                    }}
                  >
                    <span>Mua ngay</span>
                  </a>
                </li>
                <li
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '15%',
                  }}
                  onClick={() => {
                    onOrder(prop.product.id);
                    setOpen(true);
                    setTimeout(() => {
                      window.location.reload();
                    }, 700);
                  }}
                >
                  <i className="fa-solid fa-cart-plus fa-xl"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-all">
          <div className="product-info-story">
            <div className="product-info">
              <h4>Mô tả sản phẩm</h4>
              <p>- {prop.product.description}</p>
            </div>
          </div>
        </div>
      </>
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
            severity="success"
            sx={{ width: '100%' }}
            style={{ fontSize: '16px' }}
          >
            Đã thêm sản phẩm vào giỏ hàng!
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
}
