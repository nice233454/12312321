import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Главная', href: '#hero' },
    { label: 'Работы', href: '#gallery' },
    { label: 'Обо мне', href: '#about' },
    { label: 'Стили', href: '#services' },
    { label: 'Контакт', href: '#contact' },
  ];

  return (
    <>
      <div
        style={{
          background: '#0a0a0a',
          borderBottom: '1px solid rgba(201,169,110,0.2)',
          textAlign: 'center',
          padding: '10px 0',
          fontSize: '10px',
          letterSpacing: '0.25em',
          fontFamily: 'Montserrat, sans-serif',
          color: '#c9a96e',
          textTransform: 'uppercase',
        }}
      >
        ✦ &nbsp; Запись через WhatsApp и Telegram &nbsp; ✦
      </div>

      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(10,10,10,0.97)' : '#0a0a0a',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          transition: 'background 0.3s ease',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          <a href="#hero" style={{ textDecoration: 'none' }}>
            <div
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                color: '#f5f5f0',
                lineHeight: 1,
              }}
            >
              <div style={{ fontSize: '26px', fontWeight: 300, letterSpacing: '0.08em' }}>
                <em>Ink</em> STUDIO
              </div>
              <div
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.35em',
                  color: '#c9a96e',
                  textTransform: 'uppercase',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  marginTop: '2px',
                }}
              >
                Tattoo Artist
              </div>
            </div>
          </a>

          <nav className="hidden md:flex" style={{ gap: '36px', display: 'flex' }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-outline-gold hidden md:inline-block" style={{ fontSize: '10px', padding: '10px 24px' }}>
            Записаться
          </a>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f5f5f0' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div
            style={{
              background: '#0f0f0f',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              padding: '20px 24px 28px',
            }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-solid-gold" style={{ display: 'inline-block', marginTop: '20px' }}>
              Записаться
            </a>
          </div>
        )}
      </header>
    </>
  );
}
