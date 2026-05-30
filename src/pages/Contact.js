import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      details: ['123 Health Street', 'Medical City, MC 12345']
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: ['info@healthfirst.com', 'appointments@healthfirst.com']
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Mon-Sat: 8:00 AM - 8:00 PM', 'Emergency: 24/7']
    }
  ];

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header contact-header">
        <div className="page-header-overlay"></div>
        <Container>
          <div className="page-header-content text-center">
            <h1>Contact Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Contact</li>
              </ol>
            </nav>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <Container>
          <Row>
            {contactInfo.map((info, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="contact-info-card h-100 text-center">
                  <Card.Body>
                    <div className="contact-info-icon">{info.icon}</div>
                    <h5>{info.title}</h5>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="mb-1">{detail}</p>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-light">
        <Container>
          <Row>
            <Col lg={7} className="mb-4 mb-lg-0">
              <Card className="contact-form-card">
                <Card.Body>
                  <h3 className="form-title">Send Us a Message</h3>
                  <p className="form-subtitle">
                    Have a question or need assistance? Fill out the form below and we will get back to you shortly.
                  </p>

                  {submitted && (
                    <Alert variant="success" className="success-alert">
                      <FaCheckCircle /> Thank you for your message! We will respond within 24 hours.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit} noValidate>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                            placeholder="John Doe"
                          />
                          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                            placeholder="john@example.com"
                          />
                          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number *</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            isInvalid={!!errors.phone}
                            placeholder="+1 (555) 000-0000"
                          />
                          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Subject *</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            isInvalid={!!errors.subject}
                            placeholder="How can we help?"
                          />
                          <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-4">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        isInvalid={!!errors.message}
                        placeholder="Please describe your inquiry in detail..."
                      />
                      <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Button
                      type="submit"
                      className="btn-submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Spinner animation="border" size="sm" className="me-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="me-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={5}>
              <Card className="map-card h-100">
                <Card.Body className="d-flex flex-column">
                  <h4>Our Location</h4>
                  <div className="map-container">
                    <iframe
                      title="HealthFirst Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{ border: 0, borderRadius: '12px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="location-details mt-3">
                    <h6>Getting Here</h6>
                    <p className="small text-muted">
                      We are conveniently located in the Medical District with ample parking available.
                      Accessible via public transit - Bus routes 12, 45, and 78 stop nearby.
                    </p>
                  </div>
                  <div className="social-links mt-auto">
                    <h6>Follow Us</h6>
                    <div className="social-icons">
                      <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                      <a href="#" aria-label="Twitter"><FaTwitter /></a>
                      <a href="#" aria-label="Instagram"><FaInstagram /></a>
                      <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <Container>
          <div className="section-header text-center">
            <span className="section-subtitle">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="faq-list">
                {[
                  {
                    q: 'How do I book an appointment?',
                    a: 'You can book an appointment online through our website, call us at +1 (555) 123-4567, or visit our clinic in person. Online booking is available 24/7 for your convenience.'
                  },
                  {
                    q: 'Do you accept insurance?',
                    a: 'Yes, we accept most major insurance plans. Please contact our billing department or check with your insurance provider to confirm coverage before your visit.'
                  },
                  {
                    q: 'What should I bring to my first appointment?',
                    a: 'Please bring a valid ID, your insurance card, a list of current medications, and any relevant medical records or test results from previous healthcare providers.'
                  },
                  {
                    q: 'Do you offer telemedicine consultations?',
                    a: 'Yes, we offer virtual consultations for certain conditions. Please call us to determine if your concern can be addressed via telemedicine.'
                  },
                  {
                    q: 'What are your emergency care hours?',
                    a: 'Our emergency department is open 24 hours a day, 7 days a week. For life-threatening emergencies, please call 911 immediately.'
                  }
                ].map((faq, index) => (
                  <div className="faq-item" key={index}>
                    <h5>{faq.q}</h5>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
