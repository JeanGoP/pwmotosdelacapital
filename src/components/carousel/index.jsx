import React, { useMemo } from "react";
import "./carouselHero.css";

const CarouselHero = ({img =''}) => {
  

  const rutas = useMemo(() => {
    try {
      if (typeof img === "string" && img.trim() !== "") {
        return JSON.parse(img); // si viene como string JSON
      }
      if (Array.isArray(img)) {
        return img; // si ya viene como array
      }
      return [];
    } catch (e) {
      console.error("Error al parsear img:", e);
      return [];
    }
  }, [img]);

  const slides = rutas.map((ruta, index) => ({
    img: ruta,
    alt: `Imagen ${index + 1}`,
  }));

  if (slides.length === 0) {
    return <p>Cargando imágenes...</p>;
  }

  
  // const slides = [
  //   {
  //     img: "/images/FondoMotoAndes.png",
  //     alt: "Xpulse 200 4V",
  //   },
  //   {
  //     img: "/images/FondoMoto2.png",
  //     alt: "Otra moto",
  //   }
  // ];
  // const slides = rutas.map((ruta, index) => ({
  //   img: ruta,
  //   alt: `Imagen ${index + 1}`,
  // }));
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicadores */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button 
            key={index}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={slide.img}
              className="d-block w-100 carousel-image"
              alt={slide.alt}
            />
          </div>
        ))}
      </div>

      {/* Controles */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default CarouselHero;
