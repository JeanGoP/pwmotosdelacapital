import React from "react";

const CardSkeleton = () => {
  return (
    <div
      className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex"
      style={{ marginBottom: "34px" }}
    >
      <div className="card w-100" style={{ borderRadius: "12px" }}>
        {/* Imagen */}
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="180"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#e9ecef"></rect>
        </svg>

        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
          </p>
          <a
            href="#"
            tabIndex="-1"
            className="btn btn-danger disabled placeholder col-6"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
