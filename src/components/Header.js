import React from "react";

function Header() {
  return (
    <header id="scroll-to-top">
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">More About Me!</h4>
              <p className="text-muted">
                In my five years of experience, I've worked on over 100
                projects. I have both domestic and international clients, some
                of whom recommended by my connections and freelancing platforms.
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <div className="row">
                <div className="col-12">
                  <h4 className="text-white">Contact</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rex-ardiente-ba9721b8/"
                        className="text-white"
                      >
                        Linkedin
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/rexardiente"
                        className="text-white"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto: rexardiente09@gmail.com"
                        className="text-white"
                      >
                        Email
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12">
                  <h4 className="text-white">Featured Projects</h4>
                  <ul className="list-unstyled">
                    <li>
                      <button
                        href="https://rexardiente.github.io/features/"
                        target="_blank"
                        className="text-white"
                      >
                        Coming Soon!!!
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <button href="#" className="navbar-brand d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              aria-hidden="true"
              className="me-2"
              viewBox="0 0 24 24"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <strong>Rex Ardiente's Portfolio</strong>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
