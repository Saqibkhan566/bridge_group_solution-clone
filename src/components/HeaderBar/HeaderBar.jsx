import React from 'react';
import './HeaderBar.css';

const HeaderBar = () => (
    <div className="header-bar py-2 px-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
            <span className="header-contact"><i className="bi bi-telephone-fill"></i> +91 1244376971</span>
            <span className="header-contact"><i className="bi bi-envelope-fill"></i> contact@bridgegroupsolutions.com</span>
        </div>
        <div className="d-flex align-items-center gap-3">
            <a href="https://twitter.com/" className="header-social" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
            <a href="https://facebook.com/" className="header-social" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://instagram.com/" className="header-social" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://linkedin.com/" className="header-social" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
        </div>
    </div>
);

export default HeaderBar;
