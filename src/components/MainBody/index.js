import React from 'react';

import AppIcon from '../AppIcon';

import './MainBody.css';

// Список всех иконок пагинация

export default function MainBody({ appIconList, amountAppsOnPage }) {
  const classString = 'main-bar-app-show-area grid-container';
  const appsForMainBlock = appIconList.splice(0, amountAppsOnPage);

  return (
    <div className={classString}>
      {appsForMainBlock.length > 0
        ? appsForMainBlock.map((el, idx) => {
            // generate unic KEY
            idx = idx + 'main-bar-app-show-area grid-container' + idx + idx;
            return <AppIcon appData={el} key={idx} />;
          })
        : 'No apps for show'}
    </div>
  );
}
