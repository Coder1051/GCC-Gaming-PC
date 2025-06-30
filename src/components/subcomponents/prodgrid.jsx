import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/grid.css'
import { Container, Row, Col } from 'react-bootstrap';

const ProductGrid = () => {
  return (
    <Container fluid='md' className="cont-box my-3">
      <Row className="h-100 ">
        {/* Left Column */}
        <Col md={6} className="left-side">
          {/* GeForce RTX 5090 Section */}
          <div className='img-1 product-section'>
            <img src="./images/product2.png" alt="GeForce RTX 5090" className="section-bg-image" />
            <div className="product-overlay">
              <div className="product-content">
                <h2 className="product-title">GEFORCE RTX 5090</h2>
                <p className="product-description">
                  The Player Three Prime is the ultimate gaming and content creation powerhouse, combining the most powerful NVIDIA® GeForce GPU ever with the top-performing Intel® Core™ Ultra 9 285K CPU.
                </p>
                <button className="buy-now-btn">
                  BUY NOW <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Battle-Ready Gaming PCs Section */}
          <div className='img-2 product-section mt-3'>
            <img src="./images/product4.png" alt="Battle-Ready Gaming PCs" className="section-bg-image" />
            <div className="product-overlay">
              <div className="product-content">
                <h2 className="product-title">BATTLE-READY<br />GAMING PCS</h2>
                <p className="product-description">
                  Pre-built and custom systems engineered for flawless performance and maximum immersion in every title.
                </p>
                <button className="buy-now-btn">
                  BUY NOW <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </Col>

        {/* Right Column */}
        <Col md={6} className="right-side">
          {/* High-Performance Components Section */}
          <div className='img-3 product-section '>
            <img src="./images/product3.png" alt="High-Performance Components" className="section-bg-image" />
            <div className="product-overlay">
              <div className="product-content">
                <h2 className="product-title">HIGH-PERFORMANCE<br />COMPONENTS</h2>
                <p className="product-description">
                  Top-tier GPUs, CPUs, motherboards, RAM and storage, everything you need to build or upgrade the ultimate gaming rig.
                </p>
                <button className="buy-now-btn">
                  BUY NOW <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Pro-Grade Gaming Accessories Section */}
          <div className='img-4 product-section mt-3'>
            <img src="./images/product5.png" alt="Pro-Grade Gaming Accessories" className="section-bg-image" />
            <div className="product-overlay">
              <div className="product-content">
                <h2 className="product-title">PRO-GRADE GAMING<br />ACCESSORIES</h2>
                <p className="product-description">
                  High-refresh monitors, mechanical keyboards, precision mice, headsets and more—gear up for a true competitive edge.
                </p>
                <button className="buy-now-btn">
                  BUY NOW <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductGrid;