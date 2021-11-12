import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getDashboard, updateAssets } from '../redux/dashboardSlice';
import { getAll } from '../services/fetchApi';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function OverviewDashbord() {
  const dispacth = useDispatch();
  const { assets } = useSelector(getDashboard);
  const [statusOptions, setStatusOptions] = useState(updateOptions([0, 0, 0]));

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

  async function handleAssetsData(typeService) {
    let assetsToUpdate;
    if (typeService === 'getAll') {
      assetsToUpdate = await getAll('assets');
    }
    dispacth(updateAssets(assetsToUpdate));
  }

  useEffect(() => {
    const assetsInDowntime = assets.filter((assetItem) => assetItem.status === 'inDowntime');
    const assetsInAlert = assets.filter((assetItem) => assetItem.status === 'inAlert');
    const assetsInOpeation = assets.filter((assetItem) => assetItem.status === 'inOperation');
    setStatusOptions(updateOptions([assetsInDowntime.length, assetsInAlert.length, assetsInOpeation.length]));
  }, [assets]);

  useEffect(() => {
    handleAssetsData('getAll');
  }, []);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <HighchartsReact highcharts={ Highcharts } options={ statusOptions } />
        { console.log(assets) }
      </div>
      <div>
        <p>Sou o segundo gráfico</p>
      </div>
      <div>
        <p>Sou o terceiro gráfico</p>
      </div>
      <div>
        <p>Sou o detalhes do equipamento</p>
      </div>
    </div>
  );
}

export default OverviewDashbord;
