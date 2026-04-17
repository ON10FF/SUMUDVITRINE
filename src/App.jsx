import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import Expertise from './components/sections/Expertise'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  )
}