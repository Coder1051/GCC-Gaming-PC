import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './css/game.css'

const games = [
  {
    id: 1,
    title: 'Doom: The Dark Ages',
    studio: 'id Software',
    year: '2025',
    image: './images/game1.png',
    specs: {
      minimum: { gpu: 'NVIDIA RTX 2060 Super', cpu: 'Core i7-10700K' },
      recommended: { gpu: 'NVIDIA RTX 3080', cpu: 'Core i7-12700K' },
      ultra: { gpu: 'NVIDIA RTX 4080', cpu: 'Core i7-12700K' },
    },
  },
  {
    id: 2,
    title: 'Cyberpunk 2077',
    studio: 'CD Projekt',
    year: '2020',
    image: './images/game1.png',
    specs: {
      minimum: { gpu: 'NVIDIA GTX 1060', cpu: 'Core i5-3570K' },
      recommended: { gpu: 'NVIDIA RTX 2060', cpu: 'Core i7-4790' },
      ultra: { gpu: 'NVIDIA RTX 3080', cpu: 'Core i7-12700K' },
    },
  },
  {
    id: 3,
    title: 'Assassin\'s Creed Valhalla',
    studio: 'Ubisoft',
    year: '2020',
    image: './images/game1.png',
    specs: {
      minimum: { gpu: 'NVIDIA GTX 960', cpu: 'Core i5-4460' },
      recommended: { gpu: 'NVIDIA GTX 1080', cpu: 'Core i7-6700K' },
      ultra: { gpu: 'NVIDIA RTX 3080', cpu: 'Core i7-12700K' },
    },
  },
  {
    id: 4,
    title: 'Elden Ring',
    studio: 'FromSoftware',
    year: '2022',
    image: './images/game1.png',
    specs: {
      minimum: { gpu: 'NVIDIA GTX 770', cpu: 'Core i5-2500K' },
      recommended: { gpu: 'NVIDIA GTX 1070', cpu: 'Core i7-4770K' },
      ultra: { gpu: 'NVIDIA RTX 3080', cpu: 'Core i7-12700K' },
    },
  },
  {
    id: 5,
    title: 'God of War',
    studio: 'Santa Monica Studio',
    year: '2022',
    image: './images/game1.png',
    specs: {
      minimum: { gpu: 'NVIDIA GTX 960', cpu: 'Core i5-2500K' },
      recommended: { gpu: 'NVIDIA GTX 1060', cpu: 'Core i7-4770K' },
      ultra: { gpu: 'NVIDIA RTX 3080', cpu: 'Core i7-12700K' },
    },
  },
  {
    id: 6,
    title: 'Horizon Zero Dawn',
    studio: 'Guerrilla Games',
    year: '2020',
    image: './images/game1.png',
    specs: {
      minimum: { gpu: 'NVIDIA GTX 780', cpu: 'Core i5-2500K' },
      recommended: { gpu: 'NVIDIA GTX 1060', cpu: 'Core i7-4770K' },
      ultra: { gpu: 'NVIDIA RTX 3080', cpu: 'Core i7-12700K' },
    },
  },
  {
    id: 7,
    title: 'Far Cry 6',
    studio: 'Ubisoft',
    year: '2021',
    image: './images/game1.png',
    specs: {
      minimum: { gpu: 'NVIDIA GTX 960', cpu: 'Core i5-4460' },
      recommended: { gpu: 'NVIDIA GTX 1080', cpu: 'Core i7-6700K' },
      ultra: { gpu: 'NVIDIA RTX 3080', cpu: 'Core i7-12700K' },
    },
  },
  {
    id: 8,
    title: 'Resident Evil Village',
    studio: 'Capcom',
    year: '2021',
    image: './images/game1.png',
    specs: {
      minimum: { gpu: 'NVIDIA GTX 1050 Ti', cpu: 'Core i5-7500' },
      recommended: { gpu: 'NVIDIA GTX 1070', cpu: 'Core i7-8700' },
      ultra: { gpu: 'NVIDIA RTX 3080', cpu: 'Core i7-12700K' },
    },
  },
];

const GameCompatible = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className=" text-white p-4" style={{ backgroundColor: 'black' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>GAME COMPATIBLE PC'S</h5>
        <button
          className="cut-corner-btn btn mb-2 text-white"
          style={{
            borderWidth: '2px',
            borderStyle: 'solid',
            borderImage: 'linear-gradient(to right, purple, white) 1',
            backgroundColor: 'black'
          }}
        >
          MORE GAMES →
        </button>
      </div>

      <div className="position-relative">
        <button
          className="btn btn-dark position-absolute start-0 top-50 translate-middle-y z-3"
          onClick={scrollLeft}
        >
          ‹
        </button>

        <div
          className="d-flex overflow-auto px-5 hide-scrollbar"
          ref={scrollRef}
          style={{ scrollBehavior: 'smooth' }}
        >
          {games.map((game) => (
            <div
              className="card  text-white me-3 flex-shrink-0"
              style={{ width: '16rem', backgroundColor: '#1d1d20' }}
              key={game.id}
            >
              <img src={game.image} className="card-img-top" alt={game.title} />
              <div className="card-body">
                <h6 className="card-title">{game.title}</h6>
                <p className="card-text small">{game.studio} • {game.year}</p>
                <button
                  className="btn w-100 mb-2"
                  style={{
                    backgroundColor: '#3C1761',
                    border: '2px solid #BA86FF',
                    color: 'white'
                  }}
                >
                  FIND COMPATIBLE PC'S <i className="bi bi-arrow-right"></i>
                </button>
                <div className="bg-dark p-2 rounded">
                  <div style={{ backgroundColor: '#303036' }}>
                    <p className="mb-1 text-warning small px-2">Minimum</p>
                    <p className="mb-1 small px-2">GPU: {game.specs.minimum.gpu}</p>
                    <p className="mb-2 small px-2">CPU: {game.specs.minimum.cpu}</p>
                  </div>
                  <div style={{ backgroundColor: '#303036' }}>
                    <p className="mb-1 text-primary small px-2">Recommended</p>
                    <p className="mb-1 small px-2">GPU: {game.specs.recommended.gpu}</p>
                    <p className="mb-2 small px-2">CPU: {game.specs.recommended.cpu}</p>
                  </div>
                  <div style={{ backgroundColor: '#303036' }}>
                    <p className="mb-1 text-info small px-2">Ultra</p>
                    <p className="mb-1 small px-2">GPU: {game.specs.ultra.gpu}</p>
                    <p className="small px-2">CPU: {game.specs.ultra.cpu}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="btn btn-dark position-absolute end-0 top-50 translate-middle-y z-3"
          onClick={scrollRight}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default GameCompatible;
