import React from "react";
import DialogBox from "./DialogBox";

function InnoMiner() {
  const images = [
    "https://i.imgur.com/tIVrMSx.png",
    "https://i.imgur.com/Mh66uZ2.png",
    "https://i.imgur.com/OSrkCHg.png",
    "https://i.imgur.com/xUu4hWp.png",
    "https://i.imgur.com/9DxsvWc.png",
    "https://i.imgur.com/vMgdBWS.png",
  ];
  return (
    <div className="card shadow-sm h-100">
      <img
        src={images[4]}
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="230"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
      <div className="row card-body">
        <p className="card-text">
          This is the 1st prototype of InnoMiner App a 3rd party desktop
          application that gives owners of Innosilicon miner the ability to
          customized the default miner configurations that are not available in
          manufacturers software.
        </p>
        <div className="d-flex justify-content-between align-items-center mt-auto mb-0">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#innoMinerImages"
            >
              View
            </button>
          </div>
          <small className="text-muted">6 images</small>
        </div>
      </div>
      <DialogBox
        id="innoMinerImages"
        images={images}
        dataBsTarget="carouselInnoMiner"
      />
    </div>
  );
}

export default InnoMiner;
