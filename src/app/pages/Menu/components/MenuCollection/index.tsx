import React from 'react';
import { useEffect, useState, useRef } from 'react';
import './index.css';
import axios from 'axios';
import CategoryItem from './CategoryItem';

export default function MenuCollection(props) {
  const [change, setChange] = useState(false);

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
                  <>
                    <li
                      style={{ padding: 5, marginLeft: 30, cursor: 'pointer' }}
                      onClick={() => {
                        if (category.isOpen === false) category.isOpen = true;
                        else category.isOpen = false;
                        setChange(!change);
                        props.setCategory(category.id);
                      }}
                    >
                      {category.name}
                    </li>
                    {category.isOpen &&
                      props.detailedCategory.map(e => {
                        if (e.categoryId === category.id)
                          return (
                            <li
                              style={{
                                padding: 5,
                                marginLeft: 40,
                                cursor: 'pointer',
                              }}
                              onClick={() => props.setDetailCategoryKey(e.id)}
                            >
                              {e.name}
                            </li>
                          );
                      })}
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
