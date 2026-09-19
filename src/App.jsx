import { useEffect, useRef, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Grupo JIM Saúde e Segurança",
    description: "Site institucional profissional com foco em autoridade, serviços e geração de contato para uma empresa de SST.",
    url: "https://jimsst.com.br/",
    domain: "jimsst.com.br",
    accent: "orange",
    tech: ["React", "Vite", "Lucide"],
  },
  {
    number: "02",
    title: "Vilma Concept",
    description: "Experiência digital para posicionamento de uma Hair Artist, com estética editorial e apresentação de portfólio.",
    url: "https://vilma-concept.vercel.app/#portfolio",
    domain: "vilma-concept.vercel.app",
    accent: "pink",
    tech: ["React", "Vite", "Tailwind"],
  },
  {
    number: "03",
    title: "Netinho da Vila",
    description: "Presença digital para serviços de drywall e gesso, com linguagem visual direta e foco em orçamento.",
    url: "https://netinho-vila-decoracoes-gesso.vercel.app/",
    domain: "netinho-vila-decoracoes-gesso",
    accent: "cream",
    tech: ["HTML5", "CSS3", "Responsivo"],
  },
  {
    number: "04",
    title: "Artistas de Rua de OZ",
    description: "Site institucional para associação cultural de Osasco, valorizando projetos, identidade e participação da comunidade.",
    url: "https://artistas-de-rua-oz.vercel.app/",
    domain: "artistas-de-rua-oz.vercel.app",
    accent: "yellow",
    tech: ["React", "Vite", "JavaScript"],
  },
];

const technologies = [
  { name: "HTML5 / CSS3", percentage: 100, note: "Base visual e estrutura web" },
  { name: "React", percentage: 75, note: "Interfaces componentizadas" },
  { name: "Vite", percentage: 75, note: "Build e desenvolvimento" },
  { name: "JavaScript", percentage: 75, note: "Interações e lógica" },
  { name: "Tailwind CSS", percentage: 25, note: "Estilização utilitária" },
  { name: "Lucide", percentage: 25, note: "Ícones de interface" },
];

function BrowserPreview({ project }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={"project-preview project-preview-" + project.accent}>
      <div className="browser-toolbar">
        <div className="browser-dots"><i /><i /><i /></div>
        <div className="browser-address">{project.domain}</div>
        <span className="live-badge">LIVE</span>
      </div>

      <div className={"preview-viewport " + (loaded ? "is-loaded" : "")}>
        <div className="preview-fallback">
          <span>ABRINDO PROJETO</span>
          <strong>{project.title}</strong>
        </div>

        <iframe
          title={"Preview de " + project.title}
          src={project.url}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          tabIndex="-1"
        />

        <div className="preview-shade" />
        <a
          className="preview-open"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"Abrir " + project.title}
        >
          ↗
        </a>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <BrowserPreview project={project} />
      <div className="project-body">
        <div className="project-top">
          <span>{project.number}</span>
          <span className="project-type">WEB / FRONT-END</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-row">
          {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
          Visitar projeto <span>↗</span>
        </a>
      </div>
    </article>
  );
}

