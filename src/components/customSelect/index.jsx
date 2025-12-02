import { useState, useRef } from "react";
import { TbBike } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleUp,FaAngleDown } from "react-icons/fa";

export default function CustomSelect({ productosLimpios }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [offset, setOffset] = useState(0);

  const visibleCount = 10;   // cuantos items visibles
  const itemHeight = 40;    // alto por item
  const listHeight = visibleCount * itemHeight;

  const maxOffsetPx = Math.max(0, productosLimpios.length * itemHeight - listHeight);
  const intervalRef = useRef(null);
  const speedRef = useRef(2); // velocidad inicial en px

  const startScroll = (direction) => {
    stopScroll(); // limpiar si ya hay uno
    speedRef.current = 2; // reiniciar velocidad
    intervalRef.current = setInterval(() => {
      setOffset((prev) => {
        if (direction === "up") {
          return Math.max(0, prev - speedRef.current);
        } else {
          return Math.min(maxOffsetPx, prev + speedRef.current);
        }
      });
    }, 20);

    // cada 500ms, aumenta la velocidad un poco
    const accelerate = setInterval(() => {
      speedRef.current = Math.min(speedRef.current + 1, 20); // limite máximo 20px
    }, 500);

    // guardamos ambos para limpiarlos después
    intervalRef.current.accelerate = accelerate;
  };

  const stopScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      if (intervalRef.current.accelerate) {
        clearInterval(intervalRef.current.accelerate);
      }
      intervalRef.current = null;
    }
  };

  const handleSelect = (nombre) => {
    setSelected(nombre);
    setOpen(false);
    setOffset(0);
  };

  return (
    <div className="cotizacion-group">

      <div className="position-relative">
        <button
          className={`form-select form-selectbutoon text-start pe-5 ${open ? "open" : ""}`}
          type="button"
          onClick={() => setOpen(!open)}
        >
          {selected || "Selecciona el modelo que te interesa"}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              className="dropdown-menu show w-100 mt-1 shadow-sm border rounded-3 p-0"
              style={{ height: `${listHeight + 60}px`, overflow: "hidden" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Flecha arriba */}
              {offset > 0 && (
                <div
                  className="text-center py-1 border-bottom"
                  onMouseEnter={() => startScroll("up")}
                  onMouseLeave={stopScroll}
                  style={{ cursor: "pointer" }}
                >
                  <FaAngleUp size={18} />
                </div>
              )}

              {/* Lista scrollable */}
              <div
                style={{
                  height: `${listHeight}px`,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <ul
                  className="list-unstyled m-0"
                  style={{
                    transform: `translateY(-${offset}px)`,
                    transition: "transform 0.05s linear",
                  }}
                >
                  {productosLimpios.map((nombre, idx) => (
                    <li key={idx}>
                      <button
                        className="dropdown-item rounded-2"
                        style={{ height: `${itemHeight}px` }}
                        onClick={() => handleSelect(nombre)}
                      >
                        {nombre}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Flecha abajo */}
              {offset < maxOffsetPx && (
                <div
                  className="text-center py-1 border-top"
                  onMouseEnter={() => startScroll("down")}
                  onMouseLeave={stopScroll}
                  style={{ cursor: "pointer" }}
                >
                  <FaAngleDown size={18} />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
