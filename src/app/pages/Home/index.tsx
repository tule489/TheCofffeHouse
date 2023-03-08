import * as React from 'react';
import './index.css';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Product from './components/Products';
import Healthy from './components/Healthy';
import Address from './components/Address';
import Story from './components/Story';
import Slider from './components/Slider';
export function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <Slider />
      <Product />
      <Healthy />
      <Address />
      <Story />
      <Footer />
    </>
  );
}
