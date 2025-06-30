import React, { useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Inline styles
  const containerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '0',
    height:'886.0999755859375px'
  };

  const headerStyle = {
    fontFamily: 'Tomorrow',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '36px',
    margin: 0
  };

  const moreBtnStyle = {
    background: 'black',
    border: '2px solid',
    borderImage: 'linear-gradient(to right, #8b5cf6, white) 1',
    color: 'white',
    padding: '8px 16px',
    clipPath: 'polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)'
  };

  const scrollContainerStyle = {
    display: 'flex',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    gap: '1rem',
    padding: '0 3rem',
    // Hide scrollbar
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    WebkitScrollbar: { display: 'none' }
  };

  const cardStyle = {
    backgroundColor: '#1d1d20',
    border: 'none',
    minWidth: '16rem',
    maxWidth: '16rem'
  };

  const navBtnStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#2a2a2a',
    border: 'none',
    color: 'white',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    cursor: 'pointer'
  };

  const compatibleBtnStyle = {
    backgroundColor: '#3C1761',
    border: '2px solid #BA86FF',
    color: 'white',
    fontSize: '12px',
    fontWeight: '600'
  };

  const specContainerStyle = {
    backgroundColor: '#2a2a2a',
    borderRadius: '6px',
    padding: '0.75rem'
  };

  const specSectionStyle = {
    backgroundColor: '#303036',
    padding: '0.5rem',
    marginBottom: '0.5rem',
    borderRadius: '4px'
  };

  return (
    <Container fluid="md" className='mt-3' style={containerStyle}>
      {/* Header */}
      <Row className="align-items-center ">
        <Col>
          <h2 style={headerStyle}>GAME COMPATIBLE PC'S</h2>
        </Col>
        <Col xs="auto">
          <Button style={moreBtnStyle}>
            MORE GAMES <FaArrowRight className="ms-2" />
          </Button>
        </Col>
      </Row>

      {/* Games Carousel */}
      <div style={{ position: 'relative' }}>
        {/* Left Navigation */}
        <button
          style={{ ...navBtnStyle, left: '10px' }}
          onClick={scrollLeft}
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          style={{
            ...scrollContainerStyle,
            WebkitOverflowScrolling: 'touch'
          }}
          className="hide-scrollbar"
        >
          {games.map((game) => (
            <Card key={game.id} text="white" style={cardStyle}>
              <Card.Img
                variant="top"
                src={game.image}
                alt={game.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '1rem', fontWeight: '600' }}>
                  {game.title}
                </Card.Title>
                <Card.Text style={{ fontSize: '0.875rem', color: '#aaa' }}>
                  {game.studio} • {game.year}
                </Card.Text>

                <Button style={compatibleBtnStyle} className="w-100 mb-3">
                  FIND COMPATIBLE PC'S <FaArrowRight className="ms-1" />
                </Button>

                {/* Specs */}
                <div style={specContainerStyle}>
                  {/* Minimum */}
                  <div style={specSectionStyle}>
                    <p style={{ color: '#ffc107', fontSize: '0.75rem', margin: '0 0 0.25rem 0', fontWeight: '600' }}>
                      Minimum
                    </p>
                    <p style={{ fontSize: '0.75rem', margin: '0 0 0.25rem 0' }}>
                      GPU: {game.specs.minimum.gpu}
                    </p>
                    <p style={{ fontSize: '0.75rem', margin: 0 }}>
                      CPU: {game.specs.minimum.cpu}
                    </p>
                  </div>

                  {/* Recommended */}
                  <div style={specSectionStyle}>
                    <p style={{ color: '#007bff', fontSize: '0.75rem', margin: '0 0 0.25rem 0', fontWeight: '600' }}>
                      Recommended
                    </p>
                    <p style={{ fontSize: '0.75rem', margin: '0 0 0.25rem 0' }}>
                      GPU: {game.specs.recommended.gpu}
                    </p>
                    <p style={{ fontSize: '0.75rem', margin: 0 }}>
                      CPU: {game.specs.recommended.cpu}
                    </p>
                  </div>

                  {/* Ultra */}
                  <div style={{ ...specSectionStyle, marginBottom: 0 }}>
                    <p style={{ color: '#17a2b8', fontSize: '0.75rem', margin: '0 0 0.25rem 0', fontWeight: '600' }}>
                      Ultra
                    </p>
                    <p style={{ fontSize: '0.75rem', margin: '0 0 0.25rem 0' }}>
                      GPU: {game.specs.ultra.gpu}
                    </p>
                    <p style={{ fontSize: '0.75rem', margin: 0 }}>
                      CPU: {game.specs.ultra.cpu}
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Right Navigation */}
        <button
          style={{ ...navBtnStyle, right: '10px' }}
          onClick={scrollRight}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </Container>
  );
};

export default GameCompatible;