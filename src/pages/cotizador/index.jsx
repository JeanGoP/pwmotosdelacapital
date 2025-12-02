import React, { useContext } from 'react';
import './cotizador.css';
import { LanguageContext } from '../../context/context';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
export function Cotizador() {
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;

  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
  }, []);

  return (
    <div style={{ background: configuracionData?.colorPagina }}>
      <div className="container">
        <div className="row row__Cotizador">
          <div className="col-md-12 coll-sm-12 container__row__Cotizador row__Cotizador__">
            <label className="label__row__Cotizador"> COTIZADOR </label>
          </div>
        </div>
      </div>
      <div className="row row__Cotizador__">
        <div className="col-md-12 coll-sm-12 row__iframe__Cotizador">
          <iframe id="cotizador" src={configuracionData?.rutaCotizador} name="myIFrame" className="iframe__row__Cotizador"></iframe>
        </div>
      </div>
    </div>
  );
}
