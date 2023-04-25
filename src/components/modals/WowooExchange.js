import React from "react";
import DialogBox from "./DialogBox";

function WowooExchange() {
  const images = [
    "https://imgur.com/0PLsU75.jpg",
    "https://imgur.com/MNoUx1L.jpg",
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
          Singapore-based Wowoo Exchange launch of its digital assets trading
          platform. With an initial focus on the local market, Wowoo Exchange
          allows users to deposit and withdraw in Singapore dollars to trade
          cryptocurrency.
        </p>
        <div className="d-flex justify-content-between align-items-center mt-auto mb-0">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#wwxImages"
            >
              View
            </button>
          </div>
          <small className="text-muted">2 images</small>
        </div>
      </div>
      <DialogBox id="wwxImages" images={images} dataBsTarget="carouselWWX" />
    </div>
  );
}

export default WowooExchange;
