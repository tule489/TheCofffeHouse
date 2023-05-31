import * as React from 'react';
import './index.css';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import MenuCollection from './components/MenuCollection';
import ProductCollection from './components/ProductCollection';
import Products from '../../pages/Products';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from 'app/components/Loading';
import { NavLink, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

interface category {
  name?: string;
  id?: string;
  isOpen?: boolean;
}

interface Product {
  id?: string;
  name?: string;
  detailedCategoryId?: string;
  price?: string;
  image?: string;
  description?: string;
}

interface DetailedCategory {
  id?: string;
  categoryId?: string;
  name?: string;
}

export function Menu() {
  const [DetailcategoryKey, setDetailCategoryKey] = useState();
  const [productKey, setProductKey] = useState();
  const [categories, setCategories] = useState<category[]>([]);
  const [detailedCategory, setDetailedCategory] = useState<DetailedCategory[]>(
    [],
  );
  const [product, setProduct] = useState<Product[]>([]);
  const [productId, setProductId] = useState(-1);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get(
          'https://thecoffeehousebe-production.up.railway.app/api/v1/categories/getAll',
        );
        const res1 = await axios.get(
          'https://thecoffeehousebe-production.up.railway.app/api/v1/detailedCategories/getAll',
        );
        const res2 = await axios.get(
          'https://thecoffeehousebe-production.up.railway.app/api/v1/products/getAll',
        );

        const categoryData: category[] = res.data;
        categoryData.map(e => {
          e.isOpen = false;
        });
        //setsinglecategories(res3.data);
        setCategories(categoryData);
        setDetailedCategory(res1.data);
        setProduct(res2.data);
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
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <div id="collection">
        <div>
          {loading ? (
            <div className="collection-warp">
              <MenuCollection
                setDetailCategoryKey={setDetailCategoryKey}
                categories={categories}
                detailedCategory={detailedCategory}
                detailcategoryKey={DetailcategoryKey}
              />
              <ProductCollection
                setDetailCategoryKey={setDetailCategoryKey}
                detailcategoryKey={DetailcategoryKey}
                detailedCategory={detailedCategory}
                product={product}
                setProductId={setProductId}
              />
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
