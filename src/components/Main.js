import React from "react";
import { Coinica, InnoMiner, WowooExchange, ZetaMiner } from "./modals/index";
import {
  BatcoinSupreme,
  EnhancedGeo,
  LKCInnovation,
} from "./website_development/index";

function Main() {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-md-8 mx-auto">
            <h1 className="fw-light">Ardiente Rex</h1>
            <h4 className="fw-light">Full Stack Software Engineer</h4>
            <p className="lead text-muted mt-3">
              I am a full-stack developer who specializes in Scala with
              Playframework, NodeJS, PostgreSQL/MongoDB, ReactJS, and custom
              Linux distributions for embedded and IOT devices (ie. Bitmain
              Antminer and Innosilicon Miner). I work on system architecture,
              backend and frontend development, but the majority of my projects
              are backend-focused, such as APIs and ERP solutions.
            </p>
            <figure className="lead text-muted mt-5">
              <blockquote className="blockquote mb-4">
                <p>
                  <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                  <span className="fst-italic">
                    Choose a job you love, and you will never have to work a day
                    in your life.
                  </span>
                </p>
              </blockquote>
              <figcaption className="blockquote-footer text-right">
                CONFUCIUS
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row g-3">
            <p className="h4 text-muted">Application Development</p>
            <div className="col-12 col-md-4 col-lg-3">
              <WowooExchange />
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <Coinica />
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <InnoMiner />
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <ZetaMiner />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row g-3">
            <p className="h4 text-muted">Website Development</p>
            <div className="col-12 col-md-4 col-lg-3">
              <LKCInnovation />
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <BatcoinSupreme />
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <EnhancedGeo />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
