import React, { useState } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
              <polygon points="20,10 30,16 30,24 20,30 10,24 10,16" fill="#c9a84c" opacity="0.3"/>
              <text x="20" y="25" textAnchor="middle" fill="#c9a84c" fontSize="12" fontFamily="Bebas Neue" fontWeight="bold">A</text>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-main">AlumaCraft</span>
            <span className="logo-sub">Aluminum Fabrication</span>
          </div>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
                <span className="link-line" />
              </a>
            </li>
          ))}
          <li>
            <a href="tel:8086370353" className="nav-cta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
              </svg>
              8086370353
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
