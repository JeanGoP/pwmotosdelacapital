import React from "react";
import './cardPromo.css'
import { useState } from "react";
import { useEffect } from "react";
import { LuMessageCircle } from "react-icons/lu";


const CardPromo = ({ imagen, titulo, cuerpo, categoria='', whatsapp='' }) => {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
      if (showModal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [showModal]);
    const handleClickWhatsapp = () => {
    
         const telefono = "57"+whatsapp; 
       //  const telefono = "5712541543"; 
         const mensaje = "Hola, quiero más información"; 
         const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
     
         window.open(url, "_blank");
       };
    return (
        <>
  
          <div className="promo-card">
            <div className="promo-card-image" onClick={() => setShowModal(true)}>
              <img src={imagen} alt={titulo} />
            </div>
            <div className="promo-card-body">
            <span className="categoriaPromocion" >{categoria}</span>
              <span className="promo-card-subtitle">{titulo}</span>
              <h3 className="promo-card-title">{cuerpo}</h3>
              <button className="promo-card-button"  onClick={handleClickWhatsapp}>
             
                <span>Solicitar Cotización</span>
              </button>
            </div>
          </div>
  
  
          {showModal && (
  
            <div className="modal-overlay" onClick={() => setShowModal(false)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="image-wrapper">
                  <img src={imagen} alt={titulo} />
                  <button className="modal-close" onClick={() => setShowModal(false)}>
                    ✕
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )

};

export default CardPromo;
