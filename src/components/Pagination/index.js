import React from 'react';

import './Pagination.css';
import NavBarPageSelect from '../NavBarPageSelect';

export default function Pagination({ totalPages }) {
  const badArray = [];

  for (let i = 1; i <= totalPages; i++) {
    badArray[i] = i;
  }

  return (
    <div className="pagination-app-main-menu-wrapper">
      <nav className="pagination-app-main-menu">
        {badArray.length > 0
          ? badArray.map((el, idx) => {
              // Generate unic key
              idx = idx + 'pagination-app-main-menu' + idx;
              return <NavBarPageSelect pageSelect={el} key={idx} />;
            })
          : ''}
      </nav>
    </div>
  );
}
