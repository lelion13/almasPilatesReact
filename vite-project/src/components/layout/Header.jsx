import logoAlmas from '../../../public/img/logoAlmas.png';
import PropTypes from "prop-types";
// import viteLogo from '/vite.svg'
// import './App.css'
import '../../../public/css/index.css'
import '../../../public/css/navbar.css'

function Header() {
  return (
    <header>
      <div className="logos">
        <a href="/">
            <img src={logoAlmas} alt="Logo Almas" className="proportional-image" />
        </a>
      </div>
        <nav>
            <ul className="menu">
                <li><a href="/">Inicio</a></li>
                <li><a href="/Galeria">Galeria</a></li>
                <li><a href="/Servicios">Servicios</a></li>
                <li><a href="/Contacto">Contacto</a></li>
            </ul>
                        
            {/* <button className="menu-toggle">
              <img src="./img/logoAlmas.png" alt="Icono logo" />
            </button> */}
        </nav>
    </header>
  )
}

export default Header