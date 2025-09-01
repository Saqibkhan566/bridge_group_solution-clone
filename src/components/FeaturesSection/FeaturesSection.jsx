import React from 'react';
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
            <h2 className="features-title fw-bold mb-4">Our Main Features</h2>
            <div className="row g-4 align-items-stretch">
                {features.map((feature, idx) => (
                    <div className="col-md-3 d-flex" key={idx}>
                        <div className="feature-card card flex-fill border-primary animate__animated animate__fadeInUp">
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
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="feature-image animate__animated animate__fadeInRight">
                        <img src="/assets/Shared workspace-amico 1.png" alt="Team Collaboration" className="img-fluid rounded-4 shadow-lg" style={{ maxWidth: '90%', minWidth: '320px' }} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// const FeaturesSection = () => (
//     <section className="features-section py-5 bg-light">
//         <div className="container-fluid">
//             <h2 className="text-center mb-5 fw-bold">Our Main Features</h2>
//             <div className="row">
//                 {features.map((feature, idx) => (
//                     <div className="col-md-4 mb-4" key={idx}>
//                         <div className="card h-100 shadow feature-card">
//                             <div className="card-body text-center">
//                                 <div className="feature-icon mb-3">{feature.icon}</div>
//                                 <h5 className="card-title fw-bold mb-2">{feature.title}</h5>
//                                 <p className="card-text">{feature.desc}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </section>
// );

export default FeaturesSection;
