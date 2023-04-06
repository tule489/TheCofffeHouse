import * as React from 'react';
import './index.css';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import MenuCollection from './components/MenuCollection';
import ProductCollection from './components/ProductCollection';
import Products from './components/Products';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
        setCategories(categoryData);
        setDetailedCategory(res1.data);
        setProduct(res2.data);
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
                setDetailCategoryKey={setDetailCategoryKey}
                categories={categories}
                detailedCategory={detailedCategory}
              />
              <ProductCollection
                detailcategoryKey={DetailcategoryKey}
                detailedCategory={detailedCategory}
                product={product}
                setproductKey={setProductKey}
              />
            </div>
          </>
        ) : (
          <>
            <Products
              productId={productId}
              product={product}
              ProductKey={productKey}
            />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
