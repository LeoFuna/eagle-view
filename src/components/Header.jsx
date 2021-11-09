import React from 'react';
import DropdownMenu from './DropdownMenu';

function Header() {
  return (
    <header>
      <div>
        <h1>Eagle View</h1>
      </div>
      <div>
        <h1>Empresa</h1>
        <DropdownMenu endpoint='companies' />
        {/* <select name="" id="">
          <option value="">opcao 1</option>
          <option value="">opcao 2</option>
        </select> */}
      </div>
      <div>
        <h1>Unidade</h1>
        <DropdownMenu endpoint='units' />
        {/* <select name="" id="">
          <option value="">Todas</option>
          <option value="">opcao 2</option>
        </select> */}
      </div>
    </header>
  );
}

export default Header;
