// productcard.jsx
import { Container } from 'react-bootstrap';
import './css/prodcomp.css'

const ProductCard = ({ product }) => {
  const isTopDeal = product.badge && product.badge.includes('TOP DEAL');
  const isBestSeller = product.badge && product.badge.includes('BEST SELLER');

  return (
    <Container className='bg-black p-0'>
      <div className="product-card-container">
        {/* Border element */}
        <div className="product-card-border"></div>
        
        {/* Main content */}
        <div className='product-card-content'>
          {/* Image section */}
          <div className='product-image-section'>
            <img src={product.image} alt="Product" className="product-image" />
            
            {/* Top Deal Badge - Circular */}
            {isTopDeal && (
              <div className="top-deal-badge">
                <span><img src="./images/alarm.png" alt="Alarm logo" width={20} />  HOT DEAL</span>
              </div>
            )}
            
            {/* Best Seller Badge - Rectangular */}
            {isBestSeller && (
              <div className="best-seller-badge">
                <span>BEST SELLER</span>
              </div>
            )}
            
            {/* Discount Badge - Bottom */}
            {product.discount > 0 && (
              <div className="discount-badge">
                {product.discount}% OFF
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className='product-details'>
            <h6 className="product-titles">{product.name}</h6>
            <div className="price-section">
              <h3 className="current-price">
                US $ <span className="price-amount">{product.price}</span>
              </h3>
              <h6 className="original-price">
                US $ {product.originalPrice}
              </h6>
            </div>
            
            {/* Delivery date */}
            <div className="delivery-info">
              Delivered by <span className="delivery-date">{product.deliveryDate}</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductCard;