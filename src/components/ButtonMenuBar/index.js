import React from 'react';

import AppIcon from '../AppIcon';

import './ButtonMenuBar.css';

export default function ButtonMenuBar({ buttonBarApps }) {
  return (
    <div className="grid-container button-bar-app-show-area">
      {buttonBarApps.length > 0
        ? buttonBarApps.map((el, idx) => {
            return <AppIcon appData={el} key={idx} />;
          })
        : 'No apps for show'}
    </div>
  );
}
