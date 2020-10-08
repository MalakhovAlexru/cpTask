/**
 * Компонент для отображения иконок приложения
 *
 */

import React from 'react';

import './AppIcon.css';

export default function AppIcon({ appData }) {
  const { imgURI, appName } = appData;

  return (
    <div className="app-icon">
      {!appData.falseElement ? (
        <React.Fragment>
          <img className="app-icon__img" src={imgURI} alt={appName} />
          <div className="app-icon__title">{appName}</div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="app-icon__img" />
          <div className="app-icon__img" />
        </React.Fragment>
      )}
    </div>
  );
}
