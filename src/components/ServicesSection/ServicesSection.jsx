import React from 'react';
import './ServicesSection.css';

const services = [
    { title: 'Web Development', desc: 'We build fast, secure, and user-friendly websites that convert visitors into customers and scale with your business. Every site is crafted for performance and seamless experience. Responsive design, SEO-ready, fast loading, and easy content management.', icon: 'bi bi-laptop', color: '#009fe3' },
    { title: 'ERP & Customized Software', desc: 'Our ERP and custom software unify your operations, automate repetitive tasks, and provide real-time insights—saving you time and cutting costs. Built to grow as you do. What you get: Streamlined workflows, accurate data, and scalable solutions tailored to your business.', icon: 'bi bi-gear', color: '#009fe3' },
    { title: 'Data Analytics & Business Intelligence', desc: 'Turn your data into clear insights and smarter decisions. We deliver easy-to-understand dashboards and predictive analytics that help you spot opportunities and fix issues before they arise. What you get: Real-time reporting, trend analysis, and actionable intelligence.', icon: 'bi bi-bar-chart', color: '#009fe3' },
    { title: 'Project Outsourcing', desc: 'Expand your team without the overhead. Our experienced professionals integrate seamlessly with your projects, delivering quality work on time and within budget. What you get: Flexible teams, faster delivery, and accountability you can trust.', icon: 'bi bi-diagram-3', color: '#009fe3' },
    { title: 'Application Development', desc: 'We create mobile and web apps designed for performance and growth—engaging your users and optimizing your operations with reliable, scalable solutions. What you get: Native and cross-platform apps, cloud-ready architecture, and ongoing support.', icon: 'bi bi-phone', color: '#009fe3' },
    { title: 'CRM', desc: 'We build powerful CRM solutions designed to enhance customer engagement and streamline your business processes—empowering your teams and driving long-term growth. What you get: Custom CRM development, integration with existing tools, automation of workflows, real-time analytics, and continuous support.', icon: 'bi bi-person-badge', color: '#009fe3' },
];

const ServicesSection = () => (
    <section className="services-section py-5">
        <div className="container-fluid">
            <h2 className="services-title fw-bold mb-4">Our Best Services</h2>
            <div className="services-desc mb-4">Driving Real Business Impact Through Technology and Innovation. At Bridge Group Solution, we build solutions that solve real problems, boost efficiency, and fuel growth—whether you're a startup or an established enterprise.</div>
            <div className="row g-4">
                {services.map((service, idx) => (
                    <div className="col-md-4 d-flex" key={idx}>
                        <div className="service-card card flex-fill border-info animate__animated animate__fadeInUp">
                            <div className="card-body">
                                <div className="service-icon mb-3">
                                    <i className={`${service.icon}`} style={{ color: service.color, fontSize: '2.2rem' }}></i>
                                </div>
                                <h5 className="card-title fw-bold text-info mb-2">{service.title}</h5>
                                <p className="card-text text-secondary">{service.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ServicesSection;
