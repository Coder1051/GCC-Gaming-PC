// prodcont.jsx
import React, { useState } from 'react';
import ProductCard from './productcard';
import './css/prodcomp.css';
import { Container } from 'react-bootstrap';

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
    discount: 16,
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

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('hot-deals');

  const scrollLeft = () => {
    const container = document.querySelector('.products-container');
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.querySelector('.products-container');
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <Container fluid='md'>
      <div className="product-showcase-container bg-black text-white py-5">
        <div className="container-fluid px-4">
          {/* Header with tabs and more products button */}
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
            <div className="showcase-tabs">
              <button
                className={`tab-btn ${activeTab === 'hot-deals' ? 'active' : ''}`}
                onClick={() => setActiveTab('hot-deals')}
              >
                HOT DEALS
              </button>
              <button
                className={`tab-btn ${activeTab === 'new-arrivals' ? 'active' : ''}`}
                onClick={() => setActiveTab('new-arrivals')}
              >
                NEW ARRIVALS
              </button>
            </div>

            <button className="btn btn-outline-light more-products-btn">
              MORE PRODUCTS
              <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>

          {/* Products carousel */}
          <div className="position-relative">
            <div className="products-container d-flex overflow-auto pb-3">
              {activeTab === 'hot-deals' ?
                sampleProducts.map((product) => (
                  <div key={product.id} className="product-card-wrapper flex-shrink-0 me-3">
                    <ProductCard product={product} />
                  </div>
                )) :
                sampleProducts.slice(0, 4).map((product) => (
                  <div key={product.id} className="product-card-wrapper flex-shrink-0 me-3">
                    <ProductCard product={{ ...product, badge: "NEW ARRIVAL", discount: 16 }} />
                  </div>
                ))
              }
            </div>

            {/* Navigation arrows */}
            <button
              className="carousel-btn carousel-btn-left"
              onClick={scrollLeft}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="carousel-btn carousel-btn-right"
              onClick={scrollRight}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductShowcase;