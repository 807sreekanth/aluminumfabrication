import React, { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Homeowner, Thrissur',
    text: 'Excellent work on our entire home — sliding doors, windows, kitchen drawers and shower enclosure. The quality is premium and the team was very professional. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Dr. Priya Nair',
    role: 'Clinic Owner, Peechi',
    text: 'We needed stainless steel doors and aluminum partitions for our clinic. AlumaCraft delivered exactly what we needed — clean, hygienic and durable. Great service!',
    rating: 5,
  },
  {
    name: 'Mohammed Ashraf',
    role: 'Hotel Manager, Thrissur',
    text: 'Fitted 120 rooms with aluminum windows and shower enclosures. The project was completed on time, within budget and the finish is beautiful. Our guests love it.',
    rating: 5,
  },
  {
    name: 'Anitha Varghese',
    role: 'Interior Designer',
    text: 'I regularly recommend AlumaCraft to my clients. Their custom fabrication capability is impressive — they can make anything! The craftsmanship and 35 years of experience shows.',
    rating: 5,
  },
  {
    name: 'Suresh Menon',
    role: 'Shop Owner, Thrissur',
    text: 'Beautiful shopfront with glass and aluminum. Got so many compliments from customers. Their team measured, designed and installed everything in just 3 days. Superb!',
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(a => (a + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
    <section className="testimonials section-wrapper" ref={sectionRef}>
      <div className="testimonials-container">
        <div className="test-header">
          <span className="section-label reveal">Client Words</span>
          <div className="gold-line center reveal delay-1" />
          <h2 className="section-title reveal delay-2" style={{ textAlign: 'center' }}>
            What Our <span>Clients</span> Say
          </h2>
        </div>

        <div className="test-slider reveal delay-3">
          <div className="test-quote">❝</div>
          <div className="test-content">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`test-item ${i === active ? 'active' : ''}`}>
                <p className="test-text">{t.text}</p>
                <div className="test-author">
                  <div className="test-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="test-name">{t.name}</div>
                    <div className="test-role">{t.role}</div>
                  </div>
                  <div className="test-stars">
                    {'★'.repeat(t.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="test-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`test-dot ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
