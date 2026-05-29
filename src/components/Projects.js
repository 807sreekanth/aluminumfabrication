import React, { useEffect, useRef } from 'react';
import './Projects.css';

const projectTypes = [
  {
    icon: '🏠',
    title: 'Residential Homes',
    desc: 'Complete aluminum solutions for modern and traditional homes — doors, windows, partitions, shower enclosures, wardrobes and kitchen fittings.',
    count: '800+',
  },
  {
    icon: '🏨',
    title: 'Hotels & Resorts',
    desc: 'Premium aluminum fittings for hospitality environments. We understand the need for elegance, durability, and low maintenance.',
    count: '50+',
  },
  {
    icon: '🏥',
    title: 'Hospitals & Clinics',
    desc: 'Hygienic stainless steel and aluminum doors, partitions, and clean-room suitable fittings for healthcare facilities.',
    count: '40+',
  },
  {
    icon: '🏫',
    title: 'Hostels & Institutions',
    desc: 'Cost-effective, durable aluminum window and door systems for educational institutions and hostels.',
    count: '60+',
  },
  {
    icon: '🏪',
    title: 'Shops & Showrooms',
    desc: 'Attractive aluminum shopfronts, display shelving, glass facades and partition systems for retail environments.',
    count: '300+',
  },
  {
    icon: '🏢',
    title: 'Offices & IT Parks',
    desc: 'Modular aluminum office partition systems, curtain walls, and custom aluminum furniture for corporate spaces.',
    count: '200+',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects section-wrapper" id="projects" ref={sectionRef}>
      <div className="projects-bg" />
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-label reveal">Who We Serve</span>
          <div className="gold-line center reveal delay-1" />
          <h2 className="section-title reveal delay-2" style={{ textAlign: 'center' }}>
            All Types of <span>Projects</span> Welcome
          </h2>
          <p className="projects-subtitle reveal delay-3">
            From a single window replacement to full building fit-outs — we handle projects of all scales.
          </p>
        </div>

        <div className="projects-grid">
          {projectTypes.map((proj, i) => (
            <div key={proj.title} className={`project-card reveal delay-${(i % 3) + 1}`}>
              <div className="proj-header">
                <span className="proj-icon">{proj.icon}</span>
                <span className="proj-count">{proj.count} Projects</span>
              </div>
              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-desc">{proj.desc}</p>
              <div className="proj-line" />
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="cta-banner reveal delay-2">
          <div className="cta-content">
            <div className="cta-tag">Ready to Start?</div>
            <h3 className="cta-heading">Get a Free Quote for Your Project</h3>
            <p>Call us or WhatsApp — we'll visit your site for free measurement and consultation.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:8086370353" className="btn-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
              </svg>
              Call Now
            </a>
            <a href="https://wa.me/918086370353" target="_blank" rel="noopener noreferrer" className="btn-outline">
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
