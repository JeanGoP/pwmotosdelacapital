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



    // const departamentos = [
    //     {
    //         nombre: 'Cundinamarca',
    //         ciudades: [
    //             {
    //                 nombre: 'Bogotá - Meissen',
    //                 direccion: 'CR 19 60 A 23 SUR LC 1',
    //                 telefono: '3132081680',
    //                 horarioSemana: '09:00 AM – 06:00 PM',
    //                 horarioSabado: '09:00 AM – 02:00 PM',
    //                 mapaUrl: 'https://www.google.com/maps/embed?...',
    //                 googleMapsLink: 'https://goo.gl/maps/XXXX',
    //                 contacto: {
    //                     nombre: 'Carolina Quiroga',
    //                     telefono: '3132081680',
    //                 },
    //             },
    //             {
    //                 nombre: 'Cartagena - Los ciruelos',
    //                 direccion: 'CR 19 60 A 23 SUR LC 1',
    //                 telefono: '3132081680',
    //                 horarioSemana: '09:00 AM – 06:00 PM',
    //                 horarioSabado: '09:00 AM – 02:00 PM',
    //                 mapaUrl: 'https://www.google.com/maps/embed?...',
    //                 googleMapsLink: 'https://goo.gl/maps/XXXX',
    //                 contacto: {
    //                     nombre: 'Jose Fortuna',
    //                     telefono: '3132081680',
    //                 },
    //             },
    //         ],
    //     },
    // ];
    // const selectedDepto = departamentos.find((d) => d.nombre === activeDepto);
    // const selectedCity = selectedDepto?.ciudades.find((c) => c.nombre === activeCity);

    const aliados = [
        { imagen: "/images//bancoBogota.png", titulo: "Banco de Bogotá", cuerpo: "Respaldo y confianza financiera para hacer realidad tus sueños." },
        // { imagen: "/images//vanti.png", titulo: "Vanti", cuerpo: "Soluciones financieras innovadoras con apoyo integral y constante." },
        { imagen: "/images//crediorbe.png", titulo: "CrediOrbe", cuerpo: "Financiamiento especializado con respaldo sólido y confiable." },
        { imagen: "/images//progreser.png", titulo: "ProgreSer", cuerpo: "Tu aliado de confianza para financiar el futuro con apoyo financiero integral." },
        { imagen: "/images//sistecredito.png", titulo: "SisteCrédito", cuerpo: "Respaldo financiero especializado con soluciones personalizadas y confianza." },
        { imagen: "/images//Addi.png", titulo: "Addi", cuerpo: "Respaldo financiero especializado con soluciones personalizadas y confianza." },
        { imagen: "/images//sufi.png", titulo: "Sufi", cuerpo: "Financiamiento ágil con procesos simplificados y respuesta rápida." },
        { imagen: "/images//Finamiga.png", titulo: "Finamiga", cuerpo: "Tu aliado financiero de confianza para cumplir tus metas de movilidad." },
        { imagen: "/images//Venfi.png", titulo: "Venfi", cuerpo: "Financiamiento especializado con condiciones preferenciales y seguras." }
    ];
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const jsonInfo = [
        { icono: 'bike', titulo: 'Variedad de modelos', detalle: 'Amplia gama de motocicletas Hero para cada estilo de vida y necesidad', menu: 'modelos' },
        { icono: 'configure', titulo: 'Servicio postventa', detalle: 'Mantenimiento especializado y repuestos originales con garantía completa', menu: 'venta' },
        { icono: 'info', titulo: 'Conócenos', detalle: 'Nuestra historia, valores y compromiso contigo', menu: '/conocenos' }
    ]
    const jsonServicioPosventa = [
        {
            icono: 'confi',
            titulo: 'Mantenimiento Preventivo y Correctivo',
            detalle: 'Realizamos mantenimientos preventivos y correctivos que garantizan el óptimo funcionamiento de tu motocicleta. Nuestro objetivo es anticiparnos a posibles fallas y resolver cualquier inconveniente de manera rápida y segura, asegurando tu movilidad sin contratiempos.',
            servicio: [],
            btn: ''
        },

        {
            icono: 'shield',
            titulo: 'Revisiones de Garantía y por Kilometraje',
            detalle: 'Cumple con los cronogramas oficiales de revisiones de garantía y mantenimientos programados por kilometraje. Así, tu moto siempre estará en perfectas condiciones y podrás conservar los beneficios de respaldo que te ofrece Auteco.',
            servicio: [],
            btn: ''
        },
        {
            icono: 'setting',
            titulo: 'Mecánica en General y Mano de Obra Calificada',
            detalle: 'Contamos con personal técnico altamente capacitado y especializado en motocicletas Auteco. Ofrecemos servicios de mecánica general con la mejor calidad, garantizando confianza, precisión y seguridad en cada intervención.',
            servicio: [],
            btn: ''
        },
        {
            icono: 'package',
            titulo: 'Servicios Adicionales',
            detalle: 'En nuestro servicio posventa también encontrarás soluciones integrales como: seguros para tu moto, accesorios originales y opciones de financiación para que siempre tengas la mejor experiencia y respaldo con tu motocicleta.',
            servicio: [],
            btn: ''
        }

    ]
    const jsonGarantias = [
        {
            icono: '/images/Escobarduque.png',
            titulo: 'Escobar y Duque',
            detalle: 'Seguros confiables con amplia cobertura, servicio personalizado y experiencia en el sector.',
            servicio: [],
            btn: ''
        },

        {
            icono: '/images/garantimotos.png',
            titulo: 'Garantimotos',
            detalle: 'Protección especializada para motocicletas con respaldo nacional.',
            servicio: [],
            btn: ''
        }]
    const { productos, productoSeleccionado, marcaFiltro, getProductos, getSegmentos, segmentos, configuracionData = [], desplazamiento, getCofiguracion } = useContext(LanguageContext);
    useEffect(() => {
        getProductos();


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
    //   useEffect(() => {
    //     if (configuracionData?.sucursal) {
    //       try {
    //         const parsed =
    //           typeof configuracionData.sucursal === "string"
    //             ? JSON.parse(configuracionData.sucursal)
    //             : configuracionData.sucursal;
    //             departamentos = parsed;
    //         console.log("Sucursal parseada:", parsed);
    //       } catch (error) {
    //         console.error("Error al parsear Ubicaciones:", error);
    //       }
    //     }
    //   }, [configuracionData]);


    //const buttons = ["Todos", "Trabajo", "Urbanas", "Doble Propósito", "Scooter"];
    //  departamentos = [
    //     {
    //         nombre: 'Cundinamarca',
    //         ciudades: [
    //             {
    //                 nombre: 'Bogotá - Meissen',
    //                 direccion: 'CR 19 60 A 23 SUR LC 1',
    //                 telefono: '3132081680',
    //                 horarioSemana: '09:00 AM – 06:00 PM',
    //                 horarioSabado: '09:00 AM – 02:00 PM',
    //                 mapaUrl: 'https://www.google.com/maps/embed?...',
    //                 googleMapsLink: 'https://goo.gl/maps/XXXX',
    //                 contacto: {
    //                     nombre: 'Carolina Quiroga',
    //                     telefono: '3132081680',
    //                 },
    //             },
    //             {
    //                 nombre: 'Cartagena - Los ciruelos',
    //                 direccion: 'CR 19 60 A 23 SUR LC 1',
    //                 telefono: '3132081680',
    //                 horarioSemana: '09:00 AM – 06:00 PM',
    //                 horarioSabado: '09:00 AM – 02:00 PM',
    //                 mapaUrl: 'https://www.google.com/maps/embed?...',
    //                 googleMapsLink: 'https://goo.gl/maps/XXXX',
    //                 contacto: {
    //                     nombre: 'Jose Fortuna',
    //                     telefono: '3132081680',
    //                 },
    //             },
    //         ],
    //     },
    // ];
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
    const [cantidadMostrar, setCantidadMostrar] = useState(8);


    const productosFiltrados = productos.filter((producto) => {
        if (producto.lista_precio_id !== "1") {
            return false;
        }

        const cumpleMarca = !marcaFiltro || producto.marca_nombre === marcaFiltro;


        if (activeBtn === "TODOS") {
            return cumpleMarca;
        }


        const segmentosProducto = producto.segmento || [];
        return (
            cumpleMarca &&
            segmentosProducto.some(
                (seg) => seg && seg.toUpperCase() === activeBtn.toUpperCase()
            )
        );
    });


    const productosParaMostrar = productosFiltrados.slice(0, cantidadMostrar);
    const cargarMas = () => {
        setCantidadMostrar((prev) => prev + 8);
    };

    useEffect(() => {
        setCantidadMostrar(8);
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
    return (

        <div>
            {/* Menu de inicio */}
            <div id="inicio" className='contenedor-carousel'>
                <CarouselHero img={configuracionData?.rutaImgCarrousel || ''} />
            </div>
            <div className='home--contenido--1'>
                <div
                    className="contenedor__imagen__Home d-flex flex-column justify-content-center align-items-center text-center"
                // style={{
                //     backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url('${rutaImgPortada}')`,
                // }}
                >
                    <h1 className="titulo-home">
                        VIVE LA EXPERIENCIA SOBRE DOS RUEDAS <span className="marca">CON MOTOS DE LA CAPITAL</span>
                    </h1>
                    <div className="mt-4 d-flex flex-wrap justify-content-center gap-4">
                        <a className="btn btn-light btn-lg btn--home--img" onClick={() => handleNavigation('modelos')}>Conoce nuestros modelos</a>
                        <a className="btn btn-light btn-lg btn--home--img" onClick={handleClickWhatsapp} rel="noopener noreferrer"> <LuMessageCircle size={21} className='icono-message-btn-' />Contáctanos para más información</a>
                        <a className="btn btn-light btn-lg btn--home--img" onClick={() => handleNavigation('/promocion')}>Promociones</a>
                    </div>
                </div>
                <div style={{ background: '#0a1f44', paddingBottom: "20px", paddingTop: "20px" }}>
                    <div className="container  my-5">
                        <SectionHeader
                            titulo='¿Por qué elegir Motos de la Capital?'
                            cuerpo='Somos tu aliado perfecto para encontrar la motocicleta ideal y mantenerla en perfectas condiciones'
                            titleSize="clamp(1.7rem, 4vw, 2.1rem)"
                            subtitleSize="clamp(1.3rem, 2vw, 1.27rem)"
                            opcion='D'
                        />
                        <div className="row g-4">
                            {jsonInfo.map((item, index) => (
                                <div className="col-12 col-md-4" key={index}>
                                    <Cards
                                        key={index}
                                        icono={item.icono}
                                        titulo={item.titulo}
                                        cuerpo={item.detalle}
                                        categoria=''
                                        precio=''
                                        listaItems=''
                                        opcion='P'
                                        menu={item.menu}
                                    />
                                </div>

                            ))}
                        </div></div>
                </div>
                <div className="container  my-2">
                    <div className='row g-4 justify-content-center video-youtube-container'>
                        <SectionHeaderLiteBtn
                            titulo='Conoce más sobre la marca Auteco'
                            cuerpo='Innovación constante, calidad garantizada y experiencia global.'
                            urlyoutube={configuracionData?.rutaYoutube || ''}
                           //urlyoutube='https://www.youtube.com/embed/El4K8byMpG8'
                        />

                    </div>
                </div>
                <div className="container my-5">
                    <div className="row g-4 justify-content-center my-5">
                        <div className="col-xl-3 col-md-4 col-sm-12 d-flex">
                            <Cards
                                titulo="Innovación Constante"
                                cuerpo="Auteco lidera el mercado con tecnología de vanguardia y diseños revolucionarios que transforman la movilidad."
                                precio=""
                                categoria=''
                                listaItems=''
                                imagen=""
                                opcion='C'
                            />
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-12 d-flex">
                            <Cards
                                titulo="Calidad Garantizada"
                                cuerpo="Cada motocicleta pasa por rigurosos controles de calidad para asegurar el mejor rendimiento y durabilidad."
                                precio=""
                                categoria=''
                                listaItems=''
                                imagen=""
                                opcion='C'
                            />
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-12 d-flex">
                            <Cards
                                titulo="Experiencia Global"
                                cuerpo="Con décadas de experiencia, Auteco es sinónimo de confiabilidad y excelencia en el mercado automotor."
                                precio=""
                                categoria=''
                                listaItems=''
                                imagen=""
                                opcion='C'
                            />
                        </div>
                    </div>
                </div>


            </div>
            <div id="modelos" className='home--contenido--2' >
                {/* Modelos */}
                <div style={{ background: 'white', paddingBottom: '30px', paddingTop: '20px' }}>
                    <div className="container my-5">
                        <SectionHeader
                            titulo='Nuestros Modelos'
                            cuerpo='Descubre nuestra amplia gama de motocicletas. Desde deportivas hasta scooters urbanos, tenemos el modelo perfecto para cada estilo de vida y necesidad.'
                            titleSize="clamp(2.1rem, 4vw, 2.5rem)"
                            subtitleSize="clamp(1.2rem, 2vw, 1.2rem)"
                        />
                        <div className="d-flex justify-content-center flex-wrap gap-3">
                            {buttons.map((btnText) => (
                                <BotonFiltro
                                    key={btnText}
                                    text={btnText}
                                    active={activeBtn === btnText}
                                    onClick={() => setActiveBtn(btnText)}
                                />
                            ))}
                        </div>
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
                                            categoria={
                                                producto.segmento && producto.segmento.length > 0 && producto.segmento[0] !== ""
                                                    ? producto.segmento[0]
                                                    : "TODOS"
                                            }
                                            cuerpo={producto.descripcion_amplia}
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

                                                return `${añoMasReciente}: ${Number(precio).toLocaleString("es-CO", {
                                                    style: "currency",
                                                    currency: "COP",
                                                    minimumFractionDigits: 0,
                                                })}`;
                                            })()}
                                            listaItems=""
                                            imagen={producto.imagen_portada || "/images/nophoto.jpg"}
                                            opcion="M"
                                            motObject={producto}
                                        />
                                    </div>
                                ))
                            )}
                            {/* Cargar Mas */}
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
                <div style={{ background: '#0a1f44', paddingTop: '50px', paddingBottom: '70px' }}>
                    <div className="container my-5">
                        {/* Venta */}
                        <div id="venta" className='row g-4'>
                            <SectionHeader
                                titulo='Servicio Postventa'
                                cuerpo='Tu tranquilidad es nuestra prioridad. Ofrecemos servicios integrales para mantener tu moto en perfectas condiciones'
                                titleSize="clamp(2.1rem, 4vw, 2.5rem)"
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
                        <div id="ubicacion" >
                            <SectionHeader titulo="NUESTRAS SEDES" cuerpo="Encuentra tu punto de atención más cercano y visítanos en nuestros horarios de servicio." titleSize="clamp(2.1rem, 4vw, 2.5rem)" opcion='E' />
                            <div className="container my-2">
                                <div className="box-shadow-custom bg-white rounded-3 p-4">
                                    {/* Encabezado departamentos */}
                                    <SectionHeader opcion="C" titulo="Selecciona el departamento" titleSize="clamp(1.5rem, 5vw, 1rem)" subtitleSize="clamp(1.3rem, 2vw, 1.27rem)" />

                                    {/* Botones departamentos */}
                                    <div className="d-flex justify-content-center flex-wrap gap-3 my-3">
                                        {departamentos.map((depto) => (
                                            <BotonFiltroPromocion
                                                key={depto.nombre}
                                                text={depto.nombre}
                                                active={activeDepto === depto.nombre}
                                                onClick={() => {
                                                    setActiveDepto(depto.nombre);
                                                    setActiveCity(null);
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Encabezado ciudades */}
                                    {activeDepto && (
                                        <>
                                            <SectionHeader
                                                opcion="C"
                                                titulo={`Selecciona la ciudad en ${activeDepto}`}
                                                titleSize="clamp(1.5rem, 5vw, 1rem)"
                                                subtitleSize="clamp(1.3rem, 2vw, 1.27rem)"
                                            />

                                            {/* Botones ciudades */}
                                            <div className="d-flex justify-content-center flex-wrap gap-3 my-3">
                                                {departamentos
                                                    .find((d) => d.nombre === activeDepto)
                                                    ?.ciudades.map((ciudad, index) => (
                                                        <BotonFiltroPromocion
                                                            key={ciudad.nombre}
                                                            text={ciudad.nombre}
                                                            active={activeCity === ciudad.nombre}
                                                            onClick={() => setActiveCity(ciudad)}
                                                        />
                                                    ))}
                                            </div>
                                        </>
                                    )}

                                    {/* Mensaje final */}
                                    {!activeDepto && (
                                        <div className="d-flex flex-column align-items-center gap-3 pt-5">
                                            <MapPin color="#d1d5dc" size={60} />
                                            <p
                                                className="text-center"
                                                style={{
                                                    fontSize: 'clamp(1.2rem, 2vw, 1.27rem)',
                                                    color: 'gray',
                                                }}
                                            >
                                                Selecciona un departamento para ver nuestras sedes disponibles
                                            </p>
                                        </div>
                                    )}

                                    {activeCity && (
                                        <div className="row mt-4">
                                            <div className="col-md-8">
                                                <div className="box-shadow-custom bg-white rounded-4 p-3 mb-3" style={{ border: '1px solid #e5e7eb' }}>
                                                    <h5 style={{ fontWeight: '700' }}>
                                                        {' '}
                                                        <MapPin color="#d80027" size={20} />
                                                        &nbsp;
                                                        {activeCity.nombre}
                                                    </h5>
                                                    <div style={{ fontSize: '14px' }}>📍 {activeCity.direccion}</div>
                                                    <div style={{ fontSize: '14px', marginBottom: '20px' }}>📞 {activeCity.telefono || '—'}</div>

                                                    {/* Horarios */}
                                                    <div className="border rounded-3 p-3 mb-3 bg-light">
                                                        <h6 style={{ fontSize: '14px' }} className="fw-bold">
                                                            🕒 Horarios de Atención
                                                        </h6>
                                                        <div style={{ fontSize: '14px' }}>Lunes a Viernes: {activeCity.horarioSemana}</div>
                                                        <div style={{ fontSize: '14px' }}>Sábados: {activeCity.horarioSabado}</div>
                                                    </div>

                                                    {/* Google Maps */}
                                                    <iframe
                                                        src={activeCity.mapaUrl}
                                                        width="100%"
                                                        height="250"
                                                        style={{ border: 0 }}
                                                        allowFullScreen=""
                                                        loading="lazy"
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                    ></iframe>

                                                    <a href={activeCity.googleMapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-danger w-100 mt-3">
                                                        📍 Abrir en Google Maps
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Tarjeta contacto */}
                                            <div className="col-md-4">
                                                <div className="rounded-4 p-3 h-4" style={{ border: '2px solid #d80027' }}>
                                                    <p style={{ fontWeight: '700' }}>
                                                        <UserRound style={{ color: 'red' }} size={20} /> Jefe Comercial
                                                    </p>
                                                    <p style={{ fontSize: '14px' }}>
                                                        <strong>Nombre:</strong>
                                                        <br /> {activeCity.contacto.nombre}
                                                        <br />
                                                        <br />
                                                        <strong>Teléfono:</strong> <br />
                                                        {activeCity.contacto.telefono}
                                                    </p>
                                                    <button className="btn btn-danger w-100" onClick={handleClickWhatsapp}>
                                                        {' '}
                                                        <Phone className="text-red-500" size={18} /> Contactar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* yodera */}
            <div id="id_repuesto" className="" style={{ backgroundColor: '#0a1f44', paddingTop: '11px', paddingBottom:'16px'}}>
                <div className=" my-2" style={{ backgroundColor: '#0a1f44', width: '100%' }}>
                    <SectionHeader
                        titulo="Repuestos y Servicio Técnico"
                        cuerpo="Encuentra repuestos originales y servicio técnico especializado con el respaldo de Auteco. Garantizamos calidad, disponibilidad y confianza en cada servicio para tu motocicleta."
                        titleSize="clamp(2.1rem, 4vw, 2.5rem)"
                        opcion='F'
                    />
                    <div
                        className="section-header p-2 d-flex justify-content-center gap-3 flex-wrap"
                        style={{ borderRadius: '29px', backgroundColor: 'white' }}
                    >

                        <button
                            className={`btn btn__mostrarMas1 ${activeRpt ? 'active' : ''} boton-rpt`}
                            onClick={() => setActiveRpt(true)}
                        >
                            <span className="spanicono--mostrar">
                                <Package size={16} />
                            </span>
                            Repuestos originales y accesorios
                        </button>

                        <button
                            className={`btn btn__mostrarMas1 ${!activeRpt ? 'active' : ''} boton-rpt`}
                            onClick={() => setActiveRpt(false)}
                        >
                            <span className="spanicono--mostrar">
                                <Wrench size={16} />
                            </span>
                            Repuestos originales y accesorios
                        </button>


                    </div>
                    {activeRpt ? (
                        <div className="card shadow-sm border-0 rounded-3 mb-4 d-flex align-items-center" style={{ background: '#0a1f44' }}>
                            <div className="" style={{ width: '100%' }}>
                                <div className="row g-0 align-items-center">
                                    {/* Imagen */}
                                    <div className="col-12 col-lg-6 col-md-12 p-3">
                                        <div className="card-image text-center text-lg-end">
                                            <div className='image-wrapper'>
                                                <img src="./images/almacen.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contenido */}
                                    <div className="col-12 col-lg-6 col-md-12" style={{ padding: '15px' }}>
                                        <div className="card-body">
                                            <h3 className="d-flex align-items-center mb-3 texto--imagen--repuesto" style={{ fontWeight: '900' }}>
                                                <Package size="30px" color="#d80027" className="me-2" />
                                                Repuestos Originales
                                            </h3>
                                            <div className='col-lg-8 col-md-12'>
                                            <p className="parrafo--imagen--repuesto">
                                                Ofrecemos repuestos y accesorios originales, autorizados por la marca, para mantener el rendimiento y la seguridad de tu moto.
                                            </p>
                                            </div>
                                            

                                            <h5 className=" mt-4 texto--imagen--repuesto" style={{ fontWeight: '900' }}>
                                                Catálogo Disponible
                                            </h5>

                                            <div className="catalogo mt-3 col-lg-8 col-md-12">
                                                <div className="catalogo-item ">
                                                    <img src="./images/casco.png" alt="Cascos y Accesorios" />
                                                    <span>Cascos y Accesorios</span>
                                                </div>

                                                <div className="catalogo-item">
                                                    <img src="./images/filtrosaceite.png" alt="Filtros y Aceites" />
                                                    <span>Filtros y Aceites</span>
                                                </div>

                                                <div className="catalogo-item">
                                                    <img src="./images/llantas.png" alt="Llantas y Neumáticos" />
                                                    <span>Llantas y Neumáticos</span>
                                                </div>

                                                <div className="catalogo-item">
                                                    <img src="./images/cadenas.png" alt="Cadenas y Piñones" />
                                                    <span>Cadenas y Piñones</span>
                                                </div>
                                            </div>


                                            <div className="col-12 p-2">
                                                <button className="col-sm-12 col-md-6 col-lg-4  btn-contacto-servicio active" style={{ fontSize: '14px' }} onClick={handleClickWhatsapp}>
                                                    <Phone size={18} /> Consultar disponibilidad
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="card shadow-sm border-0 rounded-3 mb-4 d-flex align-items-center" style={{ background: '#0a1f44' }}>
                            <div className="" style={{ width: '100%' }}>
                                <div className="row g-0 align-items-center">
                                    {/* Imagen */}
                                    <div className="col-12 col-lg-6 col-md-12 p-3">
                                    <div className="card-image text-center text-lg-end">
                                    <div className='image-wrapper'>
                                            <img src="./images/motopulse.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-md-12" style={{ padding: '15px' }}>
                                        <div className="card-body p-3 p-md-0" >
                                            <h2 className="d-flex align-items-center gap-2  fw-bold mb-3 texto--imagen--repuesto">
                                                <Wrench color="#d80027" size={35} className="me-2" />
                                                TALLER AUTORIZADO
                                            </h2>

                                            <div className='col-lg-8 col-md-12'>
                                            <p className="parrafo--imagen--repuesto">
                                                Nuestro taller está certificado por Hero y cuenta con técnicos especializados que garantizan un servicio confiable y profesional.
                                            </p>
                                            </div>
                                            <h5 className="fw-bold mb-3 texto--imagen--repuesto">SERVICIOS PRINCIPALES</h5>
                                            <div className="row">
                                                <div className="col-12 col-sm-6 mb-2">
                                                    <p className="mb-1 parrafo--imagen--repuesto"> <CircleCheckBig style={{marginRight:'8px',color:'#c70511'}}/>Mantenimiento preventivo</p>
                                                    <p className="mb-1 parrafo--imagen--repuesto"> <CircleCheckBig style={{marginRight:'8px',color:'#c70511'}}/> Diagnóstico electrónico</p>
                                                    <p className="mb-1 parrafo--imagen--repuesto"> <CircleCheckBig style={{marginRight:'8px',color:'#c70511'}}/> Reparaciones especializadas</p>
                                                </div>
                                                <div className="col-12 col-sm-6 mb-2">
                                                    <p className="mb-1 parrafo--imagen--repuesto"> <CircleCheckBig style={{marginRight:'8px',color:'#c70511'}}/> Cambio de aceite y filtros</p>
                                                    <p className="mb-1 parrafo--imagen--repuesto"> <CircleCheckBig style={{marginRight:'8px',color:'#c70511'}}/> Revisión de frenos</p>
                                                    <p className="mb-1 parrafo--imagen--repuesto"> <CircleCheckBig style={{marginRight:'8px',color:'#c70511'}}/> Afinación de motor</p>
                                                </div>
                                            </div>

                                            <div className="col-12 p-2">
                                                <button className="col-lg-4 col-md-6 btn-contacto-servicio  active" style={{ fontSize: '14px' }} onClick={handleClickWhatsapp}>
                                                    <Phone size={18} /> &nbsp;Agendar cita en el taller
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* cierre */}

            <div className=''>
                <div className="container my-4" id='aliados'>
                    <div className='row g-4 card--stecnico'>
                        <SectionHeader
                            titulo='Aliados Financieros'
                            cuerpo='Haz realidad el sueño de tener tu motocicleta Hero con nuestros aliados financieros de confianza'
                            titleSize="clamp(2rem, 6vw, 2.7rem)"
                            subtitleSize="clamp(1.3rem, 2vw, 1.27rem)"
                        />
                    </div>
                    <div className='subtitulo--nuestro--aliado'>
                        <p>Nuestros Aliados de Confianza</p>
                    </div>
                    <div className="row g-4 justify-content-center" style={{ marginBottom: "50px" }}>
                        <div className="aliados-swiper-wrap" style={{ position: "relative" }}>

                            <div ref={prevRef} className="btn-prev-- custom-swiper-btn" aria-hidden="true">
                                <FaChevronLeft size={14} />
                            </div>


                            <div ref={nextRef} className="btn-next-- custom-swiper-btn" aria-hidden="true">
                                <FaChevronRight size={14} />
                            </div>

                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={5}
                                spaceBetween={20}
                                breakpoints={{
                                    1200: { slidesPerView: 5 },
                                    992: { slidesPerView: 4 },
                                    768: { slidesPerView: 3 },
                                    576: { slidesPerView: 2 },
                                    0: { slidesPerView: 1 },
                                }}

                                onInit={(swiper) => {

                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;

                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                className="mySwiper"
                            >
                                {aliados.map((aliado, index) => (
                                    <SwiperSlide key={index}>
                                        <Cards
                                            imagen={aliado.imagen}
                                            titulo={aliado.titulo}
                                            cuerpo={aliado.cuerpo}
                                            precio=""
                                            listaItems=""
                                            opcion="A"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className='row texto__aliados' >
                    <p className="fs-6 text-secondary mx-auto" style={{maxWidth:'672px', fontFamily:'Poppins, sans-serif'}}> *Las condiciones de financiamiento están sujetas a evaluación crediticia. Consulta términos y condiciones con cada entidad financiera.</p>
                    </div>


                </div>
                <div style={{ background: '#0a1f44', paddingBottom: '50px' }}>
                    <div className='container'>
                        <div className='row'>
                            <AseguradoraCard icono='./images/garantimotos.png' titulo='Garantimotos' descripcion='Protección confiable para que disfrutes tu moto con tranquilidad.' jsonGarantias={jsonGarantias} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
