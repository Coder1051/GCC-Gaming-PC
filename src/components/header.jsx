import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { FaPhoneAlt, FaTruck, FaExchangeAlt, FaShippingFast } from 'react-icons/fa';
import './css/header.css';

const Header = () => {
    return (
        <header className="delivery-header py-2">
            <Container className="px-60">
                <Row className="align-items-center">
                    {/* Left Section - Combined Delivery Info and Services */}
                    <Col lg={8} md={8} sm={12} xs={12} className="mb-md-0 mb-2">
                        <div className="d-flex flex-wrap align-items-center gap-4 responsive-content">
                            {/* Delivery Info */}
                            <div className="d-flex align-items-center gap-3 delivery-info-wrapper">
                                <span className="deliver-to">DELIVER TO</span>
                                <img src="./images/uaeflag.jpg" alt="UAE flag" className="flag-img" />
                                <span className="location">UAE</span>
                                <a href="tel:+97143339000" className="phone">
                                    <FaPhoneAlt className="service-icon" /> +971 4333 9000
                                </a>
                            </div>
                            
                            {/* Services */}
                            <div className="d-flex align-items-center gap-3 services-wrapper">
                                <span className="express">
                                    <FaTruck className="service-icon" /> EXPRESS DELIVERY
                                </span>
                                <span className="easy-returns">
                                    <FaExchangeAlt className="service-icon" /> EASY RETURNS
                                </span>
                                <span className="free-shipping">
                                    <FaShippingFast className="service-icon" /> FREE SHIPPING
                                </span>
                            </div>
                        </div>
                    </Col>

                    {/* Right Section - Language Selector */}
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div className="d-flex justify-content-md-end justify-content-center language-wrapper">
                            <Dropdown className="language">
                                <Dropdown.Toggle variant="none" className="dropdown-toggle">
                                    ENGLISH
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item className="adc-lang">ARABIC</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;