import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Cards from '../../components/view/card';
import SectionHeader from '../../components/view/sectionHeader';
import CardSkeletonPromocion from "../../components/cardSkeletonPromocion";
import "./promocion.css";
import BotonFiltroPromocion from "../../components/view/botonFiltroPromocion";
import { LanguageContext } from "../../context/context";

export function Promocion() {
    const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
    const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
    let ImgPromociones = []
    useEffect(() => {
        if (configuracionData) {
          getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
        }
      }, []);

      try {
        if (configuracionData?.promocionesImagen) {
          ImgPromociones = JSON.parse(configuracionData.promocionesImagen);
         // console.log(ImgPromociones)
        }
      } catch (error) {
        console.error('Error al parsear promocionesImagen:', error);
        ImgPromociones = [];
      }
    //   useEffect(() => {
    //     if (configuracionData?.promocionesImagen) {
    //       try {
    //         ImgPromociones = JSON.parse(configuracionData.promocionesImagen);
    //         console.log(ImgPromociones)
    //       } catch (error) {
    //         console.error("Error al parsear Promociones:", error);
    //         ImgPromociones = [];
    //       }
    //     }
    //   }, [configuracionData]);

    const jsonPromocion = [
        { imagen: '/images/Promocion.png', titulo: 'ECO 100', subtitulo: 'BONO DE $450.000' },
        { imagen: '/images/Promocion.png', titulo: 'ECO T', subtitulo: 'BONO DE $650.000' },
        { imagen: '/images/Promocion.png', titulo: 'ECO DELUXE CLÁSICA', subtitulo: 'BONO DE $450.000' },
        { imagen: '/images/Promocion.png', titulo: 'ECO DELUXE', subtitulo: 'BONO DE $450.000' },
        { imagen: '/images/Promocion.png', titulo: 'XPULSE 200 4V', subtitulo: 'BONO DE $800.000' },
        { imagen: '/images/Promocion.png', titulo: 'XPULSE 200 4V PRO', subtitulo: 'BONO DE $800.000' },
    ]
    const navigate = useNavigate();
    const buttonsCategoria = ["Todas", "Eco 100", "Hunk", "Xpulse", "Dash", "Ignitor", "Splendor"];
    const [activeBtn, setActiveBtn] = useState("Trabajo");
    return (
        <div style={{ background: "##ffffff" }}>
            <div className="promocion-container"
              style={{
                backgroundImage: `url('${configuracionData?.rutapromocionesportada}')`,
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
                    <p>PROMOCIONES Disponibles</p>
                </div>
            </div>
            <div className="container" style={{ paddingBottom: "80px", paddingTop: "30px" }}>

                <div className='row g-4'>
                    <SectionHeader
                        titulo={configuracionData?.tituloPromocion}
                        cuerpo={configuracionData?.descripcionPromocion}
                        titleSize="clamp(1.7rem, 4vw, 2rem)"
                        subtitleSize="clamp(1.3rem, 2vw, 1.4rem)"
                    />
                </div>
                {/* 
                <div className="d-flex justify-content-center flex-wrap gap-3">
                    {buttonsCategoria.map((btnText) => (
                        <BotonFiltroPromocion
                            key={btnText}
                            text={btnText}
                            active={activeBtn === btnText}
                            onClick={() => setActiveBtn(btnText)}
                        />
                    ))}
                </div> */}

                <div className="row">
                    {ImgPromociones.length === 0 ? (
                        Array(4).fill(0).map((_, index) =>
                            <div
                                key={index}
                                className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex"
                                style={{ marginBottom: "34px" }}
                            >
                                <CardSkeletonPromocion key={index} /> </div>)
                    ) : (
                        ImgPromociones.map((item, index) => (
                            <div
                                key={index}
                                className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex"
                                style={{ marginBottom: "34px" }}
                            >
                                 <Cards
                                    icono=''
                                    titulo={item.titulo}
                                    categoria="Trabajo"
                                    cuerpo={item.descripcion}
                                    precio=""
                                    listaItems=''
                                    imagen={item.imagen}
                                    opcion='MP'
                                    whatsapp={configuracionData?.whatsapp || ''}
                                /> 
                              
                            </div>
                        ))
                    )}

                </div>
            </div>
            <div className="container contenido-promocion-2" style={{ background: "#fbf9fa" }}>
                <div className='row g-4'>
                    <SectionHeader
                        titulo={configuracionData?.tituloCardPromocion}
                        cuerpo={configuracionData?.descricardPromocion}
                        titleSize="clamp(1.5rem, 2.5vw, 1.5rem)"
                        subtitleSize="clamp(1.1rem, 2vw, 1.3rem)"
                        opcion='B'
                        whatsapp={configuracionData?.whatsapp || ''}
                    />
                </div>
            </div>

            <div className="container">
                <div className='row g-4'>
                    <SectionHeader
                        titulo=''
                        cuerpo={configuracionData?.disponiblePromocion}
                        titleSize="clamp(1.5rem, 2.5vw, 1.8rem)"
                        subtitleSize="clamp(1rem, 1vw, 1rem)"
                        opcion='A'
                    />
                </div>
            </div>
        </div>

    );
}
