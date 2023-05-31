/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { Coffee } from './pages/Cafe/Loadable';
import { Tea } from './pages/Tea/Loadable';
import { Pay } from './pages/Pay/Loadable';
import { Menu } from './pages/Menu/Loadable';
import { HouseStory } from './pages/HouseStory/Loadable';
import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Recruits } from './pages/Recruitment';
import { Home } from './pages/Home/Loadable';
import { Store } from './pages/Store/Loadable';
import { ProductDetail } from './pages/ProductsDetail/Loadable';

// import { useTranslation } from 'react-i18next';

export function App() {
  // const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - The Coffee House"
        defaultTitle="React Boilerplate"
        // htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Coffee" element={<Coffee />} />
        <Route path="/Tea" element={<Tea />} />
        <Route path="/Pay" element={<Pay />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/HouseStory" element={<HouseStory />} />
        <Route path="/Recruits" element={<Recruits />} />
        <Route path="/Product/:id" element={<ProductDetail />} />
        <Route path="/Menu/:categoryId/:categoryDetailId" element={<Menu />} />

        {/* <Route path="/" element={<HomePage />} />
        <Route path="/" element={<NotFoundPage />} /> */}
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
