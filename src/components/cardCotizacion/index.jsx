import React from "react";
import './cardCotizacion.css'
import {Users,CircleDollarSign,CircleCheck  } from "lucide-react";


const CardCotizacion = ({ icono, titulo, cuerpo,color }) => {
    const renderIcon = () => {
        switch (icono) {
            case "CircleDollarSign": return <CircleDollarSign size={30} />;
            case "users": return <Users size={30}/>;
            case "CircleCheck": return <CircleCheck size={30}/>;
            default: return null;
        }
    };
    return (
        <div className="card-cotizacion--new">
        <div className="icon-wrapper--new" style={{background:color}}>
          {renderIcon()}
        </div>
        <p className="titulo--cotizac">{titulo}</p>
        <p className="cuerpo--cotizac">{cuerpo}</p>
      </div>

    )

};

export default CardCotizacion;
