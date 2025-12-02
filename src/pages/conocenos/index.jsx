import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import SectionHeader from '../../components/view/sectionHeader';
import { useState } from "react";
import Cards from '../../components/view/card';
import "./conocenos.css";
import { LanguageContext } from "../../context/context";


export function Conocenos() {
    const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
    const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
    const navigate = useNavigate();
    useEffect(() => {
        if (configuracionData) {
          getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
        }
      }, []);

    let jsonInfoConocenos = [
        {icono:'target', titulo: 'Misión', detalle: `'${configuracionData?.mision}'`},
        {icono:'zap', titulo: 'Visión', detalle: `'${configuracionData?.vision}'`}
    ]
    let jsonInfoValores = []
    try {
        if (configuracionData?.valores) {
            jsonInfoValores = JSON.parse(configuracionData.valores);
            //console.log(jsonInfoValores)
        }
      } catch (error) {
        console.error('Error al parsear valores:', error);
        jsonInfoValores = [];
      }

    //   useEffect(() => {
    //     if (configuracionData?.valores) {
    //       try {
    //         jsonInfoValores = JSON.parse(configuracionData.valores);
    //         console.log(jsonInfoValores)
    //         //console.log("Sucursal parseada:", parsed);
    //       } catch (error) {
    //         console.error("Error al parsear valores:", error);
    //       }
    //     }
    //   }, [configuracionData]);
    // const jsonInfoConocenos = [
    //     { icono: 'target', titulo: 'Misión', detalle: 'Ofrecer soluciones de movilidad a nuestros clientes mediante la comercialización de motocicletas de alta calidad, con un servicio excepcional, asesoría especializada y un firme compromiso con la seguridad, la innovación y la satisfacción del cliente, contribuyendo al desarrollo económico y social de las regiones donde operamos.' },
    //     { icono: 'zap', titulo: 'Visión', detalle: 'Para el año 2027 ser reconocidos en Colombia como la empresa líder en soluciones de movilidad sobre dos ruedas, destacándonos por la calidad de nuestras motocicletas, la excelencia en el servicio y nuestro compromiso con la innovación, la sostenibilidad y el desarrollo de las comunidades donde hacemos presencia.' }
    // ]
    // const jsonInfoValores = [
    //     { icono: 'heart2', titulo: 'Pasión', detalle: 'Amor genuino por las motocicletas y el servicio excepcional' },
    //     { icono: 'target2', titulo: 'Excelencia', detalle: 'Búsqueda constante de la más alta calidad en todo lo que hacemos' },
    //     { icono: 'users2', titulo: 'Respeto', detalle: 'Valoramos a cada cliente, colaborador y miembro de la comunidad' },
    //     { icono: 'Handshake', titulo: 'Compromiso', detalle: 'Dedicación total con nuestros clientes y su satisfacción' },
    //     { icono: 'users2', titulo: 'Trabajo en equipo', detalle: 'Colaboración y sinergia para alcanzar objetivos comunes' },
    //     { icono: 'award', titulo: 'Calidad', detalle: 'Estándares superiores en productos y servicios' },
    //     { icono: 'lightbulb', titulo: 'Innovación', detalle: 'Tecnología y creatividad para el futuro de la movilidad' }
    // ]
    return (
        <>
            <div style={{ background: "#ffffff" }}>
                <div className="promocion-container"
                 style={{
                    backgroundImage: `url('${configuracionData?.rutaPortadaConocenos}')`,
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
                    <div className="promocion-overlay">
                        <p></p>
                    </div>
                </div>
                <div className="contenedor__imagen__conocenos d-flex flex-column justify-content-center align-items-center text-center">
                    <h1 className="titulo-conocenos">
                    CONÓCENOS
                    {/* CONÓCENOS <span className="conocenos">RUTA</span> COMIENZA <span className="conocenos">AQUÍ</span> */}
                   
                    </h1>
                    <div className="conocenos-linea"></div>
                    <p className="subtitulo-conocenos">Descubre quiénes somos, nuestra historia y lo que nos inspira cada día.</p>
                    
                </div>

            </div>
            <div style={{ background: "#f9fafb" }}>
                <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{marginLeft:"5px", marginRight:"5px"}}>
                    <p className="titulo--card--conocenos">Nuestra Historia</p>

                    <div className="card-conocenos">
                        <p>
                            {configuracionData?.historia}
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ background: "#fffff", marginBottom: "50px" }}>
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <p className="titulo--card--conocenos">Misión y Visión</p>
                    <div className="conocenos-mision-linea"></div>


                    <div className="container">
                        <div className="row g-4">
                            {jsonInfoConocenos.map((item, index) => (
                                <div className="col-12 col-md-6" key={index}>
                                    <Cards
                                        key={index}
                                        icono={item.icono}
                                        titulo={item.titulo}
                                        cuerpo={item.detalle}
                                        categoria=''
                                        precio=''
                                        listaItems=''
                                        opcion='MI'
                                    />
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ background: "#0a1f44"}}>
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <p className="titulo--card--conocenos">VALORES CORPORATIVOS</p>
                    <div className="conocenos-linea"></div>
                    <p className="subtitulo--conocenos">Los principios fundamentales que guían cada decisión y acción en Motos de la Capital</p>
                </div>
                <div className="container" style={{paddingBottom:"70px", paddingTop:"50px"}}>
                    <div className="row g-4"  >
                        {jsonInfoValores.map((item, index) => (
                            <div className="col-12 col-sm-6 md-4 col-lg-3" key={index}>
                                <Cards
                                    key={index}
                                    icono={item.icono}
                                    titulo={item.titulovalor}
                                    cuerpo={item.descripcionValor}
                                    categoria=''
                                    precio=''
                                    listaItems=''
                                    opcion='VA'
                                />
                            </div>

                        ))}
                    </div>
                </div>

            </div>
            <div style={{ background: "#fffff", marginBottom: "50px" }}>
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <p className="titulo--card--conocenos">{configuracionData?.titulohistoria}</p>
                    <div className="conocenos-mision-linea"></div>
                    <div className="container">
                        <div className="row" style={{margin:"5px"}}>
                        <div className="historia">
                            <p>
                             {configuracionData?.parrafo_1historia}
                            </p>

                            <p>
                                 {configuracionData?.parrafo_2historia}
                            </p>

                            <div className="historia-destacado">
                            <p className="historia-texto-destacado"> {configuracionData?.parrafofranjahistoria}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
