import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getAll } from '../services/fetchApi';

function Assets() {
  const [assetData, setAssetData] = useState({});
  const location = useLocation();
  const assetId = location.search.split('?')[1];
  
  async function getAssetDataFromApi(assetId) {
    const assetDetails = await getAll(`assets/${ assetId }`);
    setAssetData(assetDetails);
  }

  useEffect(() => {
    getAssetDataFromApi(assetId);
  }, [])

  return (
    <div>
      <p>{ assetData.name }</p>
    </div>
  );
}

export default Assets;
