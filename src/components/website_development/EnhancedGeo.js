import React from "react";
import DialogBox from "../app_development/DialogBox";

function EnhancedGeo() {
  const images = ["https://i.imgur.com/HjBFZGi.png"];
  return (
    <div className="card shadow-sm h-100">
      <img
        src={images[0]}
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="230"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
      <div className="row card-body">
        <p className="card-text">
          Groundbreaking technology for a new source of energy. EnhancedGEO’s
          novel technology will enable energy dense green fuel production from
          new regions in a completely clean manner, forever changing the
          footprint of energy production
          <br />
        </p>
        <a
          href="https://enhancedgeo.com"
          target="_blank"
          rel="noreferrer"
          className="my-1"
        >
          https://enhancedgeo.com
        </a>
        <div className="d-flex justify-content-between align-items-center mt-auto mb-0">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#enhancedGeoImages"
            >
              View
            </button>
          </div>
          {images.length > 1 && (
            <small className="text-muted">{images.length} images</small>
          )}
        </div>
      </div>
      <DialogBox
        id="enhancedGeoImages"
        images={images}
        dataBsTarget="carouselEnhancedGeo"
      />
    </div>
  );
}

export default EnhancedGeo;
