import React, { useState } from "react";
import { BsBox } from "react-icons/bs";
import { PiGearBold } from "react-icons/pi";
import { LuUser,LuPhone,LuShield,LuUsers   } from "react-icons/lu";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { LuClock4 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import "./repuestoServicio.css";

const RepuestosServicio = () => {
  const [activeTab, setActiveTab] = useState("servicio");
  const data = {
    medellin: [
      {
        titulo: "Almacén Principal Medellín",
        telefono: "+57 (4) 444-5555",
        direccion: "Carrera 70 #45-30, Centro de Medellín",
        horario: [
          "Lunes a Viernes: 7:00 AM – 5:00 PM",
          "Sábados: 8:00 AM – 4:00 PM",
        ],
      },
      {
        titulo: "Almacén Envigado",
        telefono: "+57 (4) 333-4444",
        direccion: "Calle 37 Sur #43-108, Envigado",
        horario: [
          "Lunes a Viernes: 7:30 AM – 5:30 PM",
          "Sábados: 8:00 AM – 3:00 PM",
        ],
      },
    ],
    bogota: [
      {
        titulo: "Almacén Principal Bogotá",
        telefono: "+57 (1) 555-6666",
        direccion: "Av. Caracas #45-30, Centro Bogotá",
        horario: [
          "Lunes a Viernes: 8:00 AM – 6:00 PM",
          "Sábados: 9:00 AM – 4:00 PM",
        ],
      },
      {
        titulo: "Almacén Suba",
        telefono: "+57 (1) 777-8888",
        direccion: "Calle 145 #103-20, Suba",
        horario: [
          "Lunes a Viernes: 9:00 AM – 5:00 PM",
          "Sábados: 9:00 AM – 2:00 PM",
        ],
      },
    ],
  };

  const [region, setRegion] = useState("medellin");


  return (
    <div className="container py-5 repuestos-container">
      <h2 className="text-center fw-bold mb-2">Repuestos y Servicio Técnico</h2>
      <div className="contenido--p--repuesto">
        <p className="text-center text-muted mb-5 p-repuesto">
          Encuentra repuestos originales y servicio técnico especializado para tu motocicleta Hero
        </p>
      </div>


      {/* Botones tabs */}
      {/* <div className="d-flex justify-content-center gap-2 mb-5 repuestos-tabs"> */}
      <div className="d-flex justify-content-center gap-2 mb-5 repuestos-tabs ">
        <button
          className={`btn ${
            activeTab === "repuestos" ? "btn-danger text-white" : "btn-outline-danger"
          }`}
          onClick={() => setActiveTab("repuestos")}
        ><span className="span--btn--repuesto"> <BsBox  size={18}/> </span>
          Almacenes de Repuesto
        </button>
        <button
          className={`btn ${
            activeTab === "servicio" ? "btn-danger text-white" : "btn-outline-danger"
          }`}
          onClick={() => setActiveTab("servicio")}
        >
         <span className="span--btn--repuesto"> <PiGearBold  size={18}/> </span> Servicio Técnico
        </button>
      </div>

      {/* Contenido dinámico */}
      {activeTab === "servicio" ? (
        <div className="contenido--card--servicio">
        <div className="card shadow-sm text-center servicio-card">
          <div className="mb-3">
            <span className="icon-circle"></span>
          </div>
          <h3 className="mb-3 texto--titulo--card--servicio">Servicio Técnico de Calidad</h3>
          <p className="mb-4 texto--descripcion--card--servicio">
            Nuestro equipo de técnicos especializados está disponible para brindarte soporte técnico,
            diagnóstico y reparación de tu motocicleta Hero. Contamos con herramientas de última
            tecnología y personal certificado.
          </p>
          <div className="contenido--card--servicio">
          <div className=" contenido--linea--servicio">
            <p className="titulo--servicio--tecnico"><span className="icono--titulo--servicio"><LuPhone size={22}/></span>Línea de Servicio Técnico</p>
            <p className="numero--servicio--tecnico">+57 315 295–9977</p>
            <small className="text-muted">
              Lunes a Viernes: 8:00 AM - 6:00 PM <br />
              Sábados: 8:00 AM - 12:00 PM
            </small>
          </div>
          </div>
          <div className="contenido--card--servicio">
            <button className="btn btn-danger btn--servicio--tecnico--">Contactar Servicio Técnico</button>
         </div>
          
        </div>
        </div>
      ) : (
        <div className="contenido--card--servicio">
      <div className="servicioTecnico shadow-sm">
      <div className="row g-0">
        {/* Imagen izquierda */}
        <div className="col-md-6">
          <img
            src="/images/almacen.png"
            alt="Repuestos Hero"
            className="img-fluid card-img-left"
          />
        </div>

        {/* Texto derecha */}
        <div className="col-md-6 d-flex align-items-center">
          <div className="card-body">
            <h5 className="card-title">Repuestos Originales Hero</h5>
            <p className="card-text">
              Contamos con almacenes especializados en repuestos originales
              para motocicletas Hero. Stock permanente, precios competitivos
              y atención especializada para mantener tu motocicleta en
              perfectas condiciones.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="servicioAlmacen-container p-4 shadow-sm">
      <h4 className="text-center fw-bold mb-4">Selecciona tu región</h4>

      {/* Botones */}
      <div className="d-flex justify-content-center gap-3 mb-4">
        <button
          className={`btn btn--almacen ${
            region === "medellin" ? "btn-presionado-region" : "btn-no-presionado-region"
          }`}
          onClick={() => setRegion("medellin")}
        >
          Medellín (Antioquia)
        </button>
        <button
          className={`btn btn--almacen ${
            region === "bogota" ? "btn-presionado-region" : "btn-no-presionado-region"
          }`}
          onClick={() => setRegion("bogota")}
        >
          Bogotá (Cundinamarca)
        </button>
      </div>

      {/* Cards de almacenes */}
      <div className="row">
        {data[region].map((almacen, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <div className="servicioAlmacen card p-3 h-100">
              <h5 className="fw-bold">{almacen.titulo}</h5>
              <p>
                <HiOutlinePhone className="icon" />{" "}
                <strong>Teléfono directo</strong> <br />
                {almacen.telefono}
              </p>
              <p>
                <GrLocation className="icon" /> <strong>Dirección</strong>{" "}
                <br />
                {almacen.direccion}
              </p>
              <p>
                <LuClock4 className="icon" /> <strong>Horarios</strong> <br />
                {almacen.horario.map((h, i) => (
                  <span key={i} className="d-block">
                    {h}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
      )}
    </div>
  );
};

export default RepuestosServicio;
