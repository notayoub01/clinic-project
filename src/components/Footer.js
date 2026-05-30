import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaHeartbeat,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-4 mb-lg-0">
              <div className="footer-brand">
                <FaHeartbeat className="footer-brand-icon" />
                <h4 className="footer-brand-text">HealthFirst</h4>
              </div>
              <p className="footer-description">
                Providing exceptional healthcare services with compassion and excellence.
                Your health is our priority.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </Col>

            <Col lg={2} md={6} className="mb-4 mb-lg-0">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/appointment">Book Appointment</Link></li>
              </ul>
            </Col>

            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <h5 className="footer-title">Our Services</h5>
              <ul className="footer-links">
                <li><Link to="/services">General Medicine</Link></li>
                <li><Link to="/services">Pediatrics</Link></li>
                <li><Link to="/services">Cardiology</Link></li>
                <li><Link to="/services">Dental Care</Link></li>
                <li><Link to="/services">Laboratory</Link></li>
              </ul>
            </Col>

            <Col lg={3} md={6}>
              <h5 className="footer-title">Contact Info</h5>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt />
                  <span>123 Health Street, Medical City, MC 12345</span>
                </li>
                <li>
                  <FaPhoneAlt />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>info@healthfirst.com</span>
                </li>
                <li>
                  <FaClock />
                  <span>Mon-Sat: 8AM - 8PM</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="mb-0">
                &copy; {currentYear} HealthFirst Medical Clinic. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <p className="mb-0">
                CSCI390 Web Programming Project - Phase 2
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
