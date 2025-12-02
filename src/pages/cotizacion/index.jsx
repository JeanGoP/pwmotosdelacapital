import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { CotizacionCard } from "../../components/view/cotizacionCard";
import SectionHeaderCotizacion from "../../components/view/sectionHeadercotizacion" 
import Cards from '../../components/view/card';
import "./cotizacion.css";
import { LanguageContext } from "../../context/context";
const dataCotizacion = [
  {
    icono: "mensaje",
    titulo: "Respuesta Rápida",
    cuerpo: "Recibe respuesta en menos de 24 horas hábiles",
  },
  {
    icono: "user",
    titulo: "Asesoría Personalizada",
    cuerpo: "Expertos especializados en todas las marcas disponibles",
  },
  {
    icono: "phone",
    titulo: "Contacto Directo",
    cuerpo: "Comunicación vía WhatsApp para mayor comodidad",
  },
];
export function Cotizacion() {
  const navigate = useNavigate();
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;

  useEffect(() => {
      if (configuracionData) {
        getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
      }
    }, []);

  return (
    <div style={{ background: "#0a1f44" }}>
      <div className="cotizacion-container"
          style={{
            backgroundImage: `url('${configuracionData?.rutaPortadaCotizador}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
      >
        {/* Botón circular */}
        <button className="back-button" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </button>

        {/* Título centrado */}
        <div className="cotizacion-overlay">
          <p>COTIZACIÓN</p>
        </div>
      </div>
      <div className="container" style={{ paddingBottom:"80px"}}>
        <div>
           <SectionHeaderCotizacion titulo="SOLICITA TU COTIZACIÓN" cuerpo="Completa el siguiente formulario y uno de nuestros asesores especializados se pondrá en contacto contigo para ofrecerte la mejor propuesta personalizada para tu nueva motocicleta."/>
        </div>
        <CotizacionCard />
        <div className="cotizacion-container-card">
          {dataCotizacion.map((item, index) => (
            <Cards
              key={index}
              icono={item.icono}
              titulo={item.titulo}
              cuerpo={item.cuerpo}
              categoria=''
              precio=''
              listaItems=''
              opcion='CO'
            />
          ))}

        </div>
      </div>
    </div>

  );
}
