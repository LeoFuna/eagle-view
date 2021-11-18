import React from "react";

function DropdownMenuOnDashBoard({ modelOrName }) {

  function renderOptions() {
    if (modelOrName === 'model') {
      return 'opções de modelo'
    } else {
      return 'opções de nomes filtrado pelo modelo'
    }
  }

  return (
    <select>
      <option>Motor</option>
      <option>Fan</option>
    </select>
  )
}

export default DropdownMenuOnDashBoard;
