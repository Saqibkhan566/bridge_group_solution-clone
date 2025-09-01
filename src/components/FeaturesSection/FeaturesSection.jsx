import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './FeaturesSection.css';

const features = [
    { title: 'Personalized Solutions', desc: 'We create strategies that truly fit your unique needs—no cookie-cutter approaches. Our solutions drive real, measurable growth aligned with your goals. “Solutions as unique as your vision.”', icon: 'bi bi-people-fill', color: '#0033cc' },
    { title: 'Premium Customer Support', desc: 'Real estate moves fast, and so do we. Our 24/7 support means expert help is always just a call away—no waiting, no frustration. “Here when you need us most.”', icon: 'bi bi-headset', color: '#0033cc' },
    { title: 'Best-in-Class Service @ Competitive Costs', desc: 'High-quality service doesn’t have to break the bank. We use smart tech and efficient processes to deliver exceptional value, every time. “Quality and value, hand in hand.”', icon: 'bi bi-star-fill', color: '#0033cc' },
    { title: 'Innovation with Real Implementations', desc: 'We turn ideas into action with proven tools and hands-on execution that fuels your growth—no fluff, just results. “Innovation you can count on.”', icon: 'bi bi-lightbulb-fill', color: '#0033cc' },
];

const FeaturesSection = () => (
    <section className="features-section py-5">
        <div className="container-fluid">
            <h2 className="features-title fw-bold mb-4" style={{ color: '#00076A', fontSize: '2.5rem', marginLeft: '0.5rem' }}>Our Main Features</h2>
            <div className="row g-4 align-items-stretch">
                <div className="col-lg-8">
                    <div className="row g-4">
                        {features.map((feature, idx) => (
                            <div className="col-md-6 d-flex" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" key={idx}>
                                <div className="feature-card card flex-fill border-primary animate__animated animate__fadeInUp" style={{ borderColor: '#0033cc', borderWidth: '2px' }}>
                                    <div className="card-body">
                                        <div className="feature-icon mb-3">
                                            <i className={`${feature.icon}`} style={{ color: feature.color, fontSize: '2.2rem' }}></i>
                                        </div>
                                        <h5 className="card-title fw-bold text-primary mb-2">{feature.title}</h5>
                                        <p className="card-text text-secondary">{feature.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right: Orange bordered card with image and text */}
                <div className="col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
                    <div className="card flex-fill border-warning animate__animated animate__fadeInRight" style={{ borderColor: '#ff8300', borderWidth: '2px', background: '#fff', borderRadius: '1.2rem', boxShadow: '0 2px 8px rgba(255,131,0,0.08)' }}>
                        <div className="feature-image text-center p-4">
                            <img src="https://cdn.pixabay.com/photo/2021/08/23/07/41/teamwork-6566984_1280.jpg" alt="Team Collaboration" className="img-fluid rounded-4 shadow-lg mb-3" style={{ maxWidth: '90%', minWidth: '320px' }} />
                            <h5 className="fw-bold mb-2" style={{ color: '#0033cc' }}>Be a part of success story we're building</h5>
                            <p className="text-secondary mb-0" style={{ fontSize: '1.05rem' }}>
                                We're growing fast and looking for driven people—whether you're a pro or just starting out, there's a place for you to make an impact. “Join us. Build your future.” We believe in nurturing talent and empowering individuals to lead with creativity and confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default FeaturesSection;