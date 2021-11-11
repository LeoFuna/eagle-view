import React from 'react';
import DropdownMenu from './DropdownMenu';
import '../styles/header.css';

function Header() {
  return (
    <header>
      <div id="logo-header">
        <h1>Eagle View</h1>
      </div>
      <div id="company-header">
        <h1>Empresa</h1>
        <DropdownMenu endpoint='companies' />
      </div>
      <div id="unit-header">
        <h1>Unidade</h1>
        <DropdownMenu endpoint='units' />
      </div>
    </header>
  );
}

export default Header;
