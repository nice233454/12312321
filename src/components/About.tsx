export default function About() {
  return (
    <section
      id="about"
      style={{
        background: '#0f0f0f',
        padding: '100px 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '3/4',
              maxWidth: '420px',
            }}
          >
            <img
              src="https://i.postimg.cc/CLrM5j5y/maxresdefault.jpg"
              alt="Tattoo artist at work"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '-32px',
              right: '-32px',
              width: '48%',
              aspectRatio: '1/1',
              border: '1px solid rgba(201,169,110,0.3)',
              overflow: 'hidden',
            }}
          >
            <img
              src="https://i.postimg.cc/43TDxdzS/i-(9).webp"
              alt="Tattoo detail"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '24px',
              right: '-56px',
              background: '#0a0a0a',
              border: '1px solid rgba(201,169,110,0.3)',
              padding: '20px 24px',
              textAlign: 'center',
            }}
          >
            <div
              className="font-cormorant"
              style={{ fontSize: '42px', fontWeight: 400, color: '#c9a96e', lineHeight: 1 }}
            >
              8+
            </div>
            <div
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '9px',
                letterSpacing: '0.2em',
                color: '#888',
                textTransform: 'uppercase',
                marginTop: '4px',
              }}
            >
              лет опыта
            </div>
          </div>
        </div>

        <div style={{ paddingLeft: '16px' }}>
          <p className="section-label" style={{ marginBottom: '20px' }}>Обо мне</p>

          <h2
            className="font-cormorant"
            style={{
              fontSize: 'clamp(38px, 3.5vw, 58px)',
              fontWeight: 400,
              color: '#f5f5f0',
              letterSpacing: '0.04em',
              lineHeight: 1.1,
              marginBottom: '28px',
            }}
          >
            ABOUT <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Me</em>
          </h2>

          <div
            style={{
              width: '40px',
              height: '1px',
              background: '#c9a96e',
              marginBottom: '28px',
            }}
          />

          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              color: '#b0afa8',
              lineHeight: 1.9,
              marginBottom: '18px',
            }}
          >
            Привет! Меня зовут Александр. Я тату мастер с более чем 8-летним опытом работы в Москве.
            Каждая работа для меня — это не просто рисунок, а история, которую вы несёте с собой.
          </p>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              color: '#b0afa8',
              lineHeight: 1.9,
              marginBottom: '36px',
            }}
          >
            Специализируюсь на графике, блэкворке и минимализме. Работаю только с авторскими эскизами —
            каждый проект уникален и создаётся специально для вас. Использую профессиональные краски
            и оборудование ведущих брендов.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            {[
              { num: '500+', label: 'Клиентов' },
              { num: '100%', label: 'Авторские эскизы' },
              { num: '8+', label: 'Лет опыта' },
              { num: '5★', label: 'Средний рейтинг' },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: '#151515',
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: '18px 20px',
                }}
              >
                <div
                  className="font-cormorant"
                  style={{ fontSize: '32px', fontWeight: 400, color: '#c9a96e', lineHeight: 1 }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.14em',
                    color: '#888',
                    textTransform: 'uppercase',
                    marginTop: '6px',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-outline-gold">
            Связаться со мной
          </a>
        </div>
      </div>
    </section>
  );
}
