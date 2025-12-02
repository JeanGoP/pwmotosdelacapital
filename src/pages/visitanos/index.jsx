import React, { useEffect, useContext } from 'react';
import './visitanos.css';
import CardPuntosVentas from '../../components/cardPuntosVentas';
import { LanguageContext } from '../../context/context';
export function Visitanos() {
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  let sucursales = [];
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
  }, []);

  try {
    if (configuracionData?.sucursal) {
      sucursales = JSON.parse(configuracionData.sucursal);
    }
  } catch (error) {
    console.error('Error al parsear sucursal:', error);
    sucursales = [];
  }

  return (
    <div>
      <div className="container">
        <div className="row row__Visitanos">
          <div
            className="col-md-12 coll-sm-12 container__row__Posventa"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${configuracionData?.rutaPortadaSucursal}')`,
            }}
          >
            <label className="label__row__Visitanos"> ENCUENTRA TU PUNTO DE VENTA MÁS CERCANO AQUÍ </label>
          </div>
        </div>
      </div>
      <div className="row row__Visitanos__ubicacion">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="ratio ratio-4x3 custom-map">
            <iframe id="iframeMaps" src={configuracionData?.rutaGoogleMaps} allowFullScreen></iframe>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 contenido__cardPuntosVentas__Visitanos">
          <div className="container">
            {sucursales.map((item, indice) => (
              <CardPuntosVentas
                key={indice}
                Nombre={item.nombre}
                Direccion={item.direccion}
                Telefono={item.telefono}
                RutaGoogleMaps={item.rutaSucursalGoogle}
                ColorCard={configuracionData?.colorCard}
                ColorLetras={configuracionData?.colorLetras}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
