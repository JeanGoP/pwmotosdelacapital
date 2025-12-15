import React from "react";
import './sectionAseguradora.css'
import Cards from "../card";
import CardAseguradora from "../../cardAseguradora";
const AseguradoraCard = ({ icono, titulo, descripcion,jsonGarantias }) => {
  return (
    <>
      <div className="section-header text-center aseguradora-card" style={{marginTop:'60px'}}>
        <p className="section-title" style={{ fontSize:'clamp(1.2rem, 3vw, 1.5rem)', color:'black', fontFamily:'Good Timing, Montserrat, sans-serif' }} >
        Convenio con Aseguradoras
        </p>
       
        <p className="section-subtitle" style={{ fontSize: 'clamp(1.2rem, 1.1vw, 1.2rem)',color:'#4a5565',paddingTop:'20px', fontFamily:'Good Timing, Montserrat, sans-serif' }}>
        Protege tu inversión con nuestras aseguradoras aliadas especializadas en motocicletas
        </p>

      </div>
      <div className="aseguradora-card text-center">
        {/* <div className="aseguradora-icono">
          <img src={icono} alt={titulo} />
        </div>
        <h5 className="aseguradora-titulo">{titulo}</h5>
        <div className="aseguradora-linea"></div>
        <p className="aseguradora-descripcion">{descripcion}</p> */}
         <div className='row g-4 align-items-stretch' style={{paddingBottom:'20px'}}>
                        {jsonGarantias.map((item, index) => (
                            <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                                <CardAseguradora
                                    icono={item.icono}
                                    titulo={item.titulo}
                                    cuerpo={item.detalle}
                                />
                            </div>
                        ))}

                    </div>
      </div>
    </>
  );
};

export default AseguradoraCard;