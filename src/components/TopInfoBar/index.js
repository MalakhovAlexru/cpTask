import React, { useState } from 'react';

import './TopInfoBar.css';

// clock

function Clock() {
  const options = { hour: '2-digit', minute: '2-digit' };
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('ru-RU', options));

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString('ru-RU', options));
  }, 1000);
  return <div className="system-info-show-area__time-info-area">{currentTime}</div>;
}

// batteryStatus

function BatteryStatus() {
  return <i className="fa system-info-show-area__battery-info-area">&#xf241;</i>;
}

// cell-operator info

function СallOperatorInfo() {
  return <i className="material-icons system-info-show-area__call-operator-info-area">&#xe63e;</i>;
}

export default function TopMenu() {
  return (
    <div className="system-info-show-area">
      <СallOperatorInfo />
      <Clock />
      <BatteryStatus />
    </div>
  );
}
