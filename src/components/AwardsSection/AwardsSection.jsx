import React from 'react';
import './AwardsSection.css';

const awards = [
    { img: '/assets/certificates/1.jpg', title: 'Certificate of Appreciation', desc: 'For successfully delivery of modules and business strategies for our organization.' },
    { img: '/assets/certificates/2.jpg', title: 'Certificate of Excellence', desc: 'Recognized for outstanding leadership and innovation in tech.' },
    { img: '/assets/certificates/3.jpg', title: 'Certificate of Achievement', desc: 'Awarded for continuous learning and collaboration.' },
];

const AwardsSection = () => (
    <section className="awards-section py-5">
        <div className="container-fluid">
            <h2 className="awards-title fw-bold mb-2">Awards & Certifications</h2>
            <div className="awards-desc mb-4">We take pride in our collective achievements in the tech domain and leadership initiatives. These accomplishments reflect our commitment to innovation, collaboration, and continuous learning...</div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="awards-carousel rounded-4 shadow-lg p-4 bg-white d-flex align-items-center">
                        {/* Simple carousel, can be replaced with react-bootstrap Carousel */}
                        {awards.map((award, idx) => (
                            <div className="award-slide text-center mx-2" key={idx} style={{ display: idx === 0 ? 'block' : 'none' }}>
                                <img src={award.img} alt={award.title} className="img-fluid rounded-3 mb-3 awards-img" />
                                <h4 className="fw-bold mb-2">{award.title}</h4>
                                <p className="text-secondary mb-2">{award.desc}</p>
                            </div>
                        ))}
                        {/* Carousel arrows and dots can be added here */}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AwardsSection;
