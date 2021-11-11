import React, { useEffect, useState } from 'react';
import { getAll } from '../services/fetchApi';

function DropdownMenu({ endpoint }) {
  const [options, setOptions] = useState(['Todas']);

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

  return (
    <select onChange={ (event) => console.log(event.target.value) }>
      { renderOptions() }
    </select>
  );
}

export default DropdownMenu;
