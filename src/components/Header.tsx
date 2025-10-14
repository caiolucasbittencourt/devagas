import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="header" role="banner" aria-label="Cabeçalho do site">
      <div className="logo-wrapper">
        <Link to="/" aria-label="Página inicial" className="logo-link">
          <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
            <path d="M30 75L5 50L30 25" stroke="#FF8C00" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M70 25L95 50L70 75" stroke="#FF8C00" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M60 15L40 85" stroke="#FF8C00" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="logo-text">DEVagas</span>
        </Link>
      </div>

      <div className="header-actions">
        <button id="theme-toggle" className="theme-toggle-button" aria-label="Alternar tema" onClick={toggleTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-sun">
            <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-moon">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
        <button className={`hamburger-menu ${isMenuOpen ? 'is-open' : ''}`} aria-label="Abrir menu de navegação" aria-expanded={isMenuOpen} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>

      <nav className={`nav ${isMenuOpen ? 'is-open' : ''}`} role="navigation" aria-label="Navegação principal">
        <Link to="/sobre" onClick={toggleMenu}>Sobre nós</Link>
        <Link to="/contato" onClick={toggleMenu}>Fale conosco</Link>
        <Link to="/parceiro" onClick={toggleMenu}>Seja parceiro</Link>
      </nav>
    </header>
  );
};

export default Header;