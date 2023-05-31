import React, { useEffect, useState } from 'react';
import '../ProductCollection/index.css';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function ProductCollection(props) {
  const [productFitered, setProductFitered] = useState<any>([]);
  const [DetailcategoryFitered, setDetailcategoryFitered] = useState<any>([]);
  // const productFitered = props.product.filter(
  //   e => e.detailedCategoryId == sessionStorage.getItem('categoryDetailId'),
  // );
  // const DetailcategoryFitered = props.detailedCategory.filter(
  //   e => e.id == sessionStorage.getItem('categoryDetailId'),
  // );

  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
  }

  useEffect(() => {
    const filteredProducts = props.product.filter(
      e => e.detailedCategoryId == sessionStorage.getItem('categoryDetailId'),
    );
    const filteredDetailCategories = props.detailedCategory.filter(
      e => e.id == sessionStorage.getItem('categoryDetailId'),
    );

    if (!arraysEqual(filteredProducts, productFitered)) {
      setProductFitered(filteredProducts);
    }

    if (!arraysEqual(filteredDetailCategories, DetailcategoryFitered)) {
      setDetailcategoryFitered(filteredDetailCategories);
    }
  }, [
    props.product,
    props.detailedCategory,
    productFitered,
    DetailcategoryFitered,
  ]);

  return (
    <div className="collection-right">
      <div className="coffee-container">
        {DetailcategoryFitered.map(detailCategory => {
          return (
            <>
              <h3>{detailCategory.name}</h3>
            </>
          );
        })}
        <div className="coffee-menu">
          {productFitered.map(product => {
            return (
              <div
                className="coffee-item"
                onClick={() => props.setProductId(product.id)}
              >
                <Link to={`/Product/${product.id}`}>
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
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
