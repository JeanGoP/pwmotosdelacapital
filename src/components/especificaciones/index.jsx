import React from "react";
import "./especificaciones.css";

const Especificaciones = ({ titulo = "", json = [] }) => {
  return (
    <div className="especificaciones-card">
      <p className="especificaciones-titulo">{titulo}</p>
      <hr className="especificaciones-divider" />

      <div className="especificaciones-grid">
        {json.map((item, index) => (
          <div className="especificaciones-item" key={index}>
            <span className="especificaciones-nombre">
              {item.nombre}:
            </span>
            <span className="especificaciones-detalle">
              {item.detalle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Especificaciones;
