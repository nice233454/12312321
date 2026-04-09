export default function Footer() {
  return (
    <footer
      style={{
        background: '#060606',
        borderTop: '1px solid rgba(201,169,110,0.15)',
        padding: '48px 0 32px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <div
              className="font-cormorant"
              style={{ fontSize: '28px', fontWeight: 300, color: '#f5f5f0', letterSpacing: '0.08em' }}
            >
              <em>Ink</em> STUDIO
            </div>
            <div
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '9px',
                letterSpacing: '0.3em',
                color: '#c9a96e',
                textTransform: 'uppercase',
                marginTop: '4px',
              }}
            >
              Tattoo Artist · Москва
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            {['Главная', 'Работы', 'Обо мне', 'Стили', 'Контакт'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link" style={{ fontSize: '10px' }}>
                {item}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-outline-gold" style={{ fontSize: '10px', padding: '10px 24px' }}>
            Записаться
          </a>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '10px',
              color: '#555',
              letterSpacing: '0.05em',
            }}
          >
            © 2024 Ink Studio. Все права защищены.
          </p>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '10px',
              color: '#555',
              letterSpacing: '0.05em',
            }}
          >
            Профессиональные татуировки · Авторские эскизы · Москва
          </p>
        </div>
      </div>
    </footer>
  );
}
