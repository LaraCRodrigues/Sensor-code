import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function InteracaoConsulta() {
  const [contrasteAtivoWeb, setContrasteAtivoWeb] = useState(false);
  const [textoMaiusculo, setTextoMaiusculo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [acessibilidadeMobileVisible, setAcessibilidadeMobileVisible] = useState(false);
  const [acessibilidadeWebVisible, setAcessibilidadeWebVisible] = useState(false);

  useEffect(() => {
    if (contrasteAtivoWeb) {
      document.body.classList.add('grayscale');
    } else {
      document.body.classList.remove('grayscale');
    }
  }, [contrasteAtivoWeb]);

  useEffect(() => {
    if (textoMaiusculo) {
      document.body.classList.add('maiusculas');
    } else {
      document.body.classList.remove('maiusculas');
    }
  }, [textoMaiusculo]);

  const toggleContrasteWeb = () => {
    setContrasteAtivoWeb(!contrasteAtivoWeb);
  };
  
  useEffect(() => {
    if (contrasteAtivoWeb) {
      document.body.classList.add('grayscale');
    } else {
      document.body.classList.remove('grayscale');
    }
  }, [contrasteAtivoWeb]);
  
  
  const alternarMaiusculas = () => {
    setTextoMaiusculo(!textoMaiusculo);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setAcessibilidadeMobileVisible(false);
  };

  const toggleAcessibilidadeMobile = () => {
    setAcessibilidadeMobileVisible(!acessibilidadeMobileVisible);
    setMobileMenuOpen(false); 
  };

  const toggleAcessibilidadeWeb = () => {
    setAcessibilidadeWebVisible(!acessibilidadeWebVisible);
  };

  return (
    
    <header className="nav">
      <nav className="nav-bar">
        <div className="logo-titulo-principal">
          <h3 className="titulo">Página Consulta</h3>
          <p className="titulo">passagem de cores em tempo real</p>
        </div>

        <div className="acess-button-web">
          <button id="toggle-barra" onClick={toggleAcessibilidadeWeb}>
            <i className="bi bi-hand-index"></i> Acessibilidade
          </button>
        </div>

        <div className="mobile-menu-icon">
          <button onClick={toggleMobileMenu}>
            <i className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </div>

        <div className="acess-button">
          <button id="toggle-barra" onClick={toggleAcessibilidadeMobile}>
            <i className="bi bi-hand-index"></i>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li className="nav-item">
            <i className="bi bi-house-door-fill"></i>
            <Link to="/" className="nav-link">Tela-Inicio</Link>
          </li>
          <li className="nav-item">
            <i className="bi bi-search"></i>
            <Link to="/consulta" className="nav-link">Consultar</Link>
          </li>
          <li className="nav-item">
            <i className="bi bi-columns-gap"></i>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
        </ul>
      </div>

      <div className="barra-acess-mobile" style={{ display: acessibilidadeMobileVisible ? 'block' : 'none' }}>
        <span>
          <button id="botao-ace" type="button" onClick={toggleContrasteWeb}>Alto Contraste</button>
          <button id="botao-ace2" type="button" onClick={alternarMaiusculas}>Aumentar Fontes</button>
        </span>
      </div>

      <div className="barra-acess-web" style={{ display: acessibilidadeWebVisible ? 'block' : 'none' }}>
        <span>
          <button id="acess-web" type="button" onClick={toggleContrasteWeb}>Alto Contraste</button>
          <button id="acess-web2" type="button" onClick={alternarMaiusculas}>Aumentar Fontes</button>
        </span>
      </div>
    </header>
  );
}

export default InteracaoConsulta;
