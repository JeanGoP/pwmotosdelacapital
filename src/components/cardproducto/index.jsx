import React from "react";
import "./cardProducto.css";

const CardProducto = ({ imagen, titulo }) => {
  return (
    <div className="card-producto">
      <img src={imagen} alt={titulo} className="card-producto-img" />
      <div className="card-producto-posventa">
      <h5 className="card-producto-titulo">{titulo}</h5>
      </div>
      
    </div>
  );
};

export default CardProducto;
