import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getDashboard, updateAssets } from '../redux/dashboardSlice';
import { getAll } from '../services/fetchApi';
import Highcharts from 'highcharts';
import HighchartsPareto from 'highcharts/modules/pareto';
import HighchartsReact from 'highcharts-react-official';
import { updateScatterOptions } from '../helpers/graphicsData';
import DropdownMenuOnDashBoard from './DropdownMenuOnDashboard';

HighchartsPareto(Highcharts);

function OverviewDashbord() {
  const dispatch = useDispatch();
  const { assets, selectedCompany, selectedModel, selectedUnit } = useSelector(getDashboard);
  const [statusOptions, setStatusOptions] = useState(updateOptions([0, 0, 0]));
  const [paretoOptions, setParetoOption] = useState(updateParetoOptions([0, 0, 0]));
  const [scatterOptions, setScatterOptions] = useState(updateScatterOptions([]))

  function updateOptions(newOptions) {
    return {
      chart: {
          type: 'bar'
      },
      title: {
          text: ''
      },
      xAxis: {
          categories: ['Em Parada', 'Em Alerta', 'Em Operação']
      },
      yAxis: {
          title: {
              text: 'Quantidade'
          }
      },
      series: [{
          name: 'Ativos',
          data: newOptions
      }]
    };
  }

  function updateParetoOptions (newOptions) {
    return {
      chart: {
          renderTo: 'container',
          type: 'column'
      },
      title: {
          text: ''
      },
      tooltip: {
          shared: true
      },
      xAxis: {
          categories: [
              'Em Parada',
              'Em Alerta',
              'Em Operação',
          ],
          crosshair: true
      },
      yAxis: [{
          title: {
              text: ''
          }
      }, {
          title: {
              text: ''
          },
          minPadding: 0,
          maxPadding: 0,
          max: 100,
          min: 0,
          opposite: true,
          labels: {
              format: "{value}%"
          }
      }],
      series: [{
          type: 'pareto',
          name: 'Pareto',
          yAxis: 1,
          zIndex: 10,
          baseSeries: 1,
          tooltip: {
              valueDecimals: 2,
              valueSuffix: '%'
          }
      }, {
          name: 'Quantidade',
          type: 'column',
          zIndex: 2,
          data: newOptions
      }]
    }
  }

  async function handleAssetsData(typeService) { // PRECISA DE ATENÇÃO à RENDERIZAÇÃO de COMPANIES
    let assetsToUpdate;
    if (typeService === 'Todas') {
      assetsToUpdate = await getAll('assets');
    } else {
      let allAssets = await getAll('assets');
      let allUnits = await getAll('units'); // acho que dá para trocar somente pelo units do Selector
      const filteredUnit = allUnits.filter((unit) => unit.name === typeService);
      if (filteredUnit.length === 1) {
        assetsToUpdate = allAssets.filter((assetItem) => assetItem.unitId === filteredUnit[0].id);
      }
    }
    // if (typeService === 'Empresa Teste') {
    //   let allAssets = await getAll('assets');
    //   assetsToUpdate = allAssets.filter((assetItem) => assetItem.companyId === 1);
    // }
    dispatch(updateAssets(assetsToUpdate));
  }

  useEffect(() => {
    const assetsInDowntime = assets.filter((assetItem) => assetItem.status === 'inDowntime');
    const assetsInAlert = assets.filter((assetItem) => assetItem.status === 'inAlert');
    const assetsInOpeation = assets.filter((assetItem) => assetItem.status === 'inOperation');
    setStatusOptions(updateOptions([assetsInDowntime.length, assetsInAlert.length, assetsInOpeation.length]));
    setParetoOption(updateParetoOptions([assetsInDowntime.length, assetsInAlert.length, assetsInOpeation.length]));
    const healthScoreOnAssets = assets.map((assetItem) => [assetItem.id, assetItem.healthscore]);
    setScatterOptions(updateScatterOptions(healthScoreOnAssets))
  }, [assets]);

  useEffect(() => {
    handleAssetsData(selectedUnit)
  }, [selectedUnit]);

  // useEffect(() => {   PENSAR NISSO
  //   handleAssetsData(selectedCompany)
  // }, [selectedCompany]);

  useEffect(() => {
    handleAssetsData('Todas');
  }, []);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <HighchartsReact highcharts={ Highcharts } options={ statusOptions } />
      </div>
      <div>
        <HighchartsReact highcharts={ Highcharts } options={ paretoOptions } />
      </div>
      <div>
        <HighchartsReact highcharts={ Highcharts } options= { scatterOptions } />
      </div>
      <div>
        <DropdownMenuOnDashBoard modelOrName='model' assets={ assets } />
        {/* <DropdownMenuOnDashBoard modelOrName='name' dataToRender={ assets } selectedModel={ selectedModel } /> */}
        <button>Buscar</button>
      </div>
    </div>
  );
}

export default OverviewDashbord;
