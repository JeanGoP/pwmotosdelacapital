import React, { useState } from "react";
import "./carDetalle.css";
import { FaBolt } from "react-icons/fa";
import { Zap,Activity,Wrench,Scale,ChevronDown,ChevronUp } from "lucide-react";
import { Gauge } from "lucide-react";
import { Weight } from "lucide-react";


const CardDetalle = ({ titulo='', contenido='', icono='' , json = [], activo, onClick}) => {
  const [abierto, setAbierto] = useState(false);
  const renderIcon = () => {
    switch (icono) {
      case "Zap": return   <Zap  className="icono" size={50} />;
      case "Activity": return   <Activity  className="icono" size={50} />;
      case "Gauge": return   <Gauge className="icono" size={50} />;
      case "Weight": return   <Weight className="icono" size={50} />;
      default: return null;
    }
  };

  return (
    <div>
    <div
      className={`detalle-card ${activo ? "activa" : ""} h-100`}
      onClick={onClick}
    >
          <div className="detalle-icono" >
            {renderIcon()}
          </div>
          <h5 className="detalle-titulo">{titulo}</h5>
        
    </div>

    </div>
  );
};

export default CardDetalle;
