import React from "react";
import './cardRepresentante.css'


const CardRepresentante= ({ img, titulo, cuerpo }) => {

    return (
        <div className="representante-card h-100">
          <div className="representante-icono" >
          <img src={img} alt={titulo} />
          </div>
          <h5 className="representante-titulo" >{titulo}</h5>
          <p className="representante-descripcion">{cuerpo}</p>
        </div>
      );

};

export default CardRepresentante;
