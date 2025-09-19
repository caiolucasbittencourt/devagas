import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="/" aria-label="Página inicial" className="footer-logo">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 75L5 50L30 25" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M70 25L95 50L70 75" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M60 15L40 85" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <nav className="footer-socials">
          <a href="#" aria-label="Discord" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-discord"></i></a>
          <a href="https://www.linkedin.com/in/caiolucasbittencourt/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/caiolucasbittencourt" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;