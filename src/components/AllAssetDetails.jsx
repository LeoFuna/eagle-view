import React from "react";

function AllAssetDetails({ assetData }) {
  console.log(assetData)
  return(
    <div>
      <div>
        <img  style={{ width: '75%', borderRadius: '30px' }} src={ assetData.image } alt={ `Imagem ${ assetData.name }`} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h3>Modelo</h3>
          <p>{ assetData.model }</p>
        </div>
        <div>
          <h3>Saúde</h3>
          <p>{ assetData.healthscore }</p>
        </div>
        <div>
          <h3>Status</h3>
          <p>{ assetData.status }</p>
        </div>
      </div>
      <div>div dos detalhes</div>
    </div>
  );
}

export default AllAssetDetails;
