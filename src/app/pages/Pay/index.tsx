import React from 'react';
import './index.css';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Delivery from './components/Delivery';
import Order from './components/Order';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function Pay() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <div className="main">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3 style={{ fontSize: 24, padding: '40px 0' }}>
            Xác nhận đơn hàng{' '}
          </h3>
        </div>
        <div style={{ width: '70%', margin: 'auto', display: 'flex' }}>
          <Delivery />
          <Order />
        </div>
      </div>
      <Footer />
    </>
  );
}
