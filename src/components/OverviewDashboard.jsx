import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getDashboard, updateAssets } from '../redux/dashboardSlice';
import { getAll } from '../services/fetchApi';
import Highcharts from 'highcharts';
import HighchartsPareto from 'highcharts/modules/pareto';
import HighchartsReact from 'highcharts-react-official';

HighchartsPareto(Highcharts);

function OverviewDashbord() {
  const dispacth = useDispatch();
  const { assets, selectedCompany, selectedUnit } = useSelector(getDashboard);
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

  const paretoOptions = {
    chart: {
        renderTo: 'container',
        type: 'column'
    },
    title: {
        text: 'Restaurants Complaints'
    },
    tooltip: {
        shared: true
    },
    xAxis: {
        categories: [
            'Overpriced',
            'Small portions',
            'Wait time',
            'Food is tasteless',
            'No atmosphere',
            'Not clean',
            'Too noisy',
            'Unfriendly staff'
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
        name: 'Complaints',
        type: 'column',
        zIndex: 2,
        data: [755, 222, 151, 86, 72, 51, 36, 10]
    }]
};

  async function handleAssetsData(typeService) {
    let assetsToUpdate;
    if (typeService === 'Todas') {
      assetsToUpdate = await getAll('assets');
    }
    if (typeService === 'Unidade Jaguar') {
      let allAssets = await getAll('assets');
      assetsToUpdate = allAssets.filter((assetItem) => assetItem.unitId === 1);
    }
    if (typeService === 'Unidade Tobias') {
      let allAssets = await getAll('assets');
      assetsToUpdate = allAssets.filter((assetItem) => assetItem.unitId === 2);
    }
    if (typeService === 'Empresa Teste') {
      let allAssets = await getAll('assets');
      assetsToUpdate = allAssets.filter((assetItem) => assetItem.companyId === 1);
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
    handleAssetsData(selectedUnit)
  }, [selectedUnit, selectedCompany]);

  useEffect(() => {
    handleAssetsData('Todas');
  }, []);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <HighchartsReact highcharts={ Highcharts } options={ statusOptions } />
        {/* { console.log(assets) } */}
      </div>
      <div>
        <HighchartsReact highcharts={ Highcharts } options={ paretoOptions } />
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
