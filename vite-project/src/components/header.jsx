import { useState } from 'react'
import logoAlmas from '../public/img/logoAlmas.png'
// import viteLogo from '/vite.svg'
// import './App.css'
import '../public/css/index.css'
import '../../public/css/nav.css'
import React from 'react'

function header() {
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
    </>
  )
}

export default header