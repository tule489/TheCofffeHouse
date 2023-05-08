import React from 'react';
import '../ProductCollection/index.css';

// import axios from './axios';
export default function ProductCollection(props) {
  const productFitered = props.product.filter(
    // e => e.id === props.DetailcategoryKey,
    e => e.detailedCategoryId === props.detailcategoryKey,
  );
  const DetailcategoryFitered = props.detailedCategory.filter(
    e => e.id === props.detailcategoryKey,
    // e => e.detailedCategoryId === props.detailcategoryKey,
  );
  // console.log(DetailcategoryFitered);

  return (
    <>
      <div className="collection-right">
        {/* <div className="collection-right-img-top">
          <a href="#/">
            <img src={} alt="" />
          </a>
        </div> */}
        <div className="coffee-container">
          {DetailcategoryFitered.map(detailCategory => {
            return (
              <>
                <h3>{detailCategory.name}</h3>
              </>
            );
          })}
          {/* <h3>{props.product.name}</h3> */}
          <div className="coffee-menu">
            {productFitered.map(product => {
              return (
                <div
                  className="coffee-item"
                  onClick={() => props.setProductId(product.id)}
                >
                  <div className="menu-item">
                    <a>
                      <img src={product.image} alt="" />
                    </a>
                  </div>
                  <div className="menu_item_info">
                    <h3>
                      <a title="">
                        {/* {product.id} */}
                        {product.name}
                      </a>
                    </h3>
                    <h4 className="">{product.price}đ</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
