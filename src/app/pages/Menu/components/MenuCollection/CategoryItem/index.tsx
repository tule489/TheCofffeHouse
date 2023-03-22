import React from 'react';
import '.index';
function CategoryItem({}) {
  return (
    <li className="sidebar_menu_lv1-li ">
      <a className="sidebar_menu_lv1-link" href="#"></a>
      <ul className="sidebar_menu_lv2">
        <li>
          <a href="#1001" className="">
            Hi-Tea Trà
          </a>
        </li>
      </ul>
    </li>
  );
}
export default CategoryItem;
