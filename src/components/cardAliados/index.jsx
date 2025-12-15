import React from "react";
import './cardAliados.css'
import { MapPin,Phone,Clock,Mail,ExternalLink } from "lucide-react";
const CardAliados = ({ titulo, cuerpo, imagen }) => {
  return (
    <div className="custom-card-aliado h-100">
    <div className="card-logo-aliado">
      <img src={imagen} alt={titulo} />
    </div>
    <h3 className="card-title-aliado">{titulo}</h3>
    <p className="card-description-aliado">{cuerpo}</p>
  </div>
  );
};

export default CardAliados;
