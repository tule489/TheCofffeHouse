import React from 'react';
import { useEffect, useState, useRef } from 'react';
import './index.css';
import axios from 'axios';

export default function ItemMenu(props) {
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
                      <li className="lv3_title">
                        <a className="menu-org2" title="Hi-Tea Trà">
                          {e.name}
                        </a>
                      </li>
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
