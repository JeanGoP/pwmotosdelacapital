import React from "react";
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import "./contacto.css";

const Contacto = () => {
    return (
        <div className="contacto-container">
            {/* Formulario */}
            <div className="card-enviar-mensaje formulario">
                    <h3>Envíanos un mensaje</h3>
                    <p className="subtitulo-mensaje">
                        Completa el formulario y nos pondremos en contacto contigo
                    </p>

                    <form className="form-mensaje">
                        <div className="form-group">
                            <label className="label-mensaje">Nombre completo <span>*</span></label>
                            <input type="text" className="input-mensaje" placeholder="Tu nombre completo" />
                        </div>

                        <div className="form-group">
                            <label className="label-mensaje">Correo electrónico <span>*</span></label>
                            <input type="email" className="input-mensaje" placeholder="tu@email.com" />
                        </div>

                        <div className="form-group">
                            <label className="label-mensaje">Teléfono <span>*</span></label>
                            <input type="tel" className="input-mensaje" placeholder="+57 300 123 4567" />
                        </div>

                        <div className="form-group">
                            <label className="label-mensaje">Mensaje <span>*</span></label>
                            <textarea className="textarea-mensaje" placeholder="Cuéntanos en qué podemos ayudarte..."></textarea>
                        </div>

                        <button type="submit" className="btn-enviar-mensaje">Enviar solicitud</button>
                    </form>
            </div>

            <div className="side-content">
                {/* Contacto directo */}
                <div className="card-contacto-directo">
                    <h3>Contacto Directo</h3>

                    <div className="info-item">
                        <FaPhoneAlt className="icono-contacto-directo" />
                        <div>
                            <p className="titulo-info">Teléfonos</p>
                            <p>
                                Bello: <a className="a-contacto-directo" href="tel:+573122728532">+57 312 272 85 32</a>
                            </p>
                            <p>
                                Envigado: <a className="a-contacto-directo" href="tel:+573168976447">+57 316 897 64 47</a>
                            </p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FaEnvelope className="icono-contacto-directo" />
                        <div>
                            <p className="titulo-info">Email</p>
                            <a href="mailto:info@motosdelosandes.com" className="a-contacto-directo">
                                info@motosdelosandes.com
                            </a>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/573122728532"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp a-contacto-directo"
                    >
                        <LuMessageCircle className="icono-btn-contacto-directo" />
                        Escribir por WhatsApp
                    </a>
                </div>

                {/* Redes sociales */}
                <div className="card-redes-sociales">
                    <h3>Síguenos en Redes Sociales</h3>
                    <div className="redes-botones">
                        <button className="btn-red-social">
                            <FaInstagram className="icono-red" /> Instagram
                        </button>
                        <button className="btn-red-social">
                            <LuMessageCircle className="icono-red"/> WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
