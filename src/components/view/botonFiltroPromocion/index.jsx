import React from "react";
import './botonFiltroPromocion.css'
const BotonFiltroPromocion = ({ text, active = false, onClick }) => {
    return (
        <button
            className={`custom-btn-promocion ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    );


}

export default BotonFiltroPromocion;