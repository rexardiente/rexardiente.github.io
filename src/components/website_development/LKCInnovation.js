import React from "react";
import DialogBox from "../modals/DialogBox";

function LKCInnovation() {
  const images = ["https://i.imgur.com/04H2bwp.png"];
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
          Our digital savvy team focuses on growing our clients’ businesses by
          boosting their traffic, increasing their social engagement and
          creating efficient web experiences that people love.
          <br />
        </p>
        <a
          href="https://lkcinnovation.com"
          target="_blank"
          rel="noreferrer"
          className="my-1"
        >
          https://lkcinnovation.com
        </a>
        <div className="d-flex justify-content-between align-items-center mt-auto mb-0">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#lkcInnoImages"
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
        id="lkcInnoImages"
        images={images}
        dataBsTarget="carousellkcInno"
      />
    </div>
  );
}

export default LKCInnovation;
