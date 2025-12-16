import React, { useEffect, useState } from "react";
import { GuardarConocenos } from "../../services/ServicioConsumo";
import { toast } from 'react-toastify';
import { RiDeleteBinLine } from "react-icons/ri";

const url = import.meta.env.VITE_API_URL_SITE;
const API_BASE_URL = url;
const NIT = import.meta.env.VITE_API_NIT_EMPRESA;

const ConocenosAdministrador = ({getHistoria = '', getMision = '', getVision='' , getTituloHistoria = '', geParrafo_1 = '', getParrafo_2 ='', getParrafo_franja='', getValores ='' }) => {
  const [imagenPortada, setImagenPortada] = useState(null);
  const [valores, setValores] = useState([]);
  const [formDataConocenos, setFormDataConocenos] = useState({
    historia: "",
    mision: "",
    vision: "",
    titulohistoria: "",
    parrafo_1 :"",
    parrafo_2 :"",
    parrafo_franja :"",
    nit: NIT
  });
  useEffect(() => {

    setFormDataConocenos({
      historia: getHistoria || "",
      mision: getMision || "",
      vision: getVision || "",
      titulohistoria: getTituloHistoria || "",
      parrafo_1: geParrafo_1 || "",
      parrafo_2: getParrafo_2 || "",
      parrafo_franja: getParrafo_franja || "",
      nit: NIT
    });
  
    if (getValores) {
      try {
        const parsed = typeof getValores === "string" ? JSON.parse(getValores) : getValores;
        setValores(parsed);
      } catch (err) {
        console.error("Error al parsear Valores:", err);
      }
    }
  }, [
    getHistoria,
    getMision,
    getVision,
    getTituloHistoria,
    geParrafo_1,
    getParrafo_2,
    getParrafo_franja,
    getValores
  ]);

  const [formDataValores, setFormDataValores] = useState({
    titulovalor: "",
    icono: "",
    descripcionValor: "",
  });

  const iconos = ['heart', 'Award', 'Handshake', 'Shield', 'Users', 'Sparkles','Zap'];

  const agregarValores = () => {
    if (formDataValores.titulovalor && formDataValores.icono && formDataValores.descripcionValor) {
      setValores([...valores, formDataValores]);
      setFormDataValores({ titulovalor: '', icono: '', descripcionValor: '' });
    } else {
      toast.info('Todos los campos son obligatorios');
    }
  };

  const eliminarValores = (index) => {
    const nuevas = valores.filter((_, i) => i !== index);
    setValores(nuevas);
  };

  const handleChangeConocenos = (e) => {
    const { name, value } = e.target;
    setFormDataConocenos(prev => ({ ...prev, [name]: value }));
  };

  const handleChangeValores = (e) => {
    const { name, value } = e.target;
    setFormDataValores(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImagenPortada(file);
  };

  const handleGuadarConocenos = async () => {
    const data = formDataConocenos;
    for (const key in data) {
      if (typeof data[key] === "string" && data[key].trim() === "") {
        toast.warning(`Por favor completa el campo: ${key}`);
        return;
      }
    }

    if (!imagenPortada) {
      toast.warning("Por favor selecciona una imagen de portada.");
      return;
    }

    const formData = new FormData();
    formData.append("historia", data.historia);
    formData.append("mision", data.mision);
    formData.append("vision", data.vision);
    formData.append("titulohistoria", data.titulohistoria);
    formData.append("parrafo_1", data.parrafo_1);
    formData.append("parrafo_2", data.parrafo_2);
    formData.append("parrafo_franja", data.parrafo_franja);
    formData.append("nit", data.nit);
    formData.append("files", imagenPortada);
    formData.append("Driverid", "b!mEzOU6FN402e5kDXM6ImwH_pVr3rflJNnoqSenwwO0C1LfVyI2YtTZA_n_j_ttK3");
    formData.append("carpeta", "MOTOSABURRA_PAGEWEB");
    formData.append("nombrePortada", imagenPortada.name);
 
  
    if (valores.length > 0) {
      const valoresJson = JSON.stringify(valores);
      formData.append("valores", valoresJson);
    }

    try {
      const response = await GuardarConocenos(formData);
      if (!response.Error) {
        toast.success("Proceso ejecutado Exitosamente.")
      } else {
        toast.error(response.Mensaje);
      }
    } catch (error) {
      console.error('Error al guardar:', error.message);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <label className="form-label">Portada Conócenos</label>
        <input className="form-control" type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12">
        <label className="form-label">Historia</label>
        <textarea className="form-control" name="historia" value={formDataConocenos.historia} onChange={handleChangeConocenos} />
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12">
        <label className="form-label">Misión</label>
        <textarea className="form-control" name="mision" value={formDataConocenos.mision} onChange={handleChangeConocenos} />
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12">
        <label className="form-label">Visión</label>
        <textarea className="form-control" name="vision" value={formDataConocenos.vision} onChange={handleChangeConocenos} />
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <label className="form-label">Titulo historia</label>
        <textarea className="form-control" name="titulohistoria" value={formDataConocenos.titulohistoria} onChange={handleChangeConocenos} />
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <label className="form-label">historia Parrafo 1</label>
        <textarea className="form-control" name="parrafo_1" value={formDataConocenos.parrafo_1} onChange={handleChangeConocenos} />
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <label className="form-label">historia Parrafo 2</label>
        <textarea className="form-control" name="parrafo_2" value={formDataConocenos.parrafo_2} onChange={handleChangeConocenos} />
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <label className="form-label">Parrafo Franja</label>
        <textarea className="form-control" name="parrafo_franja" value={formDataConocenos.parrafo_franja} onChange={handleChangeConocenos} />
      </div>
      <h5 className="subtitulo__administrador__home">Valores </h5>
      <hr />

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <label className="form-label">Título</label>
          <input type="text" name="titulovalor" className="form-control" value={formDataValores.titulovalor} onChange={handleChangeValores} />
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <label className="form-label">Icono</label>
          <select name="icono" className="form-control" value={formDataValores.icono} onChange={handleChangeValores}>
            <option value="">Seleccione un icono</option>
            {iconos.map((icon, index) => (
              <option key={index} value={icon}>{icon}</option>
            ))}
          </select>
        </div>

        <div className="col-lg-11 col-md-11 col-sm-12">
          <label className="form-label">Descripción valor</label>
          <textarea className="form-control" name="descripcionValor" value={formDataValores.descripcionValor} onChange={handleChangeValores} />
        </div>

        <div className="col-lg-1 col-md-1 col-sm-12">
          <button type="button" className="btn btn-success mt-4" onClick={agregarValores}>+</button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-12">
          <div style={{ maxHeight: '40vh', overflowY: 'auto' }}>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Valor</th>
                  <th>Icono</th>
                  <th>Descripción</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {valores.length > 0 ? valores.map((valor, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{valor.titulovalor}</td>
                    <td>{valor.icono}</td>
                    <td>{valor.descripcionValor}</td>
                    <td>
                      <RiDeleteBinLine style={{ cursor: 'pointer' }} onClick={() => eliminarValores(index)} />
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="5" className="text-center">No hay valores registrados.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 text-end">
        <button type="button" className="btn btn-primary" onClick={handleGuadarConocenos}>Guardar</button>
      </div>
    </div>
  );
};

export default ConocenosAdministrador;
