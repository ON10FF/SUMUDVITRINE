import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Développement Web',
    description: 'Sites vitrine, plateformes e-commerce, applications web complexes. Du front au back, on maîtrise toute la chaîne.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    number: '02',
    title: 'UI / UX Design',
    description: 'Des interfaces pensées pour l\'utilisateur. Design system, prototypage, expérience fluide sur tous les écrans.',
    tags: ['Figma', 'Design System', 'Mobile First'],
  },
  {
    number: '03',
    title: 'Marketing Digital',
    description: 'Stratégie de contenu, SEO, campagnes publicitaires. On propulse votre visibilité en ligne.',
    tags: ['SEO', 'Google Ads', 'Social Media'],
  },
  {
    number: '04',
    title: 'Maintenance & Support',
    description: 'Suivi technique, mises à jour, optimisation des performances. On reste à vos côtés après le lancement.',
    tags: ['Monitoring', 'Optimisation', 'Support'],
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '8rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Header section */}
      <motion.div {...fadeUp(0)} style={{ marginBottom: '5rem' }}>
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#E8622A',
        }}>
          Ce qu'on fait
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
          Des services taillés pour performer.
        </h2>
      </motion.div>

      {/* Services list */}
      <div>
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            {...fadeUp(index * 0.1)}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr auto',
              alignItems: 'start',
              gap: '2rem',
              padding: '2.5rem 0',
              borderTop: '1px solid #1a1a1a',
              cursor: 'default',
              transition: 'all 0.3s ease',
            }}
            whileHover={{ x: 8 }}
          >
            {/* Numéro */}
            <span style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '0.85rem',
              color: '#E8622A',
              opacity: 0.7,
              paddingTop: '0.2rem',
            }}>
              {service.number}
            </span>

            {/* Contenu */}
            <div>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '1.4rem',
                color: '#F5F0EB',
                marginBottom: '0.75rem',
              }}>
                {service.title}
              </h3>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.95rem',
                color: '#6B6B6B',
                lineHeight: 1.7,
                maxWidth: '480px',
                marginBottom: '1rem',
              }}>
                {service.description}
              </p>
              {/* Tags */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {service.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    color: '#6B6B6B',
                    border: '1px solid #1f1f1f',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '2px',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Flèche */}
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1.2rem',
              color: '#2a2a2a',
              paddingTop: '0.2rem',
              transition: 'color 0.2s ease',
            }}>
              →
            </span>
          </motion.div>
        ))}

        {/* Bordure basse */}
        <div style={{ borderTop: '1px solid #1a1a1a' }} />
      </div>
    </section>
  )
}