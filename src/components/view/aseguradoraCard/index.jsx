import React from "react";
import './sectionAseguradora.css'
import Cards from "../card";
const AseguradoraCard = ({ icono, titulo, descripcion,jsonGarantias }) => {
  return (
    <>
      <div className="section-header text-center aseguradora-card" style={{marginTop:'60px'}}>
        <h2 className="section-title" style={{ fontSize:'clamp(1.6rem, 4vw, 2.2rem)', color:'white' }} >
        Convenio con Aseguradoras
        </h2>
        <div className="barraSpacio"></div>
        <p className="section-subtitle" style={{ fontSize: 'clamp(1.2rem, 1.1vw, 1.3rem)',color:'white',paddingTop:'20px' }}>
        Contamos con convenios especiales con aseguradoras aliadas para ofrecerte respaldo y confianza en tu motocicleta.
        </p>
        <h2 className="section-title" style={{ fontSize:'clamp(0.8rem, 3vw, 1.1rem)', color:'white' , paddingTop:'20px'}} >
        Nuestras Aseguradoras Aliadas
        </h2>
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
                                <Cards
                                    key={index}
                                    icono={item.icono}
                                    titulo={item.titulo}
                                    categoria=""
                                    cuerpo={item.detalle}
                                    precio=""
                                    listaItems={item.servicio}
                                    imagen=""
                                    opcion='GA'
                                    btn={item.btn}
                                    whatsapp= ''

                                />
                            </div>
                        ))}

                    </div>
      </div>
    </>
  );
};

export default AseguradoraCard;