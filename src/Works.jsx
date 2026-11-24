import './Works.css'

function Works() {

  return (
    <>
      <section className='works'>
        <a href="https://coretech-hardware.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div className="work-item">
            <h2>Coretech</h2>
            <img src="/wrk1.png" alt="Trabajo Coretech" />
          </div>
        </a>
        <a href="https://oeste-vuelos.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div className="work-item">
            <h2>Oeste Vuelos</h2>
            <img src="/wrk2.png" alt="Oeste Vuelos" />
          </div>
        </a>
        <a>
          <div className="work-item">
            <h2>Proximamente</h2>
            <img src="/proximamente.png" alt="Trabajo Coretech" />
          </div>
        </a>
        <a>
          <div className="work-item">
            <h2>Proximamente</h2>
            <img src="/proximamente.png" alt="Trabajo Coretech" />
          </div>
        </a>        
      </section>
    </>
  )
} 

export default Works