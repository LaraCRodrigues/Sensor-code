import { Link } from 'react-router-dom';


function NavbarConsultaP(){

 
return(
<>

<nav>
      <div className="menu-lateral">
        <div id="user">
          <div className="container-logo">
            <img className="logo" src="Logo.png" alt="logo-sensor" id="user-avatar" />
          </div>
          <p className="text-logo">Sensor de Cores</p>
        </div>
        <div className="btn-expandir">
          <i className="bi bi-list" id="btn-exp"></i>
        </div>
        <ul>
          <li className="item-menu">
            <Link to="/">
              <span className="icon-nav"><i className="bi bi-house-door-fill"></i></span>
              <span className="text-link"></span>
            </Link>
          </li>
          <li className="item-menu">
            <Link to="/consulta">
              <span className="icon-nav"><i className="bi bi-search"></i></span>
              <span className="text-link"></span>
            </Link>
          </li>
          <li className="item-menu">
            <Link to="/dashboard">
              <span className="icon-nav"><i className="bi bi-columns-gap"></i></span>
              <span className="text-link"></span>
            </Link>
          </li>
        </ul>
        
      </div>
    </nav>

</>





);

}
export default NavbarConsultaP;