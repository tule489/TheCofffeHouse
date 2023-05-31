import React from 'react';
import { useEffect, useState, useRef } from 'react';
import './index.css';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';

export default function ItemMenu(props) {
  const handleClick = () => {
    setTimeout(() => {
      const currentUrl = window.location.pathname;
      sessionStorage.setItem('categoryId', currentUrl.split('/')[2]);
      sessionStorage.setItem('categoryDetailId', currentUrl.split('/')[3]);
    }, 100);
  };

  return (
    <>
      {props.categories.map(category => {
        return (
          <>
            <li className="lv2_title">
              <a className="menu-org1" title="Hi-Tea Healthy">
                <li>{category.name}</li>
              </a>
              {props.detailedCategory.map(e => {
                if (e.categoryId === category.id)
                  return (
                    <ul className="menu_child_lv3">
                      <NavLink to={`/Menu/${category.id}/${e.id}`}>
                        <li className="lv3_title" onClick={handleClick}>
                          <a className="menu-org2" title="Hi-Tea Trà">
                            {e.name}
                          </a>
                        </li>
                      </NavLink>
                    </ul>
                  );
              })}
            </li>
          </>
        );
      })}
    </>
  );
}
