import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="App">
      <Navigation scrolled={scrolled} />
      <main className="app-shell">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
