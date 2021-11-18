import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenuOnDashBoard({ assets }) {
  const [modelOption, setModelOption] = useState('');
  const [assetSelected, setAssetSelected] = useState('');

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
    setAssetSelected(filteredByModelSelected[0].id);
  }

  function handleChangesOnNameOption({ target }) {
    const [filteredAsset] = assets.filter((item) => item.name === target.value);
    setAssetSelected(filteredAsset.id);
  }

  // solução encontrada para setar como padrão de escolha sempre o primeiro modelo que vem do assets, vindo do Slice
  useEffect(() => {
    if (assets.length > 0) {
      setModelOption(assets[0].model);
      const filteredByModelSelected = assets.filter((item) => item.model === assets[0].model);
      setAssetSelected(filteredByModelSelected[0].id);
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

      <button>
        <Link to={ { pathname:'/assets', search: `${ assetSelected }` } }>Buscar</Link> 
      </button>
    </>
  )
}

export default DropdownMenuOnDashBoard;
