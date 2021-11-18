import React, { useEffect, useState } from "react";

function DropdownMenuOnDashBoard({ assets }) {
  const [modelOption, setModelOption] = useState('');

  function renderModelOptions() {
    const notDuplicatedModels = []
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

  useEffect(() => {
    if (assets.length > 0) {
      setModelOption(assets[0].model);
    }
  }, [assets]);

  return (
    <>
      <select>
        { renderModelOptions() }
      </select>
      <select>
        { renderNameOptions() }
      </select>
    </>
  )
}

export default DropdownMenuOnDashBoard;
