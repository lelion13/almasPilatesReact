import React from 'react'
import '../../public/css/index.css'
import carrousel1 from '../../public/img/carrusel1.jpg'

function Carrousel() {
    return (
        <main>
      <div className="carrousel">
        <div className="conteCarrousel">
          <div className="itemCarrousel" id="itemCarrousel-1">
            <div className="itemCarrouselTarjeta">
              <img src= {carrousel1} alt="Carrousel1"/>
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
              <img src="./img/carrusel2.jpg" alt="Carrousel2"/>
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
              <img src="./img/carrusel3.jpg" alt="Carrousel1"/>
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
              <img src="./img/carrusel4.jpg" alt="Carrousel4"/>
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
    )
}

export default Carrousel
