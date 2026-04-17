import { motion } from 'framer-motion'
import { projects } from '../../data/projects'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

export default function Portfolio() {
  return (
    <section
      id="projets"
      style={{
        padding: '8rem 2rem',
        backgroundColor: '#0d0d0d',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div {...fadeUp(0)} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '5rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div>
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#E8622A',
            }}>
              Nos réalisations
            </span>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#F5F0EB',
              marginTop: '1rem',
              lineHeight: 1.1,
            }}>
              Projets récents.
            </h2>
          </div>

          
           <a href="#contact"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#F5F0EB',
              border: '1px solid #2a2a2a',
              padding: '0.75rem 1.5rem',
              borderRadius: '2px',
              transition: 'border-color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.target.style.borderColor = '#F5F0EB'}
            onMouseLeave={e => e.target.style.borderColor = '#2a2a2a'}
          >
            Démarrer le vôtre →
          </a>
        </motion.div>

        {/* Grille projets */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              {...fadeUp(index * 0.15)}
              whileHover={{ y: -6 }}
              style={{
                backgroundColor: '#111111',
                border: '1px solid #1a1a1a',
                borderRadius: '4px',
                padding: '2.5rem',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#E8622A33'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1a1a1a'}
            >
              {/* Numéro en filigrane */}
              <span style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '3.5rem',
                color: '#1a1a1a',
                lineHeight: 1,
                userSelect: 'none',
              }}>
                {project.id}
              </span>

              {/* Catégorie */}
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#E8622A',
              }}>
                {project.category}
              </span>

              {/* Titre */}
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#F5F0EB',
                margin: '0.75rem 0',
                lineHeight: 1.2,
              }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.9rem',
                color: '#6B6B6B',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}>
                {project.description}
              </p>

              {/* Footer carte */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                {/* Tech stack */}
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {project.tech.map(t => (
                    <span key={t} style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.7rem',
                      color: '#6B6B6B',
                      border: '1px solid #1f1f1f',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '2px',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Année */}
                <span style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '0.8rem',
                  color: '#2a2a2a',
                }}>
                  {project.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}