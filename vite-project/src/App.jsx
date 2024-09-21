//import logoAlmas from '../public/img/logoAlmas.png';
//import viteLogo from '/vite.svg';
//import './App.css'
// import '../public/css/index.css';
import Header from '../src/components/header';
import Carrousel from './components/Carrousel';

function App() {
  const navLinks = [
    { name: "Inicio", url: "./index.html" },
    { name: "Galeria", url: "./about.html" },
    { name: "Servicios", url: "./servicios.html" },
    { name: "Contacto", url: "./contacto.html" },
  ];

  return (
    <>
      <Header/>
      <Carrousel/>
    </>
  )
}

export default App;
