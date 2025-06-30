import React, { useState, useRef } from 'react';
import ProductCard from './productcard';
import './css/prodcomp.css';
import { Container } from 'react-bootstrap';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const sampleProducts = [
  {
    id: 1,
    name: "GIGABYTE GeForce RTX 5090/Gaming/OC/16GB/GDDR7",
    price: 1500.99,
    originalPrice: 2000.99,
    discount: 16,
    image: "./images/product1.png",
    badge: "TOP DEAL",
    deliveryDate: "May 16"
  },
  {
    id: 2,
    name: "GIGABYTE GeForce RTX 5090/Gaming/OC/16GB/GDDR7",
    price: 1500.99,
    originalPrice: 2000.99,
    discount: 16,
    image: "./images/product1.png",
    badge: null,
    deliveryDate: "May 16"
  },
  {
    id: 3,
    name: "GIGABYTE GeForce RTX 5090/Gaming/OC/16GB/GDDR7",
    price: 1500.99,
    originalPrice: 2000.99,
    discount: '',
    image: "./images/product1.png",
    badge: null,
    deliveryDate: "May 16"
  },
  {
    id: 4,
    name: "GIGABYTE GeForce RTX 5090/Gaming/OC/16GB/GDDR7",
    price: 1500.99,
    originalPrice: 2000.99,
    discount: 16,
    image: "./images/product1.png",
    badge: "BEST SELLER",
    deliveryDate: "May 16"
  },
  {
    id: 5,
    name: "GIGABYTE GeForce RTX 5090/Gaming/OC/16GB/GDDR7",
    price: 1500.99,
    originalPrice: 2000.99,
    discount: 16,
    image: "./images/product1.png",
    badge: null,
    deliveryDate: "May 16"
  },
  {
    id: 6,
    name: "GIGABYTE GeForce RTX 5090/Gaming/OC/16GB/GDDR7",
    price: 1500.99,
    originalPrice: 2000.99,
    discount: 16,
    image: "./images/product1.png",
    badge: null,
    deliveryDate: "May 16"
  }
];

const AccessoriesComponent = () => {
  const [activeTab, setActiveTab] = useState('hot-deals');
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ 
        left: -320, 
        behavior: 'smooth' 
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ 
        left: 320, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <Container fluid='md'>
      <div className="product-showcase-container bg-black text-white">
        <div className="container-fluid">
          {/* Header with tabs and more products button */}
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="showcase-tabs">
            <h2 style={{fontFamily:'Tomorrow',width:'198px',height:'36px'}} >ACCESSORIES</h2>
            </div>

            <button className="btn btn-outline-light more-products-btn">
              MORE PRODUCTS
              <FaArrowRight className="ms-2" />
            </button>
          </div>

          {/* Products carousel */}
          <div className="position-relative">
            <div 
              ref={scrollContainerRef}
              className="products-container d-flex overflow-auto pb-3"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitScrollbar: { display: 'none' }
              }}
            >
              {activeTab === 'hot-deals' ?
                sampleProducts.map((product) => (
                  <div key={product.id} className="product-card-wrapper flex-shrink-0 me-3">
                    <ProductCard product={product} />
                  </div>
                )) :
                sampleProducts.slice(0, 8).map((product) => (
                  <div key={product.id} className="product-card-wrapper flex-shrink-0 me-3">
                    <ProductCard product={{ ...product, badge: "NEW ARRIVAL", discount: 15 }} />
                  </div>
                ))
              }
            </div>

            {/* Navigation arrows */}
            <button
              className="carousel-btn carousel-btn-left"
              onClick={scrollLeft}
              style={{
                position: 'absolute',
                left: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: '#2a2a2a',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              className="carousel-btn carousel-btn-right"
              onClick={scrollRight}
              style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: '#2a2a2a',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AccessoriesComponent;