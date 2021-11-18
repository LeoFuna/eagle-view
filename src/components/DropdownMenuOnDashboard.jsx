import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDashboard, updateSelectedModel } from "../redux/dashboardSlice";

function DropdownMenuOnDashBoard({ modelOrName, assets, selectedModel }) {
  // const dispatch = useDispatch();
  // const { selectedModel } = useSelector(getDashboard);
  // const [modelOptions, setModelOptions] = useState('');

  // function renderOptions() {
  //   if (modelOrName === 'model') {
  //     const notDuplicatedModels = []
  //     const duplicatedModels = dataToRender.map((option) => option.model);
  //     if (duplicatedModels.length > 0) {
  //       duplicatedModels.forEach(model => {
  //         const alreadyRegistered = notDuplicatedModels.find((modelDuplicated) => modelDuplicated === model)
  //         if (!alreadyRegistered) {
  //           notDuplicatedModels.push(model);
  //         }
  //       });
  //       // setModelOptions(notDuplicatedModels[0]);
  //       dispatch(updateSelectedModel(selectedModel))
  //       return notDuplicatedModels.map((option, index) => <option key={ index } value={ option }>{ option }</option>)
  //     }
  //   } else {
  //     const filteredByModelSelected = dataToRender.filter((item) => item.model === modelOptions);
  //     return filteredByModelSelected.map((option, index) => <option key={ index } value={ option.name }>{ option.name }</option>)
  //   }
  // }

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
      // setModelOptions(notDuplicatedModels[0]);
      // dispatch(updateSelectedModel(selectedModel))
    }
    return (
      notDuplicatedModels.map((model, index) => <option key={ index } value={ model }>{ model }</option>)
    );
  }

  // useEffect(() => {
  //   dispatch(updateSelectedModel(modelOptions));
  // }, []);

  return (
    <>
      <select>
        { renderModelOptions() }
      </select>
    </>
  )
}

export default DropdownMenuOnDashBoard;
