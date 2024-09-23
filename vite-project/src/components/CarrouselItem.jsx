import PropTypes from "prop-types";

function CarrouselItem({
id,
idItemCarrousel,
Image,
flechaIzquierda,
flechaDerecha,
}) {
    return (
        <div className="itemCarrousel" id= {idItemCarrousel}>
            <div className="itemCarrouselTarjeta">
                <img src={Image} alt="Carrousel1" />
            </div>
            <div className="itemCarrouselArrows">
            <a href={flechaIzquierda}>
                <i className="fas fa-chevron-left"></i>
            </a>
            <a href={flechaDerecha}>
                <i className="fas fa-chevron-right"></i>
            </a>
            </div>
      </div> 
    )
}

CarrouselItem.prototype = {
    id: PropTypes.string.isRequired,
    idItemCarrousel: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
    flechaIzquierda: PropTypes.string.isRequired,
    flechaDerecha: PropTypes.string.isRequired,
}
export default CarrouselItem
