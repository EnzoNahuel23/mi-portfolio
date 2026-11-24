import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.jsx'
import Works from './Works.jsx'
import Footer from './Footer.jsx'
import Experience from './Experience.jsx'
import Technologies from './Technologies.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Experience />
    <Works />
    <Technologies />
    <Footer />
  </StrictMode>,
)
