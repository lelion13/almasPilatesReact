import React from 'react'
import PropTypes from "prop-types";

function Card({image, alt, titulo, descripcion}) {
  return (
    <div>
        <img className= "cards-img" src= {image} alt= {alt}  />
        <h2> {titulo} </h2>
        <p> {descripcion} </p>
    </div>
  )
}
Card.prototype = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, 
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
}
export default Card