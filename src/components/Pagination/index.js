import React, { useState, useEffect } from 'react';

import './Pagination.css';

export default function Pagination({ totalPages, paginate, currentPage }) {
  const badArray = [];
  const [activeButton, setActiveButton] = useState(currentPage);

  for (let i = 1; i <= totalPages; i++) {
    badArray.push(i);
  }
  // func for change active page
  useEffect(() => {
    setActiveButton(currentPage);
  });

  return (
    <div className="pagination-app-main-menu-wrapper">
      <nav className="pagination-app-main-menu">
        <ul>
          {badArray.length > 0
            ? badArray.map((el, idx) => {
                idx = idx + 1;
                return (
                  <li
                    onClick={() => paginate(idx)}
                    className={activeButton === idx ? 'active' : ''}
                    href={`!#`}
                    key={idx}
                  ></li>
                );
              })
            : ''}
        </ul>
      </nav>
    </div>
  );
}
