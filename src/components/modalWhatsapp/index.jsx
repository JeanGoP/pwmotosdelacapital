import React, { useState } from "react";
import "./modalWhatsapp.css";

const ModalWhatsapp = ({ isOpen, onClose }) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});

  const validar = () => {
    const nuevosErrores = {};
    if (!nombre) nuevosErrores.nombre = "Obligatorio";
    if (!telefono.match(/^\d{7,15}$/)) nuevosErrores.telefono = "Valor no válido";
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      alert("Formulario enviado");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop-custom">
      <div className={`custom-modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-header bg-success text-white d-flex justify-content-between align-items-center contenido__modal__Whatsapp">
          <div className="d-flex align-items-center">
            <img
              src="/images/avatar.png"
              alt="avatar"
              className="rounded-circle me-2"
              width="40px"
              height="40px"
            />
            <h6 className="m-0">¿Tienes alguna pregunta?</h6>
          </div>
          <button className="btn-close btn-close-white" onClick={onClose}></button>
        </div>

        <div className="modal-body p-3">

          {/* Bloque avatar + mensaje usando flexbox */}
          <div className="d-flex align-items-start row__avatar___">
            <div className="me-2">
              <img
                src="/images/avatar.png"
                alt="avatar"
                className="rounded-circle"
                width="25px"
                height="25px"
              />
            </div>
            <div className="div__mensaje__whatsapp flex-grow-1">
              <p className="small">
                Escríbenos tu pregunta a continuación y un ejecutivo comercial se pondrá en contacto con usted.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="contenido__whatsapp__">
              <div className="mb-2">
                <input
                  type="text"
                  className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
              </div>

              <div className="mb-2 input-group">
                <span className="input-group-text bg-light">🇨🇴</span>
                <input
                  type="text"
                  className={`form-control ${errores.telefono ? "is-invalid" : ""}`}
                  placeholder="Teléfono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
                {errores.telefono && <div className="invalid-feedback">{errores.telefono}</div>}
              </div>

              <div className="mb-2">
                <textarea
                  className="form-control textarea-mensaje"
                  rows="2"
                  placeholder="Mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />
              </div>

              <p className="text-muted small">
                Al enviar el formulario, aceptas recibir mensajes a través del canal indicado.
              </p>
            </div>

            <button type="submit" className="btn btn-success w-100 d-flex align-items-center justify-content-center">
              <i className="bi bi-whatsapp me-2"></i> Contáctanos aquí
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default ModalWhatsapp;
