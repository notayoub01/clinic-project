import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaHeartbeat,
  FaUserMd,
  FaStethoscope,
  FaAmbulance,
  FaCalendarCheck,
  FaShieldAlt,
  FaAward,
  FaUsers,
  FaStar
} from 'react-icons/fa';

const Home = () => {
  const stats = [
    { icon: <FaUserMd />, number: '25+', label: 'Expert Doctors' },
    { icon: <FaUsers />, number: '10K+', label: 'Happy Patients' },
    { icon: <FaAward />, number: '15+', label: 'Years Experience' },
    { icon: <FaShieldAlt />, number: '99%', label: 'Success Rate' }
  ];

  const services = [
    {
      icon: <FaStethoscope />,
      title: 'General Medicine',
      description: 'Comprehensive health checkups and primary care for all ages.'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Cardiology',
      description: 'Advanced heart care with modern diagnostic equipment.'
    },
    {
      icon: <FaUserMd />,
      title: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents.'
    },
    {
      icon: <FaAmbulance />,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response teams.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      text: 'The doctors here are incredibly professional and caring. I felt truly heard and treated with respect.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      text: 'Best medical experience I have ever had. The facility is clean, modern, and the staff is amazing.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Patient',
      text: 'From booking to treatment, everything was seamless. Highly recommend HealthFirst to everyone!',
      rating: 5
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={7} className="hero-content">
              <div className="hero-badge">
                <FaShieldAlt /> Trusted Healthcare Provider
              </div>
              <h1 className="hero-title">
                Your Health Is Our
                <span className="text-primary"> Top Priority</span>
              </h1>
              <p className="hero-description">
                Experience world-class healthcare with our team of experienced doctors
                and state-of-the-art medical facilities. We are committed to providing
                personalized care for you and your family.
              </p>
              <div className="hero-buttons">
                <Button as={Link} to="/appointment" className="btn-primary-custom">
                  Book Appointment
                </Button>
                <Button as={Link} to="/services" variant="outline-light" className="btn-outline-custom">
                  Our Services
                </Button>
              </div>
              <div className="hero-features">
                <span><FaCalendarCheck /> Easy Online Booking</span>
                <span><FaShieldAlt /> Certified Doctors</span>
                <span><FaStar /> 4.9/5 Rating</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <Container>
          <Row>
            {stats.map((stat, index) => (
              <Col md={3} sm={6} key={index}>
                <div className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="services-preview section-padding">
        <Container>
          <div className="section-header text-center">
            <span className="section-subtitle">Our Services</span>
            <h2 className="section-title">Comprehensive Medical Care</h2>
            <p className="section-description">
              We offer a wide range of medical services to meet all your healthcare needs
            </p>
          </div>
          <Row>
            {services.map((service, index) => (
              <Col lg={3} md={6} key={index}>
                <Card className="service-card">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button as={Link} to="/services" variant="outline-primary" className="btn-view-all">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section section-padding bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="why-choose-image">
                <div className="image-placeholder why-choose-img">
                  <FaUserMd className="placeholder-icon" />
                  <span>Medical Team</span>
                </div>
                <div className="experience-badge">
                  <span className="exp-number">15+</span>
                  <span className="exp-text">Years of<br/>Excellence</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="section-header">
                <span className="section-subtitle">Why Choose Us</span>
                <h2 className="section-title">We Provide The Best Medical Services</h2>
                <p className="section-description">
                  Our clinic combines cutting-edge technology with compassionate care to deliver
                  exceptional healthcare experiences.
                </p>
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon"><FaUserMd /></div>
                  <div>
                    <h5>Expert Medical Team</h5>
                    <p>Board-certified doctors with years of experience</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><FaShieldAlt /></div>
                  <div>
                    <h5>Quality Healthcare</h5>
                    <p>Accredited facilities meeting international standards</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><FaCalendarCheck /></div>
                  <div>
                    <h5>Easy Appointments</h5>
                    <p>Book online 24/7 with instant confirmation</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section-padding">
        <Container>
          <div className="section-header text-center">
            <span className="section-subtitle">Testimonials</span>
            <h2 className="section-title">What Our Patients Say</h2>
          </div>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col md={4} key={index}>
                <Card className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star-filled" />
                    ))}
                  </div>
                  <Card.Body>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h6>{testimonial.name}</h6>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <div className="cta-content text-center">
            <h2>Ready to Get Started?</h2>
            <p>Book your appointment today and take the first step towards better health</p>
            <Button as={Link} to="/appointment" className="btn-primary-custom btn-lg">
              Book an Appointment
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
