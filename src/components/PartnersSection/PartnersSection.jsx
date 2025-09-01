import React from 'react';
import './PartnersSection.css';

const partners = [
    { name: 'Aditya Birla Capital', img: '/assets/1_logo.png' },
    { name: 'Big Bazaar', img: '/assets/2_logo.png' },
    { name: 'IndiaFirst', img: '/assets/3_logo.png' },
    { name: 'Max Life', img: '/assets/4_logo.png' },
    { name: 'Drishti', img: '/assets/5_logo.png' },
];

const PartnersSection = () => (
    <section className="partners-section py-5">
        <div className="container-fluid">
            <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" className="section-content">
                <div className="partners-title mb-2 text-info fw-bold">Partners</div>
                <h2 className="partners-headline fw-bold mb-2">Stronger Together: Building the Future with Our Partners</h2>
                <div className="partners-desc mb-4">At Bridge Group Solutions, we believe that meaningful change happens when expertise is shared. Thats why weve joined forces with industry leaders who share our passion for excellence and innovation. These partnerships dont just enhance our services  they amplify the outcomes we deliver.</div>
                <div className="row justify-content-center align-items-center g-4">
                    {partners.map((partner, idx) => (
                        <div className="col-6 col-md-2 mb-4 text-center" key={idx}>
                            <img src={partner.img} alt={partner.name} className="img-fluid partner-logo mb-2" />
                            <div className="fw-semibold">{partner.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default PartnersSection;
