import React from 'react';
import Logo from '../assets/logos/nerivalabs-logo.png';
import '../styles/common/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={ Logo } alt="Logo" />
      </div>
      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Proyectos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
