import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      {/* <div className="logos">
        <a href="#home">
            <img src="./img/logoAlmas.png" alt="Logo Almas" className="proportional-image" />
        </a>
      </div> */}
        <nav>
            <ul className="menu">
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./about.html">Galeria</a></li>
                <li><a href="./servicios.html">Servicios</a></li>
                <li><a href="./contacto.html">Contacto</a></li>
            </ul>
            
            {/* <button className="menu-toggle">
              <img src="./img/logoAlmas.png" alt="Icono logo" />
            </button> */}
        </nav>
    </header>
    <main>
      <div className="carrousel">
        <div className="conteCarrousel">
          <div className="itemCarrousel" id="itemCarrousel-1">
            <div className="itemCarrouselTarjeta">
              <img src="./img/carrusel1.jpg" alt="Carrousel1" />
            </div>
            <div className="itemCarrouselArrows">
              <a href="#itemCarrousel-4">
                <i className="fas fa-chevron-left"></i>
            </a>
            <a href="#itemCarrousel-2">
                <i className="fas fa-chevron-right"></i>
            </a>
            </div>
          </div>
          <div className="itemCarrousel" id="itemCarrousel-2">
            <div className="itemCarrouselTarjeta">
              <img src="./img/carrusel2.jpg" alt="Carrousel2" />
            </div>
            <div className="itemCarrouselArrows">
              <a href="#itemCarrousel-1">
                <i className="fas fa-chevron-left"></i>
            </a>
            <a href="#itemCarrousel-3">
                <i className="fas fa-chevron-right"></i>
            </a>
            </div>
          </div>
          <div className="itemCarrousel" id="itemCarrousel-3">
            <div className="itemCarrouselTarjeta">
              <img src="./img/carrusel3.jpg" alt="Carrousel1" />
            </div>
            <div className="itemCarrouselArrows">
              <a href="#itemCarrousel-2">
                <i className="fas fa-chevron-left"></i>
            </a>
            <a href="#itemCarrousel-4">
                <i className="fas fa-chevron-right"></i>
            </a>
            </div>
          </div>
          <div className="itemCarrousel" id="itemCarrousel-4">
            <div className="itemCarrouselTarjeta">
              <img src="./img/carrusel4.jpg" alt="Carrousel4" />
            </div>
            <div className="itemCarrouselArrows">
              <a href="#itemCarrousel-3">
                <i className="fas fa-chevron-left"></i>
            </a>
            <a href="#itemCarrousel-1">
                <i className="fas fa-chevron-right"></i>
            </a>
            </div>
          </div>
        </div>
        <div className="carrousel-texto">
          <p>En nuestro centro, ofrecemos Pilates Reformer, Hatha Yoga, Gimnasia Postural y Stretching. Cada disciplina está diseñada para mejorar tu flexibilidad, fuerza, equilibrio y bienestar general, ayudándote a aliviar el estrés, corregir posturas y aumentar tu movilidad. ¡Encuentra el equilibrio y la paz en cada sesión!</p>
          <br/>
          <p id="carrousel-texto-frase">"El cambio se produce a través del movimiento y el movimiento cura" - Joseph Pilates.</p>
        </div>
      </div>
    </main>
    {/* <footer>
        <div className="footer-container">
            <p>&copy; 2024 Leandro Lion -- Luis Guillon</p>
        </div>
        <div className="footer-whatsapp">
            <a href="https://api.whatsapp.com/send/?phone=5491152263161&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp fa-xl" style="color: #63E6BE;"></i>
            </a>
        </div>
    </footer> */}

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
