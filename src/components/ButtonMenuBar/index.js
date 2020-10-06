import React from 'react';

import AppIcon from '../AppIcon';

import './ButtonMenuBar.css';

export default function ButtonMenuBar({ buttonBarApps }) {
  return (
    <React.Fragment>
      <div className="grid-container buttom-menu-foreground-blur">
        {buttonBarApps.length > 0
          ? buttonBarApps.map((el, idx) => {
              return <AppIcon appData={el} key={idx} />;
            })
          : 'No apps for show'}
      </div>
      <div className="buttom-menu-background-blur"></div>
    </React.Fragment>
  );
}
