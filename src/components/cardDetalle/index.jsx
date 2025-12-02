import React, { useState } from "react";
import "./carDetalle.css";
import { FaBolt } from "react-icons/fa";
import { Zap,Activity,Wrench,Scale,ChevronDown,ChevronUp } from "lucide-react";

const CardDetalle = ({ titulo='', contenido='', icono='' }) => {
  const [abierto, setAbierto] = useState(false);
  const renderIcon = () => {
    switch (icono) {
      case "zap": return   <Zap  className="icono" />;
      case "Activity": return   <Activity  className="icono" />;
      case "Wrench": return   <Wrench className="icono" />;
      case "Scale": return   <Scale className="icono" />;
      default: return null;
    }
  };

  return (
    <div className={`card-detalle ${abierto ? "activo" : ""} `}>
      <div className="card-header-detalle">
        <div className="card-titulo-detalle">
          {renderIcon()}
          <h4 className="titulo---detalle">{titulo}</h4>
        </div>
        <button
          className="btn-toggle-detalle"
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ?(
            <>
                Ver detalles <ChevronUp size={18} />
            </>
          ):(
            <>
            Ver detalles <ChevronDown size={18} />
        </>
          )}
        </button>
      
      </div>

      <div className={`card-contenido-detalle ${abierto ? "abierto" : ""}`}>
      
        {contenido}
      </div>
    </div>
  );
};

export default CardDetalle;
