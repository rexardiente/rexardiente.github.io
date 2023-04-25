import React from "react";
import DialogBox from "./DialogBox";

function ZetaMiner() {
  const images = [
    "https://i.imgur.com/kh5hsuf.png",
    "https://i.imgur.com/tm6GiOJ.png",
    "https://i.imgur.com/JlYARbE.png",
    "https://i.imgur.com/gaXMrET.png",
    "https://i.imgur.com/ZyTHgQu.png",
    "https://i.imgur.com/yGNRoqK.png",
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
          Custom ASIC miner firmware that gives owners the ability to customized
          the stock configurations that are not available in manufacturers
          released firmwares.
        </p>
        <div className="d-flex justify-content-between align-items-center mt-auto mb-0">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#zetaMinerImages"
            >
              View
            </button>
          </div>
          <small className="text-muted">6 images</small>
        </div>
      </div>
      <DialogBox
        id="zetaMinerImages"
        images={images}
        dataBsTarget="carouselZetaMiner"
      />
    </div>
  );
}

export default ZetaMiner;
