import React from 'react';
import './index.css';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Product from './components/Products';
export function Tea() {
  return (
    <>
      <Helmet>
        <title>Trà</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <Product />
      <Footer />
    </>
  );
}
