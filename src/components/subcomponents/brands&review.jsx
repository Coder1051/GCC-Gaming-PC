// brands&review.jsx
// brands&review.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/brands&reviews.css';
import { FaChevronLeft, FaChevronRight, FaRegStar, FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { Link } from 'react-router-dom';


const BrandsAndReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [loading, setLoading] = useState(true);



  // Sample Google Reviews Data (replace with actual API call)
  const sampleReviews = [
    {
      id: 1,
      author: 'Ali Ayub',
      date: '2024-09-16',
      rating: 4,
      text: 'They are trustworthy and good prices. And they saved me like 200 riyals from custom fees by making the value of the gpu 700. One thing I would suggest is to improve delivery speed.',
      avatar: 'A'
    },
    {
      id: 2,
      author: 'Ahmed Khan',
      date: '2024-09-15',
      rating: 5,
      text: 'They are trustworthy and good prices. And they saved me like 200 riyals from custom fees by making the value of the gpu 700. One thing I would suggest is to improve delivery speed.',
      avatar: 'A'
    },
    {
      id: 3,
      author: 'Sara Ahmed',
      date: '2024-09-14',
      rating: 5,
      text: 'They are trustworthy and good prices. And they saved me like 200 riyals from custom fees by making the value of the gpu 700. One thing I would suggest is to improve delivery speed.',
      avatar: 'S'
    },
    {
      id: 4,
      author: 'Mohammed Ali',
      date: '2024-09-13',
      rating: 5,
      text: 'Great service and fast delivery. The products are authentic and prices are competitive. Highly recommended for tech enthusiasts.',
      avatar: 'A'
    },
    {
      id: 5,
      author: 'Hamza Maqsoood',
      date: '2025-01-13',
      rating: 5,
      text: 'Great service and fast delivery.',
      avatar: 'H'
    }
  ];

  // Google Reviews API integration
  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        setLoading(true);
        // Replace with actual Google Places API call
        // const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=reviews,rating,user_ratings_total&key=YOUR_API_KEY`);
        // const data = await response.json();
        // setReviews(data.result.reviews);

        // For now, using sample data
        setTimeout(() => {
          setReviews(sampleReviews);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching Google reviews:', error);
        setReviews(sampleReviews);
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  // Navigation functions
  const nextReview = () => {
    setCurrentReviewIndex((prev) =>
      prev === reviews.length - 3 ? 0 : prev + 1
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) =>
      prev === 0 ? reviews.length - 3 : prev - 1
    );
  };

  // Handle brand click
  const handleBrandClick = (brandLink) => {
    // Navigate to brand page
    window.location.href = brandLink;
  };

  // Render star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? 'filled' : 'empty'}`}
      />
    ));
  };

  // Calculate average rating
  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  const totalReviews = reviews.length;

  return (
    <div className="brands-reviews-section">
      <Container fluid>
        {/* Brands Section */}
        <Row className="brands-section">
          <Col xs={12}>
            <div className="section-header">
              <h2 className="section-title">EXPLORE BY BRAND</h2>
            </div>
            <div className="brands-container">
              <Link className="brand-box" to='/brands/amd'>
                <img src="/images/brand1.png" alt="AMD" className="brand-logo" />
              </Link>

              <Link className="brand-box" to='/brands/logitech'>
                <img src="/images/brand2.png" alt="Logitech" className="brand-logo" />
              </Link>

              <Link className="brand-box" to='/brands/nvidia'>
                <img src="/images/brand3.png" alt="NVIDIA" className="brand-logo" />
              </Link>

              <Link className="brand-box" to='/brands/intel'>
                <img src="/images/brand4.png" alt="Intel" className="brand-logo" />
              </Link>

              <Link className="brand-box" to='/brands/corsair'>
                <img src="/images/brand5.png" alt="Corsair" className="brand-logo" />
              </Link>
            </div>
          </Col>
        </Row>

        {/* Reviews Section */}
        <Row className="reviews-section">
          <Col xs={12}>
            <div className="reviews-container">
              {/* Google Rating Info */}
              <div className="google-rating-info">
                <div style={{ fontSize: "30px" }} className="google-logo">
                  {/* <img src="" alt="Google" /> */}
                  {/* <FaGoogle /> */}
                  G O O G L E
                </div>
                <div className="rating-details">
                  <div className="rating-score">{averageRating}</div>
                  <div className="rating-stars">
                    {renderStars(Math.round(averageRating))}
                  </div>
                  <div className="rating-text">
                    Rating based on <span style={{ color: '#7AA4F5' }} >{totalReviews} reviews</span>
                  </div>
                </div>
              </div>

              {/* Reviews Carousel */}
              <div className="reviews-carousel">
                <button
                  className="carousel-nav carousel-nav-left"
                  onClick={prevReview}
                  disabled={loading}
                >
                  <FaChevronLeft />
                </button>

                <div className="reviews-display">
                  {loading ? (
                    <div className="loading-spinner">
                      <i className="fas fa-spinner fa-spin"></i>
                      <span>Loading reviews...</span>
                    </div>
                  ) : (
                    <Row className="reviews-row">
                      {reviews.slice(currentReviewIndex, currentReviewIndex + 3).map((review) => (
                        <Col key={review.id} lg={4} md={6} xs={12} className="review-col">
                          <div className="review-card-container">
                            <div className="review-card-border"></div>
                            <div className="review-card-content">
                              {/* Google Icon */}
                              <div className="google-icon">
                                <i className="fab fa-google"></i>
                              </div>

                              {/* Reviewer Info */}
                              <div className="reviewer-info">
                                <div className="reviewer-avatar">
                                  {review.avatar}
                                </div>
                                <div className="reviewer-details">
                                  <div className="reviewer-name">{review.author}</div>
                                  <div className="review-date">{review.date}</div>
                                  <div className='ratingStars' style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ display: 'flex', gap: '2px' }}>
                                      {Array.from({ length: 5 }, (_, index) => (
                                        index < Math.floor(review.rating) ? (
                                          <FaStar
                                            key={index}
                                            style={{ color: '#ffc107', fontSize: '14px' }}
                                          />
                                        ) : (
                                          <FaRegStar
                                            key={index}
                                            style={{ color: '#404040', fontSize: '14px' }}
                                          />
                                        )
                                      ))}
                                    </div>
                                    <span style={{ color: '#4285F4', fontSize: '16px', fontWeight: '600' }}>
                                      <MdVerified />
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Rating */}
                              <div className="review-rating">
                                {renderStars(review.rating)}
                              </div>

                              {/* Review Text */}
                              <div className="review-text">
                                "{review.text}"
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  )}
                </div>

                <button
                  className="carousel-nav carousel-nav-right"
                  onClick={nextReview}
                  disabled={loading}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BrandsAndReviews;