// src/components/ListarProdutos.js

import React, { useState, useEffect } from 'react';
import { fetchCores } from './api';

const ListarProdutos = () => {
  const [cores, setCores] = useState([]);

  const loadCores = async () => {
    const coresData = await fetchCores();
    setCores(coresData);
  };

  useEffect(() => {
    loadCores();
    const interval = setInterval(loadCores, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bloco-historico">
     

      <div className="barra-de-rolagem">
        {cores.map((cor) => (
          <div key={cor.id} className="item-cor">
            <p>ID: {cor.id}</p>
            <p>Descrição: {cor.descricao}</p>
            <p>Data: {cor.data}</p>
            <p>Hora: {cor.hora}</p>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListarProdutos;
