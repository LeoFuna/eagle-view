import React from 'react';
import DropdownMenu from './DropdownMenu';
import '../styles/header.css';

function Header() {
  return (
    <header>
      <div>
        <h1>Eagle View</h1>
      </div>
      <div>
        <h1>Empresa</h1>
        <DropdownMenu endpoint='companies' />
      </div>
      <div>
        <h1>Unidade</h1>
        <DropdownMenu endpoint='units' />
      </div>
    </header>
  );
}

export default Header;
