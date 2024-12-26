import React, { useState } from 'react';
import ListarProdutos from './ListarProdutos';

export const RecentOrders = ({ addData }) => {
   const [showHistorico, setShowHistorico] = useState(false); // Estado para controlar a visibilidade

  const toggleHistorico = () => {
    setShowHistorico(!showHistorico); // Alterna a visibilidade
  };
  return (
    <>
    <div className="container-historico-move">
      <h3>Histórico de Entrada:</h3>
      
      <button className="btn-his-dash" onClick={toggleHistorico}>
        Ver Histórico
      </button>
      <div className={`margin-his ${showHistorico ? 'expand' : 'collapse'}`}>
        {showHistorico && <ListarProdutos />}
      </div>
    </div>


    </>

  );
};

export default RecentOrders;
