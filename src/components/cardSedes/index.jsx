import React from "react";
import './cardsedes.css'
import { MapPin,Phone,Clock,Mail,ExternalLink } from "lucide-react";
const CardSedes = ({ titulo, direccion, telefono, horario, email, rutaMaps }) => {
  return (
    <div className="card-sedes">
      <h4 className="sedes-titulo">{titulo}</h4>

      {/* Dirección */}
      <div className="sedes-item">
        <span className="sedes-icono"><MapPin /></span>
        <div>
          <p className="sedes-label">Dirección</p>
          <p className="sedes-text">{direccion}</p>
        </div>
      </div>

      {/* Teléfono */}
      <div className="sedes-item">
        <span className="sedes-icono"><Phone /></span>
        <div>
          <p className="sedes-label">Teléfono</p>
          <p className="sedes-text">{telefono}</p>
        </div>
      </div>

      {/* Horario */}
      <div className="sedes-item">
        <span className="sedes-icono"><Clock /></span>
        <div>
          <p className="sedes-label">Horario de atención</p>
          <p className="sedes-text">{horario}</p>
        </div>
      </div>

      {/* Email */}
      <div className="sedes-item">
        <span className="sedes-icono"><Mail /></span>
        <div>
          <p className="sedes-label">Email</p>
          <p className="sedes-text">{email}</p>
        </div>
      </div>

      {/* Botón */}
      <a
        href={rutaMaps}
        target="_blank"
        rel="noopener noreferrer"
        className="sedes-btn"
      >
        <span className="sedes-btn-icono"><ExternalLink size={20}/></span>
        Abrir en Google Maps
      </a>
    </div>
  );
};

export default CardSedes;
