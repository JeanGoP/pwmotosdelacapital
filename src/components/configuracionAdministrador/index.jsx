
import React, { useState,useEffect } from "react";
import { GuardarConfiguracion } from "../../services/ServicioConsumo";
import { ToastContainer, toast } from 'react-toastify';
import EditorTexto from '../editorTexto'
const ConfiguracionAdministrador = ({getColorMenu, getColorFooter, getColorPagina, getColorTituloHome,getColorCuerpo,getColorFranja,getRutaYoutbe,getRutaFacebook ,getRutaInstagram, getWhatsapp, getRutaCotizador, getTratamientoDatos}) => {
    const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
    const [imagenPortada, setImagenPortada] = useState(null);
    const [formData, setFormData] = useState({
        colorMenu: "#000000",
        colorFooter: "#000000",
        colorPagina: "#ffffff",
        colorTituloHome:"#000000",
        colorCuerpo:"#000000",
        colorFranja:"#000000",
        rutaYoutube: "",
        rutaFacebook: "",
        rutaInstagram: "",
        whatsapp: "",
        rutaCotizador: "",
        tratamientoDatos:"",
        nit:NIT

    });
    const jsonConfig ={
        colorMenu: getColorMenu,
        colorFooter: getColorFooter,
        colorPagina: getColorPagina,
        colorTituloHome: getColorTituloHome,
        colorCuerpo : getColorCuerpo,
        colorFranja: getColorFranja,
        rutaYoutube: getRutaYoutbe,
        rutaFacebook: getRutaFacebook,
        rutaInstagram: getRutaInstagram,
        whatsapp: getWhatsapp,
        rutaCotizador: getRutaCotizador,
        tratamientoDatos: getTratamientoDatos,
        nit:NIT
    }
       // Cargar datos iniciales
       useEffect(() => {
        setFormData(jsonConfig)
    }, [getColorMenu]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImagenPortada(file);
      };
    
    const handleGuadarConfiguracion = async () => {
        const data = formData;
        for (const key in data) {
            if (typeof data[key] === "string" && data[key].trim() === "") {
              toast.warning(`Por favor completa el campo: ${key}`);
              return;
            }
          }

          const formData2 = new FormData();
          formData2.append("colorMenu", data.colorMenu);
          formData2.append("colorFooter", data.colorFooter);
          formData2.append("colorPagina", data.colorPagina);
          formData2.append("colorTituloHome", data.colorTituloHome);
          formData2.append("colorCuerpo", data.colorCuerpo);
          formData2.append("colorFranja", data.colorFranja);
          formData2.append("rutaYoutube", data.rutaYoutube);
          formData2.append("rutaFacebook", data.rutaFacebook);
          formData2.append("rutaInstagram", data.rutaInstagram);
          formData2.append("whatsapp", data.whatsapp);
          formData2.append("rutaCotizador", data.rutaCotizador);
          formData2.append("tratamientoDatos", data.tratamientoDatos);

          formData2.append("nit", data.nit);
          formData2.append("files", imagenPortada);
          formData2.append("Driverid", "b!mEzOU6FN402e5kDXM6ImwH_pVr3rflJNnoqSenwwO0C1LfVyI2YtTZA_n_j_ttK3");
          formData2.append("carpeta", "MOTOSABURRA_PAGEWEB");
          formData2.append("nombrePortada", imagenPortada.name);
      
          try {
            const response = await GuardarConfiguracion(formData2);
            if (!response.Error) {
              toast.success("Proceso ejecutado Exitosamente.")
            }else{
                toast.error(response.Mensaje);
            }
          } catch (error) {
            console.log(error);
            console.error('Error al obtener productos:', error.message);
          }
    };  
    return (
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
                <label htmlFor="" className="form-label">Color Menú</label>
                <input type="color" name="colorMenu" className="form-control form-control-lg" value={formData.colorMenu || ""} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <label htmlFor="" className="form-label">Color Footer</label>
                <input type="color" name="colorFooter" className="form-control form-control-lg" value={formData.colorFooter || ""} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <label htmlFor="" className="form-label">Color Página</label>
                <input type="color" name="colorPagina" className="form-control form-control-lg" value={formData.colorPagina || ""} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <label htmlFor="" className="form-label">Color Titulo Home</label>
                <input type="color" name="colorTituloHome" className="form-control form-control-lg" value={formData.colorTituloHome || ""} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <label htmlFor="" className="form-label">Color Cuerpo</label>
                <input type="color" name="colorCuerpo" className="form-control form-control-lg" value={formData.colorCuerpo || ""} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <label htmlFor="" className="form-label">Color Franja Marcas</label>
                <input type="color" name="colorFranja" className="form-control form-control-lg" value={formData.colorFranja || ""} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing" />
            </div>
            <h5 className="subtitulo__administrador__home">Redes Sociales </h5>
            <hr />
            <div className="col-lg-3 col-md-3 col-sm-12">
                <label htmlFor="" className="form-label">Link Video Youtube</label>
                <input type="text" name="rutaYoutube" className="form-control" value={formData.rutaYoutube || "" } onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <label htmlFor="" className="form-label">Link Facebook</label>
                <input type="text" name="rutaFacebook" className="form-control" value={formData.rutaFacebook || ""} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <label htmlFor="" className="form-label">Link Instagram</label>
                <input type="text" name="rutaInstagram" className="form-control" value={formData.rutaInstagram || ""} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <label htmlFor="" className="form-label">WhatsApp</label>
                <input type="text" name="whatsapp" className="form-control" value={formData.whatsapp || ""} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing" />
            </div>


            <h5 className="subtitulo__administrador__home">Cotizador </h5>
            <hr />
            <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="" className="form-label">Ruta Iframe Cotizador</label>
                <input type="text" name="rutaCotizador" className="form-control" value={formData.rutaCotizador || ""} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                    <label htmlFor="" className="form-label">Portada Cotizador</label>
                    <input className="form-control" name="ImagenPortadaCotizador"  type="file" accept="image/*" onChange={handleFileChange} />
             </div>

             <h5 className="subtitulo__administrador__home">Tratamiento de Datos </h5>
             <hr />
             <div className="col-lg-12 col-md-12 col-sm-12">

                <EditorTexto
                    value={formData.tratamientoDatos || ""}
                    onChange={(html) => setFormData(prev => ({ ...prev, tratamientoDatos: html }))}
                    />

            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 div__btn__administrador text-end">
                <button type="button" className="btn btn-primary btn__guardar__info__administrador" onClick={handleGuadarConfiguracion}>Guardar</button>
            </div>
   
        </div>
    )
}
export default ConfiguracionAdministrador;