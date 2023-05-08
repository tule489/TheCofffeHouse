import React from 'react';
import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
interface Product {
  id?: string;
  name?: string;
  detailedCategoryId?: string;
  price?: string;
  image?: string;
  description?: string;
}
export default function Tea() {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    const getdata = async () => {
      try {
        const res2 = await axios.get(
          'https://thecoffeehousebe-production.up.railway.app/api/v1/products/getAll',
        );

        setProduct(res2.data);
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
          <h3>Trà Tại Nhà</h3>
          <div className="coffee-menu">
            {filteredProducts.map(product => {
              {
                return (
                  <>
                    <div className="coffee-item">
                      <div className="menu-item">
                        <a href="../html/spcaphe.html">
                          <img src={product.image} alt="" />
                        </a>
                      </div>
                      <div className="menu_item_info">
                        <h3>
                          <a
                            href="../html/spcaphe.html"
                            title="Cà Phê Rang Xay Original 1 250gr"
                          >
                            {product.name}
                          </a>
                        </h3>
                        <h4 className="original_price">{product.price}đ</h4>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
