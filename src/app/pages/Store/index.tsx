import React from 'react';
import './index.css';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Adress from './components/Adress';
import img4 from './assets/4.png';
import CollectionAdress from './components/CollectionAdress';
export function Store() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <div className="page-banner">
        <img src={img4} alt="" />
        <h2 className="banner_text">
          Hệ thống 154 cửa hàng The Coffee House toàn quốc
        </h2>
      </div>
      <div className="page-content">
        <Adress />
        <CollectionAdress />
      </div>

      <Footer />
    </>
  );
}
