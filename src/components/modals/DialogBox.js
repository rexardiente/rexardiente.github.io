import React from "react";

function DialogBox({ id = "", images = [], dataBsTarget = "" }) {
  return (
    <div
      className="modal fade"
      id={id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <i
              id="modal-close"
              className="fas fa-window-close fa-lg me-2 float-end text-danger bg-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></i>

            <div
              id={dataBsTarget}
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {images.map((img, id) => {
                  return (
                    <div
                      className={`carousel-item ${id === 0 ? "active" : ""}`}
                      key={id}
                    >
                      <img src={img} className="w-100" alt="..." />
                    </div>
                  );
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${dataBsTarget}`}
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#${dataBsTarget}`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogBox;
