import React, { useState, useEffect } from 'react';
import { fetchControle } from './api';


export const ChartSection = ({ colors }) => {
  const [cores, setCores] = useState([]);

  const loadCores = async () => {
    const coresData = await fetchControle();
    setCores(coresData);
  };

  useEffect(() => {
    loadCores();
    const interval = setInterval(loadCores, 2000);
    return () => clearInterval(interval);
  }, []);

  const corVermelha = cores.find((cor) => cor.descricao === 'vermelho');
  const corVerde = cores.find((cor) => cor.descricao === 'verde');
  const corAzul = cores.find((cor) => cor.descricao === 'azul');

  return (
    <div className="chart-section">
  <h3 className="title">Painel de Controle</h3>
  <div className="circulo-cor">
    <div className="circulo blue"></div>
    <p className="cor-apre">{corAzul ? corAzul.total : 0}</p>
  
  </div>
  <div className="circulo-cor">
    <div className="circulo green"></div>

    <p className="cor-apre">{corVerde ? corVerde.total : 0}</p>
  </div>
  <div className="circulo-cor">
    <div className="circulo red"></div>
   <p className="cor-apre">{corVermelha ? corVermelha.total : 0} </p>

  </div>

</div>

  );
};
