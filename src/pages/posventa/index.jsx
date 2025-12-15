import React, { useEffect, useState, useContext } from 'react';
import './posventa.css';
import { LanguageContext } from '../../context/context';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import CardPosventa from '../../components/cardposventa';
import SectionHeader from '../../components/view/sectionHeader';
import CardProducto from '../../components/cardproducto';
import PosventaSelect from '../../components/posventaSelect';

export function Posventa() {
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  const location = useLocation();
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;

  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState("TODOS");
  const [activeMenu, setActiveMenu] = useState("/modelos");
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
  }, []);
  const rutaImagenFondo =
    window.innerWidth <= 576
      ? "/images/posventaFondoCelular.png"
      : "/images/posventaFondo.png";

  const jsonPosventa = [
    {
      icono: 'confi',
      titulo: 'Mantenimiento preventivo',
      detalle: 'Revisiones periódicas para mantener tu moto en óptimas condiciones',
      servicio: ['Cambio de aceite', 'Revisión de frenos', 'Ajuste de cadena', 'Diagnóstico general'],
      btn: ''
    },

    {
      icono: 'box',
      titulo: 'Repuestos originales',
      detalle: 'Piezas genuinas de fábrica para garantizar el mejor rendimiento',
      servicio: ['Garantía de autenticidad', 'Compatibilidad asegurada', 'Durabilidad garantizada', 'Precios competitivos'],
      btn: ''
    },
    {
      icono: 'shield',
      titulo: 'Garantía y asistencia',
      detalle: 'Respaldo completo durante toda la vida útil de tu moto',
      servicio: ['Garantía de fábrica', 'Asistencia técnica 24/7', 'Red de talleres', 'Soporte especializado'],
      btn: ''
    },
    {
      icono: 'users',
      titulo: 'Asesoría financiera y seguros',
      detalle: 'Te ayudamos con financiación y protección para tu inversión',
      servicio: ['Aliados financieros', 'Seguros todo riesgo', 'Planes de financiación', 'Tasas preferenciales'],
      btn: ''
    }

  ]
  const jsonPosventaRepuestos = [
    {
      imagen: '/images/llantasposventa.png',
      titulo: 'Llantas'

    },

    {
      imagen: '/images/bateriaposventa.png',
      titulo: 'Baterías'

    },
    {
      imagen: '/images/frenosposventa.png',
      titulo: 'Frenos'
    },
    {
      imagen: '/images/filtrosposventa.png',
      titulo: 'Filtros'
    }

  ]
  const servicios = ["Reparacion", "Solicitar repuestos", "Garantia", "Otro"];
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };
  return (
    <div style={{ background: "#f9fafb" }}>
      <div className="posventaMoto-container"
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
      <div className='container'>
        <div className='row g-4 align-items-stretch' style={{ paddingBottom: '50px', paddingTop: '70px' }}>
          {jsonPosventa.map((item, index) => (
            <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
              <CardPosventa
                key={index}
                icono={item.icono}
                titulo={item.titulo}
                detalle={item.detalle}
                listaItems={item.servicio}
              />
            </div>
          ))}

        </div>
      </div>
      <div style={{ background: 'white', paddingTop: '20px' }} >
        <div className="container my-5" id='repuestosPosventa'>
          <SectionHeader
            titulo='Repuestos originales'
            cuerpo='Contamos con un amplio inventario de repuestos originales para todas las marcas que representamos'
            titleSize="clamp(1.1rem, 3vw, 1.2rem)"
            subtitleSize="clamp(1.1rem, 2vw, 1.1rem)"
          />

          <div className='row g-4 align-items-stretch' style={{ paddingBottom: '50px', paddingTop: '70px' }}>
            {jsonPosventaRepuestos.map((item, index) => (
              <div className="col-sm-6 col-md-6 col-lg-3" key={index}>
                <CardProducto
                  key={index}
                  imagen={item.imagen}
                  titulo={item.titulo}
                />
              </div>
            ))}

          </div>
          <div className="" style={{ marginBottom: '100px' }}>
            <SectionHeader
              titulo=''
              cuerpo='¿No encuentras el repuesto que necesitas? Contáctanos y te ayudamos a conseguirlo'
              titleSize="clamp(1.1rem, 3vw, 1.2rem)"
              subtitleSize="clamp(1.1rem, 2vw, 1.1rem)"
            />
          </div>
          <div className="" style={{ marginBottom: '30px' }}>
            <SectionHeader
              titulo=''
              cuerpo='Agenda tu cita o solicita un repuesto'
              titleSize="clamp(1.1rem, 3vw, 1.2rem)"
              subtitleSize="clamp(1.1rem, 2vw, 1.1rem)"
            />
            <SectionHeader
              titulo=''
              cuerpo='Completa el formulario y nos comunicaremos contigo en menos de 24 horas'
              titleSize="clamp(1.1rem, 3vw, 1.2rem)"
              subtitleSize="clamp(1.1rem, 2vw, 1.1rem)"
            />
          </div>
          <div>
            <form className="posventa-form-container" onSubmit={handleSubmit}>
              <div className="posventa-form-row">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  className="posventa-input"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="telefono"
                  placeholder="300 123 4567"
                  className="posventa-input"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="posventa-form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  className="posventa-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="posventa-form-row">
                <PosventaSelect
                  options={servicios}
                  value={formData.servicio}
                  onChange={(val) => setFormData({ ...formData, servicio: val })}
                />
              </div>
              <div className="posventa-form-row">
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos qué necesitas..."
                  className="posventa-textarea"
                  rows="4"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="posventa-btn">
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
