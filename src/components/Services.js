import React, { useEffect, useRef } from 'react';
import './Services.css';

const services = [
  {
    icon: '🚪',
    title: 'Sliding Doors',
    desc: 'Smooth precision-engineered aluminum sliding doors for homes, offices and commercial spaces. Weather-sealed with multi-point locking.',
    tag: 'Most Popular',
  },
  {
    icon: '🪟',
    title: 'Windows & Frames',
    desc: 'Casement, awning, louvre and fixed aluminum windows. Energy-efficient double glazing options with thermal breaks.',
    tag: '',
  },
  {
    icon: '🚿',
    title: 'Shower Enclosures',
    desc: 'Frameless and semi-frameless glass shower enclosures. Custom-fitted to any bathroom size with premium hardware.',
    tag: 'Trending',
  },
  {
    icon: '🏠',
    title: 'Main Doors',
    desc: 'Elegant aluminum main entrance doors — flush, paneled, and glass-insert styles. Secure, stylish and durable.',
    tag: '',
  },
  {
    icon: '🗄️',
    title: 'Cupboards & Wardrobes',
    desc: 'Modular aluminum-frame cupboards and wardrobes. Rust-free, termite-proof, lightweight and fully customizable.',
    tag: '',
  },
  {
    icon: '📦',
    title: 'Kitchen Drawers',
    desc: 'Precision-fitted soft-close aluminum drawers. Custom organizers, cutlery trays and pull-out mechanisms.',
    tag: '',
  },
  {
    icon: '🏗️',
    title: 'Structural Glazing',
    desc: 'Commercial curtain walls, glass facades and structural glazing for offices and multi-story buildings.',
    tag: '',
  },
  {
    icon: '🛡️',
    title: 'Mosquito Nets',
    desc: 'Fixed, sliding and pleated aluminum-framed mosquito nets. Full window coverage, easy maintenance.',
    tag: '',
  },
  {
    icon: '📐',
    title: 'Office Partitions',
    desc: 'Aluminum and glass partition systems for offices. Frosted, clear, or switchable glass options available.',
    tag: '',
  },
  {
    icon: '🏪',
    title: 'Shop Fronts',
    desc: 'High-traffic commercial shopfronts with automatic or manual aluminum framing. Custom branding panels.',
    tag: '',
  },
  {
    icon: '🏨',
    title: 'Stainless Steel Doors',
    desc: 'Brushed and mirror-finish stainless steel doors for hospitals, hotels and high-end residential projects.',
    tag: 'Premium',
  },
  {
    icon: '🔧',
    title: 'Custom Fabrication',
    desc: 'Bespoke aluminum fabrication for any requirement. CNC-machined precision with on-site fitting service.',
    tag: '',
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services section-wrapper" id="services" ref={sectionRef}>
      {/* Background pattern */}
      <div className="services-bg" />

      <div className="services-container">
        <div className="services-header">
          <span className="section-label reveal">What We Do</span>
          <div className="gold-line reveal delay-1" />
          <h2 className="section-title reveal delay-2">
            Our <span>Services</span>
          </h2>
          <p className="services-subtitle reveal delay-3">
            From residential interiors to large-scale commercial projects —
            every job crafted with 35+ years of aluminum expertise.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`service-card reveal delay-${Math.min((i % 4) + 1, 5)}`}
            >
              {svc.tag && <span className="card-tag">{svc.tag}</span>}
              <div className="service-icon">{svc.icon}</div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <div className="card-shine" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
