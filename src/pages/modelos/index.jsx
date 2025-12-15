import React, { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '../../context/context';
import { useLocation, useNavigate } from 'react-router-dom';
import './modelosMotocicleta.css'
import { FaArrowLeft } from 'react-icons/fa';
import BotonFiltro from '../../components/view/botonFiltro';
import CardSkeleton from '../../components/CardSkeleton';
import Cards from '../../components/view/card';
import CustomSelect from '../../components/customSelect'
import { Funnel } from "lucide-react";
import SectionHeader from '../../components/view/sectionHeader';

export function Modelos() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeBtn, setActiveBtn] = useState("TODOS");
    const [activeMenu, setActiveMenu] = useState("/modelos");
    const { productos, productoSeleccionado, marcaFiltro, getProductos, getSegmentos, segmentos, configuracionData = [], desplazamiento, getCofiguracion, getMarcasProductos, marcasProductos, setMarcaFiltro } = useContext(LanguageContext);
    useEffect(() => {
        getProductos();
        getMarcasProductos();
    }, []);
    useEffect(() => {
        const target = location.state?.scrollTo;
        if (target) {

            setTimeout(() => {
                const el = document.getElementById(target);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

                navigate(".", { replace: true, state: null });
            }, 0);
        }
    }, [location.state, navigate]);

    const MarcasProductosLimpios = [
        "TODOS",
        ...new Set(
            marcasProductos
                .filter(m => m.marca_nombre)
                .map(m => m.marca_nombre)
        )
    ].reverse();

    const buttons = ["TODOS", ...segmentos.map(seg => seg.segmento_nombre)];
    const [cantidadMostrar, setCantidadMostrar] = useState(8);

    const productosFiltrados = productos.filter((producto) => {

        if (producto.lista_precio_id !== "1") return false;

        const marcaProducto = producto.marca_nombre?.toUpperCase() || "";
        const segmentoProducto = (producto.segmento || []).map(s => s?.toUpperCase());

        const marcaSeleccionada = marcaFiltro ? marcaFiltro.toUpperCase() : null;
        const segmentoSeleccionado = activeBtn?.toUpperCase();


        const cumpleMarca = !marcaSeleccionada || marcaProducto === marcaSeleccionada;


        const cumpleSegmento =
            segmentoSeleccionado === "TODOS"
                ? true
                : segmentoProducto.includes(segmentoSeleccionado);


        return cumpleMarca && cumpleSegmento;
    });



    const productosParaMostrar = productosFiltrados.slice(0, cantidadMostrar);
    const cargarMas = () => {
        setCantidadMostrar((prev) => prev + 8);
    };

    useEffect(() => {
        setCantidadMostrar(16);
    }, [marcaFiltro, activeBtn]);

    const handleNavigation = (idOrPath) => {
        setActiveMenu(idOrPath);

        if (idOrPath.startsWith("/")) {
            navigate(idOrPath);
        } else {
            if (location.pathname !== "/") {
                navigate("/", { state: { scrollTo: idOrPath } });
            } else {
                scrollToId(idOrPath);
            }
        }
    };

    const rutaImagenFondo =
        window.innerWidth <= 576
            ? "/images/FondoModelosCelular.png"
            : "/images/FondoModelos.png";
    return (
        <div style={{ background: "#f9fafb" }}>
            <div className="modelosMoto-container"
                style={{
                    //   backgroundImage: `url('${configuracionData?.rutaPortadaCotizador}')`,
                    backgroundImage: `url('${rutaImagenFondo}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >

                <button className="back-button" onClick={() => navigate("/")}>
                    <FaArrowLeft />
                </button>

            </div>
            <div style={{ background: '#f9fafb', paddingBottom:'30px'}}>
                <div className='contenedorFiltrosMotociletas' style={{background:'#fff',paddingTop:'30px'}}>
                    <div className="container my-5">
                        <div className='row' id='contenidoFiltrosProductos'>
                            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto' style={{ paddingBottom: '15px' }}><span style={{ fontSize: '18px' }}><Funnel size={20} /> Filtrar por:</span></div>
                            <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 mx-auto'>
                                <div style={{ paddingBottom: '10px' }}><span>Marca</span></div>
                                <div style={{ paddingBottom: '10px' }}>
                                    <CustomSelect productosLimpios={MarcasProductosLimpios}
                                        opcion='M'
                                        value={marcaFiltro ?? "TODOS"}
                                        onChange={(valor) => setMarcaFiltro(valor === "TODOS" ? null : valor)} /></div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mx-auto">
                                <div style={{ paddingBottom: '10px' }}><span>Categoría</span></div>
                                <div style={{ paddingBottom: '10px' }}>
                                    <CustomSelect
                                        productosLimpios={buttons}
                                        opcion="A"
                                        value={activeBtn}
                                        onChange={(valor) => setActiveBtn(valor)}
                                    /></div>
                            </div>
                            <div className="col-12 text-end mt-3">
                                <button
                                    className="btn btn-secondary px-4 py-2 btn__mostrarMas"
                                    onClick={() => {
                                        setMarcaFiltro(null);
                                        setActiveBtn("TODOS");
                                        setCantidadMostrar(16);
                                    }}
                                >
                                    Limpiar Filtros
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='container'>
                    <div className="row custom-gap" style={{ paddingTop: '30px' }}>
                        {productosParaMostrar.length === 0 ? (
                            Array(4).fill(0).map((_, index) => <CardSkeleton key={index} />)
                        ) : (
                            productosParaMostrar.map((producto, index) => (
                                <div
                                    key={index}
                                    className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex"
                                    style={{ marginBottom: "34px" }}
                                >
                                    <Cards
                                        icono=""
                                        titulo={producto.producto_nombre}
                                        categoria={producto.marca_nombre || ''}
                                        cuerpo={
                                            producto.segmento && producto.segmento.length > 0 && producto.segmento[0] !== ""
                                                ? producto.segmento[0]
                                                : "N/A"
                                        }
                                        precio={(() => {
                                            const precios = producto.precio || {};
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
                                        listaItems=""
                                        imagen={producto.imagen_portada || "/images/nophoto.jpg"}
                                        opcion="M"
                                        motObject={producto}
                                        cilindraje={
                                            Array.isArray(producto.ficha_tecnica)
                                                ? producto.ficha_tecnica.find(x => x.ficha_tecnica_id === '1')?.ficha_tecnica_detalle
                                                : " "
                                        }
                                    />
                                </div>
                            ))
                        )}
                        {productosParaMostrar.length > 0 && productosParaMostrar.length < productosFiltrados.length && (
                            <div className="text-center mt-4">
                                <button className="btn btn-outline-primary btn__mostrarMas" onClick={cargarMas}>
                                    <span className='spanicono--mostrar'></span> Ver todos los modelos
                                </button>
                            </div>
                        )}
                    </div>
                </div>

            </div>
            <div style={{ background: '#1f325b' }}>
                <div className='container' style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    <SectionHeader
                        titulo='¿No encuentras lo que buscas?'
                        cuerpo='Estamos aquí para ayudarte a encontrar la moto perfecta para ti'
                        titleSize="clamp(1.2rem, 2vw, 1.4rem)"
                        subtitleSize="clamp(1.2rem, 2vw, 1.3rem)"
                        opcion='D'
                    />
                    <div className="text-center mt-4" style={{paddingBottom:'25px'}}>
                        <button className="btn btn-outline-primary btn__mostrarMasModelos" onClick={() => handleNavigation('/cotizacion')}>
                            <span className='spanicono--mostrar'></span> Solicitar Cotización
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}