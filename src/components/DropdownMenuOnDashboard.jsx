import React, { useEffect, useState } from "react";

function DropdownMenuOnDashBoard({ assets }) {
  const [modelOption, setModelOption] = useState('');
  const [nameAssetOption, setNameAssetOption] = useState('');

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
    return filteredByModelSelected.map((asset) => <option key={ asset.id } value={ asset.name }>{ asset.name }</option>)
  }

  function handleChangesOnModelOption({ target }) {
    setModelOption(target.value);
    // adicionado para poder resetar o padrão dos nome dos ativos quando o modelo for alterado
    const filteredByModelSelected = assets.filter((item) => item.model === target.value);
    setNameAssetOption(filteredByModelSelected[0].name);
  }

  function handleChangesOnNameOption({ target }) {
    setNameAssetOption(target.value);
  }

  // solução encontrada para setar como padrão de escolha sempre o primeiro modelo que vem do assets, vindo do Slice
  useEffect(() => {
    if (assets.length > 0) {
      setModelOption(assets[0].model);
      const filteredByModelSelected = assets.filter((item) => item.model === assets[0].model);
      setNameAssetOption(filteredByModelSelected[0].name);
    }
  }, [assets]);

  return (
    <>
      <select onChange={ (event) => handleChangesOnModelOption(event) }>
        { renderModelOptions() }
      </select>
      <select onChange={ (event) => handleChangesOnNameOption(event) }>
        { renderNameOptions() }
      </select>
      {/* Esse botão deverá fazer um redirecionamento de rota para outra página pegando especificamente os dados daquele produto */}
      <button>Buscar</button>
    </>
  )
}

export default DropdownMenuOnDashBoard;
