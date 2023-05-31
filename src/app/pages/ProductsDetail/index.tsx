import React from 'react';
import './index.css';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductDetail1 from './components/ProductDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from 'app/components/Loading';

interface Product {
  id?: string;
  name?: string;
  detailedCategoryId?: string;
  price?: string;
  image?: string;
  description?: string;
}
export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getdata = async () => {
      try {
        const res2 = await axios.get(
          `https://thecoffeehousebe-production.up.railway.app/api/v1/products/getById/${id}`,
        );
        setProduct(res2.data.data);
        setloading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);
  return (
    <>
      <Helmet>
        <title>ProductDetail</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      {loading ? <ProductDetail1 product={product} /> : <Loading />}
      <Footer />
    </>
  );
}
