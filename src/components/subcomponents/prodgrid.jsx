import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/grid.css'
const ProductGrid = () => {
  const cards = [
    {
      title: "GEFORCE RTX 5090",
      desc: "The Player: Throne Prime is the ultimate gaming and content creation powerhouse, combining the most powerful NVIDIA GeForce GPU ever with the top-performing Intel Core™ Ultra 9 285K CPU.",
      img: "./images/product2.png",
      isBg: false,
    },
    {
      title: "HIGH-PERFORMANCE COMPONENTS",
      desc: "Top-tier GPUs, CPUs, motherboards, RAM and storage, everything you need to build or upgrade the ultimate gaming rig.",
      img: "./images/product3.png",
      isBg: true,
    },
    {
      title: "BATTLE-READY GAMING PCS",
      desc: "Pre-built and custom systems engineered for flawless performance and maximum immersion in every title.",
      img: "./images/product4.png",
      isBg: true,
    },
    {
      title: "PRO-GRADE GAMING ACCESSORIES",
      desc: "High-refresh monitors, mechanical keyboards, precision mice, headsets and more—gear up for a true competitive edge.",
      img: "./images/product5.png",
      isBg: true,
    },
  ];

  return (
    <div className="container py-4">
      <div className="row g-0">
        {cards.map((card, index) => (
          <div className="col-12 col-md-6" key={index}>
            {card.isBg ? (
              // Card with image as background
              <div
                className="text-white d-flex flex-column justify-content-center p-3"
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '250px',
                }}
              >
                <h5 className="fw-bold">{card.title}</h5>
                <p className="small">{card.desc}</p>
                <button
                  className="btn btn-sm"
                  style={{
                    backgroundColor: '#3C1761',
                    border: '2px solid #BA86FF',
                    color: 'white',
                    width: '120px',
                  }}
                >
                  BUY NOW →
                </button>
              </div>
            ) : (
              // Card with image on side (not background)
              <div
                className="d-flex justify-content-between align-items-center text-white"
                style={{
                  backgroundColor: '#1d1d20',
                  minHeight: '250px',
                  padding: '1rem',
                }}
              >
                <div style={{ maxWidth: '60%' }}>
                  <h5 className="fw-bold">{card.title}</h5>
                  <p className="small">{card.desc}</p>
                  <button
                    className="btn btn-sm"
                    style={{
                      backgroundColor: '#3C1761',
                      border: '2px solid #BA86FF',
                      color: 'white',
                      width: '120px',
                    }}
                  >
                    BUY NOW →
                  </button>
                </div>
                <div style={{ maxWidth: '35%', marginTop: index === 0 ? '40px' : '0' }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="img-fluid"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
