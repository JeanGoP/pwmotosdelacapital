import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { jsontratamientoCapitulo_1, jsontratamientoCapitulo_2 } from '../../constants/constants'
import "./tratamientosDatos.css";
import TratamientoCard from "../../components/tratamientoCard";

export function TratamientosDatos() {
    const navigate = useNavigate();
    const titulo_1 = "Capítulo I – Aspectos Generales";
    const titulo_2 = "Capítulo II - Disposiciones Especiales";

    const [capituloActivo, setCapituloActivo] = useState(1);

    const data = capituloActivo === 1 ? jsontratamientoCapitulo_1 : jsontratamientoCapitulo_2;

   
    const handleChangeCapitulo = (num) => {
        setCapituloActivo(num);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <div style={{ background: "#ffffff" }}>
                <div className="tratamiento-container">
                    <button className="back-button" onClick={() => navigate("/")}>
                        <FaArrowLeft />
                    </button>

                    <div className="tratamiento-overlay">
                        <p>MANUAL INTERNO TRATAMIENTO DE DATOS PERSONALES MOTOS DE LA CAPITAL</p>
                        <p className='capitulo'>
                            {capituloActivo === 1 ? titulo_1 : titulo_2}
                        </p>
                    </div>
                </div>

                <div className="container" style={{ paddingBottom: "80px", paddingTop: "30px" }}>
                    {data.map((item, index) => (
                        <div className='contenido--card--tratamiento' key={index}>
                            <TratamientoCard titulo={item.titulo} bodyHtml={item.descripcion} />
                        </div>
                    ))}

                    <div className="botones-capitulos">
                        <button
                            className={`boton-capitulo ${capituloActivo === 1 ? "activo" : ""}`}
                            onClick={() => handleChangeCapitulo(1)}
                        >
                            1
                        </button>
                        <button
                            className={`boton-capitulo ${capituloActivo === 2 ? "activo" : ""}`}
                            onClick={() => handleChangeCapitulo(2)}
                        >
                            2
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
