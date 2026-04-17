import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Services',  href: '#services'  },
  { label: 'Projets',   href: '#projets'   },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 2rem',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: scrolled ? '1px solid #1f1f1f' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: '1.5rem',
          color: '#F5F0EB',
          letterSpacing: '0.08em',
        }}>
          SU<span style={{ color: '#E8622A' }}>MUD</span>
        </span>
      </a>

      {/* Nav desktop */}
      <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#6B6B6B',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.target.style.color = '#F5F0EB'}
            onMouseLeave={e => e.target.style.color = '#6B6B6B'}
            className="nav-link"
          >
            {link.label}
          </a>
        ))}

        {/* CTA */}
        
         <a href="#contact"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: '#0A0A0A',
            backgroundColor: '#E8622A',
            padding: '0.6rem 1.4rem',
            borderRadius: '2px',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={e => e.target.style.backgroundColor = '#cf5524'}
          onMouseLeave={e => e.target.style.backgroundColor = '#E8622A'}
        >
          Démarrer un projet
        </a>
      </nav>
    </motion.header>
  )
}