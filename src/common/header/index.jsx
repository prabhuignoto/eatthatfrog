import React from 'react';
import Logo from '../logo';
import './header.css';

const Header = () => (
  <div className="product-header">
    <span className="product-title">Eat That Frog</span>
    <div className="product-logo-wrapper">
      <Logo size="l" />
    </div>
  </div>
);

export default Header;
