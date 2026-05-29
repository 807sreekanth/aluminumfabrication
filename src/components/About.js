import React, { useEffect, useRef, useState } from 'react';
import './About.css';

function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  { target: 35, suffix: '+', label: 'Years of Experience', icon: '🏆' },
  { target: 2000, suffix: '+', label: 'Projects Completed', icon: '🔨' },
  { target: 500, suffix: '+', label: 'Happy Clients', icon: '😊' },
  { target: 12, suffix: '', label: 'Service Categories', icon: '📋' },
  { target: 2, suffix: '', label: 'Workshop Locations', icon: '📍' },
  { target: 100, suffix: '%', label: 'Quality Guarantee', icon: '✅' },
];

export default function About() {
  const sectionRef = useRef(null);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('stats-trigger')) {
              setCounting(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stats-trigger');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section-wrapper" id="about" ref={sectionRef}>
      <div className="about-container">
        {/* Left side */}
        <div className="about-left">
          <div className="about-image-stack">
            <div className="about-img about-img-main reveal-left">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
                alt="Aluminum workshop"
              />
              <div className="img-label">
                <span>Est. 1989</span>
              </div>
            </div>
            <div className="about-img about-img-secondary reveal-left delay-2">
              <img
                src="https://images.unsplash.com/photo-1565372537011-3851e2e44bb5?w=400&q=80"
                alt="Fabrication work"
              />
            </div>
            <div className="about-badge-float reveal delay-3">
              <span className="badge-num">35+</span>
              <span className="badge-text">Years of<br />Excellence</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="about-right">
          <span className="section-label reveal">Who We Are</span>
          <div className="gold-line reveal delay-1" />
          <h2 className="section-title reveal delay-2">
            Kerala's Most <span>Trusted</span><br />Aluminum Experts
          </h2>
          <p className="about-text reveal delay-3">
            Founded over 35 years ago, AlumaCraft has grown from a small workshop in Thrissur
            to one of the most respected aluminum fabrication companies in Kerala. With our
            second location in Peechi, we serve clients across Thrissur district and beyond.
          </p>
          <p className="about-text reveal delay-4">
            We specialize in precision aluminum fabrication — from a single window to entire
            building facades. Every project is handled by our skilled craftsmen using
            European-grade profiles and hardware. We serve houses, hospitals, hotels, hostels,
            offices, shops, and commercial buildings.
          </p>

          <div className="about-features reveal delay-4">
            {[
              'Free on-site measurement & consultation',
              'Premium-grade aluminum profiles',
              'Expert installation by trained technicians',
              'After-sales service & maintenance',
              'Custom designs accepted',
              'Serving all of Thrissur district',
            ].map((feat) => (
              <div className="feature-item" key={feat}>
                <div className="feature-dot" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="about-locations reveal delay-5">
            <div className="location-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <strong>Thrissur</strong>
                <span>Main Workshop & Showroom</span>
              </div>
            </div>
            <div className="location-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <strong>Peechi</strong>
                <span>Branch Office & Fabrication Unit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats counter */}
      <div className="stats-section stats-trigger">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} counting={counting} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, counting, delay }) {
  const count = useCounter(stat.target, 2000 + delay, counting);
  return (
    <div className="stat-card">
      <span className="stat-card-icon">{stat.icon}</span>
      <div className="stat-card-num">
        {count}{stat.suffix}
      </div>
      <div className="stat-card-label">{stat.label}</div>
    </div>
  );
}
