import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello AlumaCraft! I'm ${form.name}. Phone: ${form.phone}. Service needed: ${form.service}. Message: ${form.message}`;
    window.open(`https://wa.me/918086370353?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="contact section-wrapper" id="contact" ref={sectionRef}>
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <span className="section-label reveal">Get in Touch</span>
          <div className="gold-line center reveal delay-1" />
          <h2 className="section-title reveal delay-2" style={{ textAlign: 'center' }}>
            Start Your <span>Project</span>
          </h2>
          <p className="contact-subtitle reveal delay-3">
            Free site visit and measurement. No obligation quote. Call or WhatsApp us today.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info reveal-left delay-2">
            <h3 className="info-heading">Contact Details</h3>

            <div className="info-cards">
              {[
                {
                  icon: '📞',
                  label: 'Phone / WhatsApp',
                  value: '8086370353',
                  link: 'tel:8086370353',
                },
                {
                  icon: '📍',
                  label: 'Location 1',
                  value: 'Thrissur, Kerala',
                  link: 'https://maps.google.com/?q=Thrissur,Kerala',
                },
                {
                  icon: '📍',
                  label: 'Location 2',
                  value: 'Peechi, Thrissur',
                  link: 'https://maps.google.com/?q=Peechi,Thrissur',
                },
                {
                  icon: '🕐',
                  label: 'Working Hours',
                  value: 'Mon–Sat: 9AM – 7PM',
                  link: null,
                },
              ].map((info) => (
                <div className="info-card" key={info.label}>
                  <span className="info-icon">{info.icon}</span>
                  <div>
                    <div className="info-label">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} className="info-value" target={info.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <div className="info-value">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="whatsapp-box">
              <div className="wa-icon">
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="wa-heading">Quick WhatsApp Enquiry</div>
                <div className="wa-num">+91 8086370353</div>
              </div>
              <a href="https://wa.me/918086370353" target="_blank" rel="noopener noreferrer" className="btn-gold wa-btn">
                Chat Now
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap reveal-right delay-2">
            <h3 className="info-heading">Send an Enquiry</h3>
            {sent ? (
              <div className="form-success">
                <span>✅</span>
                <p>Opening WhatsApp with your enquiry. We'll respond shortly!</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    <option>Sliding Doors</option>
                    <option>Main Doors</option>
                    <option>Windows & Frames</option>
                    <option>Shower Enclosures</option>
                    <option>Cupboards & Wardrobes</option>
                    <option>Kitchen Drawers</option>
                    <option>Office Partitions</option>
                    <option>Mosquito Nets</option>
                    <option>Structural Glazing</option>
                    <option>Shop Fronts</option>
                    <option>Stainless Steel Doors</option>
                    <option>Custom Fabrication</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message / Project Details</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project — dimensions, location, quantity, etc."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn-gold submit-btn">
                  Send via WhatsApp
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
