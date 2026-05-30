import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaHeartbeat, FaBars, FaPhoneAlt } from 'react-icons/fa';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <FaHeartbeat className="brand-icon" />
          <span className="brand-text">HealthFirst</span>
        </Navbar.Brand>

        <div className="d-flex align-items-center">
          <Button
            as={Link}
            to="/appointment"
            className="btn-appointment-mobile d-lg-none me-2"
            size="sm"
          >
            Book Now
          </Button>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          >
            <FaBars />
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className={location.pathname === '/services' ? 'active' : ''}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Nav.Link>
            <Button
              as={Link}
              to="/appointment"
              className="btn-appointment ms-lg-3"
            >
              <FaPhoneAlt className="me-2" />
              Book Appointment
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
