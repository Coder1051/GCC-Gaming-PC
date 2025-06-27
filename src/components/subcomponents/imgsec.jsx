import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/imagesec.css'

const ImgSec = () => {
  const [activeTitle, setActiveTitle] = useState(0);

  const titles = [
    " Gaming Laptops",
    " Gaming Desktops",
    " Graphics Cards",
    " Motherboards",
    " Monitors",
    " Accessories",
    " Components"
  ];

  return (
    <>
      <Container fluid='md' className='seccont py-4'>
        <Row className='secrow1  g-0'>
          <Col lg={2} md={3} sm={12} className='titles-col'>
            <div className="titles">
              {titles.map((title, index) => (
                <h2
                  key={index}
                  className={activeTitle === index ? 'active' : ''}
                  onClick={() => setActiveTitle(index)}
                >
                  <span className='mx-2' >
                    {title}
                  </span>
                </h2>
              ))}
            </div>
          </Col>
          <Col lg={7} md={6} sm={12} className='banner-col'>
            <div className="banner-container">
              <img
                src="./images/banner1.png"
                alt="ASUS Gaming Banner"
                className='main-banner'
              />
            </div>
          </Col>
          <Col lg={3} md={3} sm={12} className='product-col'>
            <div className="product-showcase px-2">
              <img
                src="./images/box1.png"
                alt="Graphics Cards"
                className='product-image'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ImgSec;