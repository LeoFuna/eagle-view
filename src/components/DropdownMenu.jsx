import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSelectedCompany, updateSelectedUnit, updateUnits } from '../redux/dashboardSlice';
import { getAll } from '../services/fetchApi';

function DropdownMenu({ endpoint, optionsToRender }) {
  const dispatch = useDispatch();
  
  async function initialStateForUnits() {
    if (endpoint === 'units') {
      const allUnits = await getAll(endpoint);
      dispatch(updateUnits([{ id:0, name: 'Todas', companyId: 0 }, ...allUnits]));
    }
  }

  useEffect(() => {
    initialStateForUnits()
  }, []);
  
  async function handleChangesOnSelect({ target }) {
    if (endpoint === 'companies') {
      const allUnits = await getAll('units');
      if (target.value === 'Todas') {
        dispatch(updateUnits([{ id:0, name: 'Todas', companyId: 0 }, ...allUnits]));
      } else {
        const companyData = optionsToRender.find(option => option.name === target.value);
        const filteredUnits = allUnits.filter(unit => unit.companyId === companyData.id);
        dispatch(updateUnits([{ id:0, name: 'Todas', companyId: 0 }, ...filteredUnits]));
      }
      dispatch(updateSelectedCompany(target.value));
    }
    if (endpoint === 'units') {
      dispatch(updateSelectedUnit(target.value));
    }
  }

  function renderOptions() {
    return optionsToRender.map((option, index) => (
      <option key={ index } value={ option.name }>{ option.name }</option>
    ));
  }

  return (
    <select onChange={ (event) => handleChangesOnSelect(event) }>
      { renderOptions() }
    </select>
  );
}

export default DropdownMenu;
