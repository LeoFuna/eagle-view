import React from "react";

function DropdownMenuOnDashBoard({ modelOrName, dataToRender }) {

  function renderOptions() {
    if (modelOrName === 'model') {
      const notDuplicatedModels = []
      const duplicatedModels = dataToRender.map((option) => option.model);
      duplicatedModels.forEach(model => {
        const alreadyRegistered = notDuplicatedModels.find((modelDuplicated) => modelDuplicated === model)
        if (!alreadyRegistered) {
          notDuplicatedModels.push(model);
        }
      });
      return notDuplicatedModels.map((option, index) => <option key={ index } value={ option }>{ option }</option>)
    } else {
      return 'opções de nomes filtrado pelo modelo'
    }
  }

  return (
    <select>
      { renderOptions() }
    </select>
  )
}

export default DropdownMenuOnDashBoard;
