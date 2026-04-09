export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: '#0f0f0f',
        padding: '100px 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: '20px' }}>Контакты</p>
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
              СВЯЖИТЕСЬ <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>СО МНОЙ</em>
            </h2>
            <div style={{ width: '40px', height: '1px', background: '#c9a96e', marginBottom: '28px' }} />
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                fontWeight: 300,
                color: '#b0afa8',
                lineHeight: 1.9,
                marginBottom: '40px',
              }}
            >
              Напишите мне в мессенджер, позвоните или посетите студию. Обсудим вашу идею,
              подберём размер, стиль и удобное время для сеанса. Первая консультация бесплатна.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '60px' }}>
              {[
                {
                  title: 'Телефон',
                  contacts: ['+7 (999) 123-45-67'],
                },
                {
                  title: 'Мессенджеры',
                  contacts: ['WhatsApp: +7 (999) 123-45-67', 'Telegram: @ink_studio_msk'],
                },
                {
                  title: 'Соцсети',
                  contacts: ['Instagram: @ink.studio.tattoo', 'VK: vk.com/inkstudio'],
                },
                {
                  title: 'Адрес студии',
                  contacts: ['Москва, ул. Тверская, 14', 'Вход со двора'],
                },
              ].map((c) => (
                <div key={c.title}>
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#c9a96e',
                      marginBottom: '12px',
                    }}
                  >
                    {c.title}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {c.contacts.map((contact, i) => (
                      <p
                        key={i}
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: '13px',
                          fontWeight: 300,
                          color: '#d0cfc8',
                        }}
                      >
                        {contact}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/79991234567"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
                style={{ fontSize: '10px' }}
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/ink_studio_msk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
                style={{ fontSize: '10px' }}
              >
                Telegram
              </a>
              <a
                href="tel:+79991234567"
                className="btn-solid-gold"
                style={{ fontSize: '10px' }}
              >
                Позвонить
              </a>
            </div>
          </div>

          <div style={{ position: 'relative', height: '100%' }}>
            <div
              style={{
                position: 'relative',
                height: '500px',
                overflow: 'hidden',
              }}
            >
              <img
                src="https://i.postimg.cc/CLrM5j5y/maxresdefault.jpg"
                alt="Studio"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0) 100%)',
                }}
              />
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '-40px',
                left: '40px',
                background: '#0f0f0f',
                border: '1px solid rgba(201,169,110,0.4)',
                padding: '32px 40px',
                maxWidth: '320px',
              }}
            >
              <p
                className="font-cormorant"
                style={{
                  fontSize: '32px',
                  fontWeight: 400,
                  color: '#c9a96e',
                  letterSpacing: '0.06em',
                  marginBottom: '8px',
                }}
              >
                Часы работы
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '12px',
                  fontWeight: 300,
                  color: '#b0afa8',
                  lineHeight: 1.6,
                }}
              >
                <div>
                  <span style={{ color: '#c9a96e', fontWeight: 500 }}>Вт-Чт:</span> 12:00 - 20:00
                </div>
                <div>
                  <span style={{ color: '#c9a96e', fontWeight: 500 }}>Пт-Вс:</span> 11:00 - 21:00
                </div>
                <div>
                  <span style={{ color: '#c9a96e', fontWeight: 500 }}>Пн:</span> Выходной
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
