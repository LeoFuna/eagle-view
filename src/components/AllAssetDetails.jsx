import React from "react";
import { Link } from "react-router-dom";

function AllAssetDetails({ assetData }) {
  if (!assetData.id) {
    return(<h1>CARREGANDO...</h1>)
  } else {
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
            <p>{ assetData.healthscore } %</p>
          </div>
          <div>
            <h3>Status</h3>
            <p>{ assetData.status }</p>
          </div>
        </div>
        <div>
          <h2>Detalhes</h2>
          <div>
            <p>Sensor: <span>{ assetData.sensors[0] }</span></p>
            <p>Rpm: <span>{ assetData.specifications.rpm }</span> RPM</p>
            <p>Temperatura Max: <span>{ assetData.specifications.maxTemp }</span> °C</p>
            <p>Potência: <span>{ assetData.specifications.power }</span> kWh</p>
            <p>Total de Coletas: <span>{ assetData.metrics.totalCollectsUptime }</span> coletas</p>
            <p>Total de Horas de Coletas: <span>{ assetData.metrics.totalUptime.toFixed(0) }</span> h</p>
            <p>Data da Última Coleta: <span>{ assetData.metrics.lastUptimeAt }</span></p>
          </div>
        </div>
        <button>
          <Link to="/">Voltar</Link>
        </button>
      </div>
    );
  }
}

export default AllAssetDetails;
