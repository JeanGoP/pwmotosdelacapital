import './ingresar.css'
import {MapPin } from "lucide-react";
import { NavLink, useLocation, useNavigate } from 'react-router-dom'; 
import { LuMessageCircle } from "react-icons/lu";
import { useState } from "react";
const Interesar = ({opcion}) => {
  const [activeMenu, setActiveMenu] = useState("inicio");
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };



  const handleNavigation = (id) => {
    setActiveMenu(id);

    if (location.pathname !== "/") {
      // No estoy en Home → voy a Home y le paso a dónde debo hacer scroll
      navigate("/", { state: { scrollTo: id } });
   
    } else {
      // Ya estoy en Home → solo scroll
      scrollToId(id);
    
    } 
    
  };
  
  if(opcion=='A'){
    return (
      <div className="interesar-card h-100">
        <h3 className="interesar-title">
          ¿TE INTERESA ESTA MOTOCICLETA?
        </h3>
        <p className="interesar-text">
          Solicita una cotización personalizada con información sobre financiación y disponibilidad.
        </p>
        <button className="btn interesar-btn"><NavLink to="/cotizacion" className="a-footer" style={{color:"black"}}> Solicitar cotización </NavLink> </button>
      </div>
    );
  }
  if(opcion=='B'){
    return (
      <div className="interesar-card--B h-100">
        <MapPin size={30} style={{marginBottom:"10px"}}/>
        <h3 className="interesar-title">
        VISITA NUESTRAS SEDES
        </h3>
        <p className="interesar-text">
        Conoce de cerca la ECO DELUXE CLÁSICA y recibe asesoría personalizada.
        </p>
        <button className="btn interesar-btn-B" onClick={() => handleNavigation("ubicacion")}>Ver ubicaciones</button>
      </div>
    );
  }

  };
  
  export default Interesar;
  