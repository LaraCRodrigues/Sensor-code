import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Consulta/dashboard';
import Consulta from './Consulta/consultaP';
import Principal from './Consulta/principal';
import ListarProdutos from './Consulta/ListarProdutos';



const AppRoutes = () => {
  return (
    <Router>
    
      <Routes>

      <Route path="/lista" element={<ListarProdutos />} />
        <Route path="/" element={<Principal />} />
        <Route path="/consulta" element={<Consulta />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};


export default AppRoutes;