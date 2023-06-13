import React from 'react';
import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from 'app/components/Loading';
import { NavLink, Link } from 'react-router-dom';

interface Product {
  id?: string;
  name?: string;
  detailedCategoryId?: string;
  price?: string;
  image?: string;
  description?: string;
}
export default function Coffee() {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setloading] = useState(false);
  const [productId, setProductId] = useState();

  useEffect(() => {
    const getdata = async () => {
      try {
        const res2 = await axios.get(
          'https://thecoffeehousebe-production.up.railway.app/api/v1/products/getAll',
        );
        setProduct(res2.data);
        setloading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);
  const filteredProducts = product.filter(
    product => product.detailedCategoryId == '5',
  );
  console.log(filteredProducts);
  return (
    <>
      <div id="coffee">
        <div className="coffee-container">
          <h3>Cà Phê Tại Nhà</h3>
          <div className="coffee-menu">
            {loading ? (
              filteredProducts.map(product => {
                return (
                  <>
                    <div className="coffee-item" key={product.id}>
                      <NavLink to={`/Product/${product.id}`}>
                        <div className="menu-item">
                          <a>
                            <img src={product.image} alt="" />
                          </a>
                        </div>
                        <div className="menu_item_info">
                          <h3>
                            <a title="">{product.name}</a>
                          </h3>
                          <h4 className="original_price">{product.price}đ</h4>
                        </div>
                      </NavLink>
                    </div>
                  </>
                );
              })
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
