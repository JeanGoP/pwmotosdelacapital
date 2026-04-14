import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { CotizacionCard } from "../../components/view/cotizacionCard";
import SectionHeaderCotizacion from "../../components/view/sectionHeadercotizacion"
import Cards from '../../components/view/card';
import "./cotizacion.css";
import { LanguageContext } from "../../context/context";
import CardCotizacion from "../../components/cardCotizacion";
const dataCotizacion = [
  {
    icono: "CircleDollarSign",
    titulo: "Mejores precios",
    cuerpo: "Te ofrecemos las opciones más competitivas del mercado con descuentos exclusivos",
    color: '#002857'
  },
  {
    icono: "CircleCheck",
    titulo: "Respuesta rápida",
    cuerpo: "Te contactamos en menos de 24 horas con una cotización detallada",
    color: '#e60000'
  },
  {
    icono: "users",
    titulo: "Asesoría personalizada",
    cuerpo: "Nuestros expertos te guían en la elección perfecta según tus necesidades",
    color: '#002857'
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


  const rawProducto = localStorage.getItem('producto');

  const id_producto = rawProducto && rawProducto !== 'null' && rawProducto !== 'undefined' ? rawProducto : null;

  const rutaBase = configuracionData?.rutaCotizador;

  const rutaIframe = id_producto ? `${rutaBase}?producto=${id_producto}` : rutaBase;

  return (
    <div style={{ background: "#002857" }}>
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



      </div>
      <div style={{ background: '#002857' }}>
        <div className="container" style={{ paddingTop: '70px' }}>
          {/* <CotizacionCard /> */}

        <div className="">
                <div className="row" style={{ paddingTop: '20px' }}>
                  <div className="col-md-12 coll-sm-12 row__iframe__Cotizador">
                    <iframe
                      id="cotizador"
                      //   src="https://aburramotos.7-24.co/mercadeo/leads/iframe/2f4c07b6b8b5abfee7ed89cd0befe0dd/"
                      src={rutaIframe}
                      name="myIFrame"
                      allow="geolocation"
                      className="iframe__row__Cotizador"
                    ></iframe>
                  </div>
                </div>
              </div>
        </div>
      </div>
      <div style={{ background: '#ffffff' }}>
        <div className="container" style={{ paddingBottom: "80px", paddingTop: '50px' }}>
        <div className="linea-container">
      <span className="linea-decorativa"></span>
    </div>
          <div className="row justify-content-center align-items-center text-center">
            <p className="" style={{ fontSize: '18px', color: '#002857' }}>¿Por qué cotizar con nosotros?</p>
          </div>
          <div className="cotizacion-container-card">

           {dataCotizacion.map((item, index) => (
              <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
                <CardCotizacion
                  key={index}
                  icono={item.icono}
                  titulo={item.titulo}
                  cuerpo={item.cuerpo}
                  color={item.color}
                />
              </div>
            ))} 

          </div>
        </div>
      </div>

    </div>

  );
}
