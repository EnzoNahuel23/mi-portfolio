import './Footer.css'

function Footer() {

  return (
    <>
      <section className='footer'>
        <div className='footer-text'>
          <h2>Enzo Nahuel Carnero</h2>
        </div>
        <div className="redes">
          <a href="https://www.linkedin.com/in/enzo-nahuel-carnero-752051200/" target="_blank" rel="noopener noreferrer">
            <img src="/logo-linkedin.png" alt="LinkedIn" className="redes-img"/>
            <p>LinkedIn</p>
          </a>
          <a href="https://github.com/EnzoNahuel23" target="_blank" rel="noopener noreferrer">
            <img src="/logo-github.png" alt="GitHub" className="redes-img"/>
            <p>GitHub</p>
          </a>
        </div>
      </section>
    </>
  )
}        


export default Footer