import './navbar.css';
import { LuMessageCircle, LuMenu, LuX } from "react-icons/lu";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from 'react-router-dom'; 

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("inicio");
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveMenu(""); // cuando no estoy en Home, limpio selección de scroll
    }
  }, [location.pathname]);
  // useEffect(() => {
  //   if (location.state?.activeMenu) {
  //     setActiveMenu(location.state.activeMenu);
  //   }
  // }, [location]);
  const closeMobileMenu = () => {
    const menu = document.getElementById("navbarNav");
    if (menu?.classList.contains("show")) {
      menu.classList.remove("show");
    }

  };

  const handleNavigation = (id) => {
    setActiveMenu(id);

    if (location.pathname !== "/") {
      // No estoy en Home → voy a Home y le paso a dónde debo hacer scroll
      navigate("/", { state: { scrollTo: id } });
      closeMobileMenu();
    } else {
      // Ya estoy en Home → solo scroll
      scrollToId(id);
      closeMobileMenu();
    }
    setIsOpen(false); 
  };
  const handleClickWhatsapp = () => {
    
    const telefono = "573152959977"; 
    const mensaje = "Hola, quiero más información"; 
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid px-4">
        {/* Logo izquierda */}
        <div 
          className="navbar-brand d-flex align-items-center"
          onClick={() => handleNavigation("inicio")} 
          style={{ cursor: 'pointer' }}
        >
          <img src="/images/logoMotoAndes.png" alt="Logo MotoCapital" className="logo-left"/>
          <div className="d-flex flex-column ms-1">
            <span className="menu--titulo--img">Motos de la Capital</span>
            <span className="text-muted menu--subtitulo--img">Distribuidora autorizada de Auteco</span>
          </div>
        </div>

        {/* Botón toggler */}
        <button 
          className="navbar-toggler custom-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="icon-hamburger"><LuMenu size={28} /></span>
          <span className="icon-close"><LuX size={28} /></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center ul--style--white">
            {/* Logo Hero en mobile */}
            <li className="nav-item d-lg-none w-100 text-center mb-2">
              <img src="/images/logoHero.png" alt="Logo Hero" className="logo-hero-mobile"/>
              <hr className="menu-divider" />
            </li>

            {/* Enlaces que hacen scroll en Home */}
            <li className="nav-item">
              <span 
                className={`nav-link nav-a-item ${activeMenu === "inicio" ? "active" : ""}`} 
                onClick={() => handleNavigation("inicio")}
              >Inicio</span>
            </li>
            <li className="nav-item">
            <NavLink 
                to="/modelos" 
                className={({ isActive }) => 
                  `nav-link nav-a-item ${isActive ? "active" : ""}`
                }
                onClick={closeMobileMenu}
              >
                Modelos
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <span 
                className={`nav-link nav-a-item ${activeMenu === "venta" ? "active" : ""}`} 
                onClick={() => handleNavigation("venta")}
              >Posventa</span>
            </li> */}
           <li className="nav-item">
            <NavLink 
                to="/posventa" 
                className={({ isActive }) => 
                  `nav-link nav-a-item ${isActive ? "active" : ""}`
                }
                onClick={closeMobileMenu}
              >
                Posventa
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <span 
                className={`nav-link nav-a-item ${activeMenu === "ubicacion" ? "active" : ""}`} 
                onClick={() => handleNavigation("ubicacion")}
              >Ubicación</span>
            </li> */}
            <li className="nav-item">
            <NavLink 
                to="/promocion" 
                className={({ isActive }) => 
                  `nav-link nav-a-item ${isActive ? "active" : ""}`
                }
                onClick={closeMobileMenu}
              >
                Promociones
              </NavLink>
            </li>

            {/* Ruta a /cotizacion */}
            <li className="nav-item">
              <NavLink 
                to="/cotizacion" 
                className={({ isActive }) => 
                  `nav-link nav-a-item ${isActive ? "active" : ""}`
                }
                onClick={closeMobileMenu}
              >
                Cotización
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/conocenos" 
                className={({ isActive }) => 
                  `nav-link nav-a-item ${isActive ? "active" : ""}`
                }
                onClick={closeMobileMenu}
              >
                Conócenos
              </NavLink>
            </li>
            {/* WhatsApp */}
            <li className="nav-item mx-2 my-lg-0 my-2 li--btnwhatsapp">
              <a  
                className="btn btn-whatsapp-menu btn-sm"
                href="https://wa.me/573152959977" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                <LuMessageCircle className="me-2" /> WhatsApp
              </a>
            </li>
          </ul>

          {/* Logo derecha (solo desktop) */}
          <div className="d-none d-lg-flex align-items-center">
            <img src="/images/logoHero.png" alt="Logo Hero" className="logo-right"/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
