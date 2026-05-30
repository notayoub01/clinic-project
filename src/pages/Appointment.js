import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Spinner, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaCalendarAlt,
  FaClock,
  FaUserMd,
  FaCheckCircle,
  FaInfoCircle,
  FaPhoneAlt,
  FaCalendarCheck
} from 'react-icons/fa';

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    department: '',
    doctor: '',
    reason: '',
    isNewPatient: false,
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [appointmentRef, setAppointmentRef] = useState('');

  const departments = [
    { value: '', label: 'Select Department' },
    { value: 'general', label: 'General Medicine' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'pediatrics', label: 'Pediatrics' },
    { value: 'dental', label: 'Dental Care' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'orthopedics', label: 'Orthopedics' },
    { value: 'ophthalmology', label: 'Ophthalmology' },
    { value: 'obgyn', label: 'Obstetrics & Gynecology' }
  ];

  const doctors = {
    general: ['Dr. James Wilson', 'Dr. Sarah Miller'],
    cardiology: ['Dr. Robert Kim', 'Dr. Emily Chen'],
    pediatrics: ['Dr. Maria Garcia', 'Dr. David Lee'],
    dental: ['Dr. Lisa Thompson', 'Dr. Mark Johnson'],
    neurology: ['Dr. Michael Brown', 'Dr. Anna White'],
    orthopedics: ['Dr. Chris Taylor', 'Dr. Jennifer Martinez'],
    ophthalmology: ['Dr. Kevin Park', 'Dr. Rachel Green'],
    obgyn: ['Dr. Amanda Foster', 'Dr. Daniel Wright']
  };

  const timeSlots = [
    '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM',
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'department' ? { doctor: '' } : {})
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';
    if (!formData.department) newErrors.department = 'Please select a department';
    if (!formData.doctor) newErrors.doctor = 'Please select a doctor';
    if (!formData.reason.trim()) newErrors.reason = 'Please describe your reason for visit';
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
    await new Promise(resolve => setTimeout(resolve, 2000));
    const ref = 'HF-' + Date.now().toString().slice(-8);
    setAppointmentRef(ref);
    setLoading(false);
    setSubmitted(true);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const max = new Date();
    max.setMonth(max.getMonth() + 3);
    return max.toISOString().split('T')[0];
  };

  return (
    <div className="appointment-page">
      {/* Page Header */}
      <section className="page-header appointment-header">
        <div className="page-header-overlay"></div>
        <Container>
          <div className="page-header-content text-center">
            <h1>Book an Appointment</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Appointment</li>
              </ol>
            </nav>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              {submitted ? (
                <Card className="success-card text-center">
                  <Card.Body className="py-5">
                    <div className="success-icon">
                      <FaCheckCircle />
                    </div>
                    <h2>Appointment Confirmed!</h2>
                    <p className="lead">
                      Thank you, {formData.firstName} {formData.lastName}. Your appointment has been successfully booked.
                    </p>
                    <div className="appointment-details">
                      <Badge bg="primary" className="ref-badge">
                        Reference: {appointmentRef}
                      </Badge>
                      <div className="detail-row">
                        <span><FaCalendarAlt /> {formData.date}</span>
                        <span><FaClock /> {formData.time}</span>
                      </div>
                      <div className="detail-row">
                        <span><FaUserMd /> {formData.doctor}</span>
                        <span>{departments.find(d => d.value === formData.department)?.label}</span>
                      </div>
                    </div>
                    <p className="text-muted mt-3">
                      A confirmation email has been sent to {formData.email}.<br/>
                      Please arrive 15 minutes before your scheduled time.
                    </p>
                    <div className="success-buttons">
                      <Button as={Link} to="/" variant="primary" className="me-2">
                        Back to Home
                      </Button>
                      <Button variant="outline-primary" onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          firstName: '', lastName: '', email: '', phone: '',
                          date: '', time: '', department: '', doctor: '',
                          reason: '', isNewPatient: false, notes: ''
                        });
                      }}>
                        Book Another
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ) : (
                <Card className="appointment-form-card">
                  <Card.Body>
                    <div className="form-header text-center mb-4">
                      <div className="form-icon">
                        <FaCalendarCheck />
                      </div>
                      <h3>Schedule Your Visit</h3>
                      <p>Fill out the form below to book your appointment with our specialists</p>
                    </div>

                    <Alert variant="info" className="booking-info">
                      <FaInfoCircle className="me-2" />
                      Appointments can be booked up to 3 months in advance. For emergencies, please call <strong>+1 (555) 123-4567</strong>.
                    </Alert>

                    <Form onSubmit={handleSubmit} noValidate>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>First Name *</Form.Label>
                            <Form.Control
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              isInvalid={!!errors.firstName}
                              placeholder="John"
                            />
                            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Last Name *</Form.Label>
                            <Form.Control
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              isInvalid={!!errors.lastName}
                              placeholder="Doe"
                            />
                            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email *</Form.Label>
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
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Phone *</Form.Label>
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
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Preferred Date *</Form.Label>
                            <Form.Control
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              isInvalid={!!errors.date}
                              min={getMinDate()}
                              max={getMaxDate()}
                            />
                            <Form.Control.Feedback type="invalid">{errors.date}</Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Preferred Time *</Form.Label>
                            <Form.Select
                              name="time"
                              value={formData.time}
                              onChange={handleChange}
                              isInvalid={!!errors.time}
                            >
                              <option value="">Select Time</option>
                              {timeSlots.map((slot, idx) => (
                                <option key={idx} value={slot}>{slot}</option>
                              ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.time}</Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Department *</Form.Label>
                            <Form.Select
                              name="department"
                              value={formData.department}
                              onChange={handleChange}
                              isInvalid={!!errors.department}
                            >
                              {departments.map((dept, idx) => (
                                <option key={idx} value={dept.value}>{dept.label}</option>
                              ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.department}</Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Preferred Doctor *</Form.Label>
                            <Form.Select
                              name="doctor"
                              value={formData.doctor}
                              onChange={handleChange}
                              isInvalid={!!errors.doctor}
                              disabled={!formData.department}
                            >
                              <option value="">{formData.department ? 'Select Doctor' : 'Select Department First'}</option>
                              {formData.department && doctors[formData.department]?.map((doc, idx) => (
                                <option key={idx} value={doc}>{doc}</option>
                              ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.doctor}</Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Label>Reason for Visit *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="reason"
                          value={formData.reason}
                          onChange={handleChange}
                          isInvalid={!!errors.reason}
                          placeholder="Briefly describe your symptoms or reason for the appointment..."
                        />
                        <Form.Control.Feedback type="invalid">{errors.reason}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Check
                          type="checkbox"
                          name="isNewPatient"
                          checked={formData.isNewPatient}
                          onChange={handleChange}
                          label="I am a new patient (first visit)"
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Additional Notes (Optional)</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="Any additional information you'd like us to know..."
                        />
                      </Form.Group>

                      <Button
                        type="submit"
                        className="btn-submit btn-lg w-100"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Spinner animation="border" size="sm" className="me-2" />
                            Confirming Appointment...
                          </>
                        ) : (
                          <>
                            <FaCalendarCheck className="me-2" />
                            Confirm Appointment
                          </>
                        )}
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info Bar */}
      <section className="contact-bar-section">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h4>Need Help Booking?</h4>
              <p>Our team is available to assist you with your appointment scheduling</p>
            </Col>
            <Col md={4} className="text-md-end">
              <Button href="tel:+15551234567" className="btn-call">
                <FaPhoneAlt className="me-2" />
                Call Us Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Appointment;
