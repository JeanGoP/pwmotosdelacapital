import React from "react";
import './cardMarcaAliada.css'


import { Award } from "lucide-react";
import { Calendar } from "lucide-react";
import { TrendingUp } from "lucide-react";


const CardMarcaAliada= ({ icono, titulo, cuerpo, colorTemp }) => {
   
    const renderIcon = () => {
        switch (icono) {
            case "Calendar": return <Calendar  />;
            case "Award": return <Award/>;
            case "TrendingUp": return <TrendingUp />;

            default: return null;
        }
    };
 
    return (
        <div className="marc-card h-100">
          <div className="marc-icono" style={{ background: `${colorTemp}`, color:'white' }}>
            {renderIcon()}
          </div>
          <h5 className="marc-titulo" style={{ color: `${colorTemp}` }}>{titulo}</h5>
          <p className="marc-descripcion"  style={{ color: `${colorTemp}` }}>{cuerpo}</p>
        </div>
      );

};

export default CardMarcaAliada;
