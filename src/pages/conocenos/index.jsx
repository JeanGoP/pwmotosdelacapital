import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import SectionHeader from '../../components/view/sectionHeader';
import { useState } from "react";
import Cards from '../../components/view/card';
import "./conocenos.css";
import { LanguageContext } from "../../context/context";
import CardConocenos from "../../components/cardConocenos";
import CardMision from "../../components/cardMision";
import CardValores from "../../components/cardValores";
import CardMarcaAliada from "../../components/cardMarcaAliada";
import HistoriaTimeline from "../../components/historiaTimeline";


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
        { icono: 'Flag', titulo: 'Misión', detalle: `${configuracionData?.mision}`, color: '#002857' },
        { icono: 'target', titulo: 'Visión', detalle: `${configuracionData?.vision}`, color: '#e60000' }
    ]

    let jsonInfoMarca = [
        { icono: 'Calendar', titulo: '1941', detalle: 'Fundación', color: '#002857' },
        { icono: 'TrendingUp', titulo: '+80', detalle: 'Años de experiencia', color: '#e60000' },
        { icono: 'Award', titulo: '#1', detalle: 'En Colombia', color: '#002857' }
    ]
    let jsonHistoria = [
        { anno: '1941', titulo: 'Fundación de Auteco', detalle: 'Nace Auteco en Colombia como la primera ensambladora de motocicletas del país.', color: '#e60000' },
        { anno: '1970s', titulo: 'Expansión nacional', detalle: 'Consolidación de red de distribución en todo el territorio colombiano.', color: '#002857' },
        { anno: '1990s', titulo: 'Llegada de nuevas marcas', detalle: 'Incorporación de marcas internacionales como TVS y Kymco.', color: '#e60000' },
        { anno: '2010s', titulo: 'Fortalecimiento tecnológico', detalle: 'Innovación y tecnología al servicio de la movilidad colombiana.', color: '#002857' },
        { anno: '2025', titulo: 'Motos de la Capital', detalle: 'Se consolida como una de las distribuidoras destacadas del grupo Auteco en Colombia.', color: '#e60000' }
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
    const dataConocenos = [
        {
            icono: "CircleDollarSign",
            titulo: "Fundación",
            cuerpo: "Mayo de 2025",
            color: '#e60000'
        },
        {
            icono: "Building2",
            titulo: "Puntos actuales",
            cuerpo: "2 sedes",
            color: '#ffffff'
        },
        {
            icono: "users",
            titulo: "Proyección",
            cuerpo: "6 sedes",
            color: '#e60000'
        },
    ];
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

                    <button className="back-button" onClick={() => navigate("/")}>
                        <FaArrowLeft />
                    </button>


                    <div className="promocion-overlay">
                        <p></p>
                    </div>
                </div>
                <div className="contenedor__imagen__conocenos d-flex flex-column justify-content-center align-items-center text-center">
                    <h1 className="titulo-conocenos">
                        Conócenos

                    </h1>

                    <p className="subtitulo-conocenos">Descubre quiénes somos, nuestra historia y lo que nos inspira cada día.</p>

                </div>

            </div>
            <div style={{ background: "#002857" }}>
                <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ marginLeft: "5px", marginRight: "5px" }}>
                    <p className="titulo--card--conocenos">Motos de la Capital</p>
                    <p style={{ color: 'white', fontSize: '22px' }}> Nuestra Empresa</p>
                    <div className="card-conocenos">
                        <p>
                            {configuracionData?.historia}
                        </p>
                    </div>

                </div>
                <div>

                    <div className="container">
                        <div className="row g-4 justify-content-center align-items-center text-center" style={{paddingBottom:'40px'}} >
                            {dataConocenos.map((item, index) => (
                                <div className="col-12 col-sm-6 md-12 col-lg-3" key={index}>
                                    <CardConocenos
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
            <div style={{ background: "#fffff", marginBottom: "50px", marginTop: '50px' }}>
                <div className="d-flex flex-column justify-content-center align-items-center text-center">

                    {/* <div className="conocenos-mision-linea"></div> */}


                    <div className="container">
                        <div className="row g-4">
                            {jsonInfoConocenos.map((item, index) => (
                                <div className="col-12 col-md-6" key={index}>
                                    <CardMision
                                        key={index}
                                        icono={item.icono}
                                        titulo={item.titulo}
                                        cuerpo={item.detalle}
                                        color={item.color}
                                    />
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ background: "#f9fafb" }}>
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <p className="" style={{ paddingTop: '60px', fontSize: '40px', color: '#002857' }}>Nuestros Valores</p>

                    <p className="" style={{ fontSize: '18px', color: '#4a5565' }}>Los principios que nos guían en cada acción y decisión</p>
                </div>
                <div className="container" style={{ paddingBottom: "70px", paddingTop: "50px" }}>
                    <div className="row g-4"  >
                        {jsonInfoValores.map((item, index) => (
                            <div className="col-12 col-sm-6 md-4 col-lg-3" key={index}>
                                <CardValores
                                    key={index}
                                    icono={item.icono}
                                    titulo={item.titulovalor}
                                    cuerpo={item.descripcionValor}
                                    id={index + 1}
                                />
                            </div>

                        ))}
                    </div>
                </div>

            </div>
            <div style={{ background: "#002857"}}>
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <p className="titulo--card--conocenos">{configuracionData?.titulohistoria}</p>
                    <p className="" style={{ fontSize: '22px', color: '#fff' }}>Auteco, 80 años de historia.</p>
                    <div className="container">
                        <div className="row" style={{ margin: "5px" }}>
                            <div className="historia">
                                <p>
                                    {configuracionData?.parrafo_1historia}
                                </p>

                                <p>
                                    {configuracionData?.parrafo_2historia}
                                </p>


                                <p> {configuracionData?.parrafofranjahistoria}</p>

                            </div>
                        </div>
                        <div className="row g-4 justify-content-center align-items-center text-center" style={{ paddingBottom: '50px' }}>
                            {jsonInfoMarca.map((item, index) => (
                                <div className="col-12 col-sm-6 md-4 col-lg-3" key={index}>
                                    <CardMarcaAliada
                                        key={index}
                                        icono={item.icono}
                                        titulo={item.titulo}
                                        cuerpo={item.detalle}
                                        colorTemp={item.color}

                                    />
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ background: "#f9fafb" }}>
                <div className="container">
                <HistoriaTimeline data={jsonHistoria} />
                </div>
            </div>
        </>
    );
}
