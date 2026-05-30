import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaHeartbeat,
  FaUserMd,
  FaAward,
  FaHandHoldingHeart,
  FaLightbulb,
  FaUsers,
  FaCheckCircle,
  FaClinicMedical
} from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaHandHoldingHeart />,
      title: 'Compassion',
      description: 'We treat every patient with empathy, understanding, and genuine care for their wellbeing.'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'We strive for the highest standards in medical care, continuously improving our services.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We embrace modern technology and evidence-based practices for better patient outcomes.'
    },
    {
      icon: <FaUsers />,
      title: 'Integrity',
      description: 'We maintain transparency, honesty, and ethical standards in all our operations.'
    }
  ];

  const team = [
    {
      name: 'Dr. James Wilson',
      role: 'Chief Medical Officer',
      specialty: 'Internal Medicine',
      experience: '20+ years'
    },
    {
      name: 'Dr. Maria Garcia',
      role: 'Head of Pediatrics',
      specialty: 'Pediatrics',
      experience: '15+ years'
    },
    {
      name: 'Dr. Robert Kim',
      role: 'Head of Cardiology',
      specialty: 'Cardiology',
      experience: '18+ years'
    },
    {
      name: 'Dr. Lisa Thompson',
      role: 'Dental Director',
      specialty: 'Dental Surgery',
      experience: '12+ years'
    }
  ];

  const milestones = [
    { year: '2009', event: 'HealthFirst Clinic Founded' },
    { year: '2012', event: 'Expanded to 10 Specialized Departments' },
    { year: '2015', event: 'Achieved International Accreditation' },
    { year: '2018', event: 'Launched Digital Health Platform' },
    { year: '2021', event: 'Opened New State-of-the-Art Facility' },
    { year: '2024', event: 'Served 10,000+ Patients' }
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <Container>
          <div className="page-header-content text-center">
            <h1>About Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">About</li>
              </ol>
            </nav>
          </div>
        </Container>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="about-images">
                <div className="image-placeholder about-img-main">
                  <FaClinicMedical className="placeholder-icon" />
                  <span>Our Clinic</span>
                </div>
                <div className="about-img-secondary">
                  <div className="image-placeholder about-img-small">
                    <FaUserMd className="placeholder-icon" />
                    <span>Our Team</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="section-header">
                <span className="section-subtitle">About HealthFirst</span>
                <h2 className="section-title">Leading Healthcare Provider Since 2009</h2>
              </div>
              <p className="about-text">
                HealthFirst Medical Clinic has been at the forefront of healthcare excellence for over 15 years.
                Founded with a vision to provide accessible, high-quality medical care to our community,
                we have grown into a trusted healthcare institution serving thousands of patients annually.
              </p>
              <p className="about-text">
                Our team of board-certified physicians, nurses, and healthcare professionals work together
                to deliver comprehensive medical services. We combine advanced medical technology with
                compassionate care to ensure the best possible outcomes for our patients.
              </p>
              <div className="about-features">
                <div className="about-feature-item">
                  <FaCheckCircle className="text-primary" />
                  <span>Board-certified medical professionals</span>
                </div>
                <div className="about-feature-item">
                  <FaCheckCircle className="text-primary" />
                  <span>State-of-the-art medical equipment</span>
                </div>
                <div className="about-feature-item">
                  <FaCheckCircle className="text-primary" />
                  <span>Patient-centered care approach</span>
                </div>
                <div className="about-feature-item">
                  <FaCheckCircle className="text-primary" />
                  <span>24/7 emergency services available</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section section-padding bg-light">
        <Container>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <Card className="mission-card h-100">
                <Card.Body>
                  <div className="mission-icon">
                    <FaHeartbeat />
                  </div>
                  <h3>Our Mission</h3>
                  <p>
                    To provide exceptional, patient-centered healthcare services that improve the health
                    and wellbeing of our community. We are committed to delivering compassionate care
                    with integrity, innovation, and excellence.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="vision-card h-100">
                <Card.Body>
                  <div className="vision-icon">
                    <FaLightbulb />
                  </div>
                  <h3>Our Vision</h3>
                  <p>
                    To be the leading healthcare provider in the region, recognized for clinical excellence,
                    innovative practices, and compassionate patient care. We envision a healthier community
                    where quality healthcare is accessible to all.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <Container>
          <div className="section-header text-center">
            <span className="section-subtitle">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <Row>
            {values.map((value, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="value-card h-100">
                  <Card.Body className="text-center">
                    <div className="value-icon">{value.icon}</div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Timeline */}
      <section className="timeline-section section-padding bg-light">
        <Container>
          <div className="section-header text-center">
            <span className="section-subtitle">Our Journey</span>
            <h2 className="section-title">Milestones & Achievements</h2>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <p>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <Container>
          <div className="section-header text-center">
            <span className="section-subtitle">Our Team</span>
            <h2 className="section-title">Meet Our Expert Doctors</h2>
          </div>
          <Row>
            {team.map((member, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="team-card">
                  <div className="team-avatar">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <Card.Body className="text-center">
                    <h5>{member.name}</h5>
                    <span className="team-role">{member.role}</span>
                    <p className="team-specialty">{member.specialty}</p>
                    <span className="team-experience">{member.experience}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
