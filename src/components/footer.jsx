import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Corrected import for React Router DOM

const Footer = () => {
  return (
    <footer className="text-white py-4" style={{ backgroundColor: 'black' }}>
      <Container>
        <Row className="gy-4">
          {/* Logo and About */}
          <Col xs={12} md={3}>
            <img src="./images/gcclogo.png" alt="logo" width={100} />
            <p className="small" style={{ color: '#b4b4bb' }}>
              GCC Gaming PC is the leading computer parts provider in UAE and deals in multiple categories.
            </p>
            <h6>FOLLOW US</h6>
            <div className="d-flex gap-2">
              <div className="d-flex">
                <Button style={{backgroundColor:'black', border:'none'}}>
                  <div style={{
                    border: '1px solid grey',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaWhatsapp size={16} />
                  </div>
                </Button>
                <Button style={{backgroundColor:'black', border:'none'}}>
                  <div style={{
                    border: '1px solid grey',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaFacebookF size={16} />
                  </div>
                </Button>
                <Button style={{backgroundColor:'black', border:'none'}}>
                  <div style={{
                    border: '1px solid grey',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaInstagram size={16} />
                  </div>
                </Button>
                <Button style={{backgroundColor:'black', border:'none'}}>
                  <div style={{
                    border: '1px solid grey',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaTimes size={16} />
                  </div>
                </Button>
              </div>

            </div>
          </Col>

          {/* Categories */}
          <Col xs={12} md={3}>
            <h6 className="fw-bold">CATEGORIES</h6>
            <ul className="list-unstyled small">
              <li><Link to="/dasktop_and_laptops" style={{ color: '#b4b4bb', textDecoration: 'none' }}>Desktop & Laptop</Link></li>
              <li><Link to="/gaming_and_vr" style={{ color: '#b4b4bb', textDecoration: 'none' }}>Gaming & VR</Link></li>
              <li><Link to="/hardware_and_software" style={{ color: '#b4b4bb', textDecoration: 'none' }}>Hardware & Components</Link></li>
              <li><Link to="/accessories" style={{ color: '#b4b4bb', textDecoration: 'none' }}>Accessories</Link></li>
              <li><Link to="/monitors_and_projectors" style={{ color: '#b4b4bb', textDecoration: 'none' }}>Monitors & Projectors</Link></li>
            </ul>
          </Col>

          {/* Platform Links */}
          <Col xs={12} md={3}>
            <h6 className="fw-bold">PLATFORM LINKS</h6>
            <ul className="list-unstyled small">
              <li><Link to="/" style={{ color: '#b4b4bb', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/account" style={{ color: '#b4b4bb', textDecoration: 'none' }}>Account</Link></li>
              <li><Link to="/cart" style={{ color: '#b4b4bb', textDecoration: 'none' }}>My Cart</Link></li>
              <li><Link to="/return_policy" style={{ color: '#b4b4bb', textDecoration: 'none' }}>Return Policy</Link></li>
              <li><Link to="/delivery_policy" style={{ color: '#b4b4bb', textDecoration: 'none' }}>Delivery Policy</Link></li>
              <li><Link to="/privacy_and_policy" style={{ color: '#b4b4bb', textDecoration: 'none' }}>Privacy Policy</Link></li>
              <li><Link to="/term_and_conditions" style={{ color: '#b4b4bb', textDecoration: 'none' }}>Terms & Condition</Link></li>
            </ul>
          </Col>

          {/* Reach Us */}
          <Col xs={12} md={3}>
            <h6 className="fw-bold">REACH US AT</h6>
            <p className="small mb-1 fw-bold" >
              <Link style={{ color: '#b4b4bb', textDecoration: 'none' }}>   <FaPhone /> UAE +971 4 333 9000 </Link>
            </p>
            <p className="small mb-1 fw-bold" style={{ color: '#b4b4bb' }}>
              <Link style={{ color: '#b4b4bb', textDecoration: 'none' }}> <FaPhone /> UAE +971 4 333 3000  </Link>
            </p>
            <p className="small mb-1 fw-bold" style={{ color: '#b4b4bb' }}>
              <Link style={{ color: '#b4b4bb', textDecoration: 'none' }}> <FaEnvelope /> example@xyz </Link>
            </p>
          </Col>
        </Row>

        <hr style={{ borderColor: '#444' }} />

        {/* Bottom Bar */}
        <Row className="align-items-center gy-2">
          <Col xs={12} md={6}>
            <p className="small mb-0" style={{ color: '#b4b4bb' }}>
              All rights reserved to <span className="fw-bold text-white"><Link to="#" style={{ color: 'white', textDecoration: 'none' }}>GCC GAMING PC</Link></span> © 2025
            </p>
          </Col>
          <Col xs={12} md={6} className="text-md-end">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" width="40" className="me-2" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" width="40" className="me-2" />
            {/* Uncomment and replace below with your payment logos if needed */}
            {/* <img src="tabby.png" alt="Tabby" width="40" className="me-2" /> */}
            {/* <img src="tamara.png" alt="Tamara" width="40" className="me-2" /> */}
            {/* <img src="cashondelivery.png" alt="Cash on Delivery" width="40" className="me-2" /> */}
            {/* <img src="banktransfer.png" alt="Bank Transfer" width="40" /> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
