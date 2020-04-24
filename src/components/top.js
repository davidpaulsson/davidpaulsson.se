import React from 'react';
import Logo from './logo';
import './top.scss';

const Top = ({ children }) => (
  <div className="top">
    <div className="top__logo">
      <Logo className="logo" />
    </div>
    <div className="top__input">{children}</div>
    <div className="top__cr">
      <div>©</div>
      2020
    </div>
  </div>
);

export default Top;
