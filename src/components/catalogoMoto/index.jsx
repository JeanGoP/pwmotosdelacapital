import React, { useContext, useEffect, useState } from 'react';
import './catalogoMoto.css';
import CardMarcaMoto from '../../components/cardMarcaMoto';
import CardMotocicleta from '../../components/cardMotocicleta';
import { jsonCardMarcasMotos } from '../../constants/constants';
import { LanguageContext } from '../../context/context';
import { LuPanelBottomClose } from 'react-icons/lu';
import { useRef } from 'react';

const CatalogoMoto = ({ ColorTitulo, colorPagina }) => {
  const catalogoRef = useRef(null);

  const { productos, segmentos, productoSeleccionado, setProductoSeleccionado, marcaFiltro, setMarcaFiltro, marcasUnicas, setMarcasUnicas, desplazamiento } =
    useContext(LanguageContext);

  useEffect(() => {
    if (desplazamiento != '') {
      catalogoRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [desplazamiento]);
  const [cilindrajeFiltro, setCilindrajeFiltro] = useState('');
  const [precioMin, setPrecioMin] = useState('');
  const [precioMax, setPrecioMax] = useState('');
  const [cantidadMostrar, setCantidadMostrar] = useState(6);

  useEffect(() => {
    const nuevasMarcas = [...new Set(productos.map((p) => p.marca_nombre))];
    setMarcasUnicas(nuevasMarcas);
  }, [productos]);

  const cilindrajesUnicos = [
    ...new Set(productos.map((p) => p.ficha_tecnica?.find((i) => i.ficha_tecnica_name === 'Cilindrada')?.ficha_tecnica_detalle).filter(Boolean)),
  ];

  const productosFiltrados = productos.filter((producto) => {
    const anioActual = new Date().getFullYear();
    const precio = Number(producto.precio?.[anioActual]) || 0;
    const cilindrada = producto.ficha_tecnica?.find((i) => i.ficha_tecnica_name === 'Cilindrada')?.ficha_tecnica_detalle || '';

    return (
      (!marcaFiltro || producto.marca_nombre === marcaFiltro) &&
      (!cilindrajeFiltro || cilindrada === cilindrajeFiltro) &&
      (!precioMin || precio >= Number(precioMin)) &&
      (!precioMax || precio <= Number(precioMax))
    );
  });

  const productosParaMostrar = productosFiltrados.slice(0, cantidadMostrar);

  const sugerencias = productos.sort(() => 0.5 - Math.random()).slice(0, 3);

  const cargarMas = () => {
    setCantidadMostrar((prev) => prev + 5);
  };

  useEffect(() => {
    setCantidadMostrar(6);
  }, [marcaFiltro, cilindrajeFiltro, precioMin, precioMax]);

  return (
    <div className="container mt-4">
      <div className="row row__CatalogoMoto" style={{ backgroundColor: colorPagina }}>
        <p className="Titlulo__CatalogoMoto" style={{ color: ColorTitulo }}>
          NUESTRAS MOTOCICLETAS
        </p>
        {segmentos.map((item) => {
          const cardInfo = jsonCardMarcasMotos.find((moto) => moto.titulo.toUpperCase() === item.segmento_nombre.toUpperCase());
          return (
            <CardMarcaMoto
              key={item.segmento_id}
              Titulo={item.segmento_nombre}
              Descripcion={cardInfo?.descripcion || 'Descripción no disponible'}
              Imagen={cardInfo?.imagen || 'https://www.aburramotos.com/wp-content/uploads/Imagenes1/platino.jpg'}
            />
          );
        })}
      </div>

      <div ref={catalogoRef} className="text-end container mb-3">
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#filtroModal">
          Mostrar Filtros
        </button>
      </div>

      <div className="modal fade" id="filtroModal" tabIndex="-1" aria-labelledby="filtroModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="filtroModalLabel">
                Filtrar Motocicletas
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Marca</label>
                <select className="form-select" value={marcaFiltro} onChange={(e) => setMarcaFiltro(e.target.value)}>
                  <option value="">Todas</option>
                  {marcasUnicas.map((marca, idx) => (
                    <option key={idx} value={marca}>
                      {marca}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Cilindraje</label>
                <select className="form-select" value={cilindrajeFiltro} onChange={(e) => setCilindrajeFiltro(e.target.value)}>
                  <option value="">Todos</option>
                  {cilindrajesUnicos.map((cil, idx) => (
                    <option key={idx} value={cil}>
                      {cil}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Precio mínimo</label>
                <input type="number" className="form-control" value={precioMin} onChange={(e) => setPrecioMin(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Precio máximo</label>
                <input type="number" className="form-control" value={precioMax} onChange={(e) => setPrecioMax(e.target.value)} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                Aplicar filtros
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {productosParaMostrar.length > 0 ? (
          productosParaMostrar.map((producto, index) => {
            const cilindrada = producto.ficha_tecnica?.find((i) => i.ficha_tecnica_name === 'Cilindrada')?.ficha_tecnica_detalle || 'No disponible';

            return (
              <CardMotocicleta
                key={index}
                Imagen={producto.imagen_portada}
                Cilindraje={cilindrada}
                Modelo={(() => {
                  const precios = producto.precio || {};
                  const añosDisponibles = Object.keys(precios)
                    .map(Number)
                    .filter((año) => precios[año]);

                  if (añosDisponibles.length === 0) {
                    return 'Año no disponible';
                  }

                  const añoMasReciente = Math.max(...añosDisponibles);
                  return añoMasReciente;
                })()}
                NombreProducto={producto.producto_nombre}
                Precio={(() => {
                  const precios = producto.precio || {};
                  const añosDisponibles = Object.keys(precios)
                    .map(Number)
                    .filter((año) => precios[año]);

                  if (añosDisponibles.length === 0) {
                    return 'Precio No Disponible';
                  }

                  const añoMasReciente = Math.max(...añosDisponibles);
                  const precio = precios[añoMasReciente];

                  return `${añoMasReciente}: ${Number(precio).toLocaleString('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0,
                  })}`;
                })()}
                Marca={producto.marca_nombre}
                producto={producto}
              />
            );
          })
        ) : (
          <div className="col-12 text-center">
            <p className="text-danger fw-bold mt-4">No hay resultados según el filtro, pero te sugerimos estas motocicletas:</p>
            <div className="row justify-content-center">
              {sugerencias.map((producto, index) => {
                const anioActual = new Date().getFullYear();
                const precio = producto.precio?.[anioActual];
                const precioFormateado = precio
                  ? Number(precio).toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })
                  : 'Precio no disponible';

                const cilindrada = producto.ficha_tecnica?.find((i) => i.ficha_tecnica_name === 'Cilindrada')?.ficha_tecnica_detalle || 'No disponible';

                return (
                  <div onClick={() => setProductoSeleccionado(producto)}>
                    <CardMotocicleta
                      key={index}
                      Imagen={producto.imagen_portada}
                      Cilindraje={cilindrada}
                      Modelo="2022"
                      NombreProducto={producto.producto_nombre}
                      Precio={(() => {
                        const precios = producto.precio || {};
                        const añosDisponibles = Object.keys(precios)
                          .map(Number)
                          .filter((año) => precios[año]); // Filtra solo los años con valor válido

                        if (añosDisponibles.length === 0) {
                          return 'Precio No Disponible';
                        }

                        const añoMasReciente = Math.max(...añosDisponibles);
                        const precio = precios[añoMasReciente];

                        return `${añoMasReciente}: ${Number(precio).toLocaleString('es-CO', {
                          style: 'currency',
                          currency: 'COP',
                          minimumFractionDigits: 0,
                        })}`;
                      })()}
                      Marca={producto.marca_nombre}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {productosParaMostrar.length > 0 && productosParaMostrar.length < productosFiltrados.length && (
        <div className="text-center mt-4">
          <button className="btn btn-outline-primary btn__mostrarMas" onClick={cargarMas}>
            <LuPanelBottomClose /> CARGAR MÁS VEHÍCULOS
          </button>
        </div>
      )}

      {productoSeleccionado && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content" style={{ borderRadius: '12px', overflow: 'hidden' }}>
              <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
                <h5 className="modal-title fw-bold">{productoSeleccionado.producto_nombre}</h5>
                <button type="button" className="btn-close" onClick={() => setProductoSeleccionado(null)}></button>
              </div>

              <div className="modal-body" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={productoSeleccionado.imagen_portada}
                    alt={productoSeleccionado.producto_nombre}
                    className="img-fluid rounded shadow-sm mb-4"
                    style={{ maxHeight: '300px', objectFit: 'contain' }}
                  />
                </div>

                <div className="mb-4 p-4 bg-light rounded shadow-sm">
                  <div className="mb-2 d-flex justify-content-between">
                    <strong className="text-muted">Marca:</strong>
                    <span>{productoSeleccionado.marca_nombre}</span>
                  </div>

                  <div className="mb-2 d-flex justify-content-between">
                    <strong className="text-muted">Referencia:</strong>
                    <span>{productoSeleccionado.referencia}</span>
                  </div>

                  <div className="mb-2">
                    <strong className="text-muted">Descripción:</strong>
                    <p className="mb-0 text-dark">{productoSeleccionado.descripcion_amplia}</p>
                  </div>

                  <div className="mb-2 d-flex justify-content-between">
                    <strong className="text-muted">Categoría:</strong>
                    <span>{productoSeleccionado.categoria_nombre}</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <strong className="text-muted">Precio:</strong>
                    <span className="text-success fw-bold fs-5">
                      {(() => {
                        const precios = productoSeleccionado.precio || {};
                        const añosDisponibles = Object.keys(precios)
                          .map(Number)
                          .filter((año) => precios[año]); // Filtra solo los años con valor válido

                        if (añosDisponibles.length === 0) {
                          return 'Precio No Disponible';
                        }

                        const añoMasReciente = Math.max(...añosDisponibles);
                        const precio = precios[añoMasReciente];

                        return `${añoMasReciente}: ${Number(precio).toLocaleString('es-CO', {
                          style: 'currency',
                          currency: 'COP',
                          minimumFractionDigits: 0,
                        })}`;
                      })()}
                    </span>
                  </div>
                </div>

                {productoSeleccionado.color?.length > 0 && (
                  <div className="mb-4">
                    <h6 className="fw-semibold mb-3">Colores disponibles</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {productoSeleccionado.color.map(({ color_id, color_code, color_name }) => (
                        <div key={color_id} className="d-flex align-items-center px-2 py-1 border rounded" style={{ background: '#fefefe', gap: '8px' }}>
                          {color_code && (
                            <div
                              style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: color_code,
                                border: '1px solid #000',
                                borderRadius: '4px',
                              }}
                            />
                          )}
                          <span className="small text-dark">{color_name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {productoSeleccionado.ficha_tecnica?.length > 0 && (
                  <div className="mb-4">
                    <h6 className="fw-semibold mb-3">Ficha Técnica</h6>
                    <table className="table table-hover table-bordered table-sm align-middle">
                      <thead className="table-light">
                        <tr>
                          <th style={{ width: '40%' }}>Característica</th>
                          <th>Detalle</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productoSeleccionado.ficha_tecnica.map((item, idx) => (
                          <tr key={idx}>
                            <td>
                              <i className="bi bi-info-circle-fill me-2 text-primary"></i>
                              {item.ficha_tecnica_name}
                            </td>
                            <td>{item.ficha_tecnica_detalle}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6' }}>
                <button type="button" className="btn btn-outline-secondary" onClick={() => setProductoSeleccionado(null)}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogoMoto;
