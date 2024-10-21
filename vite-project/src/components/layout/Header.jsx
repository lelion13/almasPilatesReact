import {useState} from "react";
import logoAlmas from '../../../public/img/logoAlmas.png';
import '../../../public/css/index.css';
import '../../../public/css/navbar.css';

function Header() {
  // Definimos el estado para controlar si el menú está activo
  const [isMenuActive, setIsMenuActive] = useState(false);
  // Función que alterna el estado del menú
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <header>
      <div className="logos">
        <a href="/">
            <img src={logoAlmas} alt="Logo Almas" className="proportional-image" />
        </a>
      </div>
        <nav>
          {/* Clase condicional para alternar la visibilidad del menú */}
            <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
            {/* <ul className="menu"> */}
                <li><a href="/">Inicio</a></li>
                <li><a href="/Galeria">Galeria</a></li>
                <li><a href="/Servicios">Servicios</a></li>
                <li><a href="/Contacto">Contacto</a></li>
            </ul>
                        
            {/* <button className="menu-toggle">
              <img src="./img/logoAlmas.png" alt="Icono logo" />
            </button> */}
            {/* Botón para alternar el menú en dispositivos pequeños */}
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
        </nav>
    </header>
  )
}

export default Header