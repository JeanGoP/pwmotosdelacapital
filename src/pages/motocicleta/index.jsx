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
import Especificaciones from "../../components/especificaciones";
export function Motocicleta() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState("inicio");
    const [detalleActivo, setDetalleActivo] = useState(null);
    const motosTemp = ["/images/moto_1.png", "/images/moto_2.png", "/images/moto_3.png", "/images/moto_4.png", "/images/moto_5.png", "/images/moto_6.png"]
    const moto = location.state?.moto;
    if (!moto) {
        return <p>No se encontró información de la motocicleta.</p>;
    }
    console.log(moto)
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

    const getFichaPorNombres = (fichaTecnica = [], ids = []) => {
        return fichaTecnica
            .filter(item => ids.includes(item.ficha_tecnica_id))
            .map(item => ({
                nombre: item.ficha_tecnica_name,
                detalle: item.ficha_tecnica_detalle
            }));
    };

    const ficha_tecnica_cilindraje = getFichaPorNombres(moto.ficha_tecnica ?? [], ['1', '11', '5', '4'])
    const ficha_tecnica_potencia = getFichaPorNombres(moto.ficha_tecnica ?? [], ['21', '12'])
    const ficha_tecnica_torque = getFichaPorNombres(moto.ficha_tecnica ?? [], ['22', '28'])
    const ficha_tecnica_peso = getFichaPorNombres(moto.ficha_tecnica ?? [], ['16', '13'])

    const imagenMoto = moto.imagen_portada || "/images/nophoto.jpg"
    const imagenTemp = [imagenMoto]
    const [imgMotos360, setImgMotos360] = useState(
        moto?.imagenes && moto.imagenes.length > 0
            ? moto.imagenes
            : imagenTemp//motosTemp//["/images/nophoto.jpg"]
    );
    const cant = moto?.imagenes && moto.imagenes.length > 0 ? '2' : '1'
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
                                nombre={moto.marca_nombre || 'No hay registro'}
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
                    <div className='row g-4 justify-content-center align-items-center text-center'>
                        <p style={{ fontSize: '28px', color: '#1f325b', paddingTop: '20px', paddingBottom: '20px' }}>Ver más detalles del modelo</p>
                    </div>
                    <div className="row row--cards-especificiacion">
                        <div className="col-sm-12 col-md-3 col-lg-3" style={{ paddingBottom: "40px" }}>
                            <CardDetalle
                                titulo="Especificacione Destacadas"
                                icono="Gauge"
                                json={ficha_tecnica_cilindraje}
                                activo={detalleActivo?.titulo === "Especificaciones Destacadas"}
                                onClick={() =>
                                    setDetalleActivo({
                                        titulo: "Especificaciones Destacadas",
                                        json: ficha_tecnica_cilindraje
                                    })
                                }
                            />
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3" style={{ paddingBottom: "40px" }}>
                            <CardDetalle
                                titulo="Potencia"
                                icono="Zap"
                                json={ficha_tecnica_potencia}
                                activo={detalleActivo?.titulo === "Potencia"}
                                onClick={() =>
                                    setDetalleActivo({
                                        titulo: "Potencia",
                                        json: ficha_tecnica_potencia
                                    })
                                }
                            />
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3" style={{ paddingBottom: "40px" }}>
                            <CardDetalle
                                titulo="Torque"
                                icono="Activity"
                                json={ficha_tecnica_torque}
                                activo={detalleActivo?.titulo === "Torque"}
                                onClick={() =>
                                    setDetalleActivo({
                                        titulo: "Torque",
                                        json: ficha_tecnica_torque
                                    })
                                }
                            />
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3" style={{ paddingBottom: "40px" }}>
                            <CardDetalle
                                titulo="Peso"
                                icono="Weight"
                                json={ficha_tecnica_peso}
                                activo={detalleActivo?.titulo === "Peso"}
                                onClick={() =>
                                    setDetalleActivo({
                                        titulo: "Peso",
                                        json: ficha_tecnica_peso
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12" style={{ paddingBottom: "40px" }}>
                            {detalleActivo && (
                                <div className="row">
                                    <div className="col-12 pb-4">
                                        <Especificaciones
                                            titulo={detalleActivo.titulo}
                                            json={detalleActivo.json}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ background: "#ffffff" }}>
                <div className="container-fluid contenido--caracteristicas" style={{ paddingBottom: "50px", paddingTop: "50px" }}>
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