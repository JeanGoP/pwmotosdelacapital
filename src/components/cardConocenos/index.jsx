import React from "react";
import './cardConocenos.css'
import {TrendingUp,Calendar,Building2  } from "lucide-react";


const CardConocenos= ({ icono, titulo, cuerpo,color }) => {
    const renderIcon = () => {
        switch (icono) {
            case "CircleDollarSign": return <Calendar size={44} />;
            case "users": return <TrendingUp size={44}/>;
            case "Building2": return <Building2 size={44} style={{color:'#002857'}}/>;
            default: return null;
        }
    };
 
    return (
        <div className="card-conocenos--new h-100">
        <div className="icon-wrapper--new--cono" style={{background:color}}>
          {renderIcon()}
        </div>
        <p className="titulo--conocenos">{titulo}</p>
        <p className="cuerpo--conocenos">{cuerpo}</p>
      </div>

    )

};

export default CardConocenos;
