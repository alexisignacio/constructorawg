const capabilities = [
  {
    title: "Obras civiles",
    text: "Ejecución de soluciones de infraestructura con planificación, control y presencia directa en terreno.",
  },
  {
    title: "Infraestructura pública y privada",
    text: "Trabajo orientado a mandantes del Estado, municipalidades y clientes privados de la zona.",
  },
  {
    title: "Gestión de proyectos",
    text: "Coordinación de recursos, cumplimiento de plazos y seguimiento riguroso de cada etapa de obra.",
  },
  {
    title: "Respuesta local",
    text: "Conocimiento operativo de Angol, Malleco y comunas cercanas para ejecutar con criterio territorial.",
  },
];

const commitments = [
  "Calidad en la ejecución",
  "Seguridad en terreno",
  "Eficiencia operativa",
  "Transparencia con el mandante",
];

const tenderItems = [
  "Presentación corporativa",
  "Experiencia local comprobable",
  "Declaración de misión y visión",
  "Capacidades técnicas de ejecución",
  "Antecedentes administrativos",
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Encabezado principal">
        <a className="brand" href="#inicio" aria-label="Walter A. Garrido Ríos">
          <span className="brand-mark">WG</span>
          <span>WALTER A. GARRIDO RÍOS</span>
        </a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#perfil">Perfil</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#mision">Misión</a>
          <a href="#licitaciones">Licitaciones</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Constructora de obras civiles</p>
          <h1>WALTER A. GARRIDO RÍOS</h1>
          <p className="hero-lead">
            Tres décadas de experiencia local construyendo y ejecutando obras
            civiles de infraestructura para la ciudadanía, el Estado y clientes
            privados en la provincia de Malleco.
          </p>
          <div className="hero-actions" aria-label="Acciones principales">
            <a className="primary-action" href="#licitaciones">
              Perfil para licitaciones
            </a>
            <a className="secondary-action" href="#mision">
              Ver misión y visión
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Imagen corporativa de obras civiles">
          <img src="/og.png" alt="Obra vial en entorno rural del sur de Chile" />
        </div>
      </section>

      <section className="metrics" aria-label="Resumen de trayectoria">
        <div>
          <strong>30+</strong>
          <span>años de experiencia local</span>
        </div>
        <div>
          <strong>Angol</strong>
          <span>base territorial</span>
        </div>
        <div>
          <strong>Malleco</strong>
          <span>alcance provincial</span>
        </div>
        <div>
          <strong>Público y privado</strong>
          <span>mandantes atendidos</span>
        </div>
      </section>

      <section className="section two-column" id="perfil">
        <div>
          <p className="eyebrow">Perfil institucional</p>
          <h2>Una constructora local para proyectos que exigen seriedad.</h2>
        </div>
        <div className="section-copy">
          <p>
            WALTER A. GARRIDO RÍOS desarrolla obras civiles de infraestructura
            con una mirada práctica, responsable y cercana al territorio. Su
            propuesta se sostiene en experiencia local, ejecución rigurosa y una
            relación transparente con cada mandante.
          </p>
          <p>
            La empresa orienta su trabajo a proyectos que necesitan orden,
            calidad y continuidad operativa, especialmente en procesos de
            licitación donde la confianza y el cumplimiento son determinantes.
          </p>
        </div>
      </section>

      <section className="section muted" id="experiencia">
        <div className="section-heading">
          <p className="eyebrow">Capacidades</p>
          <h2>Preparada para ejecutar infraestructura con criterio técnico.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.title}>
              <span className="card-rule" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section mission-vision" id="mision">
        <article>
          <p className="eyebrow">Misión</p>
          <h2>Construir con calidad, seguridad y eficiencia.</h2>
          <p>
            Construir y ejecutar obras civiles de infraestructura que respondan
            a las necesidades de la ciudadanía, del Estado y de clientes
            privados en nuestra zona, respaldados por tres décadas de
            experiencia local. Nos dedicamos a entregar soluciones de alta
            calidad, seguridad y eficiencia, manteniendo un compromiso ético,
            riguroso y transparente con el desarrollo de cada proyecto.
          </p>
        </article>
        <article>
          <p className="eyebrow">Visión</p>
          <h2>Ser una empresa de plena confianza en Malleco.</h2>
          <p>
            Ser una empresa constructora de destacada reputación y plena
            confianza en Angol y la provincia de Malleco, reconocida por haber
            ejecutado con responsabilidad y excelencia obras en comunas como
            Angol, Renaico y Los Sauces, demostrando en cada trabajo nuestro
            compromiso permanente con la comunidad y el entorno local.
          </p>
        </article>
      </section>

      <section className="territory" aria-label="Territorio de trabajo">
        <div className="territory-inner">
          <p className="eyebrow">Presencia territorial</p>
          <h2>Angol, Renaico, Los Sauces y la provincia de Malleco.</h2>
          <p>
            La experiencia acumulada en estas comunas permite responder con
            conocimiento del entorno, proveedores locales, condiciones de acceso
            y necesidades reales de la comunidad.
          </p>
        </div>
      </section>

      <section className="section" id="licitaciones">
        <div className="section-heading">
          <p className="eyebrow">Postulación a licitaciones</p>
          <h2>Una base clara para presentar antecedentes de empresa.</h2>
        </div>
        <div className="tender-layout">
          <div className="tender-panel">
            <h3>Compromisos de ejecución</h3>
            <ul className="check-list">
              {commitments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="tender-panel">
            <h3>Carpeta corporativa</h3>
            <ul className="document-list">
              {tenderItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="closing">
        <p className="eyebrow">WALTER A. GARRIDO RÍOS</p>
        <h2>Construcción responsable al servicio del desarrollo local.</h2>
        <p>
          Versión inicial preparada para seguir incorporando obras ejecutadas,
          datos de contacto, documentación administrativa y material fotográfico
          propio de la empresa.
        </p>
      </section>
    </main>
  );
}
