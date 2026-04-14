import React, { useState } from "react";
import "./CardMotoDetalle.css";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const CardMotoDetalle = ({ nombre, subtitulo, descripcion, precio, colores, producto_id }) => {
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
  const handleCotizacion = () => {
    localStorage.setItem('producto', producto_id);
    navigate('/cotizacion');
  };
  const handleClickWhatsapp = () => {

    const telefono = "573152959977";
    const mensaje = "Hola, quiero más información";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };
  return (
    <div className="motoObjeto-detalle">
      <p className="motoObjeto-nombre">{nombre}</p>
      <p className="motoObjeto-subtitulo">{subtitulo}</p>
      <p className="motoObjeto-descripcion">{descripcion}</p>

      <div className="motoObjeto-precio">
        <p className="precio--titulo">Precio desde</p>
        <p className="precio--moto">{precio.toLocaleString("es-CO")}</p>

      </div>

      <div className="motoObjeto-botones">
      <NavLink
        to="/cotizacion"
        className="btn btn-rojo--coti"
        style={{ color: "white", textDecoration: "none", display: "inline-block" }}
        onClick={() => {
          localStorage.setItem('producto', producto_id);
        }}
      >
        Solicitar cotización
      </NavLink>
        {/* <button className="btn btn-rojo--contac" onClick={handleClickWhatsapp}>Contáctanos</button> */}
      </div>
      {/* 
      <div className="motoObjeto-colores">
        <p className="colores">Colores disponibles</p>
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
      </div> */}

      <div className="motoObjeto-colores">
        <p className="colores">Colores disponibles</p>

        <div className="colores-grid">
          {colores.map((c, i) => (
            <button
              key={i}
              className={`color-btn ${colorSeleccionado === i ? "activo" : ""}`}
              onClick={() => setColorSeleccionado(i)}
            >
              <span
                className="color-circle"
                style={{
                  background: c.colorHex?.startsWith("linear")
                    ? c.colorHex
                    : c.colorHex || "#fff"
                }}
              />
              <span className="color-nombre">{c.nombre}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardMotoDetalle;
