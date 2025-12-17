import './home.css';
import Cards from '../../components/view/card';
import SectionHeader from '../../components/view/sectionHeader';
import SectionHeaderLiteBtn from '../../components/view/sectionHeaderLiteBtn';
import BotonFiltro from '../../components/view/botonFiltro';
import BotonFiltroPromocion from '../../components/view/botonFiltroPromocion/index.jsx';
import Contacto from '../../components/view/contacto'
import CarouselHero from '../../components/carousel';
import RepuestoServicio from '../../components/repuestoServicio';
import { useState, useEffect, useContext } from "react";
import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { LuMessageCircle } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { LanguageContext } from '../../context/context.jsx';
import CardSkeleton from '../../components/CardSkeleton/index.jsx';
import AseguradoraCard from '../../components/view/aseguradoraCard';
import { MapPin } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Package } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CircleCheckBig } from 'lucide-react';
import { useRef } from "react";
import CardSedes from '../../components/cardSedes/index.jsx';
import CardAliados from '../../components/cardAliados/index.jsx';

export function Home() {

    const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
    const location = useLocation();
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState("inicio");
    const rutaImgPortada = '/images/FondoMotoAndes.png';
    const rutaImgPortada_2 = '/images/FondoMoto2.png';
    const [activeBtn, setActiveBtn] = useState("TODOS");

    //AYODERA
    const [activeDepto, setActiveDepto] = useState(null);
    const [activeCity, setActiveCity] = useState(null);
    const [activeRpt, setActiveRpt] = useState(true);


    const aliados = [
        { imagen: "/images//bancoBogota.png", titulo: "Banco de Bogotá", cuerpo: "Créditos con tasas preferenciales" },
        // { imagen: "/images//vanti.png", titulo: "Vanti", cuerpo: "Soluciones financieras innovadoras con apoyo integral y constante." },
        { imagen: "/images//crediorbe.png", titulo: "CrediOrbe", cuerpo: "Financiación flexible" },
        { imagen: "/images//progreser.png", titulo: "ProgreSer", cuerpo: "Soluciones de crédito rápido" },
        { imagen: "/images//sistecredito.png", titulo: "SisteCrédito", cuerpo: "Planes de financiación accesibles" },
        { imagen: "/images//Addi.png", titulo: "Addi", cuerpo: "Apoyo financiero especializado" },
        { imagen: "/images//sufi.png", titulo: "Sufi", cuerpo: "Créditos para motos" },
        { imagen: "/images//Finamiga.png", titulo: "Finamiga", cuerpo: "Tu aliado en financiación" },
        { imagen: "/images//Venfi.png", titulo: "Venfi", cuerpo: "Beneficios en crédito" }
    ];
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const jsonInfo = [
        { icono: 'bike', titulo: 'Variedad de modelos', detalle: 'Amplia gama de motocicletas Hero para cada estilo de vida y necesidad', menu: 'modelos' },
        { icono: 'configure', titulo: 'Servicio postventa', detalle: 'Mantenimiento especializado y repuestos originales con garantía completa', menu: 'venta' },
        { icono: 'info', titulo: 'Conócenos', detalle: 'Nuestra historia, valores y compromiso contigo', menu: '/conocenos' }
    ]

    const jsonsedes = [
        {
            nombre: 'Medellín - Barrio Belén',
            direccion: 'Carrera 76 #28-115, Medellín',
            telefono: '(604) 456 7890',
            horario: 'Lunes a Sábado: 07:00 AM - 06:00 PM',
            email: 'medellinbelen@auteco.com',
            rutagoogle: 'https://www.google.com/maps/search/Carrera+76+28-115+Medellín'
        }
        ,
        {
            nombre: 'Bello',
            direccion: 'Carrera 50 #33-90, Bello',
            telefono: '(604) 456 7891',
            horario: 'Lunes a Sábado: 07:00 AM - 06:00 PM',
            email: 'bello@auteco.com',
            rutagoogle: 'https://www.google.com/maps/search/Carrera+50+33-90+Bello'
        }
    ]
    const jsonelegirnos = [

        {
            icono: 'shield',
            titulo: 'Respaldo oficial Auteco',
            detalle: 'Distribuidores autorizados con garantía de fábrica',
            servicio: [],
            btn: ''
        },
        {
            icono: 'confi',
            titulo: 'Servicio técnico certificado',
            detalle: 'Técnicos especializados y capacitados',
            servicio: [],
            btn: ''
        },
        {
            icono: 'setting',
            titulo: 'Atención personalizada',
            detalle: 'Te acompañamos en cada paso de tu compra',
            servicio: [],
            btn: ''
        },
        {
            icono: 'package',
            titulo: 'Repuestos originales y garantía',
            detalle: 'Piezas genuinas para mayor durabilidad',
            servicio: [],
            btn: ''
        }

    ]
    const jsonServicioPosventa = [
        {
            icono: 'package',
            titulo: 'Repuestos originales',
            detalle: 'Piezas genuinas de fábrica para tu moto',
            servicio: [],
            btn: ''
        },

        {
            icono: 'confi',
            titulo: 'Servicio técnico',
            detalle: 'Mantenimiento y diagnóstico especializado',
            servicio: [],
            btn: ''
        },
        {
            icono: 'setting',
            titulo: 'Aliados financieros',
            detalle: 'Financiación y crédito accesible',
            servicio: [],
            btn: ''
        },
        {
            icono: 'shield',
            titulo: 'Seguros',
            detalle: 'Convenio con aseguradoras de confianza',
            servicio: [],
            btn: ''
        }

    ]
    const jsonGarantias = [
        {
            icono: '/images/Escobarduque.png',
            titulo: 'Escobar y Duque',
            detalle: 'Protección integral para tu moto',
            servicio: [],
            btn: ''
        },

        {
            icono: '/images/garantimotos.png',
            titulo: 'Garantimotos',
            detalle: 'Seguros especializados en motocicletas',
            servicio: [],
            btn: ''
        }]
    const { productos, productoSeleccionado, marcaFiltro, getProductos, getSegmentos, segmentos, configuracionData = [], desplazamiento, getCofiguracion } = useContext(LanguageContext);
    useEffect(() => {
        getProductos();
        console.log(productos)

    }, []);
    useEffect(() => {
        if (configuracionData) {
            getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
        }
    }, []);
    let departamentos = []

    try {
        if (configuracionData?.sucursal) {
            departamentos = JSON.parse(configuracionData?.sucursal);
            // console.log(departamentos)
        }
    } catch (error) {
        console.error('Error al parsear promocionesImagen:', error);
        departamentos = [];
    }

    const selectedDepto = departamentos.find((d) => d.nombre === activeDepto);
    const selectedCity = selectedDepto?.ciudades.find((c) => c.nombre === activeCity);

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

    //consumo API
    const buttons = ["TODOS", ...segmentos.map(seg => seg.segmento_nombre)];
    const [cantidadMostrar, setCantidadMostrar] = useState(4);

    let id_tempProductos = ["400", "478", "557", "552"]
    const productosFiltrados = productos.filter((producto) => {
        return (
            producto.lista_precio_id === "1" &&
            id_tempProductos.includes(String(producto.producto_id))
        );
    });


    const productosParaMostrar = productosFiltrados.slice(0, cantidadMostrar);
    const cargarMas = () => {
        setCantidadMostrar((prev) => prev + 8);
    };

    useEffect(() => {
        setCantidadMostrar(4);
    }, [marcaFiltro, activeBtn]);

    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

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
    const handleClickWhatsapp = () => {

        const telefono = "57" + configuracionData?.whatsapp;
        const mensaje = "Hola, quiero más información";
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    };
    let imageTemp = ["/images/FondoMotosCapital.png"]
    return (

        <div style={{ background: '#f9fafb' }}>
            {/* Menu de inicio */}
            <div id="inicio" className='contenedor-carousel'>
                {/* <CarouselHero img={configuracionData?.rutaImgCarrousel || ''} /> */}
                <CarouselHero img={imageTemp} />
            </div>

            <div id="modelos" className='home--contenido--2' >
                {/* Modelos */}
                <div style={{ background: '#f9fafb', paddingBottom: '30px', paddingTop: '20px' }}>
                    <div className="container my-5">
                        <SectionHeader
                            titulo='Modelos destacados'
                            cuerpo='Descubre nuestra selección de motos más populares con la calidad y respaldo de Auteco'
                            titleSize="clamp(1.1rem, 3vw, 1.2rem)"
                            subtitleSize="clamp(1.1rem, 2vw, 1.1rem)"
                        />
                    </div>
                    <div className='container'>
                        <div className="row custom-gap">
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
                          
                            {1 === 1 && (
                                <div className="text-center mt-4">
                                    <button className="btn btn-outline-primary btn__mostrarMas" onClick={() => handleNavigation('/modelos')}>
                                        <span className='spanicono--mostrar'></span> Ver todos los modelos
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div style={{ background: '#002857', paddingTop: '10px', paddingBottom: '20px' }}>
                    <div className="container my-5">

                        <div id="elegir" className='row g-4'>
                            <SectionHeader
                                titulo='¿Por qué elegirnos?'
                                cuerpo='Somos tu mejor opción para adquirir tu moto ideal'
                                titleSize="clamp(1.2rem, 2vw, 1.4rem)"
                                subtitleSize="clamp(1.2rem, 2vw, 1.3rem)"
                                opcion='D'
                            />
                        </div>
                        <div className='row g-4 align-items-stretch'>
                            {jsonelegirnos.map((item, index) => (
                                <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                                    <Cards
                                        key={index}
                                        icono={item.icono}
                                        titulo={item.titulo}
                                        categoria=""
                                        cuerpo={item.detalle}
                                        precio=""
                                        listaItems={item.servicio}
                                        imagen=""
                                        opcion='EL'
                                        btn={item.btn}
                                        whatsapp={configuracionData?.whatsapp || ''}

                                    />
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
                <div className='home--contenido--1' style={{ background: '#f9fafb' }}>
                    <div className="container  my-2" style={{ paddingBottom: '40px' }}>
                        <div className='row g-4 justify-content-center video-youtube-container'>
                            <SectionHeaderLiteBtn
                                titulo='Conoce más sobre la pasión que nos mueve'
                                cuerpo='Mira nuestro recorrido, calidad y compromiso con la movilidad en Colombia'
                                urlyoutube={configuracionData?.rutaYoutube || ''}
                                opcion='A'
                            />

                        </div>
                    </div>
                </div>
                <div style={{ background: '#002857', paddingTop: '50px', paddingBottom: '50px' }}>
                    <div className="container my-5">
                        {/* Venta */}
                        <div id="venta" className='row g-4'>
                            <SectionHeader
                                titulo='Servicios & Posventa'
                                cuerpo='Te acompañamos después de tu compra con servicios integrales'
                                titleSize="clamp(1.2rem, 2vw, 1.4rem)"
                                subtitleSize="clamp(1.2rem, 2vw, 1.3rem)"
                                opcion='D'
                            />
                        </div>
                        <div className='row g-4 align-items-stretch' style={{ paddingBottom: '20px' }}>
                            {jsonServicioPosventa.map((item, index) => (
                                <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                                    <Cards
                                        key={index}
                                        icono={item.icono}
                                        titulo={item.titulo}
                                        categoria=""
                                        cuerpo={item.detalle}
                                        precio=""
                                        listaItems={item.servicio}
                                        imagen=""
                                        opcion='S'
                                        btn={item.btn}
                                        whatsapp={configuracionData?.whatsapp || ''}

                                    />
                                </div>
                            ))}

                        </div>
                        {/* Ubicacion  */}
                        <div id="ubicacions" >
                            <div className="text-center mt-3">
                                <button className="btn btn-outline-primary btn__mostrarMasposventa" onClick={() => handleNavigation('/posventa')}>
                                    <span className='spanicono--mostrar'></span> Ver más servicios
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* yodera */}
            <div id="id_repuesto" className="" style={{ backgroundColor: '#002857', paddingTop: '11px', paddingBottom: '16px' }}>

            </div>
            {/* cierre */}
            <div className='home--contenido--1' id='ubicacionInicio'>
                <div className="container">
                    <div className='row g-4 justify-content-center video-youtube-container'>
                        <SectionHeaderLiteBtn
                            titulo='Nuestras sedes'
                            cuerpo='Encuentra la sede más cercana a ti'
                            // urlyoutube={configuracionData?.rutaYoutube || ''}
                            urlyoutube='https://www.google.com/maps/d/embed?mid=1gRAIm7L8z1PJkijFCnytPydBaHtAUFA&amp;ehbc=2E312F'
                            opcion='B'
                        />

                    </div>
                    <div className='' style={{ alignItems: 'center', justifyItems: 'center', paddingTop: '50px', paddingBottom: '35px' }}>
                        <p style={{ fontFamily: 'Good Timing, Montserrat, sans-serif', fontSize: '20px', color: 'black' }}>Ubicaciones de nuestras sedes</p>
                    </div>
                    <div className='row g-4 align-items-stretch' style={{ paddingBottom: '20px' }}>
                        {jsonsedes.map((item, index) => (
                            <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                                <CardSedes
                                    key={index}
                                    titulo={item.nombre}
                                    direccion={item.direccion}
                                    telefono={item.telefono}
                                    horario={item.horario}
                                    email={item.email}
                                    rutaMaps={item.rutagoogle}

                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className='' style={{ background: '#002857', paddingBottom: '50px' }}>
                <div className="container my-4" id='aliados'>
                    <div className='row g-4 card--stecnico'>
                        <SectionHeader
                            titulo='Aliados Financieros'
                            cuerpo='Trabajamos con las mejores entidades financieras para ofrecerte opciones de crédito accesibles y flexibles'
                            titleSize="clamp(1.2rem, 3vw, 1.5rem)"
                            subtitleSize="clamp(1.1rem, 2vw, 1.2rem)"
                            opcion='AL'
                        />
                    </div>

                    <div className="row g-4 justify-content-center" style={{ marginBottom: "50px" }}>
                        {aliados.map((aliado, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 " key={index}>
                                <CardAliados
                                    imagen={aliado.imagen}
                                    titulo={aliado.titulo}
                                    cuerpo={aliado.cuerpo}
                                />
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className="text-center mt-3">
                            <button className="btn btn-outline-primary btn__mostrarMasposventa" onClick={() => handleNavigation('/cotizacion')}>
                                <span className='spanicono--mostrar'></span> Solicitar financiación
                            </button>
                        </div>
                    </div>

                </div>

            </div>
            <div style={{ background: '#f9fafb', paddingBottom: '50px' }}>
                <div className='container'>
                    <div className='row'>
                        <AseguradoraCard icono='./images/garantimotos.png' titulo='Garantimotos' descripcion='Protección confiable para que disfrutes tu moto con tranquilidad.' jsonGarantias={jsonGarantias} />
                    </div>
                    <div>
                    <div className="">
                        <SectionHeader
                            titulo=''
                            cuerpo='Ofrecemos asesoría personalizada para que elijas el seguro que mejor se adapte a tus necesidades'
                            titleSize="clamp(1.1rem, 3vw, 1.2rem)"
                            subtitleSize="clamp(1.1rem, 2vw, 1.1rem)"
                        />
                    </div>
                        <div className="text-center">
                            <button className="btn btn-outline-primary btn__mostrarMas" onClick={handleClickWhatsapp} rel="noopener noreferrer">
                                <span className='spanicono--mostrar'></span> Consultar por seguros
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
