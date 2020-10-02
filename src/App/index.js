import React, { useEffect, useState, useLayoutEffect } from 'react';

import TopInfoBar from '../components/TopInfoBar';
import MainBody from '../components/MainBody';
import ButtonMenuBar from '../components/ButtonMenuBar';
import Pagination from '../components/Pagination';

import { importAll } from '../../utils/wbp_img';
// import { ShowWindowDimensions } from '../utils/window';

import './App.css';

export default function App() {
  const appIconList = importAll(require.context('../../public/img/icons', false, /\.(png|jpe?g|svg)$/));
  const buttonBarApps = appIconList.splice(0, 5);
  const amountAppsOnPage = 20;
  const totalPages = Math.ceil(appIconList.length / amountAppsOnPage);

  // hooks
  // 1. (size) Узнать размер экрана - значение по которой строится дальнейшая логика
  const [size, setSize] = useState([0, 0]);

  // SIZE HOOK
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  const [width, height] = size;

  return (
    <React.Fragment>
      <div className="show-on-device">
        <div className="show-on-device__view-apps">
          <TopInfoBar />
          <MainBody appIconList={appIconList} amountAppsOnPage={amountAppsOnPage} />
          <Pagination totalPages={totalPages} />
          <ButtonMenuBar buttonBarApps={buttonBarApps} />
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
