import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Ligne décorative verticale */}
      <div style={{
        position: 'absolute',
        left: '2rem',
        top: '30%',
        width: '1px',
        height: '120px',
        backgroundColor: '#E8622A',
        opacity: 0.4,
      }} />

      {/* Badge */}
      <motion.div {...fadeUp(0.1)} style={{ marginBottom: '2rem' }}>
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#E8622A',
          border: '1px solid #E8622A33',
          padding: '0.4rem 1rem',
          borderRadius: '2px',
        }}>
          Agence Web · Dakar, Sénégal
        </span>
      </motion.div>

      {/* Titre principal */}
      <motion.h1 {...fadeUp(0.25)} style={{
        fontFamily: 'Syne, sans-serif',
        fontWeight: 700,
        fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        color: '#F5F0EB',
        marginBottom: '1.5rem',
        maxWidth: '900px',
      }}>
        Nous construisons<br />
        le web de{' '}
        <span style={{ color: '#E8622A' }}>demain.</span>
      </motion.h1>

      {/* Sous-titre */}
      <motion.p {...fadeUp(0.4)} style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        color: '#6B6B6B',
        maxWidth: '520px',
        lineHeight: 1.7,
        marginBottom: '3rem',
      }}>
        Développement web sur-mesure, interfaces modernes et stratégies digitales
        pour les entreprises ambitieuses.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div {...fadeUp(0.55)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        
        <a  href="#contact"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: '#0A0A0A',
            backgroundColor: '#E8622A',
            padding: '1rem 2rem',
            borderRadius: '2px',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={e => e.target.style.backgroundColor = '#cf5524'}
          onMouseLeave={e => e.target.style.backgroundColor = '#E8622A'}
        >
          Démarrer un projet
        </a>

        
        <a  href="#projets"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: '#F5F0EB',
            backgroundColor: 'transparent',
            padding: '1rem 2rem',
            borderRadius: '2px',
            border: '1px solid #2a2a2a',
            transition: 'border-color 0.2s ease',
          }}
          onMouseEnter={e => e.target.style.borderColor = '#F5F0EB'}
          onMouseLeave={e => e.target.style.borderColor = '#2a2a2a'}
        >
          Voir nos projets →
        </a>
      </motion.div>

      {/* Stats bas de page */}
      <motion.div
        {...fadeUp(0.7)}
        style={{
          position: 'absolute',
          bottom: '3rem',
          display: 'flex',
          gap: '3rem',
        }}
      >
        {[
          { value: '20+', label: 'Projets livrés' },
          { value: '100%', label: 'Clients satisfaits' },
          { value: '3+', label: 'Ans d\'expérience' },
        ].map((stat) => (
          <div key={stat.label}>
            <div style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '1.8rem',
              color: '#F5F0EB',
            }}>
              {stat.value}
            </div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8rem',
              color: '#6B6B6B',
              marginTop: '0.2rem',
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}