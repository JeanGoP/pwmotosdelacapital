import React from "react";
import './cardValores.css'


import { Award } from "lucide-react";
import { Handshake } from "lucide-react";
import { Heart } from "lucide-react";
import { Shield } from "lucide-react";
import { Users } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Zap } from "lucide-react";


const CardValores= ({ icono, titulo, cuerpo, id }) => {
    let colorTemp = (id% 2) == 0 ? '#002857' : '#e60000'
    const renderIcon = () => {
        switch (icono) {
            case "heart": return <Heart  size={35}/>;
            case "Award": return <Award size={35}/>;
            case "Handshake": return <Handshake size={35}/>;
            case "Shield": return <Shield size={35}/>;
            case "Users": return <Users size={35}/>;
            case "Sparkles": return <Sparkles size={35}/>;
            case "Zap": return <Zap size={35}/>;
            default: return null;
        }
    };
 
    return (
        <div className="valor-card h-100">
          <div className="valor-icono" style={{ background: `${colorTemp}`, color:'white' }}>
            {renderIcon()}
          </div>
          <h5 className="valor-titulo" style={{ color: `${colorTemp}` }}>{titulo}</h5>
          <p className="valor-descripcion">{cuerpo}</p>
        </div>
      );

};

export default CardValores;
