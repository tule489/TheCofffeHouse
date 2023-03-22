import React from 'react';
import '../ProductCollection/index';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import img9 from './assets/9.png';
import img10 from './assets/10.png';
import img11 from './assets/11.png';
import img12 from './assets/12.png';
import img13 from './assets/13.png';
// import axios from './axios';
export default function ProductCollection(props) {
  const productFitered = props.product.filter(
    e => e.categoryId === props.categoryKey,
  );
  // console.log(props.product);
  return (
    <>
      <div className="collection-right">
        {/* <div className="collection-right-img-top">
          <a href="#/">
            <img src={} alt="" />
          </a>
        </div> */}
        <div className="coffee-container">
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
                      <a title="Hi-Tea Dâu Tây Mận Muối Aloe Vera">
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
