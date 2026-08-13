const services = [
  {
    title: "Obras Civiles e Infraestructura Pública",
    text: "Pavimentación, espacios públicos, obras urbanas, redes y soluciones de infraestructura para mandantes públicos.",
  },
  {
    title: "Proyectos para Privados",
    text: "Ejecución de infraestructura y obras civiles para clientes particulares, empresas y desarrollos locales.",
  },
  {
    title: "Gestión y Ejecución Técnica Integrada",
    text: "Planificación, coordinación de recursos, control de avances y seguimiento técnico en terreno.",
  },
];

const integrityPrinciples = [
  "Principios éticos y anticorrupción aplicados a licitaciones, contratos y ejecución de obras.",
  "Transparencia en la relación con organismos del Estado, municipalidades, privados y proveedores.",
  "Cumplimiento normativo, trazabilidad documental y conducta responsable en cada etapa del proyecto.",
];

const recentWorks = [
  {
    name: "Mejoramiento de infraestructura vial",
    place: "Angol",
    detail: "Obra referencial para completar con mandante, año y alcance definitivo.",
  },
  {
    name: "Conservación de espacios públicos",
    place: "Renaico",
    detail: "Ficha inicial preparada para incorporar fotografías y documentación.",
  },
  {
    name: "Obras civiles de apoyo comunitario",
    place: "Los Sauces",
    detail: "Registro editable para antecedentes técnicos y administrativos.",
  },
  {
    name: "Ejecución de infraestructura local",
    place: "Provincia de Malleco",
    detail: "Proyecto por documentar con información final de la empresa.",
  },
];

