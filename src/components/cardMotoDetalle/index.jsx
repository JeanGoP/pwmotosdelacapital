import React, { useState } from "react";
import "./CardMotoDetalle.css";
import { NavLink, useLocation, useNavigate } from 'react-router-dom'; 

const CardMotoDetalle = ({ nombre, subtitulo, descripcion, precio, colores }) => {
  const [colorSeleccionado, setColorSeleccionado] = useState(null);
  const [activeMenu, setActiveMenu] = useState("inicio");
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };



  const handleNavigation = (id) => {
    setActiveMenu(id);

    if (location.pathname !== "/") {
      // No estoy en Home → voy a Home y le paso a dónde debo hacer scroll
      navigate("/", { state: { scrollTo: id } });
   
    } else {
      // Ya estoy en Home → solo scroll
      scrollToId(id);
    
    } 
    
  };
  const handleClickWhatsapp = () => {
    
    const telefono = "573152959977"; 
    const mensaje = "Hola, quiero más información"; 
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };
  return (
    <div className="motoObjeto-detalle">
      <h2 className="motoObjeto-nombre">{nombre}</h2>
      <h4 className="motoObjeto-subtitulo">{subtitulo}</h4>
      <p className="motoObjeto-descripcion">{descripcion}</p>

      <div className="motoObjeto-precio">
        <h3>{precio.toLocaleString("es-CO")}</h3>
        <p>*Precio de venta no incluye gastos de matrícula, SOAT, ni otros documentos</p>
      </div>

      <div className="motoObjeto-botones">
        <button className="btn btn-rojo--coti" > <NavLink style={{color:"white", textDecoration:"none"}} to="/cotizacion" > Solicitar cotización</NavLink></button>
        <button className="btn btn-rojo--contac" onClick={handleClickWhatsapp}>Contáctanos</button>
      </div>

      <div className="motoObjeto-colores">
        <h5>COLORES DISPONIBLES</h5>
        <div className="colores-grid">
          {colores.map((c, i) => (
            <button
              key={i}
              className={`color-btn ${colorSeleccionado === i ? "activo" : ""}`}
              onClick={() => setColorSeleccionado(i)}
            >
              <div className="color-info">
                <span
                  className="color-circle"
                  style={{   background: c.colorHex?.startsWith("linear")
                    ? c.colorHex
                    : c.colorHex || "#fff" }}
                ></span>
                <span className="color-nombre">{c.nombre}</span>
                {c.extra && <span className="color-extra">{c.extra}</span>}
              </div>
             
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardMotoDetalle;
