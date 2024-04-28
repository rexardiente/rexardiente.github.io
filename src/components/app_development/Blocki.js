import React from "react";
import DialogBox from "./DialogBox";

function Blocki() {
  const images = [
    "https://imgur.com/LJYkYQv.png",
    "https://imgur.com/hBpQU7O.png",
  ];
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
          Keeps your crypto wallet safe by changing its paw color on trusted and
          scam websites.
        </p>
        <p className="card-text">
          Blocki the Wallet WatchDog keeps your crypto wallet safe by changing
          its paw color in your browser's toolbar to let you know if your are on
          a trusted or possibly harmful crypto website.
        </p>
        <div className="d-flex justify-content-between align-items-center mt-auto mb-0">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#BlockiImages"
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
        id="BlockiImages"
        images={images}
        dataBsTarget="carouselBlocki"
      />
    </div>
  );
}

export default Blocki;
