import React, { useEffect, useRef } from 'react';
import './Hero.css';

const heroImages = [
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80',
];

export default function Hero() {
  const slideRef = useRef(null);
  const currentSlide = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const slides = slideRef.current?.querySelectorAll('.hero-slide');
    if (!slides || slides.length === 0) return;

    const nextSlide = () => {
      slides[currentSlide.current].classList.remove('active');
      currentSlide.current = (currentSlide.current + 1) % slides.length;
      slides[currentSlide.current].classList.add('active');
    };

    intervalRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      requestAnimationFrame(animateFollower);
    };

    window.addEventListener('mousemove', moveCursor);
    animateFollower();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cursor.remove();
      follower.remove();
    };
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <section className="hero" id="home">
        {/* Background slides */}
        <div className="hero-slides" ref={slideRef}>
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`hero-slide ${i === 0 ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="hero-overlay" />
        </div>

        {/* Animated grid lines */}
        <div className="grid-lines">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="grid-line" style={{ left: `${(i + 1) * 16.66}%` }} />
          ))}
        </div>

        {/* Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>Thrissur & Peechi, Kerala</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line animate-in delay-1">Precision</span>
            <span className="title-line gold animate-in delay-2">Aluminum</span>
            <span className="title-line animate-in delay-3">Fabrication</span>
          </h1>

          <p className="hero-description animate-in delay-4">
            Crafting exceptional aluminum solutions for over <strong>35 years</strong>.
            From bespoke doors & windows to complete architectural systems —
            trusted by homes, hospitals, hotels & commercial spaces across Kerala.
          </p>

          <div className="hero-actions animate-in delay-5">
            <a href="#contact" className="btn-gold">
              Get Free Quote
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#gallery" className="btn-outline">View Our Work</a>
          </div>

          <div className="hero-stats animate-in delay-5">
            {[
              { num: '35+', label: 'Years Experience' },
              { num: '2000+', label: 'Projects Done' },
              { num: '100%', label: 'Client Satisfaction' },
              { num: '2', label: 'Locations' },
            ].map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="stat-number">{stat.num}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/918086370353"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp Enquiry"
      >
        <svg viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
