import React from 'react';
import './Footer.css';

const services = [
  'Sliding Doors', 'Main Entrance Doors', 'Windows & Frames',
  'Shower Enclosures', 'Cupboards & Wardrobes', 'Kitchen Drawers',
  'Mosquito Nets', 'Office Partitions', 'Shop Fronts',
  'Stainless Steel Doors', 'Structural Glazing', 'Custom Fabrication',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="f-logo-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
                <polygon points="20,10 30,16 30,24 20,30 10,24 10,16" fill="#c9a84c" opacity="0.3"/>
                <text x="20" y="25" textAnchor="middle" fill="#c9a84c" fontSize="12" fontFamily="Bebas Neue" fontWeight="bold">A</text>
              </svg>
            </div>
            <div>
              <div className="f-logo-name">AlumaCraft</div>
              <div className="f-logo-sub">Aluminum Fabrication</div>
            </div>
          </div>
          <p className="footer-desc">
            Kerala's trusted aluminum fabrication experts since 1989. Crafting precision
            doors, windows, partitions, and custom aluminum solutions for homes, hotels,
            hospitals, offices, and commercial spaces.
          </p>
          <div className="footer-badges">
            <span>35+ Years</span>
            <span>2000+ Projects</span>
            <span>ISO Quality</span>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-links">
            {services.map(s => (
              <li key={s}>
                <a href="#services">
                  <span className="link-arrow">›</span> {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">We Work For</h4>
          <ul className="footer-links">
            {['Residential Homes', 'Apartments & Villas', 'Hotels & Resorts', 'Hospitals & Clinics',
              'Hostels & Institutions', 'Offices & IT Parks', 'Shops & Showrooms',
              'Commercial Buildings', 'Industrial Facilities'].map(t => (
              <li key={t}><a href="#projects"><span className="link-arrow">›</span> {t}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Contact Us</h4>
          <div className="footer-contact-list">
            <a href="tel:8086370353" className="footer-contact-item">
              <span className="fci-icon">📞</span>
              <div>
                <div className="fci-label">Phone & WhatsApp</div>
                <div className="fci-val">+91 8086370353</div>
              </div>
            </a>
            <div className="footer-contact-item">
              <span className="fci-icon">📍</span>
              <div>
                <div className="fci-label">Main Workshop</div>
                <div className="fci-val">Thrissur, Kerala</div>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="fci-icon">📍</span>
              <div>
                <div className="fci-label">Branch Office</div>
                <div className="fci-val">Peechi, Thrissur</div>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="fci-icon">🕐</span>
              <div>
                <div className="fci-label">Working Hours</div>
                <div className="fci-val">Mon–Sat: 9AM–7PM</div>
              </div>
            </div>
          </div>

          <a href="https://wa.me/918086370353" target="_blank" rel="noopener noreferrer" className="footer-wa-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp: 8086370353
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-copy">
            © {new Date().getFullYear()} AlumaCraft Aluminum Fabrication. All rights reserved. | Thrissur & Peechi, Kerala
          </div>
          <div className="footer-links-bottom">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
