import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      padding: '3rem 2rem',
      borderTop: '1px solid #1a1a1a',
      backgroundColor: '#0A0A0A',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>
        {/* Logo */}
        <span style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: '1.2rem',
          color: '#F5F0EB',
          letterSpacing: '0.08em',
        }}>
          SU<span style={{ color: '#E8622A' }}>MUD</span>
        </span>

        {/* Copy */}
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.8rem',
          color: '#6B6B6B',
        }}>
          © {year} SUMUD — Dakar, Sénégal. Tous droits réservés.
        </span>

        {/* Liens sociaux */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { label: 'LinkedIn', href: '#' },
            { label: 'GitHub', href: '#' },
            { label: 'Instagram', href: '#' },
          ].map(link => (
            
             <a key={link.label}
              href={link.href}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.8rem',
                color: '#6B6B6B',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.target.style.color = '#F5F0EB'}
              onMouseLeave={e => e.target.style.color = '#6B6B6B'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}