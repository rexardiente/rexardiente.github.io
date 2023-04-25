import React from "react";
import DialogBox from "./DialogBox";

function Coinica() {
  const images = [
    "https://imgur.com/NNFbEGa.jpg",
    "https://imgur.com/uS7TtBz.jpg",
    "https://imgur.com/4H1GaX8.jpg",
    "https://imgur.com/NOls7w9.jpg",
    "https://imgur.com/txpyhAr.jpg",
    "https://imgur.com/AQfD1OI.jpg",
    "https://imgur.com/IkHNHaU.jpg",
    "https://imgur.com/5UTpC2C.jpg",
    "https://imgur.com/aXKRqrw.jpg",
  ];

  return (
    <div className="card shadow-sm h-100">
      <img
        src={images[3]}
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="230"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
      <div className="row card-body">
        <p className="card-text">
          Coinica is a decentralized autonomous organization (DAO) that operates
          blockchain-based games or Decentralized application. Aim to create a
          blockchain game platform economy, optimizing its community-owned
          assets for maximum utility and sharing its profits with its token
          holders.
        </p>
        {/*"<div className="d-flex justify-content-end my-3">
          <small className="text-muted">Year 2020</small>
  </div>"*/}
        <div className="d-flex justify-content-between align-items-center mt-auto mb-0">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#coinicaImages"
            >
              View
            </button>
          </div>
          <small className="text-muted">{images.length} image/s</small>
        </div>
      </div>
      <DialogBox
        id="coinicaImages"
        images={images}
        dataBsTarget="carouselCoinica"
      />
    </div>
  );
}

export default Coinica;
