# Portfolio Personal — Enzo Nahuel Carnero

Portfolio web personal desarrollado con **React** y **Vite**, diseñado para presentar mi perfil profesional, experiencia docente y académica, proyectos desplegados y stack tecnológico[cite: 2, 3, 4, 5, 9].

## Secciones del Portfolio

- **Hero (`Hero.jsx`):** Presentación principal con foto de perfil, nombre y título (*Técnico Universitario en Programación*)[cite: 3, 8].
- **Perfil Profesional / Experiencia (`Experience.jsx`):** Resumen de mi formación en la Universidad Nacional de Hurlingham (UNAHUR), trayectoria en trabajo colaborativo y experiencia como docente de Informática en nivel inicial y primario[cite: 3, 8].
- **Trabajos (`Works.jsx`):** Galería interactiva con enlaces directos a proyectos desplegados[cite: 4, 7, 8]:
  - **[Coretech](https://coretech-hardware.netlify.app/):** Tienda online de componentes de hardware, consolas y periféricos.
  - **[Oeste Vuelos](https://oeste-vuelos.netlify.app/):** Plataforma web de búsqueda y reserva de vuelos y servicios turísticos[cite: 4, 7].
  - *Espacios reservados para próximos lanzamientos*[cite: 4, 7].
- **Tecnologías (`Technologies.jsx`):** Detalle de herramientas y lenguajes manejados (**HTML5**, **CSS3**, **JavaScript**, **Python**, **React**, **Git** y **SQL**)[cite: 2, 5, 8].
- **Footer (`Footer.jsx`):** Enlaces directos a mis perfiles de **LinkedIn** y **GitHub**[cite: 6, 8].

## Tecnologías y herramientas del proyecto

- **Frontend:** React 19, Vite 8, JavaScript (ES6+), CSS3 modularizado por componente[cite: 7, 8, 9]
- **Calidad de código:** ESLint 10 (*Flat Config* con plugins de React Hooks y React Refresh)
- **Control de versiones y despliegue:** Git, GitHub, Netlify[cite: 2, 4, 7]

## Estructura del proyecto

```text
mi-portfolio/
├── public/                 # Recursos estáticos e imágenes (usuario, proyectos, logos)
│   ├── logo-github.png
│   ├── logo-linkedin.png
│   ├── logo.png
│   ├── proximamente.png
│   ├── usuario.png
│   ├── wrk1.png
│   └── wrk2.png
├── src/
│   ├── Experience.jsx / Experience.css
│   ├── Footer.jsx / Footer.css
│   ├── Hero.jsx / Hero.css
│   ├── Technologies.jsx / Technologies.css
│   ├── Works.jsx / Works.css
│   ├── index.css           # Estilos globales y fondo
│   └── main.jsx            # Punto de entrada y ensamblado de secciones
├── eslint.config.js        # Configuración de ESLint
├── index.html              # Documento HTML base
├── package.json            # Dependencias y scripts
└── vite.config.js          # Configuración de Vite
```

## Instalación y ejecución local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/EnzoNahuel23/mi-portfolio.git](https://github.com/EnzoNahuel23/mi-portfolio.git)
   cd mi-portfolio
