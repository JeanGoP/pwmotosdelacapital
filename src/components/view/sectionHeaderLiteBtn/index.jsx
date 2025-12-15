import React from "react";
import './sectionHeaderLiteBtn.css'
const SectionHeaderLiteBtn = ({ titulo, cuerpo, urlyoutube='', opcion='A' }) => {
   

    if(opcion='A'){
        return (
            <div className="section-header-Lite text-center">
                <p className="section-title-Lite">
                    {titulo}
                </p>
                <p className="section-subtitle-Lite">
                    {cuerpo}
                </p>
    
                <div className="video-container">
                {urlyoutube ? (
                    <iframe width="1024"
                        height="576"
                        src={urlyoutube}
                        title="¡Llegó la que esperabas!"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
    
                    </iframe>
                 ) : null}
                </div>
            </div>
        );
    }
    if(opcion='B'){
        return (
            <div className="section-header-Lite text-center">
                <p className="section-title-Lite">
                    {titulo}
                </p>
                <p className="section-subtitle-Lite">
                    {cuerpo}
                </p>
    
                <div className="video-container">
                {urlyoutube ? (
                    <iframe width="1024"
                        height="700"
                        src={urlyoutube}
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa de ubicaciones de nuestras sedes"
                        n>
    
                    </iframe>
                 ) : null}
                </div>
            </div>
        );
    }

}

export default SectionHeaderLiteBtn;