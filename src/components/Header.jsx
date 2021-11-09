import React from 'react';
import { getAllAssets } from '../services/fetchApi';

function Header() {
  getAllAssets()
  return (
    <header>
      <div>
        <h1>Eagle View</h1>
      </div>
      <div>
        <h1>Empresa</h1>
        <select name="" id="">
          <option value="">opcao 1</option>
          <option value="">opcao 2</option>
        </select>
      </div>
      <div>
        <h1>Unidade</h1>
        <select name="" id="">
          <option value="">Todas</option>
          <option value="">opcao 2</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
