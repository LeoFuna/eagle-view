import React, { useEffect, useState } from "react";

function DropdownMenuOnDashBoard({ assets }) {
  const [modelOption, setModelOption] = useState('');

  function renderModelOptions() {
    const notDuplicatedModels = []
    // Lógica para tirar os modelos duplicados vindos do array de assets
    const duplicatedModels = assets.map((option) => option.model);
    if (duplicatedModels.length > 0) {
      duplicatedModels.forEach(model => {
        const alreadyRegistered = notDuplicatedModels.find((modelDuplicated) => modelDuplicated === model)
        if (!alreadyRegistered) {
          notDuplicatedModels.push(model);
        }
      });
    }
    return (
      notDuplicatedModels.map((model, index) => <option key={ index } value={ model }>{ model }</option>)
    );
  }

  function renderNameOptions() {
    const filteredByModelSelected = assets.filter((item) => item.model === modelOption);
    return filteredByModelSelected.map((asset, index) => <option key={ index } value={ asset.name }>{ asset.name }</option>)
  }

  function handleChangesOnModelOption({ target }) {
    setModelOption(target.value);
  }

  // solução encontrada para setar como padrão de escolha sempre o primeiro modelo que vem do assets, vindo do Slice
  useEffect(() => {
    if (assets.length > 0) {
      setModelOption(assets[0].model);
    }
  }, [assets]);

  return (
    <>
      <select onChange={ (event) => handleChangesOnModelOption(event) }>
        { renderModelOptions() }
      </select>
      <select>
        { renderNameOptions() }
      </select>
    </>
  )
}

export default DropdownMenuOnDashBoard;
