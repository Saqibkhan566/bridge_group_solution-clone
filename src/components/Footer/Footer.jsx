import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="footer bg-light text-dark pt-5 pb-3">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="d-flex align-items-center mb-2">
                        <img src="/assets/logo.png" alt="Bridge Group Logo" className="footer-logo me-2" />
                        <div>
                            <span className="footer-title text-primary fw-bold">BRIDGE GROUP</span><br />
                            <span className="footer-subtitle text-info">SOLUTIONS</span>
                        </div>
                    </div>
                    <div className="footer-accent mb-2">WE KNOT SPACE...</div>
                    <div className="footer-socials mb-2">
                        <a href="https://twitter.com/" className="footer-social" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
                        <a href="https://facebook.com/" className="footer-social" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                        <a href="https://instagram.com/" className="footer-social" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                        <a href="https://linkedin.com/" className="footer-social" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="fw-bold mb-2">Links</div>
                    <ul className="footer-list">
                        <li><a href="/" className="footer-link">Home</a></li>
                        <li><a href="/about" className="footer-link">About</a></li>
                        <li><a href="/careerPage" className="footer-link">Careers</a></li>
                        <li><a href="/privacy-policy" className="footer-link">Privacy and Policy</a></li>
                        <li><a href="/contact" className="footer-link">Contact Us</a></li>
                        <li><a href="/terms" className="footer-link">Terms and Conditions</a></li>
                    </ul>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="fw-bold mb-2">Services</div>
                    <ul className="footer-list">
                        <li><a href="/services" className="footer-link">Frontend Development</a></li>
                        <li><a href="/services" className="footer-link">Backend Development</a></li>
                        <li><a href="/services" className="footer-link">Data Analytics</a></li>
                        <li><a href="/services" className="footer-link">Web Security and Optimizations</a></li>
                        <li><a href="/services" className="footer-link">Erp & Customized Software</a></li>
                        <li><a href="/services" className="footer-link">Software Testing</a></li>
                    </ul>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="fw-bold mb-2">Get In Touch</div>
                    <div>Bridge Group Solutions, F356+4MJ,<br />Ashok Marg, South City I, Sector 41,<br />Gurugram, Haryana 122001</div>
                    <div className="fw-bold mt-2">Email Address</div>
                    <a href="mailto:contact@bridgegroupsolutions.com" className="footer-link">contact@bridgegroupsolutions.com</a>
                </div>
            </div>
            <div className="footer-bottom text-center pt-3 mt-3 border-top">
                Copyright &copy; {new Date().getFullYear()} All rights reserved | <a href="/" className="footer-link">Bridge Group Solutions</a>
            </div>
        </div>
    </footer>
)
export default Footer;
