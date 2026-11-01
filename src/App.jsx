import { useEffect, useRef, useState } from "react";

const PROFILE_IMG = "https://raw.githubusercontent.com/Jhonata7/meu-portifolio-dev/main/img/profile.jpg";
const GITHUB_URL = "https://github.com/Jhonata7";
const LINKEDIN_URL = "https://www.linkedin.com/in/jhonatamilani/";
const WHATSAPP_URL = "https://wa.me/5511976857601";
const EMAIL_URL = "mailto:jhonatamilani77@gmail.com";

const projects = [
  {
    number: "01",
    title: "Studio Pequeno Príncipe",
    description: {
      en: "Complete website for a school children's photography studio: a 20-theme interactive carousel, story catalog, school memory-book showcase and a WhatsApp contact flow built to turn visits into bookings.",
      pt: "Site completo para um estúdio de fotografia infantil escolar: carrossel interativo com 20 temas, catálogo de histórias, vitrine de cadernos de recordação e fluxo de contato por WhatsApp pensado para transformar visitas em orçamentos.",
    },
    outcome: {
      en: "In production for a real client — refined through 10+ design iterations with the studio owner.",
      pt: "Em produção para um cliente real — refinado em mais de 10 rodadas de ajustes de design com o dono do estúdio.",
    },
    url: "https://studio-pequeno-principe.vercel.app/",
    domain: "studio-pequeno-principe.vercel.app",
    accent: "yellow",
    tech: ["React", "Vite", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Grupo JIM Saúde e Segurança",
    description: {
      en: "Corporate website for an occupational health & safety company, designed to establish authority, present services clearly and generate quote requests.",
      pt: "Site institucional para uma empresa de saúde e segurança do trabalho, com foco em autoridade, apresentação clara de serviços e geração de pedidos de orçamento.",
    },
    outcome: {
      en: "Live on the company's own custom domain.",
      pt: "No ar no domínio próprio da empresa.",
    },
    url: "https://jimsst.com.br/",
    domain: "jimsst.com.br",
    accent: "orange",
    tech: ["React", "Vite", "Lucide"],
  },
  {
    number: "03",
    title: "Vilma Concept",
    description: {
      en: "Editorial-style digital experience for a hair artist: portfolio presentation, personal branding and a visual language built to position her as a premium professional.",
      pt: "Experiência digital em estilo editorial para uma Hair Artist: apresentação de portfólio, marca pessoal e linguagem visual para posicioná-la como profissional premium.",
    },
    outcome: {
      en: "Live portfolio the artist uses to showcase her work to clients.",
      pt: "Portfólio no ar, usado pela artista para apresentar seu trabalho às clientes.",
    },
    url: "https://vilma-concept.vercel.app/#portfolio",
    domain: "vilma-concept.vercel.app",
    accent: "pink",
    tech: ["React", "Vite", "Tailwind CSS"],
  },
  {
    number: "04",
    title: "Netinho da Vila",
    description: {
      en: "Direct-response website for drywall and plaster services, with straightforward copy and layout decisions made to drive quote requests.",
      pt: "Site de resposta direta para serviços de drywall e gesso, com texto e layout objetivos, pensados para gerar pedidos de orçamento.",
    },
    outcome: {
      en: "Live lead-generation site for a local services business.",
      pt: "Site de geração de contatos no ar para um negócio local de serviços.",
    },
    url: "https://netinho-vila-decoracoes-gesso.vercel.app/",
    domain: "netinho-vila-decoracoes-gesso",
    accent: "cream",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    number: "05",
    title: "Artistas de Rua de OZ",
    description: {
      en: "Institutional website for a cultural association in Osasco, highlighting its projects, identity and community participation.",
      pt: "Site institucional para uma associação cultural de Osasco, valorizando projetos, identidade e participação da comunidade.",
    },
    outcome: {
      en: "Live site supporting the association's public outreach.",
      pt: "Site no ar apoiando a divulgação pública da associação.",
    },
    url: "https://artistas-de-rua-oz.vercel.app/",
    domain: "artistas-de-rua-oz.vercel.app",
    accent: "green",
    tech: ["React", "Vite", "JavaScript"],
  },
];

const technologies = [
  { name: "React", tag: { en: "Core stack", pt: "Stack principal" }, note: { en: "Component-based interfaces", pt: "Interfaces componentizadas" } },
  { name: "JavaScript (ES6+)", tag: { en: "Core stack", pt: "Stack principal" }, note: { en: "Interactions and application logic", pt: "Interações e lógica da aplicação" } },
  { name: "HTML5 / CSS3", tag: { en: "Core stack", pt: "Stack principal" }, note: { en: "Semantic structure and styling", pt: "Estrutura semântica e estilização" } },
  { name: "Tailwind CSS", tag: { en: "Styling", pt: "Estilização" }, note: { en: "Utility-first, responsive design", pt: "Estilização utilitária e responsiva" } },
  { name: "Vite", tag: { en: "Tooling", pt: "Ferramentas" }, note: { en: "Build and development environment", pt: "Build e ambiente de desenvolvimento" } },
  { name: "Git & GitHub", tag: { en: "Workflow", pt: "Fluxo de trabalho" }, note: { en: "Version control and deployment", pt: "Versionamento e publicação" } },
];

const t = {
  en: {
    nav: { about: "About", projects: "Projects", stack: "Stack", contact: "Contact ↗" },
    menuLabel: "Open menu",
    role: "Front-End Developer",
    location: "São Paulo, Brazil (UTC−3)",
    heroTitleA: "Interfaces that look like",
    heroTitleAccentA: "products.",
    heroTitleB: "Code that delivers",
    heroTitleAccentB: "results.",
    heroText: "I'm Jhonata Milani, a Front-End Developer who builds modern, responsive websites for real clients — from first sketch to production deploy. Every project below is live and in use.",
    viewProjects: "View projects",
    getInTouch: "Get in touch",
    downloadResume: "Download résumé (PDF)",
    stat1: "live projects for real clients",
    stat2: "years of hands-on building",
    stat3: "open to remote roles — Brazil & worldwide",
    cardTopA: "DEV / 2026",
    cardTopB: "OPEN TO WORK",
    cardRole: "Front-end Developer",
    aboutLabel: "01 / ABOUT",
    aboutTitle: "I do my best work when there's a real problem to solve.",
    aboutP1: "I'm a freelance Front-End Developer and a Systems Analysis & Development student. I turn studies into shipped products: institutional websites, portfolios and lead-generation pages for businesses, professionals and local initiatives.",
    aboutP2: "My focus is clear, responsive, functional interfaces — with attention to visual detail, performance and user experience, and direct communication with the client at every step.",
    aboutP3: "Native Portuguese speaker, based in Brazil. My English is basic and improving — I'm comfortable with written, async communication and I work with clients remotely every day.",
    pills: ["Responsive", "Accessible", "Component-based", "Deployed on Vercel", "Remote-friendly", "Async communication"],
    projectsLabel: "02 / PROJECTS",
    projectsTitle: "Selected work — live, not mockups.",
    prevProject: "Previous project",
    nextProject: "Next project",
    carouselHint: "Drag or use the arrows to navigate",
    projectType: "WEB / FRONT-END",
    opening: "OPENING PROJECT",
    visitProject: "Visit live project",
    outcomeLabel: "Result:",
    stackLabel: "03 / STACK",
    stackTitle: "The stack behind the projects.",
    stackNote: "No percentage bars — this is the toolkit I actually ship client work with, project after project.",
    contactLabel: "04 / CONTACT",
    contactTitleA: "Let's build something",
    contactTitleAccent: "useful.",
    contactText: "Open to full-time remote roles (Brazil & international) and freelance projects. Fastest reply: WhatsApp or email.",
    resumeEn: "Résumé (EN) ↓",
    resumePt: "Currículo (PT) ↓",
    footerNote: "© 2026 — Built with code, coffee and curiosity.",
    backToTop: "Back to top ↑",
  },
  pt: {
    nav: { about: "Sobre", projects: "Projetos", stack: "Tecnologias", contact: "Contato ↗" },
    menuLabel: "Abrir menu",
    role: "Desenvolvedor Front-end",
    location: "São Paulo, Brasil (UTC−3)",
    heroTitleA: "Interfaces que parecem",
    heroTitleAccentA: "produto.",
    heroTitleB: "Código que entrega",
    heroTitleAccentB: "resultado.",
    heroText: "Sou Jhonata Milani, desenvolvedor Front-end que constrói sites modernos e responsivos para clientes reais — do primeiro rascunho ao deploy em produção. Todos os projetos abaixo estão no ar e em uso.",
    viewProjects: "Ver projetos",
    getInTouch: "Falar comigo",
    downloadResume: "Baixar currículo (PDF)",
    stat1: "projetos no ar para clientes reais",
    stat2: "anos construindo na prática",
    stat3: "aberto a vagas remotas — Brasil e exterior",
    cardTopA: "DEV / 2026",
    cardTopB: "DISPONÍVEL",
    cardRole: "Front-end Developer",
    aboutLabel: "01 / SOBRE",
    aboutTitle: "Desenvolvo melhor quando existe um problema real para resolver.",
    aboutP1: "Sou desenvolvedor Front-end freelancer e estudante de Análise e Desenvolvimento de Sistemas. Transformo estudo em produto publicado: sites institucionais, portfólios e páginas de geração de contatos para empresas, profissionais e iniciativas locais.",
    aboutP2: "Meu foco está em interfaces claras, responsivas e funcionais, com atenção aos detalhes visuais, performance e experiência de uso — e comunicação direta com o cliente em cada etapa.",
    aboutP3: "Falante nativo de português, baseado no Brasil. Meu inglês é básico e está em evolução — tenho facilidade com comunicação escrita e assíncrona e atendo clientes remotamente todos os dias.",
    pills: ["Responsivo", "Acessível", "Componentizado", "Deploy na Vercel", "Remoto", "Comunicação assíncrona"],
    projectsLabel: "02 / PROJETOS",
    projectsTitle: "Trabalhos selecionados — no ar, não é mockup.",
    prevProject: "Projeto anterior",
    nextProject: "Próximo projeto",
    carouselHint: "Arraste ou use as setas para navegar",
    projectType: "WEB / FRONT-END",
    opening: "ABRINDO PROJETO",
    visitProject: "Visitar projeto",
    outcomeLabel: "Resultado:",
    stackLabel: "03 / TECNOLOGIAS",
    stackTitle: "A stack por trás dos projetos.",
    stackNote: "Sem barrinha de porcentagem — estas são as ferramentas com que eu realmente entrego o trabalho dos clientes, projeto após projeto.",
    contactLabel: "04 / CONTATO",
    contactTitleA: "Vamos construir algo",
    contactTitleAccent: "útil.",
    contactText: "Aberto a vagas remotas em tempo integral (Brasil e exterior) e a projetos freelance. Resposta mais rápida: WhatsApp ou e-mail.",
    resumeEn: "Résumé (EN) ↓",
    resumePt: "Currículo (PT) ↓",
    footerNote: "© 2026 — Feito com código, café e curiosidade.",
    backToTop: "Voltar ao topo ↑",
  },
};

function BrowserPreview({ project, lang, labels }) {
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
          <span>{labels.opening}</span>
          <strong>{project.title}</strong>
        </div>

        <iframe
          title={"Preview — " + project.title}
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
          aria-label={labels.visitProject + " — " + project.title}
        >
          ↗
        </a>
      </div>
    </div>
  );
}

