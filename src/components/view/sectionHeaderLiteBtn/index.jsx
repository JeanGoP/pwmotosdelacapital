import React from "react";
import './sectionHeaderLiteBtn.css'
const SectionHeaderLiteBtn = ({ titulo, cuerpo, urlyoutube='' }) => {
    console.log(urlyoutube)
    return (
        <div className="section-header-Lite text-center my-5">
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
                    title="¡Llegó la que esperabas! ¡Zaga zaga Hunk!"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                </iframe>
             ) : null}
            </div>
        </div>
    );
}

export default SectionHeaderLiteBtn;