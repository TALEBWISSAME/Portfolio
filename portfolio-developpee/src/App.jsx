import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Skills from './sections/Skills'
import Journey from './sections/Journey'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import BackgroundScene from './components/BackgroundScene'

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <BackgroundScene />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
