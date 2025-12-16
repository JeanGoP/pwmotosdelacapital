import React from "react";
import "./HistoriaTimeline.css";

const HistoriaTimeline = ({ data }) => {
  return (
    <div className="HistoriaTimeline">
      <div className="HistoriaLinea">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`HistoriaItem ${isLeft ? "HistoriaLeft" : "HistoriaRight"}`}
            >
              <div className="HistoriaContenido">
                <span
                  className="HistoriaAnno"
                  style={{ backgroundColor: item.color }}
                >
                  {item.anno}
                </span>

                <h4 className="HistoriaTitulo">{item.titulo}</h4>
                <p className="HistoriaDetalle">{item.detalle}</p>
              </div>

              <span
                className="HistoriaPunto"
                style={{ backgroundColor: item.color }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HistoriaTimeline;
