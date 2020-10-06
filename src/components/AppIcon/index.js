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
        <div>
          <img className="app-icon__img" src={imgURI} alt={appName} />
          <div className="app-icon__title">{appName}</div>
        </div>
      ) : (
        <div>
          <div className="app-icon__img--stubsImageBCG" />
          <div className="app-icon__img--stubsTitleBCG" />
        </div>
      )}
      {/* <div className="app-icon__title">{appName}</div> */}
    </div>
  );
}
