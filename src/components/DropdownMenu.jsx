import React, { useEffect, useState } from 'react';
import { getAll } from '../services/fetchApi';

function DropdownMenu({ endpoint }) {
  const [options, setOptions] = useState(['Todas']);

  async function getDataFromApi() {
    const allOptions = await getAll(endpoint);
    console.log(allOptions)
    setOptions([...options, ...allOptions]);
  }
  
  useEffect(async () => {
    await getDataFromApi();
  }, []);
  
  function renderOptions() {
    return options.map((option, index) => (
      <option key={ index } value="">{ option }</option>
    ));
  }

  return (
    <select>
      { renderOptions() }
    </select>
  );
}

export default DropdownMenu;
