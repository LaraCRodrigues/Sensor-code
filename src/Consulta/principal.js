
import React from 'react';
import Navbar from './navbar';

import Interacao from './apresentacao';
function Principal() {
  return (
   
     <section>
      <Interacao />
      <Navbar />
      <header>
        <div className="container-apre">
          <div className="aligm">
            <i className="bi bi-info-circle"></i>
            <div className="texto-apre">
              <h3>Controle de estoque com o uso da tecnologia</h3>
              <p>Saiba como a tecnologia é manipulada pra cooperar e ajudar a organização nos estoques</p>
            </div>
          </div>
          <div className="container-fundo">
            <img id="1-img" src="How-to-build-an-intelligent-supply-chain.webp" alt="imagem-representativa-organizadores-de-estoque" />
          </div>
          <div className="container-saber">
            <span id="botao" className="btn-saber-mais">
              <a href="https://infoxnet.com.br/blog/2023/01/17/entenda-como-a-tecnologia-atua-no-controle-de-estoque-e-como-ela-pode-ajudar#:~:text=A%20tecnologia%20no%20controle%20de%20estoque%20permite%20a,o%20monitoramento%20do%20estoque%20por%20parte%20do%20gestor.">Saber mais</a>
            </span>
          </div>
        </div>
      </header>
      <div className="container-apre2">
        <div className="alinhamento">
          <img id="2-img" src="elipse de cores.png" alt="circulo-demonstrarivo-icone" />
          <div className="texto">
            <h3>Verificar entrada em tempo real</h3>
            <p>Acesse a página consulta</p>
          </div>
        </div>
        <div className="container-con">
          <span id="botao2" className="btn-con">
            <a href="/consulta">Acessar</a>
          </span>
        </div>
      </div>
    </section>
   
  );
}

export default Principal;

