import React, { useContext } from 'react';
import './tratamientoDatos.css';
import { LanguageContext } from '../../context/context';
import { useLocation } from 'react-router-dom';

export function TratamientoDatos() {
  const { configuracionData = {}, getCofiguracion } = useContext(LanguageContext);
  const { empresa } = useContext(LanguageContext);
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row row__Posventa">
          <div className="col-lg-6 col-md-6 col-sm-12 div__row__TratamientoDato" style={{ border: 'solid 1px', borderColor: configuracionData?.colorCuerpo }}>
            <img src={empresa.url_logo} alt="" height="100" className="me-5" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 div__row__TratamientoDato" style={{ border: 'solid 1px', borderColor: configuracionData?.colorCuerpo }}>
            <label className="label__row__TratamientoDato" style={{ color: configuracionData?.colorCuerpo }}>
              {' '}
              MANUAL DE TRATAMIENTO DE DATOS{' '}
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 tratamientoDatos__parrafo" style={{ color: configuracionData?.colorCuerpo }}>
            {/* Aquí renderizamos el HTML interpretado */}
            <div className="descripcion__tratamientoDatos" dangerouslySetInnerHTML={{ __html: configuracionData?.tratamientoDatos || '' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
