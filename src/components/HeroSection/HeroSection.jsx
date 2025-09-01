import React from 'react';
import './HeroSection.css';

const services = [
    { title: 'Web Development', icon: 'bi bi-laptop', link: '#', color: '#ff8300' },
    { title: 'Application Development', icon: 'bi bi-phone', link: '#', color: '#ff8300' },
    { title: 'Data Analytics', icon: 'bi bi-bar-chart', link: '#', color: '#ff8300' },
    { title: 'Project Outsourcing', icon: 'bi bi-diagram-3', link: '#', color: '#ff8300' },
    { title: 'ERP & Customize Software', icon: 'bi bi-gear', link: '#', color: '#ff8300' },
    { title: 'CRM', icon: 'bi bi-person-badge', link: '#', color: '#ff8300' },
];

const HeroSection = () => (
    <section className="hero-section py-5">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                    <div className="hero-left animate__animated animate__fadeInLeft">
                        <div className="hero-accent mb-2"><span style={{ color: '#ff8300', fontWeight: 'bold' }}>WE KNOT SPACE...</span></div>
                        <h1 className="display-2 fw-bold text-primary mb-2">BRIDGE GROUP <br /><span className="hero-subtitle">SOLUTIONS</span></h1>
                        <h2 className="display-6 text-secondary mb-3">DIGITAL PRODUCTS.</h2>
                        <div className="fw-bold mb-2">Our Services</div>
                        <div className="row g-2 mb-3">
                            {services.map((service, idx) => (
                                <div className="col-6" key={idx}>
                                    <a href={service.link} className="service-card d-flex align-items-center p-2 rounded shadow-sm bg-light animate__animated animate__fadeInUp">
                                        <i className={`${service.icon} me-2`} style={{ color: service.color, fontSize: '1.5rem' }}></i>
                                        <span className="fw-semibold flex-grow-1">{service.title}</span>
                                        <i className="bi bi-arrow-right ms-auto" style={{ color: service.color }}></i>
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="mb-2 text-secondary">BRIDGE GROUP SOLUTION - LEADERS IN WEB & MOBILE DESIGN AND DEVELOPMENT INDUSTRY.</div>
                        <a href="#contact" className="btn btn-info btn-lg px-4 fw-bold shadow-sm animate__animated animate__fadeInUp">Connect With Us</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                    <div className="hero-image animate__animated animate__fadeInRight">
                        <img src="/assets/erp.jpg" alt="ERP & Customize Software" className="img-fluid rounded-4 shadow-lg mb-3" style={{ maxWidth: '90%', minWidth: '320px' }} />
                        <div className="bg-light rounded-4 p-4 shadow-sm mt-n3 hero-erp-desc">
                            <h3 className="fw-bold mb-2">ERP & Customize Software</h3>
                            <p className="mb-2">ERP is a type of software that helps organizations manage their core business processes—such as finance, HR, manufacturing, supply chain, services, procurement.</p>
                            <a href="#learn-more" className="btn btn-outline-warning fw-bold px-4">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;
