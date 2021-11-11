import React from 'react';
import { useDispatch } from 'react-redux';
import { updateAssets } from '../redux/dashboardSlice';
import { getAll } from '../services/fetchApi';

function OverviewDashbord() {
  const dispacth = useDispatch();
  
  async function handleAssetsData() {
    const allAssets = await getAll('assets');
    dispacth(updateAssets(allAssets))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <p>Sou o primeiro gráfico</p>
        <button onClick={ () => handleAssetsData() }>click</button>
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
