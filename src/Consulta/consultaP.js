import React, { useState, useEffect } from 'react';
import InteracaoConsulta from './apresentacaoconsulta';
import { fetchControle } from './api';
import NavbarConsultaP from './navbarConsulta';
import './consulta.css';

const Consulta = () => {
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
    <>
    <section className="consulta-section">
  <NavbarConsultaP />
  <InteracaoConsulta />
  <div className="painel-container">
    <div className="painel-header">
      <img id="icone-elipse" src="elipse de cores.png" alt="circulo-demonstrarivo-icone" />
      <div className="texto-painel">
        <h3>Painel de Controle</h3>
        <p>Registro em tempo real de itens por cor</p>
      </div>
    </div>
    <div className="cores-container">
      <div className="cor-item vermelho">
        <span className="dot"></span>
        <p className="cor-apre">{corVermelha ? corVermelha.total : 0}</p>
      </div>
      <div className="cor-item azul">
        <span className="dot"></span>
        <p className="cor-apre">{corAzul ? corAzul.total : 0}</p>
      </div>
      <div className="cor-item verde">
        <span className="dot"></span>
        <p className="cor-apre">{corVerde ? corVerde.total : 0}</p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Consulta;
