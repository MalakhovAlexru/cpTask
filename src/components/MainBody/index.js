import React from 'react';

import AppIcon from '../AppIcon';

import './MainBody.css';

// Список всех иконок пагинация

export default function MainBody({ appIconList, amountAppsOnPage, customClass }) {
  const classString = customClass;
  const appsForMainBlock = appIconList.slice(0, amountAppsOnPage);

  // Если элементов меньше, чем свободных мест - используем заглушки
  if (appsForMainBlock.length < amountAppsOnPage) {
    const lastIconPostion = appsForMainBlock.slice(-1)[0].position;
    const diffBTNArrays = amountAppsOnPage - appsForMainBlock.length;

    for (let i = 1; i <= diffBTNArrays; i++) {
      appsForMainBlock.push({
        appName: '',
        imgURI: '',
        position: lastIconPostion + i,
        inButtomMenu: false,
        falseElement: true,
      });
    }
  }

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
