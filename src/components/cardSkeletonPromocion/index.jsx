import React from "react";
import "./cardSkeletonPromocion.css";

const CardSkeletonPromocion = () => {
  return (
    <div className="previo-promocion-card">
      {/* Imagen */}
      <div className="previo-promocion-img skeleton-promocion"></div>

      {/* Texto principal */}
      <div className="previo-promocion-body">
        <div className="previo-promocion-title skeleton-promocion"></div>
        <div className="previo-promocion-subtitle skeleton-promocion"></div>

        {/* Precios */}
        <div className="previo-promocion-price skeleton-promocion"></div>
        <div className="previo-promocion-price skeleton-promocion"></div>

        {/* Botón */}
        <div className="previo-promocion-btn skeleton-promocion"></div>
      </div>
    </div>
  );
};

export default CardSkeletonPromocion;
