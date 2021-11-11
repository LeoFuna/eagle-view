import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getDashboard, updateAssets } from '../redux/dashboardSlice';
import { getAll } from '../services/fetchApi';

function OverviewDashbord() {
  const dispacth = useDispatch();
  const { assets } = useSelector(getDashboard);

  async function handleAssetsData() {
    const allAssets = await getAll('assets');
    dispacth(updateAssets(allAssets));
  }

  useEffect(() => {
    handleAssetsData();
  }, []);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <p>Sou o primeiro gráfico</p>
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
