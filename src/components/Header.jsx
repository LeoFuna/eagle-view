import React, { useEffect, useState } from 'react';
import DropdownMenu from './DropdownMenu';
import '../styles/header.css';
import { getAll } from '../services/fetchApi';
import { useSelector } from 'react-redux';
import { getDashboard } from '../redux/dashboardSlice';

function Header() {
  const [companiesOptions, setCompaniesOptions] = useState([{ id:0, name: 'Todas', companyId: 0 }]);
  const { units } = useSelector(getDashboard);

  async function getDataFromApiAndSetNewOptions(endpoint) {
    const allOptions = await getAll(endpoint);
    setCompaniesOptions([...companiesOptions, ...allOptions]);
  }

  useEffect(() => {
    getDataFromApiAndSetNewOptions('companies');
  }, []);

  return (
    <header>
      <div id="logo-header">
        <h1>Eagle View</h1>
      </div>
      <div id="company-header">
        <h1>Empresa</h1>
        <DropdownMenu endpoint='companies' optionsToRender={ companiesOptions } />
      </div>
      <div id="unit-header">
        <h1>Unidade</h1>
        <DropdownMenu endpoint='units' optionsToRender={ units } />
      </div>
    </header>
  );
}

export default Header;
