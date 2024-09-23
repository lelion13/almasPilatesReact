import logoAlmas from '../../public/img/logoAlmas.png'
import PropTypes from "prop-types";
// import viteLogo from '/vite.svg'
// import './App.css'
import '../../public/css/index.css'
import '../../public/css/navbar.css'

function header({
  navLinks,
}) {
  return (
    <>
    <header>
      <div className="logos">
        <a href="#home">
            <img src={logoAlmas} alt="Logo Almas" className="proportional-image" />
        </a>
      </div>
        <nav>
        <ul className="menu">
          {navLinks.map((link,index)=>(
            <li key={index}>
              <a href={link.url}>
                {link.name}
              </a>
            </li>
          )

          )}
        </ul>
            {/* <ul className="menu">
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./about.html">Galeria</a></li>
                <li><a href="./servicios.html">Servicios</a></li>
                <li><a href="./contacto.html">Contacto</a></li>
            </ul> */}
                        
            {/* <button className="menu-toggle">
              <img src="./img/logoAlmas.png" alt="Icono logo" />
            </button> */}
        </nav>
    </header>
    </>
  )
}

header.propTypes = {
  //Con arrayOf especificamos que tiene dentro el array
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};
export default header