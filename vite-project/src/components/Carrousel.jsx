// import "../../public/css/index.css";
// import carrousel1 from '../../public/img/carrusel1.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from "prop-types";
import CarrouselItem from './CarrouselItem';

function Carrousel({
  images,
}) {
  return (
    <main>
      <div className="carrousel">
      
        <div className="conteCarrousel">
        {images.map((image, index)=>(
          <CarrouselItem
          // key={index}
          // idItemCarrousel = {image.idItemCarrousel}
          idItemCarrousel = {index}
          Image = {image.Image}
          flechaIzquierda = {image.flechaIzquierda}
          flechaDerecha = {image.flechaDerecha}
           />
        ))
      }
      </div>
          <div className="carrousel-texto">
            <p>En nuestro centro, ofrecemos Pilates Reformer, Hatha Yoga, Gimnasia Postural y Stretching. Cada disciplina está diseñada para mejorar tu flexibilidad, fuerza, equilibrio y bienestar general, ayudándote a aliviar el estrés, corregir posturas y aumentar tu movilidad. ¡Encuentra el equilibrio y la paz en cada sesión!</p>
            <br />
            <p id="carrousel-texto-frase">"El cambio se produce a través del movimiento y el movimiento cura" - Joseph Pilates.</p>
          </div>
      </div>
    </main>
  )}
Carrousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      idItemCarrousel: PropTypes.string.isRequired,
      Image: PropTypes.string.isRequired,
      flechaIzquierda: PropTypes.string.isRequired,
      flechaDerecha: PropTypes.string.isRequired,
    })
  )
}

export default Carrousel