function ProjectCard({ project, lang, labels }) {
  return (
    <article className="project-card">
      <BrowserPreview project={project} lang={lang} labels={labels} />
      <div className="project-body">
        <div className="project-top">
          <span>{project.number}</span>
          <span className="project-type">{labels.projectType}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description[lang]}</p>
        <p className="project-outcome"><strong>{labels.outcomeLabel}</strong> {project.outcome[lang]}</p>
        <div className="tech-row">
          {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
          {labels.visitProject} <span>↗</span>
        </a>
      </div>
    </article>
  );
}

function App() {
  const trackRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState(() => {
    try {
      return window.localStorage.getItem("portfolio-lang") || "en";
    } catch {
      return "en";
    }
  });

  const labels = t[lang];

  useEffect(() => {
    try {
      window.localStorage.setItem("portfolio-lang", lang);
    } catch { /* ignore */ }
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = lang === "pt"
      ? "Jhonata Milani — Desenvolvedor Front-end"
      : "Jhonata Milani — Front-End Developer";
  }, [lang]);

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className="noise" aria-hidden="true" />

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#topo" aria-label="Jhonata Milani" onClick={closeMenu}>
            <span className="brand-mark">&lt;/&gt;</span>
            <span>Jhonata<span className="brand-dot">.</span>dev</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={labels.menuLabel}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span /><span /><span />
          </button>

          <nav className={"main-nav " + (menuOpen ? "is-open" : "")} aria-label="Main navigation">
            <a href="#sobre" onClick={closeMenu}>{labels.nav.about}</a>
            <a href="#projetos" onClick={closeMenu}>{labels.nav.projects}</a>
            <a href="#tecnologias" onClick={closeMenu}>{labels.nav.stack}</a>
            <a className="nav-contact" href="#contato" onClick={closeMenu}>{labels.nav.contact}</a>
            <div className="lang-toggle" role="group" aria-label="Language / Idioma">
              <button type="button" className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")}>EN</button>
              <button type="button" className={lang === "pt" ? "is-active" : ""} onClick={() => setLang("pt")}>PT</button>
            </div>
          </nav>
        </div>
      </header>

      <main id="topo">
        <section className="hero section-shell">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="status-dot" /> {labels.role} · {labels.location}</div>
              <h1>
                {labels.heroTitleA} <span className="accent-orange">{labels.heroTitleAccentA}</span><br />
                {labels.heroTitleB} <span className="accent-green">{labels.heroTitleAccentB}</span>
              </h1>
              <p className="hero-text">{labels.heroText}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projetos">{labels.viewProjects} <span>↓</span></a>
                <a className="button button-ghost" href="#contato">{labels.getInTouch} <span>↗</span></a>
                <a className="button button-ghost" href={lang === "pt" ? "/curriculo-pt.pdf" : "/resume-en.pdf"} download>{labels.downloadResume}</a>
              </div>
              <div className="hero-meta">
                <div><strong>05</strong><span>{labels.stat1}</span></div>
                <div><strong>03+</strong><span>{labels.stat2}</span></div>
                <div><strong>Remote</strong><span>{labels.stat3}</span></div>
              </div>
            </div>

            <div className="hero-card-wrap reveal reveal-delay">
              <div className="glow glow-orange" />
              <div className="glow glow-green" />
              <div className="profile-card">
                <div className="card-topline"><span>{labels.cardTopA}</span><span>{labels.cardTopB}</span></div>
                <div className="profile-image-frame">
                  <img src={PROFILE_IMG} alt="Jhonata Milani" />
                  <span className="scan-line" />
                </div>
                <div className="profile-card-footer">
                  <div><strong>Jhonata Milani</strong><span>{labels.cardRole}</span></div>
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
            <div className="section-label reveal">{labels.aboutLabel}</div>
            <div className="section-content reveal">
              <h2>{labels.aboutTitle}</h2>
              <p>{labels.aboutP1}</p>
              <p>{labels.aboutP2}</p>
              <p>{labels.aboutP3}</p>
              <div className="about-pills">
                {labels.pills.map((pill) => <span key={pill}>{pill}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="section-shell projects-section">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <div className="section-label">{labels.projectsLabel}</div>
                <h2>{labels.projectsTitle}</h2>
              </div>
              <div className="carousel-controls">
                <button className="carousel-btn" onClick={() => moveCarousel(-1)} aria-label={labels.prevProject}>←</button>
                <button className="carousel-btn" onClick={() => moveCarousel(1)} aria-label={labels.nextProject}>→</button>
              </div>
            </div>

            <div className="projects-track" ref={trackRef}>
              {projects.map((project) => <ProjectCard key={project.number} project={project} lang={lang} labels={labels} />)}
            </div>
            <div className="carousel-hint"><span /> {labels.carouselHint}</div>
          </div>
        </section>

        <section id="tecnologias" className="section-shell section-light tech-section">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <div className="section-label">{labels.stackLabel}</div>
                <h2>{labels.stackTitle}</h2>
              </div>
              <p className="section-note">{labels.stackNote}</p>
            </div>

            <div className="tech-grid">
              {technologies.map((tech) => (
                <div className="tech-item reveal" key={tech.name}>
                  <div className="tech-title">
                    <span>{tech.name}</span>
                    <strong>{tech.tag[lang]}</strong>
                  </div>
                  <small>{tech.note[lang]}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section-shell contact-section">
          <div className="container contact-card reveal">
            <div>
              <div className="section-label">{labels.contactLabel}</div>
              <h2>{labels.contactTitleA}<br /><span>{labels.contactTitleAccent}</span></h2>
              <p className="contact-text">{labels.contactText}</p>
            </div>
            <div className="contact-actions">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
              <a href={EMAIL_URL}>Email ↗</a>
              <a href="/resume-en.pdf" download>{labels.resumeEn}</a>
              <a href="/curriculo-pt.pdf" download>{labels.resumePt}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <span>Jhonata Milani</span>
          <span>{labels.footerNote}</span>
          <a href="#topo">{labels.backToTop}</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
