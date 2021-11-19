import React from "react";

function HeaderAssetDetails({ assetName }) {
  return(
    <header>
      <div>
        <h1>Eagle View</h1>
      </div>
      <div>
        <h3>{ assetName }</h3>
      </div>
    </header>
  )
}

export default HeaderAssetDetails;
