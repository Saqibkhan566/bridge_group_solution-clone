import React from 'react';
import logo from '../../assets/logo.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2" data-aos="fade-down">
        <div className="container-fluid align-items-center">
            <a className="navbar-brand d-flex align-items-center gap-2" href="/">
                <img src={logo} alt="Bridge Group Logo" className="navbar-logo" />
                <span className="navbar-title text-primary fw-bold">BRIDGE GROUP <span className="navbar-subtitle">SOLUTIONS</span></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="salesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sales</a>
                        <ul className="dropdown-menu" aria-labelledby="salesDropdown">
                            <li><a className="dropdown-item" href="/b2b">B2B Sales</a></li>
                            <li><a className="dropdown-item" href="/b2c">B2C Sales</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="companyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Company</a>
                        <ul className="dropdown-menu" aria-labelledby="companyDropdown">
                            <li><a className="dropdown-item" href="/about">About</a></li>
                            <li><a className="dropdown-item" href="/careerPage">Careers</a></li>
                            <li><a className="dropdown-item" href="/privacy-policy">Privacy and Policy</a></li>
                            <li><a className="dropdown-item" href="/terms">Terms and Conditions</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                        <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                            <li><a className="dropdown-item" href="/services">Frontend Development</a></li>
                            <li><a className="dropdown-item" href="/services">Backend Development</a></li>
                            <li><a className="dropdown-item" href="/services">Data Analytics</a></li>
                            <li><a className="dropdown-item" href="/services">Web Security and Optimizations</a></li>
                            <li><a className="dropdown-item" href="/services">ERP & Customized Software</a></li>
                            <li><a className="dropdown-item" href="/services">Software Testing</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/partners">Our Partners</a>
                    </li>
                    <li className="nav-item ms-2">
                        <a className="btn btn-warning fw-bold px-4 rounded-pill" href="/careerPage">Careers</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
