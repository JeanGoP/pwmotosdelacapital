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
import SectionHeaderCotizacion from "../sectionHeadercotizacion";

export function CotizacionCard() {
  const { productos, getProductos, marcasProductos, getMarcasProductos } = useContext(LanguageContext);
  const [selectedProducto, setSelectedProducto] = useState("");
  useEffect(() => {
    getMarcasProductos();

  }, []);

  const MarcasProductosLimpios = [

    ...new Set(
      marcasProductos
        .filter(m => m.marca_nombre)
        .map(m => m.marca_nombre)
    )
  ].reverse();

  const ciudades = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Bucaramanga', 'Pereira', 'Manizales', 'Ibagué', 'Cúcuta', 'Pasto', 'Santa Marta', 'Villavicencio', 'Popayán', 'Otra']
  return (
    <div className="cotizacion-card">
      <div className="cotizacion-form">
        <SectionHeaderCotizacion titulo="Solicita tu cotización" cuerpo="Completa todos los campos y nos pondremos en contacto contigo para ofrecerte las mejores opciones de financiación y beneficios." />
        <div className="cotizacion-row">
          <div className="cotizacion-group">
            <label> Nombre *</label>
            <input type="text" placeholder="Tu nombre" />
          </div>
          <div className="cotizacion-group">
            <label> Apellido *</label>
            <input type="text" placeholder="Tu apellido" />
          </div>
        </div>


        <div className="cotizacion-group">
          <label> Número de Identificación *</label>
          <input type="text" placeholder="Cédula o documento de identidad" />
        </div>


        <div className="cotizacion-group">
          <label> Número de Contacto *</label>
          <input type="text" placeholder="300 123 4567" />
        </div>
        <div className="cotizacion-group">
          <label>Ciudad / Departamento *</label>
          <CustomSelect productosLimpios={ciudades} opcion="C" />
        </div>

        <div className="cotizacion-group">
          <label>Correo Electrónico *</label>
          <input type="email" placeholder="tu@email.com" />
        </div>
        <div className="cotizacion-group">
          <label>Marca de interés</label>
          <CustomSelect productosLimpios={MarcasProductosLimpios} opcion="D" />
        </div>
        <div className="cotizacion-group">
          <label> Mensaje de solicitud </label>
          <textarea placeholder="Describe aquí tu solicitud, preguntas o requerimientos (plan de financiación, disponibilidad, pruebas de manejo, etc.)"></textarea>
        </div>
        <div className="cotizacion-group">

          <textarea placeholder="Al enviar este formulario, aceptas que nos comuniquemos contigo para brindarte información sobre nuestros productos y servicios. No compartiremos tu información con terceros." readOnly></textarea>
        </div>

        <button type="submit" className="cotizacion-btn">
          Enviar cotización
        </button>

      </div>
    </div>
  );
}
