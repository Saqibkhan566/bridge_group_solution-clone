import React from 'react';
import './GuidanceSection.css';

const stats = [
    { value: '10,000', label: 'Satisfied Customers' },
    { value: '259', label: 'Minimum Projects Completed' },
    { value: '32', label: 'Awards Received' },
    { value: '10', label: 'Years of Experience' },
];

const GuidanceSection = () => (
    <section className="guidance-section py-5">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
                    <img src="/assets/Marriage counseling-bro 1.png" alt="Guidance" className="img-fluid rounded-4 shadow-lg guidance-img" style={{ maxWidth: '90%', minWidth: '320px' }} />
                </div>
                <div className="col-lg-6">
                    <h2 className="guidance-title fw-bold mb-3">You Always Get the Best Guidance</h2>
                    <div className="row mb-4">
                        {stats.map((stat, idx) => (
                            <div className="col-6 col-md-3 mb-3" key={idx}>
                                <div className="guidance-stat fw-bold text-primary" style={{ fontSize: '2rem' }}>{stat.value}</div>
                                <div className="guidance-label text-secondary">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <a href="/about" className="btn btn-info btn-lg px-4 fw-bold shadow-sm guidance-btn">More About Us</a>
                </div>
            </div>
        </div>
    </section>
);

export default GuidanceSection;
