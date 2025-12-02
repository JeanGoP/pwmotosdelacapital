import React from "react";
import './sectionHeader.css'
import { LuMessageCircle } from "react-icons/lu";
const SectionHeader = ({ titulo, cuerpo ,  titleSize = "clamp(1.7rem, 4vw, 2.7rem)", 
    subtitleSize = "clamp(1.3rem, 2vw, 1.27rem)", opcion='A' , whatsapp ='' }) => {

        const handleClickWhatsapp = () => {
    
            const telefono = "57"+whatsapp; 
            const mensaje = "Hola, quiero más información"; 
            const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        
            window.open(url, "_blank");
          };

          const palabrasRojo = ["repuestos originales", "Auteco", "calidad","disponibilidad","confianza"]; 

          const resaltarPalabras = (texto) => {
            if (!texto) return "";
            const regex = new RegExp(`\\b(${palabrasRojo.join("|")})\\b`, "gi");
            return texto.replace(regex, (match) => {
              return `<span style="color: #e30613;">${match}</span>`;
            });
          };
    if(opcion=='A'){
        return (
        
            <div className="section-header text-center my-5">
                <h2 className="section-title"  style={{ fontSize: titleSize }} >
                    {titulo}
                </h2>
                <p className="section-subtitle"  style={{ fontSize: subtitleSize }}>
                    {cuerpo}
                </p>
            </div>
        );
    }
    if(opcion=='B'){
        return (
        
            <div className="section-header text-center my-5">
                <h2 className="section-title_t"  style={{ fontSize: titleSize }}>
                    {titulo}
                </h2>
                <p className="section-subtitle"  style={{ fontSize: subtitleSize }}>
                    {cuerpo}
                </p>
                <button className="btn-contacto-promocion" onClick={handleClickWhatsapp}> <LuMessageCircle size={18} /> Contactar Asesor</button>
            </div>
        );
    }
    if (opcion == 'C') {
        return (
          <div className="section-header text-center my-2">
            <h2 className="section-title" style={{ fontSize: titleSize, fontWeight: '700' }}>
              {titulo}
            </h2>
            <p className="section-subtitle" style={{ fontSize: subtitleSize }}>
              {cuerpo}
            </p>
          </div>
        );
      }
      if(opcion=='D'){
        return (
        
            <div className="section-header text-center my-5">
                <h2 className="section-title_D"  style={{ fontSize: titleSize }} >
                    {titulo}
                </h2>
                <p className="section-subtitle_D"  style={{ fontSize: subtitleSize }}>
                    {cuerpo}
                </p>
            </div>
        );
    }
    if(opcion=='E'){
        return (
        
            <div className="section-header aseguradora-card text-center my-5">
                <h2 className="section-title_E"  style={{ fontSize: titleSize }} >
                    {titulo}
                </h2>
                <div className="barraSpacio"></div>
                <p className="section-subtitle_E"  style={{ fontSize: subtitleSize }}>
                    {cuerpo}
                </p>
            </div>
        );
    }
    if(opcion=='F'){
        return (
        
            <div className="section-header text-center my-5">
                <h2 className="section-title_E"  style={{ fontSize: titleSize }} >
                    {titulo}
                </h2>
                <p className="section-subtitle_E"  style={{ fontSize: subtitleSize }} dangerouslySetInnerHTML={{ __html: resaltarPalabras(cuerpo) }}>
                    
                </p>
            </div>
        );
    }
    
}

export default SectionHeader;