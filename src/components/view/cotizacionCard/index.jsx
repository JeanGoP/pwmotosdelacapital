import React from "react";
import { FaUser, FaIdCard, FaPhoneAlt, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { LuUser, LuPhone } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiIdentificationCard } from "react-icons/pi";
import { LuMessageCircle } from "react-icons/lu";
import { TbBike } from "react-icons/tb";
import { LanguageContext } from '../../../context/context'
import { useState, useEffect, useContext } from "react";
import CustomSelect from '../../customSelect'
import "./cotizacionCard.css";

export function CotizacionCard() {
  const { productos, getProductos } = useContext(LanguageContext);
  const [selectedProducto, setSelectedProducto] = useState("");
  useEffect(() => {
    getProductos();

  }, []);

  const productosLimpios = [...new Set(productos.map(p => p.producto_nombre))];

  return (
    <div className="cotizacion-card">
      <form className="cotizacion-form">
        <div className="cotizacion-row">
          <div className="cotizacion-group">
            <label><LuUser className="inconoUser" /> Nombre *</label>
            <input type="text" placeholder="Ingresa tu nombre" />
          </div>
          <div className="cotizacion-group">
            <label><LuUser className="inconoUser" /> Apellido *</label>
            <input type="text" placeholder="Ingresa tu apellido" />
          </div>
        </div>

        <div className="cotizacion-row">
          <div className="cotizacion-group">
            <label><PiIdentificationCard className="inconoUser" /> Número de Identificación *</label>
            <input type="text" placeholder="CC, TI, CE, etc." />
          </div>
          <div className="cotizacion-group">
            <label><LuPhone className="inconoUser" /> Número de Contacto *</label>
            <input type="text" placeholder="Celular o teléfono fijo" />
          </div>
        </div>

        <div className="cotizacion-group">
          <label><MdOutlineMail className="inconoUser" /> Correo Electrónico *</label>
          <input type="email" placeholder="ejemplo@correo.com" />
        </div>
        <div className="cotizacion-group">
          <label><TbBike className="inconoUser" /> Modelo de interés</label>
          <CustomSelect productosLimpios = {productosLimpios}/>
        </div>
        <div className="cotizacion-group">
          <label><IoDocumentTextOutline className="inconoUser" /> Mensaje / Solicitud *</label>
          <textarea placeholder="Describe tu solicitud..."></textarea>
        </div>

        <button type="submit" className="cotizacion-btn">
          <LuMessageCircle className="inconoMSJ" /> ENVIAR INFORMACIÓN
        </button>

        <p className="cotizacion-note">
          Un asesor se pondrá en contacto contigo lo antes posible para brindarte una cotización personalizada y resolver todas tus dudas.
        </p>
      </form>
    </div>
  );
}
