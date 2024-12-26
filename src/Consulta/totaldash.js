import React, { useState, useEffect } from 'react';
import { fetchControle } from './api';
const ChartSectionTotal = () => {
  
  const [cores, setCores] = useState([]);
  const [totalcores, setTotalcores] = useState(0);

  const loadCores = async () => {
    const coresData = await fetchControle();
    setCores(coresData);
  };

  useEffect(() => {
    loadCores();
    const interval = setInterval(loadCores, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const corVermelha = cores.find((cor) => cor.descricao === 'vermelho');
    const corVerde = cores.find((cor) => cor.descricao === 'verde');
    const corAzul = cores.find((cor) => cor.descricao === 'azul');

    const novoTotal = 
      (corVermelha?.total || 0) + 
      (corVerde?.total || 0) + 
      (corAzul?.total || 0);

    setTotalcores(novoTotal);
  }, [cores]);

    return (
      <>
      <div className="chart-section-total">
        <div class="title-container-total">
          <div class="image-container">
            <img src="elipse de cores.png" alt="" class="elipse" />
          </div>
          <div class="text-container">
            <h3>Total</h3>
            <p>total de cores cadastradas</p>
          </div>
        </div>
        <div className="chart" id="analytics-chart-total">
          <div className="carregador" id="carregador">
          <h2 > {totalcores} </h2>
          </div>
          <div className="total-numeros" id="total-numeros" style={{ display: 'none' }}>
           
          </div>
        </div>
      </div>
      </>
    );
  

};

export default ChartSectionTotal;



