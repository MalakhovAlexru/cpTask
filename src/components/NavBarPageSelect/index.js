import React from 'react';

import './NavBarPageSelect.css';

export default function NavBarPageSelect({ pageSelect }) {
  return <a href={`#${pageSelect}`}></a>;
}
