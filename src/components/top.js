import React from 'react';
import Logo from './logo';
import './top.scss';

const Top = () => (
  <div className="top">
    <div className="top__logo">
      <Logo className="logo" />
    </div>
    <div className="top__input">
      <div>Input</div>
      2003—2020
    </div>
    <div className="top__cr">
      <div>©</div>
      2020
    </div>
  </div>
);

export default Top;
