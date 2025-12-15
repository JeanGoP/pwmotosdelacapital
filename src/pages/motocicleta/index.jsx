import React from "react";
import './motocicleta.css'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Moto360Viewer from "../../components/moto360Viewer";
import CardMotoDetalle from "../../components/cardMotoDetalle";
import SectionHeader from "../../components/view/sectionHeader";
import CardDetalle from "../../components/cardDetalle";
import Interesar from "../../components/interesar";
export function Motocicleta() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState("inicio");
    const motosTemp = ["/images/moto_1.png", "/images/moto_2.png", "/images/moto_3.png", "/images/moto_4.png", "/images/moto_5.png", "/images/moto_6.png"]
    const moto = location.state?.moto;
    if (!moto) {
        return <p>No se encontró información de la motocicleta.</p>;
    }

    const [coloresMoto, setColoresMoto] = useState(() => {
        if (moto?.color && moto.color.length > 0) {
            return moto.color.map((c, index) => ({
                nombre: c.color_name,
                colorHex: c.color_code && c.color_code.trim() !== "" ? c.color_code : "#ffff",
                extra:
                    index === 0 && moto?.imagenes && moto.imagenes.length > 0
                        ? "Vista 360º"
                        : null
            }));
        }
        return [];
    });

    const getFichaPorNombres = (fichaTecnica=[], nombres=[]) => {
        return fichaTecnica
            .filter(item => nombres.includes(item.ficha_tecnica_name))
            .map(item => ({
                nombre: item.ficha_tecnica_name,
                detalle: item.ficha_tecnica_detalle
            }));
    };
    const nombres_ficha = [
        { nombre: 'DESPLAZAMIENTO', nombre_reemplazo: 'Desplazamiento' },
        { nombre: 'MOTOR', nombre_reemplazo: 'Tipo de motor' },
        { nombre: 'RELACION COMPRESION', nombre_reemplazo: 'Relación de compresión' },
        { nombre: 'ALIMENTACION', nombre_reemplazo: 'Alimentación' },
        { nombre: 'ENCENDIDO', nombre_reemplazo: 'Encendido' },
        { nombre: 'POTENCIA', nombre_reemplazo: 'Potencia máxima' },
        { nombre: 'TORQUE', nombre_reemplazo: 'Torque máximo' },
        { nombre: 'CAPACIDAD DE TANQUE', nombre_reemplazo: 'Capacidad del tanque' },
        { nombre: 'TRASMISION', nombre_reemplazo: 'Transmisión' },
        { nombre: 'PESO', nombre_reemplazo: 'Peso total' },
        { nombre: 'LONGITUD MAXIMA', nombre_reemplazo: 'Longitud máxima' },
        { nombre: 'ANCHO MAXIMO', nombre_reemplazo: 'Ancho máximo' },
        { nombre: 'ALTURA MAXIMA', nombre_reemplazo: 'Altura máxima' },
        { nombre: 'DISTANCIA ENTRE EJES', nombre_reemplazo: 'Distancia entre ejes' },
        { nombre: 'DISTANCIA AL SUELO', nombre_reemplazo: 'Distancia al suelo' },
        { nombre: 'ALTURA ASIENTO', nombre_reemplazo: 'Altura del asiento' }
    ]
    const getNombreReemplazo = (nombre) => {
        const encontrado = nombres_ficha.find(n => n.nombre === nombre);
        return encontrado ? encontrado.nombre_reemplazo : nombre;
    };
    const ficha_tecnica_cilindraje = getFichaPorNombres(moto.ficha_tecnica ?? [], ['DESPLAZAMIENTO', 'MOTOR', 'RELACION COMPRESION', 'ALIMENTACION', 'ENCENDIDO'])
    const ficha_tecnica_potencia = getFichaPorNombres(moto.ficha_tecnica ?? [], ['POTENCIA', 'TORQUE', 'CAPACIDAD DE TANQUE'])
    const ficha_tecnica_torque = getFichaPorNombres(moto.ficha_tecnica ?? [], ['TORQUE', 'TRASMISION', 'POTENCIA'])
    const ficha_tecnica_peso = getFichaPorNombres(moto.ficha_tecnica ?? [], ['PESO', 'LONGITUD MAXIMA', 'ANCHO MAXIMO', 'ALTURA MAXIMA', 'DISTANCIA ENTRE EJES', 'DISTANCIA AL SUELO', 'ALTURA ASIENTO'])

    const imagenMoto = moto.imagen_portada || "/images/nophoto.jpg"
    const imagenTemp = [imagenMoto]
    const [imgMotos360, setImgMotos360] = useState(
        moto?.imagenes && moto.imagenes.length > 0
            ? moto.imagenes
            : imagenTemp//motosTemp//["/images/nophoto.jpg"]
    );
    const cant =  moto?.imagenes && moto.imagenes.length > 0 ? '2' :'1'
    const handleNavigation = (id) => {
        setActiveMenu(id);
        navigate("/modelos", { state: { scrollTo: id } });
    };
    return (
        <>
            <div style={{ background: "#ffffff" }}>
                <div className="motocicleta-container"
                    style={{
                        backgroundImage: `url(${imagenMoto})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                    }} >
                    {/* Botón circular */}
                    <button className="back-button" onClick={() => handleNavigation("modelos")}>
                        <FaArrowLeft />
                    </button>

                    {/* Título centrado */}
                    <div className="promocion-overlay">
                        <p>{moto.producto_nombre}</p>
                    </div>
                </div>

                <div className="container-fluid contenido--caracteristicas my-5">
                    <div className="row ">
                        <div className="col-sm-12 col-md-12 col-lg-6" style={{ marginBottom: "30px" }}>
                            <Moto360Viewer images={imgMotos360} op={cant} />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <CardMotoDetalle
                                nombre={moto.producto_nombre || 'No hay registro'}
                                subtitulo={
                                    moto.segmento && moto.segmento.length > 0 && moto.segmento[0] !== ""
                                      ? moto.segmento[0]
                                      : "TODOS"
                                  }
                                descripcion={moto.descripcion_amplia || 'No hay registro'}
                                precio={(() => {
                                    const precios = moto.precio || {};
                                    const añosDisponibles = Object.keys(precios)
                                        .map(Number)
                                        .filter((año) => precios[año]);

                                    if (añosDisponibles.length === 0) {
                                        return "Precio No Disponible";
                                    }

                                    const añoMasReciente = Math.max(...añosDisponibles);
                                    const precio = precios[añoMasReciente];

                                    return `${Number(precio).toLocaleString("es-CO", {
                                        style: "currency",
                                        currency: "COP",
                                        minimumFractionDigits: 0,
                                    })}`;
                                })()}
                                colores={coloresMoto}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: "#f9fafb", paddingTop: "20px" }}>
                <div className="container-fluid contenido--caracteristicas">
                    <div className='row g-4 '>
                        <SectionHeader
                            titulo='CARACTERÍSTICAS DESTACADAS'
                            cuerpo=''
                            titleSize="clamp(1rem, 4vw, 2rem)"
                            subtitleSize="clamp(1.3rem, 2vw, 1.27rem)"
                        />
                    </div>
                    <div className="row row--cards-especificiacion">
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{ paddingBottom: "40px" }}>
                            <CardDetalle
                                titulo="CILINDRAJE"
                                contenido={
                                    <div>
                                        <hr className="hr--card--" />
                                        <h5 className="card-titulo-h5">ESPECIFICACIONES DEL MOTOR</h5>

                                        {ficha_tecnica_cilindraje.every(item => !item.detalle) ? (
                                            <p className="text-muted">No hay resultados</p>
                                        ) : (
                                            ficha_tecnica_cilindraje.map((item, index) => (
                                                <div className="card-item-detalle" key={index}>
                                                    <span>
                                                        <b>{getNombreReemplazo(item.nombre)}:</b>
                                                    </span>
                                                    <span className="valor-detalle">
                                                        {item.detalle ? item.detalle : "No disponible"}
                                                    </span>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                }
                                icono="zap"
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{ paddingBottom: "40px" }}>
                            <CardDetalle
                                titulo="POTENCIA"
                                contenido={
                                    <div>
                                        <hr className="hr--card--" />
                                        <h5 className="card-titulo-h5">RENDIMIENTO Y POTENCIA</h5>

                                        {ficha_tecnica_potencia.every(item => !item.detalle) ? (
                                            <p className="text-muted">No hay resultados</p>
                                        ) : (
                                            ficha_tecnica_potencia.map((item, index) => (
                                                <div className="card-item-detalle" key={index}>
                                                    <span>
                                                        <b>{getNombreReemplazo(item.nombre)}:</b>
                                                    </span>
                                                    <span className="valor-detalle">
                                                        {item.detalle ? item.detalle : "No disponible"}
                                                    </span>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                }
                                icono="Activity"
                            />
                        </div>
                    </div>
                    <div className="row row--cards-especificiacion" style={{ paddingBottom: "40px" }}>
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{ paddingBottom: "40px" }}>
                            <CardDetalle
                                titulo="TORQUE"
                                contenido={
                                    <div>
                                        <hr className="hr--card--" />
                                        <h5 className="card-titulo-h5">TORQUE Y TRANSMISIÓN</h5>

                                        {ficha_tecnica_torque.every(item => !item.detalle) ? (
                                            <p className="text-muted">No hay resultados</p>
                                        ) : (
                                            ficha_tecnica_torque.map((item, index) => (
                                                <div className="card-item-detalle" key={index}>
                                                    <span>
                                                        <b>{getNombreReemplazo(item.nombre)}:</b>
                                                    </span>
                                                    <span className="valor-detalle">
                                                        {item.detalle ? item.detalle : "No disponible"}
                                                    </span>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                }
                                icono="Wrench"
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{ paddingBottom: "40px" }}>
                            <CardDetalle
                                titulo="PESO"
                                contenido={
                                    <div>
                                        <hr className="hr--card--" />
                                        <h5 className="card-titulo-h5">DIMENSIONES Y PESO</h5>

                                        {ficha_tecnica_peso.every(item => !item.detalle) ? (
                                            <p className="text-muted">No hay resultados</p>
                                        ) : (
                                            ficha_tecnica_peso.map((item, index) => (
                                                <div className="card-item-detalle" key={index}>
                                                    <span>
                                                        <b>{getNombreReemplazo(item.nombre)}:</b>
                                                    </span>
                                                    <span className="valor-detalle">
                                                        {item.detalle ? item.detalle : "No disponible"}
                                                    </span>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                }
                                icono="Scale"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: "#ffffff" }}>
                <div className="container-fluid contenido--caracteristicas" style={{ paddingBottom: "30px", paddingTop:"30px" }}>
                    <div className='row g-4'>
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{ paddingBottom: "10px" }}>
                            <Interesar opcion="A" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{ paddingBottom: "10px" }}>
                            <Interesar opcion="B" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}