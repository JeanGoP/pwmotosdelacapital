import React from "react";
import "./especificaciones.css";

const Especificaciones = ({ titulo = "", json = [] }) => {
  const sinResultados = !json || json.length === 0;
  return (
    <div className="especificaciones-card">
      <p className="especificaciones-titulo">{titulo}</p>
      <hr className="especificaciones-divider" />

      {sinResultados ? (
        <p className="especificaciones-vacio">
          No hay resultados disponibles.
        </p>
      ) : (
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
      )}
    </div>
  );
};

export default Especificaciones;
