// BotonFlotante.jsx
import React, { useState } from "react";
import { FiMessageCircle } from "react-icons/fi"; // icono
import './botonFlotante.css'

const BotonFlotante = () => {
    const [hover, setHover] = useState(false);
    const handleClick = () => {
    
      const telefono = "573152959977"; 
      const mensaje = "Hola, quiero más información"; 
      const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  
      window.open(url, "_blank");
    };
  
    return (
      <div
        className="boton-flotante"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <span className={`mensaje ${hover ? "visible" : ""}`}>Escríbenos</span>
        <div className={`icono ${hover ? "hover" : ""}`}>
          <FiMessageCircle size={28} />
        </div>
      </div>
    );
  };

export default BotonFlotante;
