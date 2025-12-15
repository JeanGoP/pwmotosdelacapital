import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./posventaSelect.css";

const PosventaSelect = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (val) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div className="posventa-select-wrapper">
      {/* Caja visible */}
      <div
        className="posventa-select-display"
        onClick={() => setOpen(!open)}
      >
        {value || "Selecciona un servicio"}
        <span className={`posventa-arrow ${open ? "rotate" : ""}`}>▾</span>
      </div>

      {/* Menú animado */}
      <AnimatePresence>
        {open && (
          <motion.ul
            className="posventa-select-options"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {options.map((opt, i) => (
              <motion.li
                key={i}
                onClick={() => handleSelect(opt)}
                className={value === opt ? "selected" : ""}
                 
                transition={{ duration: 0.15 }}
              >
                {opt}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PosventaSelect;
