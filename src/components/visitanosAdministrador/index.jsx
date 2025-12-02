import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { GuardarUbicacion } from "../../services/ServicioConsumo";
const departamentos = ["Cundinamarca", "Antioquia", "Bolívar","Casanare","Meta","Guaviare","Meta (Granada)"]; 

const VisitanosAdministrador = ({getJsonRegistros}) => {
const url = import.meta.env.VITE_API_URL_SITE;
const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const [departamento, setDepartamento] = useState("");
  const [ciudad, setCiudad] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    horarioSemana: "",
    horarioSabado: "",
    mapaUrl: "",
    googleMapsLink: "",
    contactoNombre: "",
    contactoTelefono: "",
  });

  const [registros, setRegistros] = useState([]);


  const handleChange = (e) => {
    setCiudad({ ...ciudad, [e.target.name]: e.target.value });
  };

  const handleAgregar = () => {
    if (!departamento || !ciudad.nombre) {
      toast.warning("Debes seleccionar un departamento y llenar al menos el nombre de la ciudad.");
      return;
    }

    setRegistros([
      ...registros,
      {
        departamento,
        ...ciudad,
        contacto: {
          nombre: ciudad.contactoNombre,
          telefono: ciudad.contactoTelefono,
        },
      },
    ]);

    // Reset form
    setCiudad({
      nombre: "",
      direccion: "",
      telefono: "",
      horarioSemana: "",
      horarioSabado: "",
      mapaUrl: "",
      googleMapsLink: "",
      contactoNombre: "",
      contactoTelefono: "",
    });
  };

  const handleEliminar = (index) => {
    setRegistros(registros.filter((_, i) => i !== index));
  };
  // Cargar datos iniciales
  useEffect(() => {
    if (getJsonRegistros) {
      try {
        const parsed =
          typeof getJsonRegistros === "string"
            ? JSON.parse(getJsonRegistros)
            : getJsonRegistros;
  
      
        const registrosPlanos = parsed.flatMap(dep =>
          dep.ciudades.map(ciudad => ({
            departamento: dep.nombre,
            ...ciudad,
            contactoNombre: ciudad.contacto?.nombre || "",
            contactoTelefono: ciudad.contacto?.telefono || "",
          }))
        );
  
        setRegistros(registrosPlanos);
      } catch (error) {
        console.error("Error al parsear Ubicaciones:", error);
      }
    }
  }, [getJsonRegistros]);
  
  const handleGuardar = () => {
    if (registros.length === 0) {
      toast.warning("No hay registros para guardar.");
      return;
    }
  
    const resultado = registros.reduce((acc, curr) => {
      const existente = acc.find((item) => item.nombre === curr.departamento);
  
      const ciudad = {
        nombre: curr.nombre,
        direccion: curr.direccion,
        telefono: curr.telefono,
        horarioSemana: curr.horarioSemana,
        horarioSabado: curr.horarioSabado,
        mapaUrl: curr.mapaUrl,
        googleMapsLink: curr.googleMapsLink,
        contacto: {
          nombre: curr.contacto.nombre || "",
          telefono: curr.contacto.telefono || "",
        },
      };
  
      if (existente) {
        existente.ciudades.push(ciudad);
      } else {
        acc.push({
          nombre: curr.departamento,
          ciudades: [ciudad],
        });
      }
  
      return acc;
    }, []);
  
    UbicacionSave(resultado);
  };
  
  const UbicacionSave = async (jsonUbicacion) => {
    const formDataSend = new FormData();
  
 
    formDataSend.append("jsonUbicacion", JSON.stringify(jsonUbicacion));
    formDataSend.append("nit", NIT);
  
    try {
      const response = await GuardarUbicacion(formDataSend);
      if (!response.Error) {
        toast.success("Ubicaciones guardadas exitosamente.");
      } else {
        toast.error(response.Mensaje);
      }
    } catch (error) {
      console.error("Error al guardar ubicaciones:", error);
      toast.error("Error al guardar ubicaciones.");
    }
  };
  
  return (
    <div className="container mt-4">


      {/* Select de departamento */}
      <div className="mb-3">
        <label className="form-label">Departamento</label>
        <select
          className="form-select"
          value={departamento}
          onChange={(e) => setDepartamento(e.target.value)}
        >
          <option value="">Seleccione...</option>
          {departamentos.map((dep, i) => (
            <option key={i} value={dep}>
              {dep}
            </option>
          ))}
        </select>
      </div>

      {/* Formulario ciudad */}
      <div className="row g-2">
        <div className="col-md-6">
        <label className="form-label">Ciudad</label>
          <input
            name="nombre"
            value={ciudad.nombre}
            onChange={handleChange}
            className="form-control"
            placeholder="Nombre Ciudad"
          />
        </div>
        <div className="col-md-6">
        <label className="form-label">Dirección</label>
          <input
            name="direccion"
            value={ciudad.direccion}
            onChange={handleChange}
            className="form-control"
            placeholder="Dirección"
          />
        </div>
        <div className="col-md-6">
        <label className="form-label">Teléfono</label>
          <input
            name="telefono"
            value={ciudad.telefono}
            onChange={handleChange}
            className="form-control"
            placeholder="Teléfono"
          />
        </div>
        <div className="col-md-6">
        <label className="form-label">Horario Semana</label>
          <input
            name="horarioSemana"
            value={ciudad.horarioSemana}
            onChange={handleChange}
            className="form-control"
            placeholder="Horario Semana"
          />
        </div>
        <div className="col-md-6">
        <label className="form-label">Horario Fin Semana</label>
          <input
            name="horarioSabado"
            value={ciudad.horarioSabado}
            onChange={handleChange}
            className="form-control"
            placeholder="Horario Sábado"
          />
        </div>
        <div className="col-md-6">
        <label className="form-label">Url Mapa</label>
          <input
            name="mapaUrl"
            value={ciudad.mapaUrl}
            onChange={handleChange}
            className="form-control"
            placeholder="Mapa URL"
          />
        </div>
        <div className="col-md-6">
        <label className="form-label">Link Google Map</label>
          <input
            name="googleMapsLink"
            value={ciudad.googleMapsLink}
            onChange={handleChange}
            className="form-control"
            placeholder="Google Maps Link"
          />
        </div>
        <div className="col-md-6">
        <label className="form-label">Contacto</label>
          <input
            name="contactoNombre"
            value={ciudad.contactoNombre}
            onChange={handleChange}
            className="form-control"
            placeholder="Nombre Contacto"
          />
        </div>
        <div className="col-md-6">
        <label className="form-label">Teléfono Contacto</label>
          <input
            name="contactoTelefono"
            value={ciudad.contactoTelefono}
            onChange={handleChange}
            className="form-control"
            placeholder="Teléfono Contacto"
          />
        </div>
        <div className="col-md-6">  
            <button className="btn btn-primary mt-3" onClick={handleAgregar} style={{position:"relative", top:"15px"}}>  +</button>
        </div>

      </div>



      {/* Tabla de registros */}

        <div className="mt-4">

          <table className="table table-striped">
            <thead>
              <tr>
                <th>Departamento</th>
                <th>Ciudad</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Horario Semana</th>
                <th>Horario Sábado</th>
                <th>Contacto</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {registros.map((r, i) => (
                <tr key={i}>
                  <td>{r.departamento}</td>
                  <td>{r.nombre}</td>
                  <td>{r.direccion}</td>
                  <td>{r.telefono}</td>
                  <td>{r.horarioSemana}</td>
                  <td>{r.horarioSabado}</td>
                  <td>
                    {r.contacto.nombre} ({r.contacto.telefono})
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleEliminar(i)}
                    >
                      <span><RiDeleteBinLine/></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      <div className="text-end">
        <button
          type="button"
          className="btn btn-primary"  
          onClick={handleGuardar}
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default VisitanosAdministrador;