const coverage = ["Angol", "Renaico", "Los Sauces", "Provincia de Malleco"];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Encabezado principal">
        <a className="brand" href="#inicio" aria-label="Walter A. Garrido Ríos">
          <span className="brand-mark">WG</span>
          <span>WALTER A. GARRIDO RÍOS</span>
        </a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#mision">Misión</a>
          <a href="#integridad">Integridad</a>
          <a href="#trabajos">Trabajos</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Constructora de obras civiles</p>
          <h1>Construcción y Obras Civiles con 30 Años de Trayectoria en Malleco.</h1>
          <p className="hero-lead">
            Compromiso, rigor técnico y experiencia al servicio de nuestra
            comunidad y clientes. Desde Angol para toda la provincia.
          </p>
          <div className="hero-actions" aria-label="Acciones principales">
            <a className="primary-action" href="#integridad">
              Programa de Integridad
            </a>
            <a className="secondary-action" href="#contacto">
              Contactar
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Imagen corporativa de obras civiles">
          <img
            src="/hero-sketch.png"
            alt="Bosquejo arquitectónico a mano alzada de un edificio moderno de baja altura"
          />
        </div>
      </section>

      <section className="metrics" aria-label="Resumen de trayectoria">
        <div>
          <strong>30 años</strong>
          <span>trayectoria en obras civiles</span>
        </div>
        <div>
          <strong>Angol</strong>
          <span>origen y base territorial</span>
        </div>
        <div>
          <strong>Estado y privados</strong>
          <span>experiencia para distintos mandantes</span>
        </div>
        <div>
          <strong>Malleco</strong>
          <span>cobertura provincial</span>
        </div>
      </section>

      <section className="section two-column" id="mision">
        <div>
          <p className="eyebrow">Misión y Visión</p>
          <h2>Experiencia local para ejecutar infraestructura con responsabilidad.</h2>
        </div>
        <div className="statement-stack">
          <article>
            <h3>Misión</h3>
            <p>
              Construir y ejecutar obras civiles de infraestructura que respondan
              a las necesidades de la ciudadanía, del Estado y de clientes
              particulares en nuestra zona, respaldados por 30 años de
              experiencia local. Entregamos soluciones de calidad, seguridad y
              eficiencia, con un compromiso ético, riguroso y transparente en
              cada proyecto.
            </p>
          </article>
          <article>
            <h3>Visión</h3>
            <p>
              Ser una constructora de destacada reputación y plena confianza en
              Angol y la provincia de Malleco, reconocida por ejecutar con
              responsabilidad y excelencia obras en comunas como Angol, Renaico
              y Los Sauces, manteniendo un compromiso permanente con la
              comunidad, el entorno local y sus mandantes.
            </p>
          </article>
        </div>
      </section>

      <section className="section muted" id="integridad">
        <div className="section-heading">
          <p className="eyebrow">Programa de Integridad</p>
          <h2>Ética, transparencia y cumplimiento normativo en licitaciones y proyectos.</h2>
        </div>
        <div className="integrity-layout">
          <article className="integrity-panel">
            <h3>Declaración de principios</h3>
            <ul className="check-list">
              {integrityPrinciples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="integrity-panel accent-panel">
            <h3>Canal de integridad</h3>
            <p>
              Espacio reservado para denuncias, consultas o reportes vinculados
              a ética, conflictos de interés, transparencia y cumplimiento.
            </p>
            <a className="secondary-action light-action" href="#contacto">
              Consultas de integridad
            </a>
            <a className="text-link" href="#integridad" aria-disabled="true">
              PDF del programa por incorporar
            </a>
          </article>
        </div>
      </section>

      <section className="section" id="trabajos">
        <div className="section-heading">
          <p className="eyebrow">Últimos Trabajos Realizados</p>
          <h2>Registro inicial de obras para completar con antecedentes y fotografías.</h2>
        </div>
        <div className="works-grid">
          {recentWorks.map((work) => (
            <article className="work-card" key={`${work.name}-${work.place}`}>
              <div className="work-photo" aria-hidden="true" />
              <div className="work-body">
                <span>{work.place}</span>
                <h3>{work.name}</h3>
                <p>{work.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="territory" aria-label="Cobertura territorial">
        <div className="territory-inner">
          <p className="eyebrow">Cobertura</p>
          <h2>Atención y cobertura en Angol, Renaico, Los Sauces y toda la provincia de Malleco.</h2>
          <div className="coverage-list" aria-label="Comunas de cobertura">
            {coverage.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted" id="servicios">
        <div className="section-heading">
          <p className="eyebrow">Servicios y Capacidades</p>
          <h2>Soluciones para obras públicas, proyectos privados y ejecución técnica integrada.</h2>
        </div>
        <div className="capability-grid service-grid">
          {services.map((item) => (
            <article className="capability-card" key={item.title}>
              <span className="card-rule" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contacto">
        <div>
          <p className="eyebrow">Contacto y Ubicación</p>
          <h2>Datos directos para consultas, antecedentes y licitaciones.</h2>
          <div className="contact-list">
            <p>
              <strong>Teléfono:</strong> Por confirmar
            </p>
            <p>
              <strong>Correo corporativo:</strong> Por confirmar
            </p>
            <p>
              <strong>Dirección:</strong> Angol, Región de La Araucanía
            </p>
            <p>
              <strong>Cobertura:</strong> Angol, Renaico, Los Sauces y toda la
              provincia de Malleco.
            </p>
          </div>
          <div className="hero-actions">
            <a className="primary-action" href="#contacto" aria-disabled="true">
              WhatsApp por agregar
            </a>
            <a className="secondary-action" href="#contacto" aria-disabled="true">
              Correo por agregar
            </a>
          </div>
        </div>

        <form className="contact-form" aria-label="Formulario simple de consulta">
          <label>
            Nombre
            <input type="text" name="nombre" placeholder="Nombre y apellido" />
          </label>
          <label>
            Correo o teléfono
            <input type="text" name="contacto" placeholder="Dato de contacto" />
          </label>
          <label>
            Consulta
            <textarea name="consulta" placeholder="Escriba su consulta" rows={5} />
          </label>
          <button type="button">Enviar consulta</button>
        </form>
      </section>

      <section className="closing">
        <p className="eyebrow">WALTER A. GARRIDO RÍOS</p>
        <h2>Construcción responsable al servicio del desarrollo local.</h2>
        <p>
          Página preparada para seguir incorporando certificados, documentos de
          integridad, fotografías de obras, datos administrativos y contacto
          definitivo de la empresa.
        </p>
      </section>
    </main>
  );
}
