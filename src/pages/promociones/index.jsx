import React, { useEffect, useState, useContext } from 'react';
import CardPromociones from '../../components/cardPromociones';
import './promociones.css';
import { jsonLinkPromociones } from '../../constants/constants';
import { LanguageContext } from '../../context/context';
import { useLocation } from 'react-router-dom';
export function Promociones() {
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  let ImgPromociones = [];
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
  }, []);

  try {
    if (configuracionData?.promocionesImagen) {
      ImgPromociones = JSON.parse(configuracionData.promocionesImagen);
    }
  } catch (error) {
    console.error('Error al parsear promocionesImagen:', error);
    ImgPromociones = [];
  }
  return (
    <div>
      <div className="container">
        <div className="row row__Promociones">
          <div
            className="col-md-12 coll-sm-12 container__row__Posventa"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${configuracionData?.rutapromocionesportada}')`,
            }}
          >
            <label className="label__row__Promociones"> {configuracionData?.empresa} PROMOCIONES DISPONIBLES </label>
          </div>
        </div>
      </div>
      <div className="row__card__imagenes__promociones">
        <div className="container">
          <div className="row">
            {ImgPromociones.map((item, index) => (
              <CardPromociones key={index} Url={item.ruta} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
