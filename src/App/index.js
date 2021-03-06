import React, { useEffect, useState, useLayoutEffect } from 'react';

import TopInfoBar from '../components/TopInfoBar';
import MainBody from '../components/MainBody';
import ButtonMenuBar from '../components/ButtonMenuBar';
import Pagination from '../components/Pagination';

import { importAll } from '../../utils/wbp_img';
// import { ShowWindowDimensions } from '../utils/window';

import './App.scss';

export default function App() {
  const appIconList = importAll(require.context('../../public/img/icons', false, /\.(png|jpe?g|svg)$/));
  // TODO: пробегать по массиву и задавать значение true для пунктов из меню, остальные пункты отображаются при условии что isButtom = false

  // hooks
  // 1. (size) Узнать размер экрана - значение по которой строится дальнейшая логика
  const [size, setSize] = useState([0, 0]);
  const [currentPage, setCurrentPage] = useState(1); // Pagination nav
  const [maxAmountIconsPerPage, setMaxAmountIconsPerPage] = useState(20); // max icons per page
  const [maxAmountIconsOnButtonBar, setMaxAmountIconsOnButtonBar] = useState(5); // Buttom menu

  const totalPages = Math.ceil(appIconList.length / maxAmountIconsPerPage);

  // заглушка для тестов
  for (let i = 0; i < maxAmountIconsOnButtonBar; i++) {
    appIconList[i].inButtomMenu = true;
  }

  const buttomMenuBarIcons = [];
  const nonButtomBarIcons = [];

  appIconList.map((el) => {
    if (el.inButtomMenu) {
      buttomMenuBarIcons.push(el);
      // 4 test easy purpose, in future - planing to analize the array of icons
    } else {
      nonButtomBarIcons.push(el);
    }
  });

  // Paginate func
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastIcon = currentPage * maxAmountIconsPerPage;
  const indexOfFirstIcon = indexOfLastIcon - maxAmountIconsPerPage;
  const mainBarIcons = nonButtomBarIcons.slice(indexOfFirstIcon, indexOfLastIcon);

  // SIZE HOOK
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <React.Fragment>
      <div className="show-on-device">
        <div className="show-on-device__view-apps">
          <TopInfoBar />
          <MainBody appIconList={mainBarIcons} amountAppsOnPage={maxAmountIconsPerPage} />
          <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
          <ButtonMenuBar buttonBarApps={buttomMenuBarIcons} />
        </div>
        <div className="show-on-device__choose-device">
          <img src="../public/img/ipad-mini-horizontal.png" />
        </div>
      </div>
      <div className="view-control-panel grid-container">
        <img src="../public/img/ipad-mini-horizontal.png" />
        <img src="../public/img/ipad-mini-horizontal.png" className="rotated" />
        <img src="../public/img/iphone5-horizontal.png" />
        <img src="../public/img/iphone5-horizontal.png" className="rotated" />
      </div>
    </React.Fragment>
  );
}
