import React, { useEffect, useState } from 'react';
import './index.css';
import img9 from './assets/9.png';
import img10 from './assets/10.png';
import img11 from './assets/11.png';
import img12 from './assets/12.png';
import img13 from './assets/13.png';
import img14 from './assets/14.png';
import axios from 'axios';
import { API_END_POINT } from 'environment';

export default function Product() {
  const [hotProducts, setHotProduct] = useState<any>([]);

  const topProduct = () => {
    const topProduct: any = [];
    if (hotProducts != '') {
      for (let i = 0; i <= 1; i++) {
        topProduct.push(
          <div className="product-item2 pdlr16">
            <a href="#">
              <img src={hotProducts[i].image} alt="" />
              {hotProducts[i].name}
            </a>
            {hotProducts[i].price}
          </div>,
        );
      }
    }
    return topProduct;
  };

  const bottomProduct = () => {
    const bottomProduct: any = [];
    if (hotProducts != '') {
      for (let i = 2; i < hotProducts.length; i++) {
        bottomProduct.push(
          <div className="product-item4 pdlr16">
            <a href="#">
              <img src={hotProducts[i].image} alt="" />
              {hotProducts[i].name}
            </a>
            {hotProducts[i].price}
          </div>,
        );
      }
    }
    return bottomProduct;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${API_END_POINT}/api/v1/products/getHotProduct`)
          .then(res => {
            setHotProduct(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div id="products">
        <div className="product-menu">
          <div className="product-item-top">
            <div className="product-item1 pdright16">
              <a href="#">
                <img src={img9} alt="" />
              </a>
            </div>
            {hotProducts != null ? topProduct() : ''}
          </div>
          <div className="product-item-bottom">
            {hotProducts != null ? bottomProduct() : ''}
          </div>
        </div>
      </div>
    </>
  );
}
