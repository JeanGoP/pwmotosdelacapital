import React, { useState, useRef, useEffect } from "react";
import "./moto360Viewer.css";

const Moto360Viewer = ({ images, op = '1' }) => {
  const [frame, setFrame] = useState(0);
  const sliderRef = useRef(null);

  // actualizar la barra con el porcentaje actual
  useEffect(() => {
    if (!sliderRef.current) return;
    const percent = (frame / (images.length - 1)) * 100;
    sliderRef.current.style.setProperty("--val", `${percent}%`);
  }, [frame, images.length]);

  const handleSliderChange = (e) => {
    const value = Number(e.target.value);
    setFrame(value);
  };

  if(op == '1'){
    return (
      <>
      <div className="viewer-container" style={{  borderRadius: "16px"}}>

        <img
          src={images[frame]}
          alt={`frame-${frame}`}
          className="viewer-image"
          style={{ borderRadius: "16px"}}
        />
          
  
      </div>
      </>
    )
  }else{
    return (
      <>
      <div className="viewer-container2">
         <div className="viewer-header">
          <span className="viewer-badge">Vista 360°</span>
        </div> 
  
        <img
          src={images[frame]}
          alt={`frame-${frame}`}
          className="viewer-image"
        />
          
  
      </div>
     <div className="contenido--viewer-footer">
      <div className="viewer-footer">
          <span className="viewer-label">Rotar:</span>
  
          <input
            type="range"
            min="0"
            max={images.length - 1}
            value={frame}
            onChange={handleSliderChange}
            className="viewer-slider"
            ref={sliderRef}
          />
  
          <span className="viewer-counter">
            {frame + 1}/{images.length}
          </span>
        </div>
        </div> 
      </>
    )
  }

};

export default Moto360Viewer;
