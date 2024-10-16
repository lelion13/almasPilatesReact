import Carrousel from "../components/Carrousel";
import Page from "../Page";
import "../../public/css/index.css";

function Home() {
  const imagenesCarrousel = [
    { idItemCarrousel: "itemCarrousel-1", Image:'/img/carrusel1.jpg', flechaIzquierda:"#itemCarrousel-4" , flechaDerecha:"#itemCarrousel-2"},
    { idItemCarrousel: "itemCarrousel-2", Image:'/img/carrusel2.jpg', flechaIzquierda:"#itemCarrousel-1" , flechaDerecha:"#itemCarrousel-3"},
    { idItemCarrousel: "itemCarrousel-3", Image:'/img/carrusel3.jpg', flechaIzquierda:"#itemCarrousel-2" , flechaDerecha:"#itemCarrousel-4"},
    { idItemCarrousel: "itemCarrousel-4", Image:'/img/carrusel4.jpg', flechaIzquierda:"#itemCarrousel-3" , flechaDerecha:"#itemCarrousel-1"},
  ];

  return <Page>
    <Carrousel images={imagenesCarrousel}/>
    </Page>;
}

export default Home;
