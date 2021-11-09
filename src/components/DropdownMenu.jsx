import React, { useEffect, useState } from 'react';
import { getAll } from '../services/fetchApi';

function DropdownMenu(endpoint) {
  const [options, setOptions] = useState(['Todas']);

  useEffect(() => {
    const getData = async () => {
      const allOptions = await getAll(endpoint);
      await setOptions([...options, ...allOptions]);
    };
    getData();
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
