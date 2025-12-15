import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import SectionHeader from '../../components/view/sectionHeader';
import CardSkeletonPromocion from "../../components/cardSkeletonPromocion";
import "./promocion.css";
import BotonFiltroPromocion from "../../components/view/botonFiltroPromocion";
import { LanguageContext } from "../../context/context";
import CardPromo from '../../components/cardPromo';
import CustomSelect from '../../components/customSelect';
import { Funnel } from 'lucide-react';

export function Promocion() {
    const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
    const [activeBtn, setActiveBtn] = useState("TODOS");

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

        }
    } catch (error) {
        console.error('Error al parsear promocionesImagen:', error);
        ImgPromociones = [];
    }

    const navigate = useNavigate();
    const categoriasPromocion = [
        "TODOS",
        ...new Set(
            ImgPromociones
                .map(seg => seg.categoria)
                .filter(Boolean)
        )
    ];
    const promocionesFiltradas =
    activeBtn === "TODOS"
      ? ImgPromociones
      : ImgPromociones.filter(
          promo =>
            promo.categoria?.trim().toLowerCase() ===
            activeBtn.trim().toLowerCase()
        );
    const countPromocion = promocionesFiltradas.length;
    const rutaImagenFondo =
        window.innerWidth <= 576
            ? "/images/fondoPromocionCelular.png"
            : configuracionData?.rutapromocionesportada;
    return (
        <div style={{ background: "##ffffff" }}>
            <div className="promocion-container"
                style={{
                    // backgroundImage: `url('${configuracionData?.rutapromocionesportada}')`,
                    backgroundImage: `url('${rutaImagenFondo}')`,
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
            <div className=''>
                <div className="container" style={{ paddingBottom: "80px", paddingTop: "80px" }}>
                    <div className='row g-4 '>
                        <SectionHeader
                            titulo={configuracionData?.tituloPromocion}
                            cuerpo={configuracionData?.descripcionPromocion}
                            titleSize="clamp(1.7rem, 4vw, 2rem)"
                            subtitleSize="clamp(1.3rem, 2vw, 1.4rem)"
                        />
                    </div>
                </div>
                <div className='contenidoFiltroPromocion' style={{ background: '#f9fafb', paddingTop: '30px', paddingBottom:'30px' }}>
                    <div className="container">
                        <div className="row" id="contenidoFiltrosProductos">
                            <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 d-flex flex-column flex-md-row align-items-md-center gap-3">
                                <span style={{ fontSize: '18px', whiteSpace: 'nowrap' }}>
                                    <Funnel size={20} /> Filtrar por Categoría:
                                </span>

                                <CustomSelect
                                    productosLimpios={categoriasPromocion}
                                    opcion="A"
                                    value={activeBtn}
                                    onChange={(valor) => setActiveBtn(valor)}
                                />
                               <span style={{ fontSize: '18px', whiteSpace: 'nowrap' }}>
                                   {countPromocion}  bonos
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container" style={{ paddingBottom: "60px", paddingTop: "80px" }}>
                <div className="row">
                    {promocionesFiltradas.length === 0 ? (
                        Array(4).fill(0).map((_, index) =>
                            <div
                                key={index}
                                className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex"
                                style={{ marginBottom: "34px" }}
                            >
                                <CardSkeletonPromocion key={index} /> </div>)
                    ) : (
                        promocionesFiltradas.map((item, index) => (
                            <div
                                key={index}
                                className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex"
                                style={{ marginBottom: "34px" }}
                            >
                                <CardPromo

                                    titulo={item.titulo}
                                    categoria={item.categoria}
                                    cuerpo={item.descripcion}
                                    imagen={item.imagen}

                                    whatsapp={configuracionData?.whatsapp || ''}
                                />

                            </div>
                        ))
                    )}

                </div>
            </div>
            <div style={{ background: '#002857', paddingBottom: '40px' }}>
                <div className="terminos-wrapper">
                    <h2 className="terminos-title">Términos y condiciones</h2>

                    <ul className="terminos-list">
                        <li>Las promociones están sujetas a disponibilidad de inventario.</li>
                        <li>Los descuentos no son acumulables con otras promociones.</li>
                        <li>La financiación está sujeta a aprobación de la entidad financiera.</li>
                        <li>Las promociones pueden variar según la ciudad y sede.</li>
                        <li>
                            Consulta con nuestros asesores para más detalles sobre cada promoción.
                        </li>
                        <li>
                            Válido solo en sedes participantes de Motos de la Capital.
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{ background: '#002857', paddingBottom: '40px' }}>
                <div className="container contenido-promocion-2" >
                    <div className='row g-4' style={{ paddingTop: '60px' }}>
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
            </div>


            <div className="container">
                {/* <div className='row g-4'>
                    <SectionHeader
                        titulo=''
                        cuerpo={configuracionData?.disponiblePromocion}
                        titleSize="clamp(1.5rem, 2.5vw, 1.8rem)"
                        subtitleSize="clamp(1rem, 1vw, 1rem)"
                        opcion='A'
                    />
                </div> */}
            </div>
        </div>

    );
}
