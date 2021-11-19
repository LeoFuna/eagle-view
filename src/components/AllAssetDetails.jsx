import React from "react";

function AllAssetDetails({ assetData }) {
  console.log(assetData)
  return(
    <div>
      <div>
        <img  style={{ width: '75%', borderRadius: '30px' }} src={ assetData.image } alt={ `Imagem ${ assetData.name }`} />
      </div>
      <div>div dos status</div>
      <div>div dos detalhes</div>
    </div>
  );
}

export default AllAssetDetails;