function App() {
  const trackRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const moveCarousel = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".project-card");
    const width = card ? card.getBoundingClientRect().width : 420;
    track.scrollBy({ left: direction * (width + 20), behavior: "smooth" });
  };

  return (
    <div className="app">
      <div className="noise" aria-hidden="true" />

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#topo" aria-label="Jhonata Milani - início" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">&lt;/&gt;</span>
            <span>Jhonata<span className="brand-dot">.</span>dev</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span /><span /><span />
          </button>

          <nav className={"main-nav " + (menuOpen ? "is-open" : "")} aria-label="Navegação principal">
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
            <a href="#tecnologias" onClick={() => setMenuOpen(false)}>Tecnologias</a>
            <a className="nav-contact" href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
        </div>
      </header>

      <main id="topo">
        <section className="hero section-shell">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="status-dot" /> Desenvolvedor Front-end</div>
              <h1>
                Interfaces que parecem <span className="accent-orange">produto.</span><br />
                Código que entrega <span className="accent-green">resultado.</span>
              </h1>
              <p className="hero-text">
                Sou Jhonata Milani, desenvolvedor Front-end em formação e criador de experiências web
                modernas, responsivas e pensadas para resolver problemas reais.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projetos">Ver projetos <span>↓</span></a>
                <a className="button button-ghost" href="#contato">Falar comigo <span>↗</span></a>
              </div>
              <div className="hero-meta">
                <div><strong>04</strong><span>projetos em destaque</span></div>
                <div><strong>03+</strong><span>anos construindo na prática</span></div>
                <div><strong>∞</strong><span>vontade de aprender</span></div>
              </div>
            </div>

            <div className="hero-card-wrap reveal reveal-delay">
              <div className="glow glow-orange" />
              <div className="glow glow-green" />
              <div className="profile-card">
                <div className="card-topline"><span>DEV / 2026</span><span>AVAILABLE</span></div>
                <div className="profile-image-frame">
                  <img
                    src="https://raw.githubusercontent.com/Jhonata7/meu-portifolio-dev/main/img/profile.png"
                    alt="Jhonata Milani"
                  />
                  <span className="scan-line" />
                </div>
                <div className="profile-card-footer">
                  <div><strong>Jhonata Milani</strong><span>Front-end Developer</span></div>
                  <span className="profile-tag">BR</span>
                </div>
              </div>
              <div className="floating-chip chip-one">React</div>
              <div className="floating-chip chip-two">Vite</div>
              <div className="floating-chip chip-three">UI / UX</div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section-shell section-light">
          <div className="container split-grid">
            <div className="section-label reveal">01 / SOBRE</div>
            <div className="section-content reveal">
              <h2>Desenvolvo melhor quando existe um problema real para resolver.</h2>
              <p>Atualmente estou construindo minha trajetória como desenvolvedor Front-end, transformando estudos em projetos publicados e experiências reais para clientes, negócios e iniciativas locais.</p>
              <p>Meu foco está em interfaces claras, responsivas e funcionais, com atenção aos detalhes visuais, performance e experiência de uso.</p>
              <div className="about-pills">
                <span>Responsivo</span><span>Acessível</span><span>Componentizado</span><span>Deploy na Vercel</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="section-shell projects-section">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <div className="section-label">02 / PROJETOS</div>
                <h2>Agora as capas são os próprios projetos.</h2>
              </div>
              <div className="carousel-controls">
                <button className="carousel-btn" onClick={() => moveCarousel(-1)} aria-label="Projeto anterior">←</button>
                <button className="carousel-btn" onClick={() => moveCarousel(1)} aria-label="Próximo projeto">→</button>
              </div>
            </div>

            <div className="projects-track" ref={trackRef}>
              {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
            </div>
            <div className="carousel-hint"><span /> Arraste ou use as setas para navegar</div>
          </div>
        </section>

        <section id="tecnologias" className="section-shell section-light tech-section">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <div className="section-label">03 / TECNOLOGIAS</div>
                <h2>Stack que aparece nos projetos.</h2>
              </div>
              <p className="section-note">Percentual = presença da tecnologia na seleção dos 4 projetos destacados.</p>
            </div>

            <div className="tech-grid">
              {technologies.map((tech) => (
                <div className="tech-item reveal" key={tech.name}>
                  <div className="tech-title">
                    <span>{tech.name}</span>
                    <strong>{tech.percentage}%</strong>
                  </div>
                  <div className="progress"><span style={{ width: tech.percentage + "%" }} /></div>
                  <small>{tech.note}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section-shell contact-section">
          <div className="container contact-card reveal">
            <div>
              <div className="section-label">04 / CONTATO</div>
              <h2>Vamos construir algo<br /><span>bonito e útil.</span></h2>
            </div>
            <div className="contact-actions">
              <a href="https://github.com/Jhonata7" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/jhonatamilani/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href="https://wa.me/5511976857601" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <span>Jhonata Milani</span>
          <span>© 2026 — Feito com código, café e curiosidade.</span>
          <a href="#topo">Voltar ao topo ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;