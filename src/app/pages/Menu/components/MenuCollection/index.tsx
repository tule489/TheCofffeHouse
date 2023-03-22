import React from 'react';
import { useEffect, useState, useRef } from 'react';
import './index.css';
import axios from 'axios';
import CategoryItem from './CategoryItem';

export default function MenuCollection(props) {
  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://thecoffeehousebe-production.up.railway.app/api/v1/categories',
  //     )
  //     .then(res => {
  //       setcategory(res.data.data);
  //       console.log(res.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <>
      <div className="collection-left">
        <div className="collection-left-menu ">
          <div className="sidebar_menu">
            <ul className="sidebar_menu_lv1">
              <li className="sidebar_menu_lv1-li">
                <a className="sidebar_menu_lv1-link active ">Tất cả</a>
              </li>
              {props.categories.map(category => {
                return (
                  <li
                    style={{ padding: 5, marginLeft: 30, cursor: 'pointer' }}
                    onClick={() => props.setCategoryKey(category.id)}
                  >
                    {category.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}