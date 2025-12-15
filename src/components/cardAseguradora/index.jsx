import React from "react";
import './cardAseguradora.css'
import { LuShield } from "react-icons/lu";
const CardAseguradora = ({ titulo, cuerpo, icono }) => {
    return (
        <div className="card-AeguradoraM  h-100">
          <div className="icono-card-AeguradoraM">
          <div className="aseguradora-icono">
            <img src={icono} alt={titulo} />
          </div>
          </div>
          <div className="card-mantenimiento-contenido">
            <h5 className="titulo-card-AeguradoraM">{titulo}</h5>
            <p className="descripcion-card-AeguradoraM">{cuerpo}</p>
            <div className="card-AeguradoraM-destacado2">
                <p className="card-AeguradoraM-texto"><LuShield  size={20} style={{position:'relative', top:'-3px'}}/> Cobertura completa</p>
              </div>
          </div>
        </div>
      )
};

export default CardAseguradora;
