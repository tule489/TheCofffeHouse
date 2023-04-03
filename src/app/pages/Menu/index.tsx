import React from 'react';
import './index.css';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import MenuCollection from './components/MenuCollection';
import ProductCollection from './components/ProductCollection';
import Products from './components/Products';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface catergory {
  id?: string;
  name?: string;
}

interface Product {
  id?: string;
  name?: string;
  categoryId?: string;
  price?: string;
  image?: string;
  description?: string;
}

export function Menu() {
  const [categoryKey, setcategoryKey] = useState();
  const [productKey, setProductKey] = useState();
  const [categories, setCategories] = useState<catergory[]>([]);
  const [product, setproduct] = useState<Product[]>([]);
  const [productId, setProductId] = useState(-1);

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get(
          'https://thecoffeehousebe-production.up.railway.app/api/v1/categories/getAll',
        );
        const res1 = await axios.get(
          'https://thecoffeehousebe-production.up.railway.app/api/v1/products/getAll',
        );
        // console.log(res.data);
        setCategories(res.data);
        setproduct(res1.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <div id="collection">
        {productId === -1 ? (
          <>
            <div className="collection-warp">
              <MenuCollection
                setCategoryKey={setcategoryKey}
                categories={categories}
              />
              <ProductCollection
                categoryKey={categoryKey}
                product={product}
                // setProductId={setProductId}
              />
            </div>
          </>
        ) : (
          <>
            <Products product={product} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
