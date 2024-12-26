import React from 'react';


export const Sidebar = () => {
  return (


    <nav className="sidebar-dash">
    <div className="logo-section">
      <img src="logo.png" alt="Logo" className="logo" />
      <h6 className="logo-texto">Sensor de Cores</h6>
    </div>
    <ul className="nav-lists">
      <li><a href="PrincipalFJ.html"><i className="bi bi-house-door-fill"></i>Principal</a></li>
      <li><a href="novodash.html"><i className="bi bi-search"></i>Dashboard</a></li>
      <li><a href="Consulta.html"><i className="bi bi-columns-gap"></i>Consulta</a></li>
    </ul>
  </nav>
  );
};
