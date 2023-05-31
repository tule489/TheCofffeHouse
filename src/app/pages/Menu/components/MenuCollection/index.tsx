import React from 'react';
import { useEffect, useState, useRef } from 'react';
import './index.css';
import axios from 'axios';
import CategoryItem from './CategoryItem';

export default function MenuCollection(props) {
  const [change, setChange] = useState(false);
  const [categories, setCategories] = useState(props.categories);

  useEffect(() => {
    if (sessionStorage.getItem('categoryId'))
      categories.filter(
        e => e.id == sessionStorage.getItem('categoryId'),
      )[0].isOpen = true;
  }, []);

  return (
    <>
      <div className="collection-left">
        <div className="collection-left-menu ">
          <div className="sidebar_menu">
            <ul className="sidebar_menu_lv1">
              <li className="sidebar_menu_lv1-li">
                <li className="sidebar_menu_lv1-link  ">Tất cả</li>
              </li>
              {categories.map(category => {
                return (
                  <>
                    <li className="sidebar_menu_lv1-li block">
                      <li
                        className="sidebar_menu_lv1-link"
                        onClick={() => {
                          if (category.isOpen === false) category.isOpen = true;
                          else category.isOpen = false;
                          setChange(!change);
                          props.setCategory(category.id);
                        }}
                        id={category.id}
                      >
                        {category.name}
                      </li>
                    </li>

                    {category.isOpen &&
                      props.detailedCategory.map(e => {
                        if (e.categoryId === category.id)
                          return (
                            <ul className="sidebar_menu_lv2">
                              <li
                                onClick={() => {
                                  props.setDetailCategoryKey(e.id);
                                  sessionStorage.setItem(
                                    'categoryDetailId',
                                    e.id,
                                  );
                                }}
                              >
                                {e.name}
                              </li>
                            </ul>
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
