import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';

const galleryItems = [
  {
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    title: 'Sliding Door System',
    category: 'Doors',
    size: 'large',
  },
  {
    img: 'https://images.unsplash.com/photo-1620735692151-26a7e0748429?w=400&q=80',
    title: 'Frameless Shower Enclosure',
    category: 'Bathroom',
    size: 'small',
  },
  {
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
    title: 'Modern Kitchen Cabinetry',
    category: 'Interiors',
    size: 'small',
  },
  {
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
    title: 'Aluminum Window Frames',
    category: 'Windows',
    size: 'medium',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&q=80',
    title: 'Glass Office Partition',
    category: 'Commercial',
    size: 'medium',
  },
  {
    img: 'https://images.unsplash.com/photo-1467987506553-8f3916508521?w=600&q=80',
    title: 'Structural Glazing Facade',
    category: 'Facades',
    size: 'large',
  },
  {
    img: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&q=80',
    title: 'Aluminum Shopfront',
    category: 'Commercial',
    size: 'small',
  },
  {
    img: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=400&q=80',
    title: 'Custom Wardrobe',
    category: 'Interiors',
    size: 'small',
  },
];

const categories = ['All', 'Doors', 'Windows', 'Bathroom', 'Interiors', 'Commercial', 'Facades'];

export default function Gallery() {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeFilter);

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
    <section className="gallery section-wrapper" id="gallery" ref={sectionRef}>
      <div className="gallery-container">
        <div className="gallery-header">
          <span className="section-label reveal">Our Work</span>
          <div className="gold-line center reveal delay-1" />
          <h2 className="section-title reveal delay-2" style={{ textAlign: 'center' }}>
            Project <span>Gallery</span>
          </h2>
          <p className="gallery-subtitle reveal delay-3">
            A showcase of precision craftsmanship across residential, commercial, and industrial projects.
          </p>
        </div>

        {/* Filters */}
        <div className="gallery-filters reveal delay-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {filtered.map((item, i) => (
            <div
              key={item.title + i}
              className={`gallery-item ${item.size}`}
              onClick={() => setLightbox(item)}
            >
              <div className="gallery-img-wrap">
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
              <div className="gallery-overlay">
                <span className="gallery-cat">{item.category}</span>
                <h3 className="gallery-title">{item.title}</h3>
                <div className="gallery-zoom">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <img src={lightbox.img} alt={lightbox.title} />
            <div className="lightbox-info">
              <span>{lightbox.category}</span>
              <h3>{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
