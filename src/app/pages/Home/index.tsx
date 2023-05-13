import React from 'react';
// import { withErrorBoundary } from 'react-error-boundary';
import './index.css';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer';
import Product from './components/Products';
import Healthy from './components/Healthy';
import Address from './components/Address';
import Story from './components/Story';
import Slider from './components/Slider';
import Slider2 from './components/Slider2';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      {/* <Slider /> */}
      <Slider2 />
      <Product />
      <Healthy />
      <Address />
      <Story />
      <Footer />
    </>
  );
}
