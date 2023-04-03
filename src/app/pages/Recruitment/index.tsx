import React from 'react';
import './index.css';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Recruit from './components/Recruit';
export function Recruits() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <Recruit />
      <Footer />
    </>
  );
}
