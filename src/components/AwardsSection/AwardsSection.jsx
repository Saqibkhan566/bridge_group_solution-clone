import React from 'react';
import './AwardsSection.css';

const awards = [
    { img: 'https://cdn.pixabay.com/photo/2017/12/22/08/44/picture-frame-3033273_1280.png', title: 'Certificate of Appreciation', desc: 'For successfully delivery of modules and business strategies for our organization.' },
    { img: '/assets/certificates/2.jpg', title: 'Certificate of Excellence', desc: 'Recognized for outstanding leadership and innovation in tech.' },
    { img: '/assets/certificates/3.jpg', title: 'Certificate of Achievement', desc: 'Awarded for continuous learning and collaboration.' },
];

const AwardsSection = () => (
    <section className="awards-section py-5" style={{ background: '#D6F0FF' }}>
        <div className="container-fluid">
            <div className="row align-items-center">
                {/* Left: Headline and description */}
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <h2 className="awards-title fw-bold mb-2" style={{ color: '#002C7A', fontSize: '3rem' }}>Awards & Certifications</h2>
                    <div className="awards-desc mb-4" style={{ color: '#666', fontSize: '1.2rem', maxWidth: '500px' }}>
                        We take pride in our collective achievements in the tech domain and leadership initiatives. These accomplishments reflect our commitment to innovation, collaboration, and continuous learning...
                    </div>
                </div>
                {/* Right: Carousel card */}
                <div className="col-lg-6 d-flex justify-content-center">
                    <div className="awards-carousel rounded-4 shadow-lg p-4 bg-white d-flex align-items-center" style={{ minWidth: '340px', maxWidth: '600px' }}>
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
