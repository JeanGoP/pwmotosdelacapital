import React from "react";
import './botonFiltro.css'
const BotonFiltro = ({ text, active = false, onClick }) => {
    return (
        <button
            className={`custom-btn ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    );


}

export default BotonFiltro;