import React from "react";

function Footer() {
  return (
    <footer className="text-muted py-5">
      <div className="container">
        <p className="float-end mb-1">
          <a href="#scroll-to-top">
            <i
              className="fas fa-chevron-square-up"
              style={{ fontSize: "3em" }}
            ></i>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
