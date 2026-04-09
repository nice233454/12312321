export default function Hero() {
  return (
    <section id="hero" style={{ background: '#0a0a0a' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr',
          height: 'calc(100vh - 110px)',
          minHeight: '540px',
          maxHeight: '820px',
        }}
      >
        <div className="photo-hover" style={{ overflow: 'hidden', position: 'relative' }}>
          <img
            src="https://i.postimg.cc/qBZxG5Zz/photo82389.jpg"
            alt="Tattoo work"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(10,10,10,0) 60%, rgba(10,10,10,0.6) 100%)',
            }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            padding: '40px 48px',
          }}
        >
          <img
            src="https://i.postimg.cc/9fJ7QD65/i-(7).webp"
            alt="Tattoo artist"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(10,10,10,0.55)',
            }}
          />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <p className="section-label" style={{ marginBottom: '20px' }}>
              ✦ &nbsp; авторские татуировки &nbsp; ✦
            </p>
            <h1
              className="font-cormorant"
              style={{
                fontSize: 'clamp(52px, 6vw, 88px)',
                fontWeight: 300,
                color: '#f5f5f0',
                lineHeight: 1.0,
                letterSpacing: '0.04em',
                marginBottom: '12px',
              }}
            >
              <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Твоя</em>
              <br />
              ИСТОРИЯ
              <br />
              НА КОЖЕ
            </h1>
            <div
              style={{
                width: '48px',
                height: '1px',
                background: '#c9a96e',
                margin: '20px auto',
              }}
            />
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '11px',
                fontWeight: 300,
                letterSpacing: '0.14em',
                color: '#d0cfc8',
                textTransform: 'uppercase',
                marginBottom: '32px',
                maxWidth: '300px',
                margin: '0 auto 32px',
                lineHeight: 1.8,
              }}
            >
              Индивидуальные эскизы · Авторский стиль · Москва
            </p>
            <a href="#contact" className="btn-solid-gold">
              Записаться на консультацию
            </a>
          </div>
        </div>

        <div className="photo-hover" style={{ overflow: 'hidden', position: 'relative' }}>
          <img
            src="https://i.postimg.cc/Y2JbHPN1/6aa0e4d5ba9fd4ebc753d5c66577b2ca.webp"
            alt="Tattoo detail"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to left, rgba(10,10,10,0) 60%, rgba(10,10,10,0.6) 100%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
