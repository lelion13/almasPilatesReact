//import logoAlmas from '../public/img/logoAlmas.png';
//import viteLogo from '/vite.svg';
//import './App.css'
// import '../public/css/index.css';
import Header from '../src/components/header';
import Carrousel from './components/Carrousel';
import footer from './components/layout/footer'

function App() {
  const navLinks = [
    { name: "Inicio", url: "./index.html" },
    { name: "Galeria", url: "./about.html" },
    { name: "Servicios", url: "./servicios.html" },
    { name: "Contacto", url: "./contacto.html" },
  ];
  const imagenesCarrousel = [
    { idItemCarrousel: "itemCarrousel-1", Image:'/img/carrusel1.jpg', flechaIzquierda:"#itemCarrousel-4" , flechaDerecha:"#itemCarrousel-2"},
    { idItemCarrousel: "itemCarrousel-2", Image:'/img/carrusel2.jpg', flechaIzquierda:"#itemCarrousel-1" , flechaDerecha:"#itemCarrousel-3"},
    { idItemCarrousel: "itemCarrousel-3", Image:'/img/carrusel3.jpg', flechaIzquierda:"#itemCarrousel-2" , flechaDerecha:"#itemCarrousel-4"},
    { idItemCarrousel: "itemCarrousel-4", Image:'/img/carrusel4.jpg', flechaIzquierda:"#itemCarrousel-3" , flechaDerecha:"#itemCarrousel-1"},
  ];

  return (
    <>
      <Header navLinks={navLinks}/>
      <Carrousel images={imagenesCarrousel}/>
      <footer />
    </>
  )
}

export default App;
