const works = [
  {
    id: 1,
    src: 'https://i.postimg.cc/h471prFt/90b6a68c050f0df64478ab270fc86f0a.jpg',
    style: 'Графика',
    desc: 'Чёрно-белая геометрия',
  },
  {
    id: 2,
    src: 'https://i.postimg.cc/1zjDKgJk/140b31ea11061c49972c60838cc926e4.jpg',
    style: 'Blackwork',
    desc: 'Тёмные орнаменты',
  },
  {
    id: 3,
    src: 'https://i.postimg.cc/NjNXg9qM/21af0c207745e687ae88b57b4b3d8ae9.jpg',
    style: 'Минимализм',
    desc: 'Тонкие линии',
  },
  {
    id: 4,
    src: 'https://i.postimg.cc/0jd6hr0R/a463cac46f8422ba984f378aadf8e105.jpg',
    style: 'Реализм',
    desc: 'Детальные портреты',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: '#0a0a0a', padding: '100px 0 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>Портфолио</p>
          <h2
            className="font-cormorant"
            style={{
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 400,
              color: '#f5f5f0',
              letterSpacing: '0.05em',
              lineHeight: 1.1,
            }}
          >
            ИЗБРАННЫЕ <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Работы</em>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}
        >
          {works.map((w) => (
            <div
              key={w.id}
              className="photo-hover"
              style={{
                position: 'relative',
                aspectRatio: '3/4',
                cursor: 'pointer',
              }}
            >
              <img
                src={w.src}
                alt={w.style}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0) 55%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '20px',
                    fontWeight: 400,
                    color: '#f5f5f0',
                    letterSpacing: '0.06em',
                    marginBottom: '4px',
                  }}
                >
                  {w.style}
                </p>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '10px',
                    fontWeight: 300,
                    color: '#c9a96e',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  {w.desc} →
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="#contact" className="btn-outline-gold">
            Смотреть все работы
          </a>
        </div>
      </div>
    </section>
  );
}
