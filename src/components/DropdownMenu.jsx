import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSelectedCompany, updateSelectedUnit } from '../redux/dashboardSlice';
import { getAll } from '../services/fetchApi';

function DropdownMenu({ endpoint }) {
  const [options, setOptions] = useState(['Todas']);
  const dispatch = useDispatch();

  async function getDataFromApiAndSetNewOptions() {
    const allOptions = await getAll(endpoint);
    const nameFromOptions = allOptions.map((option) => option.name);
    setOptions([...options, ...nameFromOptions]);
  }
  
  useEffect(() => {
    getDataFromApiAndSetNewOptions();
  }, []);
  
  function renderOptions() {
    return options.map((option, index) => (
      <option key={ index } value={ option }>{ option }</option>
    ));
  }

  function handleChangesOnSelect({ target }) {
    if (endpoint === 'companies') {
      dispatch(updateSelectedCompany(target.value));
    }
    if (endpoint === 'units') {
      dispatch(updateSelectedUnit(target.value));
    }
  }

  return (
    <select onChange={ (event) => handleChangesOnSelect(event) }>
      { renderOptions() }
    </select>
  );
}

export default DropdownMenu;
