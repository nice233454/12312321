const styles = [
  {
    name: 'Blackwork',
    desc: 'Мощные чёрные орнаменты, геометрия и паттерны. Смелые линии и заливки создают сильный визуальный образ.',
    src: 'https://i.postimg.cc/VsrPg3LV/maxresdefault-(1).jpg',
    price: 'от 5 000 ₽/ч',
  },
  {
    name: 'Графика',
    desc: 'Контрастные чёрно-белые образы, тонкая штриховка и выразительные формы. Идеально для сложных эскизов.',
    src: 'https://i.postimg.cc/tT8f84C6/0991f316a7d99231e819133b41689d10.jpg',
    price: 'от 5 000 ₽/ч',
  },
  {
    name: 'Минимализм',
    desc: 'Изящные тонкие линии, лаконичные символы и геометрические формы. Элегантность в простоте.',
    src: 'https://i.postimg.cc/Vk4hmRkf/105d80b5ca566e5980b269e9bcbd4b22.jpg',
    price: 'от 3 000 ₽/ч',
  },
  {
    name: 'Реализм',
    desc: 'Детализированные портреты, природные мотивы и фотореалистичные изображения с глубиной и объёмом.',
    src: 'https://i.postimg.cc/fTNqdF3M/i-(10).webp',
    price: 'от 6 000 ₽/ч',
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: '#0a0a0a', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>Направления</p>
          <h2
            className="font-cormorant"
            style={{
              fontSize: 'clamp(36px, 4vw, 58px)',
              fontWeight: 400,
              color: '#f5f5f0',
              letterSpacing: '0.05em',
              lineHeight: 1.1,
            }}
          >
            СТИЛИ <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Работ</em>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2px',
          }}
        >
          {styles.map((s) => (
            <div
              key={s.name}
              className="photo-hover"
              style={{
                position: 'relative',
                aspectRatio: '3/5',
                cursor: 'pointer',
              }}
            >
              <img
                src={s.src}
                alt={s.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.2) 60%, rgba(10,10,10,0) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px 20px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '22px',
                    fontWeight: 400,
                    color: '#f5f5f0',
                    letterSpacing: '0.06em',
                    marginBottom: '8px',
                  }}
                >
                  {s.name}
                </p>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '11px',
                    fontWeight: 300,
                    color: '#a0a09a',
                    lineHeight: 1.7,
                    marginBottom: '14px',
                  }}
                >
                  {s.desc}
                </p>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '10px',
                    fontWeight: 500,
                    color: '#c9a96e',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.price} →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
