import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaBiking } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { PiGear } from "react-icons/pi";
import { LuUser, LuPhone, LuShield, LuUsers } from "react-icons/lu";
import { LuInfo } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";
import { PiGearBold, PiSpiral } from "react-icons/pi";
import { BsBox } from "react-icons/bs";
import { LuHandHeart } from "react-icons/lu";
import { TbClipboardCheck } from "react-icons/tb";
import { Zap, Target, Users, Handshake, Award, Lightbulb, Bike, Wrench, Info } from "lucide-react";
import { FaRegHeart } from "react-icons/fa";
import './card.css'
import { Settings } from "lucide-react";
import { Package } from "lucide-react";

const Cards = ({ icono = '', titulo, cuerpo, categoria = '', precio = '', listaItems = [], imagen = '', opcion, btn = '', franja = '', menu = '', motObject = null, whatsapp = '' }) => {

  const [activeMenu, setActiveMenu] = useState("inicio");
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleNavigation = (idOrPath) => {
    setActiveMenu(idOrPath);

    if (idOrPath.startsWith("/")) {
      navigate(idOrPath);
    } else {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: idOrPath } });
      } else {
        scrollToId(idOrPath);
      }
    }
  };
  const handleMotocicleta = (data) => {
    // console.log(data);
    navigate("/motocicleta", { state: { moto: data } });
  }
  const handleClickWhatsapp = () => {

    const telefono = "57" + whatsapp;
    const mensaje = "Hola, quiero más información";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };
  const renderIcon = () => {
    switch (icono) {
      case "bike": return <Bike className="card-icon-P" />;
      case "configure": return <Wrench className="card-icon-P" />;
      case "location": return <IoLocationOutline className="card-icon-P" />;
      case "mensaje": return <LuMessageCircle />;
      case "user": return <LuUser />;
      case "phone": return <LuPhone />;
      case "gear": return <PiGearBold />;
      case "shield": return <LuShield />;
      case "box": return <BsBox />;
      case "users": return <LuUsers />;
      case "info": return <Info className="card-icon-P" />;
      case "heart": return <LuHandHeart />;
      case "confi": return <GrConfigure />;
      case "boardcheck": return <TbClipboardCheck />;
      case "zap": return <Zap className="mision-icono-svg" />;
      case "target": return <Target className="mision-icono-svg" />;
      case "target2": return <Target size={25} />;
      case "heart2": return <FaRegHeart size={25} />;
      case "users2": return <Users size={25} />;
      case "Handshake": return <Handshake size={25} />;
      case "award": return <Award size={25} />;
      case "lightbulb": return <Lightbulb size={25} />;
      case "setting": return <Settings size={40}/>;
      case "package": return <Package size={40}/>;
      default: return null;
    }
  };
  const palabrasRojo = ["correctivos", "garantía", "Auteco","especializado","mecánica general","seguros","accesorios","originales","financiación"]; 

  const resaltarPalabras = (texto) => {
    if (!texto) return "";
    const regex = new RegExp(`\\b(${palabrasRojo.join("|")})\\b`, "gi");
    return texto.replace(regex, (match) => {
      return `<span style="color: #e30613;">${match}</span>`;
    });
  };

  if (opcion == 'P') {
    const nombreMenu = menu ? menu : 'inicio';
    return (
      <div className="custom-card-P" onClick={() => handleNavigation(nombreMenu)}>
        {renderIcon()}
        <p className="card-title-P">{titulo}</p>
        <p className="card-text-P">
          {cuerpo}
        </p>
      </div>
    )
  }

  if (opcion == 'M') {
    return (
      <div className="moto-card" onClick={() => handleMotocicleta(motObject)}>
        <div className="moto-card-header">
          <img src={imagen} alt={titulo} className="moto-img" />
          <span className="categoria">{categoria}</span>
        </div>
        <div className="moto-card-body">
          <h5 className="moto-title">{titulo}</h5>
          <p className="moto-description">{cuerpo}</p>
          <div className="precio-icono">
            <p className="moto-precio">{precio}</p>
            <FaArrowRight className="moto-icono-right" />
          </div>
        </div>
      </div>
    )
  }
  if (opcion == 'C') {
    return (
      <div className="card-conocer">
        <div className="card-body-conocer">
          <h4 className="card-title">{titulo}</h4>
          <p className="card-text">
            {cuerpo}
          </p>
        </div>
      </div>
    )
  }

  if (opcion == 'S') {
    const texto_servicio = listaItems.length > 0 ? "Servicios incluidos:" : "";
    if (btn == '1') {
      return (
        <div className="card-mantenimiento  h-100">
          <div className="icono-mantenimiento">
            {renderIcon()}
          </div>
          <div className="card-mantenimiento-contenido">
            <h5 className="titulo-mantenimiento">{titulo}</h5>
            <p className="descripcion-mantenimiento">{cuerpo}</p>
            <button className="btn-contacto-servicio" onClick={handleClickWhatsapp}>Agenta tu cita</button>
          </div>
        </div>
      )
    } else if (btn == '0') {
      return (
        <div className="card-mantenimiento  h-100">
          <div className="icono-mantenimiento">
            {renderIcon()}
          </div>
          <div className="card-mantenimiento-contenido">
            <h5 className="titulo-mantenimiento">{titulo}</h5>
            <p className="descripcion-mantenimiento">{cuerpo}</p>
            <div className="card-mantenimiento-destacado">
              <p className="texto-destacado">4 años o 50.000 KM, lo que ocurra primero</p>
              <p className="texto-condiciones">Aplican términos y condiciones</p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="card-mantenimiento  h-100">
          <div className="icono-mantenimiento">
            {renderIcon()}
          </div>
          <div className="card-mantenimiento-contenido">
            <h5 className="titulo-mantenimiento">{titulo}</h5>
            <p className="descripcion-mantenimiento"  dangerouslySetInnerHTML={{ __html: resaltarPalabras(cuerpo) }}></p>
          </div>
        </div>
      )
    }

  }
  if (opcion == 'GA') {
    return (
      <div className="card-mantenimiento2  h-100">
        <div className="icono-mantenimiento">
        <div className="aseguradora-icono">
          <img src={icono} alt={titulo} />
        </div>
        </div>
        <div className="card-mantenimiento-contenido">
          <h5 className="titulo-mantenimiento">{titulo}</h5>
          <p className="descripcion-mantenimiento">{cuerpo}</p>
          <div className="card-mantenimiento-destacado2">
              <p className="texto-destacado2">✓ Convenio Especial Activo</p>
            </div>
        </div>
      </div>
    )
  }

  if (opcion == 'ST') {
    return (
      <div className="card-servicio">
        <h2>{titulo}</h2>
        <p>
          {cuerpo}
        </p>
        <div className="botones">
          <button className="btn-rojo-servicio">Agendar cita de servicio</button>
          <button className="btn-blanco-servicio">Más información</button>
        </div>
      </div>
    )
  }

  if (opcion == 'A') {
    return (
      <div className="custom-card-aliado h-100">
        <div className="card-logo-aliado">
          <img src={imagen} alt={titulo} />
        </div>
        <h3 className="card-title-aliado">{titulo}</h3>
        <p className="card-description-aliado">{cuerpo}</p>
      </div>
    )
  }

  if (opcion == 'CO') {
    return (
      <div className="card-cotizacion">
        <div className="icon-wrapper">
          {renderIcon()}
        </div>
        <h3>{titulo}</h3>
        <p>{cuerpo}</p>
      </div>
    )
  }

  if (opcion == 'MP') {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
      if (showModal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [showModal]);
    return (
      <>

        <div className="promocion-card">
          <div className="promocion-card-image" onClick={() => setShowModal(true)}>
            <img src={imagen} alt={titulo} />
          </div>
          <div className="promocion-card-body">
            <span className="promocion-card-subtitle">{titulo}</span>
            <h3 className="promocion-card-title">{cuerpo}</h3>
            <button className="promocion-card-button" onClick={handleClickWhatsapp}>
              <LuMessageCircle size={18} />
              <span>Solicitar Cotización</span>
            </button>
          </div>
        </div>


        {showModal && (

          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="image-wrapper">
                <img src={imagen} alt={titulo} />
                <button className="modal-close" onClick={() => setShowModal(false)}>
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )

  }
  if (opcion == 'MI') {
    return (
      <div className="card-mision">
        <div className="mision-icono">
          {renderIcon()}
        </div>
        <h3 className="mision-titulo">{titulo}</h3>
        <p className="mision-texto">
          {cuerpo}
        </p>
      </div>
    );
  }

  if (opcion == "VA") {
    return (
      <div className="valor-card h-100">
        <div className="valor-icono">
          {renderIcon()}
        </div>
        <h5 className="valor-titulo">{titulo}</h5>
        <p className="valor-descripcion">{cuerpo}</p>
      </div>
    );
  }
}

export default Cards; 