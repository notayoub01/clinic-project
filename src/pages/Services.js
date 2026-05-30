import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Modal, Button } from 'react-bootstrap';
import {
  FaStethoscope,
  FaHeartbeat,
  FaUserMd,
  FaTooth,
  FaBaby,
  FaBrain,
  FaBone,
  FaEye,
  FaMicroscope,
  FaAmbulance,
  FaPills,
  FaXRay,
  FaClock,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <FaStethoscope />,
      title: 'General Medicine',
      shortDesc: 'Comprehensive primary care for adults including preventive care, chronic disease management, and acute illness treatment.',
      fullDesc: 'Our General Medicine department provides comprehensive primary care services for adults of all ages. Our experienced internists offer preventive care, manage chronic conditions like diabetes and hypertension, and treat acute illnesses. Regular health screenings and personalized wellness plans are available.',
      features: ['Annual physical exams', 'Chronic disease management', 'Immunizations', 'Health screenings', 'Lifestyle counseling'],
      hours: 'Mon-Sat: 8:00 AM - 6:00 PM',
      price: 'From $80'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Cardiology',
      shortDesc: 'Advanced heart care including diagnostics, treatment of heart conditions, and preventive cardiology services.',
      fullDesc: 'Our Cardiology department offers comprehensive heart care services. From routine ECGs to advanced cardiac catheterization, our cardiologists use cutting-edge technology to diagnose and treat heart conditions. We specialize in preventive cardiology, heart failure management, and interventional procedures.',
      features: ['ECG & Echocardiography', 'Stress testing', 'Cardiac catheterization', 'Pacemaker implantation', 'Heart failure management'],
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
      price: 'From $150'
    },
    {
      icon: <FaUserMd />,
      title: 'Pediatrics',
      shortDesc: 'Specialized healthcare for infants, children, and adolescents including vaccinations and developmental assessments.',
      fullDesc: 'Our Pediatrics department is dedicated to the health and wellbeing of children from birth through adolescence. Our pediatricians provide well-child visits, immunizations, developmental assessments, and treatment for childhood illnesses in a child-friendly environment.',
      features: ['Well-child visits', 'Vaccinations', 'Developmental screening', 'Acute illness care', 'Nutritional counseling'],
      hours: 'Mon-Sat: 8:00 AM - 7:00 PM',
      price: 'From $70'
    },
    {
      icon: <FaTooth />,
      title: 'Dental Care',
      shortDesc: 'Complete dental services including cleanings, fillings, extractions, cosmetic dentistry, and oral surgery.',
      fullDesc: 'Our Dental Care department provides comprehensive oral health services. From routine cleanings and checkups to complex restorative procedures and cosmetic dentistry, our dental team ensures your smile stays healthy and beautiful.',
      features: ['Teeth cleaning', 'Fillings & crowns', 'Root canal therapy', 'Teeth whitening', 'Oral surgery'],
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      price: 'From $60'
    },
    {
      icon: <FaBrain />,
      title: 'Neurology',
      shortDesc: 'Diagnosis and treatment of neurological disorders including headaches, epilepsy, stroke, and movement disorders.',
      fullDesc: 'Our Neurology department specializes in diagnosing and treating disorders of the nervous system. Our neurologists handle conditions ranging from migraines and epilepsy to stroke recovery and Parkinson\'s disease, using advanced diagnostic tools and treatment protocols.',
      features: ['EEG & EMG testing', 'Headache management', 'Stroke care', 'Epilepsy treatment', 'Memory disorder care'],
      hours: 'Mon-Fri: 9:00 AM - 4:00 PM',
      price: 'From $180'
    },
    {
      icon: <FaBone />,
      title: 'Orthopedics',
      shortDesc: 'Treatment of musculoskeletal conditions including fractures, joint replacements, sports injuries, and spine disorders.',
      fullDesc: 'Our Orthopedics department provides expert care for bones, joints, muscles, and ligaments. From sports injuries and fractures to joint replacement surgery and spine care, our orthopedic surgeons use minimally invasive techniques for faster recovery.',
      features: ['Joint replacement', 'Sports medicine', 'Fracture care', 'Spine surgery', 'Physical therapy'],
      hours: 'Mon-Sat: 8:00 AM - 5:00 PM',
      price: 'From $120'
    },
    {
      icon: <FaEye />,
      title: 'Ophthalmology',
      shortDesc: 'Complete eye care services including vision exams, cataract surgery, glaucoma treatment, and LASIK consultations.',
      fullDesc: 'Our Ophthalmology department offers comprehensive eye care from routine vision exams to advanced surgical procedures. We treat conditions like cataracts, glaucoma, macular degeneration, and provide LASIK consultations for vision correction.',
      features: ['Vision exams', 'Cataract surgery', 'Glaucoma treatment', 'LASIK consultations', 'Retinal care'],
      hours: 'Mon-Sat: 9:00 AM - 5:00 PM',
      price: 'From $90'
    },
    {
      icon: <FaMicroscope />,
      title: 'Laboratory',
      shortDesc: 'Full-service diagnostic laboratory offering blood tests, urinalysis, pathology, and specialized diagnostic testing.',
      fullDesc: 'Our state-of-the-art Laboratory provides accurate and timely diagnostic testing. Equipped with the latest analyzers and staffed by certified technicians, we offer a comprehensive range of tests from routine blood work to specialized genetic testing.',
      features: ['Blood tests', 'Urinalysis', 'Pathology', 'Genetic testing', 'Rapid test results'],
      hours: 'Mon-Sun: 7:00 AM - 8:00 PM',
      price: 'From $30'
    },
    {
      icon: <FaAmbulance />,
      title: 'Emergency Care',
      shortDesc: '24/7 emergency medical services with rapid response for trauma, cardiac emergencies, and acute medical conditions.',
      fullDesc: 'Our Emergency Care department operates 24/7 with a dedicated team ready to handle any medical emergency. From trauma and cardiac events to acute illnesses, our emergency physicians provide rapid assessment and treatment in our fully equipped emergency room.',
      features: ['24/7 availability', 'Trauma care', 'Cardiac emergency', 'Pediatric emergency', 'Ambulance services'],
      hours: '24/7 Open',
      price: 'Emergency rates apply'
    },
    {
      icon: <FaPills />,
      title: 'Pharmacy',
      shortDesc: 'In-house pharmacy providing prescription medications, over-the-counter products, and medication counseling services.',
      fullDesc: 'Our in-house Pharmacy ensures you have convenient access to all your medications. Our licensed pharmacists provide medication counseling, check for drug interactions, and work with your doctors to optimize your treatment plan.',
      features: ['Prescription filling', 'Medication counseling', 'Drug interaction checks', 'Compounding services', 'Home delivery'],
      hours: 'Mon-Sun: 7:00 AM - 10:00 PM',
      price: 'Varies by medication'
    },
    {
      icon: <FaXRay />,
      title: 'Radiology',
      shortDesc: 'Advanced imaging services including X-rays, CT scans, MRI, ultrasound, and mammography with digital reporting.',
      fullDesc: 'Our Radiology department offers comprehensive imaging services using the latest technology. From digital X-rays and CT scans to MRI and ultrasound, our radiologists provide accurate interpretations to support your diagnosis and treatment.',
      features: ['Digital X-rays', 'CT scans', 'MRI imaging', 'Ultrasound', 'Mammography'],
      hours: 'Mon-Sat: 8:00 AM - 6:00 PM',
      price: 'From $100'
    },
    {
      icon: <FaBaby />,
      title: 'Obstetrics & Gynecology',
      shortDesc: 'Complete women\'s health services including prenatal care, family planning, and gynecological surgery.',
      fullDesc: 'Our OB/GYN department provides comprehensive women\'s healthcare services. From prenatal care and delivery to gynecological surgery and menopause management, our specialists offer compassionate care for women at every stage of life.',
      features: ['Prenatal care', 'Family planning', 'Gynecological surgery', 'Menopause care', 'Cancer screening'],
      hours: 'Mon-Sat: 8:00 AM - 5:00 PM',
      price: 'From $100'
    }
  ];

  const handleShowModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header services-header">
        <div className="page-header-overlay"></div>
        <Container>
          <div className="page-header-content text-center">
            <h1>Our Services</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Services</li>
              </ol>
            </nav>
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <Container>
          <div className="section-header text-center">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title">Comprehensive Medical Services</h2>
            <p className="section-description">
              We provide a wide range of medical services to address all your healthcare needs
              under one roof. Click on any service to learn more.
            </p>
          </div>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="service-detail-card h-100" onClick={() => handleShowModal(service)}>
                  <Card.Body>
                    <div className="service-header">
                      <div className="service-icon-wrapper">{service.icon}</div>
                      <Badge bg="primary" className="service-price">{service.price}</Badge>
                    </div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.shortDesc}</Card.Text>
                    <div className="service-meta">
                      <span><FaClock /> {service.hours}</span>
                    </div>
                    <Button variant="link" className="service-learn-more">
                      Learn More <FaArrowRight />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Service Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="service-modal"
      >
        {selectedService && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                <span className="modal-icon">{selectedService.icon}</span>
                {selectedService.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="modal-description">{selectedService.fullDesc}</p>

              <h5 className="modal-section-title">Services Included:</h5>
              <ul className="modal-features">
                {selectedService.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheck className="feature-check" /> {feature}
                  </li>
                ))}
              </ul>

              <div className="modal-meta">
                <div className="meta-item">
                  <FaClock />
                  <div>
                    <span className="meta-label">Hours</span>
                    <span className="meta-value">{selectedService.hours}</span>
                  </div>
                </div>
                <div className="meta-item">
                  <Badge bg="primary" className="meta-badge">{selectedService.price}</Badge>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button variant="primary" href="/appointment">
                Book This Service
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Why Our Services */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="section-header">
                <span className="section-subtitle">Why Choose Our Services</span>
                <h2 className="section-title">Quality Care You Can Trust</h2>
              </div>
              <div className="why-services-list">
                <div className="why-service-item">
                  <div className="why-icon"><FaCheck /></div>
                  <div>
                    <h5>Experienced Specialists</h5>
                    <p>All our doctors are board-certified with extensive clinical experience</p>
                  </div>
                </div>
                <div className="why-service-item">
                  <div className="why-icon"><FaCheck /></div>
                  <div>
                    <h5>Modern Equipment</h5>
                    <p>We use the latest medical technology for accurate diagnosis and treatment</p>
                  </div>
                </div>
                <div className="why-service-item">
                  <div className="why-icon"><FaCheck /></div>
                  <div>
                    <h5>Affordable Pricing</h5>
                    <p>Transparent pricing with flexible payment options available</p>
                  </div>
                </div>
                <div className="why-service-item">
                  <div className="why-icon"><FaCheck /></div>
                  <div>
                    <h5>Patient-Centered Approach</h5>
                    <p>Your comfort and satisfaction are our top priorities</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="services-stats">
                <div className="stat-box">
                  <h3>12+</h3>
                  <p>Medical Departments</p>
                </div>
                <div className="stat-box">
                  <h3>50+</h3>
                  <p>Specialized Services</p>
                </div>
                <div className="stat-box">
                  <h3>25+</h3>
                  <p>Expert Doctors</p>
                </div>
                <div className="stat-box">
                  <h3>24/7</h3>
                  <p>Emergency Care</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
