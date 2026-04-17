import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

const inputStyle = {
  width: '100%',
  backgroundColor: '#111111',
  border: '1px solid #1a1a1a',
  borderRadius: '2px',
  padding: '1rem 1.25rem',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.95rem',
  color: '#F5F0EB',
  outline: 'none',
  transition: 'border-color 0.2s ease',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    // Intégration EmailJS à configurer
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1500)
  }

  return (
    <section
      id="contact"
      style={{
        padding: '8rem 2rem',
        backgroundColor: '#0d0d0d',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'start',
      }}>

        {/* Colonne gauche */}
        <motion.div {...fadeUp(0)}>
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#E8622A',
          }}>
            Contact
          </span>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: '#F5F0EB',
            marginTop: '1rem',
            lineHeight: 1.1,
          }}>
            Un projet en tête ?
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1rem',
            color: '#6B6B6B',
            lineHeight: 1.7,
            marginTop: '1.5rem',
            marginBottom: '3rem',
          }}>
            Parlez-nous de votre idée. On vous répond sous 24h avec une
            première analyse gratuite.
          </p>

          {/* Infos contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { label: 'Email', value: 'sumud2097@proton.me' },
              { label: 'Téléphone', value: '+221 76 396 50 75' },
              { label: 'Adresse', value: 'Dakar, Sénégal' },
            ].map(info => (
              <div key={info.label}>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#E8622A',
                  marginBottom: '0.25rem',
                }}>
                  {info.label}
                </div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.95rem',
                  color: '#F5F0EB',
                }}>
                  {info.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Formulaire */}
        <motion.div {...fadeUp(0.2)}>
          {sent ? (
            <div style={{
              padding: '3rem',
              border: '1px solid #E8622A33',
              borderRadius: '4px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#F5F0EB',
                marginBottom: '0.75rem',
              }}>
                Message envoyé !
              </h3>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.9rem',
                color: '#6B6B6B',
              }}>
                On revient vers vous sous 24h.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Nom */}
              <div>
                <label style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6B6B6B',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}>
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#E8622A'}
                  onBlur={e => e.target.style.borderColor = '#1a1a1a'}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6B6B6B',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#E8622A'}
                  onBlur={e => e.target.style.borderColor = '#1a1a1a'}
                />
              </div>

              {/* Type de projet */}
              <div>
                <label style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6B6B6B',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}>
                  Type de projet
                </label>
                <select
                  name="project"
                  required
                  value={form.project}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor = '#E8622A'}
                  onBlur={e => e.target.style.borderColor = '#1a1a1a'}
                >
                  <option value="" disabled style={{ backgroundColor: '#111' }}>Sélectionner...</option>
                  <option value="site-vitrine" style={{ backgroundColor: '#111' }}>Site vitrine</option>
                  <option value="ecommerce" style={{ backgroundColor: '#111' }}>E-commerce</option>
                  <option value="web-app" style={{ backgroundColor: '#111' }}>Application web</option>
                  <option value="marketing" style={{ backgroundColor: '#111' }}>Marketing digital</option>
                  <option value="marketing" style={{ backgroundColor: '#111' }}>Automatisation IA</option>
                  <option value="autre" style={{ backgroundColor: '#111' }}>Autre</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6B6B6B',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = '#E8622A'}
                  onBlur={e => e.target.style.borderColor = '#1a1a1a'}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#0A0A0A',
                  backgroundColor: loading ? '#cf5524' : '#E8622A',
                  border: 'none',
                  padding: '1.1rem 2rem',
                  borderRadius: '2px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.2s ease',
                  width: '100%',
                }}
                onMouseEnter={e => { if (!loading) e.target.style.backgroundColor = '#cf5524' }}
                onMouseLeave={e => { if (!loading) e.target.style.backgroundColor = '#E8622A' }}
              >
                {loading ? 'Envoi en cours...' : 'Envoyer le message →'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}