import React from "react";
import './sectionHeadercotizacion.css'
const SectionHeaderCotizacion = ({ titulo, cuerpo }) => {
    return (
        <div className="titulo-seccion">
        <h2 className="titulo-seccionh2">{titulo}</h2>
      
        <p>
            {cuerpo}
        </p>
      </div>
    );
}

export default SectionHeaderCotizacion;