import React from 'react';
import './index.css';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AllStory from './components/AllStory';
export function HouseStory() {
  return (
    <>
      <Helmet>
        <title>Chuyện Cà phê và Trà</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <AllStory />
      <Footer />
    </>
  );
}
