import { motion } from 'framer-motion'
import { stack } from '../../data/stack'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

export default function Expertise() {
  return (
    <section
      id="expertise"
      style={{
        padding: '8rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <motion.div {...fadeUp(0)} style={{ marginBottom: '5rem' }}>
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#E8622A',
        }}>
          Notre stack
        </span>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          color: '#F5F0EB',
          marginTop: '1rem',
          lineHeight: 1.1,
          maxWidth: '600px',
        }}>
          Technologies maîtrisées.
        </h2>
      </motion.div>

      {/* Stack grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '0',
        border: '1px solid #1a1a1a',
        borderRadius: '4px',
        overflow: 'hidden',
      }}>
        {stack.map((group, index) => (
          <motion.div
            key={group.category}
            {...fadeUp(index * 0.1)}
            style={{
              padding: '2.5rem 2rem',
              borderRight: index < stack.length - 1 ? '1px solid #1a1a1a' : 'none',
              borderBottom: '1px solid #1a1a1a',
              backgroundColor: '#0d0d0d',
              transition: 'background-color 0.3s ease',
            }}
            whileHover={{ backgroundColor: '#111111' }}
          >
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#E8622A',
              marginBottom: '1.5rem',
            }}>
              {group.category}
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {group.items.map(item => (
                <li key={item} style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.9rem',
                  color: '#6B6B6B',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'color 0.2s ease',
                }}>
                  <span style={{ color: '#E8622A', fontSize: '0.5rem' }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bloc citation */}
      <motion.div
        {...fadeUp(0.4)}
        style={{
          marginTop: '5rem',
          padding: '3rem',
          border: '1px solid #1a1a1a',
          borderLeft: '3px solid #E8622A',
          borderRadius: '2px',
          backgroundColor: '#0d0d0d',
        }}
      >
        <p style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          color: '#F5F0EB',
          lineHeight: 1.5,
          maxWidth: '700px',
        }}>
          "On ne se contente pas de livrer du code — on construit des produits
          qui durent, qui scalent, et qui convertissent."
        </p>
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.85rem',
          color: '#6B6B6B',
          marginTop: '1rem',
          display: 'block',
        }}>
          — L'équipe SUMUD
        </span>
      </motion.div>
    </section>
  )
}