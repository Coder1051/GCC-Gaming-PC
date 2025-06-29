import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./css/build.css";

const BuildYourPC = () => {
  return (
    <Container fluid="md" className="my-5 px-3" style={{backgroundColor:'black'}}>
      <div
        className="container-fluid py-5"
        style={{
          backgroundColor: "#1d1d20",
          border: "3px solid grey",
        }}
      >
        <div className="container">
          <div className="row align-items-center text-white">
            {/* Left Side */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold text-center text-md-start">
                BUILD YOUR DREAM PC
              </h2>
              <p className="text-center text-md-start">
                Our seamless configurator guides you through creating a flawless
                custom PC anywhere in Dubai or across the UAE as you choose your
                compatible components, add peripherals, lighting, and software, and
                save your build to place your order.
              </p>
              <div className="text-center text-md-start">
                <button className="btn btn-primary mt-3">BUILD YOUR PC</button>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-12 col-md-6 text-center">
              <div className="rounded" style={{ backgroundColor: "#1d1d20" }}>
                <img
                  src="./images/product6.png"
                  alt="Build Your PC"
                  className="img-fluid rounded"
                  style={{ backgroundColor: "#1d1d20" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BuildYourPC;
