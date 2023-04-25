import React from "react";
import DialogBox from "../modals/DialogBox";

function BatcoinSupreme() {
  const images = ["https://i.imgur.com/X3hCJ54.png"];
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
          Batcoin Supreme ( Batcoin) is a store value digital crypto currency
          and decentralize finance in Binance Smartchain network.
        </p>
        <a
          href="https://www.batcoinsupreme.com"
          target="_blank"
          rel="noreferrer"
          className="my-1"
        >
          https://www.batcoinsupreme.com
        </a>
        <a
          href="https://bscscan.com/address/0x387F7b015D926fB3a94DCE4b86EaFBfE38e370DB#code"
          target="_blank"
          rel="noreferrer"
          className="my-1"
        >
          Check Smart Contract
        </a>
        {/*"<div className="d-flex justify-content-end my-3">
          <small className="text-muted">Year 2020</small>
  </div>"*/}
        <div className="d-flex justify-content-between align-items-center mt-auto mb-0">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#batcoinImages"
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
        id="batcoinImages"
        images={images}
        dataBsTarget="carouselBatcoin"
      />
    </div>
  );
}

export default BatcoinSupreme;
