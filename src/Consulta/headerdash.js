import React from 'react';


export const Header = () => {
  const menuShowDashMobile = () => {
    // Add your mobile menu show/hide logic here
  };

  const menuAcessibilidadeDash = () => {
    // Add your accessibility menu logic here
  };

  return (
    <header className="header">
      <div className="user-info">
        <span className="dashboard">Página Dashboard</span>
      </div>
      <nav>
        <div className="container-alinnhar-btn-mobile">
          <div className="menu-mobile-dash">
            <button onClick={menuShowDashMobile}><i className="bi bi-list"></i></button>
          </div>
          <div className="acess-button-dash">
            <button id="toggle-barra" onClick={menuAcessibilidadeDash}>
              <i className="bi bi-hand-index"></i>
            </button>
          </div>
        </div>
        <div className="botao-acessibilidade-web">
          <button onClick={menuAcessibilidadeDash}><i className="bi bi-hand-index"></i>Acessibilidade</button>
        </div>
      </nav>
    </header>
  );
};
