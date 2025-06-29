// brands&review.jsx
// brands&review.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/brands&reviews.css';


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
      rating: 5,
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
      rating: 4,
      text: 'Great service and fast delivery. The products are authentic and prices are competitive. Highly recommended for tech enthusiasts.',
      avatar: 'M'
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
              <div className="brand-box" onClick={() => handleBrandClick('/brands/amd')}>
                <img src="/images/brands/amd-logo.png" alt="AMD" className="brand-logo" />
                <span className="brand-name">AMD</span>
              </div>
              
              <div className="brand-box" onClick={() => handleBrandClick('/brands/logitech')}>
                <img src="/images/brands/logitech-logo.png" alt="Logitech" className="brand-logo" />
                <span className="brand-name">logitech</span>
              </div>
              
              <div className="brand-box" onClick={() => handleBrandClick('/brands/nvidia')}>
                <img src="/images/brands/nvidia-logo.png" alt="NVIDIA" className="brand-logo" />
                <span className="brand-name">NVIDIA</span>
              </div>
              
              <div className="brand-box" onClick={() => handleBrandClick('/brands/amd')}>
                <img src="/images/brands/amd-logo.png" alt="AMD" className="brand-logo" />
                <span className="brand-name">AMD</span>
              </div>
              
              <div className="brand-box" onClick={() => handleBrandClick('/brands/intel')}>
                <img src="/images/brands/intel-logo.png" alt="Intel" className="brand-logo" />
                <span className="brand-name">intel</span>
              </div>
              
              <div className="brand-box" onClick={() => handleBrandClick('/brands/corsair')}>
                <img src="/images/brands/corsair-logo.png" alt="Corsair" className="brand-logo" />
                <span className="brand-name">CORSAIR</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Reviews Section */}
        <Row className="reviews-section">
          <Col xs={12}>
            <div className="reviews-container">
              {/* Google Rating Info */}
              <div className="google-rating-info">
                <div className="google-logo">
                  <img src="/images/google-logo.png" alt="Google" />
                </div>
                <div className="rating-details">
                  <div className="rating-score">{averageRating}</div>
                  <div className="rating-stars">
                    {renderStars(Math.round(averageRating))}
                  </div>
                  <div className="rating-text">
                    Rating based on {totalReviews} reviews
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
                  <i className="fas fa-chevron-left"></i>
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
                  <i className="fas fa-chevron-right"></i>
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