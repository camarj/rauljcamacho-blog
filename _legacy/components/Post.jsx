// TOC scroll-spy
function useScrollSpy(ids, offset = 100) {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top - offset <= 0) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join("|"), offset]);
  return active;
}

function Post({ slug, navigate }) {
  const post = POSTS.find((p) => p.slug === slug) || POSTS[0];
  const sections = [
    { id: "intro", label: "Introducción" },
    { id: "donde-vamos", label: "Hacia dónde vamos" },
    { id: "primeros-tropiezos", label: "Primeros tropiezos" },
    { id: "navegar", label: "Navegar este momento" },
    { id: "conclusion", label: "Conclusión" },
  ];
  const active = useScrollSpy(sections.map((s) => s.id), 120);

  const [copied, setCopied] = React.useState(false);
  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${post.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  return (
    <main>
      <article>
        <header className="post-header shell">
          <Reveal>
            <span className="pill">{post.date}</span>
          </Reveal>
          <Reveal delay={60}>
            <h1>{post.title}</h1>
          </Reveal>
        </header>

        <Reveal delay={120}>
          <Halftone
            src={post.image}
            alt={post.title}
            className="post-hero-img shell"
          />
        </Reveal>

        <div className="post-byline shell">
          <div className="author">
            Escrito por <span className="pill" style={{ marginLeft: 6 }}>{post.author}</span>
          </div>
          <div className="tags">
            {post.tags.map((t) => <span key={t} className="pill">{t}</span>)}
          </div>
        </div>

        <Reveal>
          <p className="post-intro">{post.excerpt}</p>
        </Reveal>

        <div className="post-body-wrap">
          <aside className="toc">
            <div className="toc-title">Contenido</div>
            <ol>
              {sections.map((s) => (
                <li
                  key={s.id}
                  className={active === s.id ? "active" : ""}
                  onClick={() => scrollTo(s.id)}
                >
                  <span>{s.label}</span>
                  <span className="num"></span>
                </li>
              ))}
            </ol>
          </aside>

          <div className="post-body">
            <p id="intro">
              Llevo seis meses construyendo con la última generación de modelos en
              producción, y la sensación dominante no es la de estar en la cresta de
              una ola tecnológica. Es la de estar reaprendiendo a caminar. Cada
              certeza acumulada en una década de oficio se renegocia cada par de
              semanas, y eso es a la vez agotador y extrañamente vivificante.
            </p>
            <p>
              En estas notas quiero compartir lo que creo haber entendido — y, sobre
              todo, lo que ya no entiendo — sobre cómo construir software cuando el
              colaborador del otro lado del teclado responde, propone y, a veces,
              tiene mejores ideas que tú.
            </p>

            <h2 id="donde-vamos">Hacia dónde vamos</h2>
            <p>
              La narrativa pública sobre la IA oscila entre dos extremos: la
              superinteligencia inminente y el invierno que volverá pronto. La
              realidad, vista desde una terminal, es bastante menos cinematográfica.
              Los modelos son <a href="#">herramientas asombrosas con bordes filosos</a>,
              y la mayoría del trabajo serio consiste en aprender a sostenerlas sin
              cortarse.
            </p>
            <ol>
              <li>Los <code>frontier models</code> resuelven más, pero también esconden mejor sus errores.</li>
              <li>Los modelos pequeños son sorprendentemente competentes para casos acotados.</li>
              <li>La evaluación dejó de ser un paso final y se volvió la columna vertebral del producto.</li>
            </ol>
            <p>
              La conclusión que extraigo, después de muchos commits revertidos, es que
              el verdadero diferencial ya no está en qué modelo eliges, sino en cuánta
              fricción permites entre la sugerencia de la máquina y el criterio
              humano. Eso, paradójicamente, sigue siendo un problema de diseño, no de
              ingeniería.
            </p>

            <blockquote>
              La mejor herramienta no es la que te da la respuesta correcta más rápido.
              Es la que te ayuda a hacer mejores preguntas, una y otra vez, hasta
              que dejas de necesitarla.
              <cite>Conversación con un colega, 2026</cite>
            </blockquote>

            <p>
              Hay algo casi terapéutico en esa idea. Pasamos años buscando la
              herramienta perfecta y descubrimos que lo que buscábamos era, en
              realidad, una mejor versión de nuestras propias preguntas.
            </p>

            <h2 id="primeros-tropiezos">Primeros tropiezos</h2>
            <p>
              Las cosas que rompimos primero fueron las que dábamos por sentadas.
              <code>Logging</code>, <code>observability</code>, control de versiones para
              prompts, runbooks para alucinaciones. Cada uno de estos problemas tiene
              hoy un cottage industry alrededor, y ninguno está completamente
              resuelto.
            </p>

            <h2 id="navegar">Navegar este momento</h2>
            <p>
              Mi recomendación, después de equivocarme bastante, es la más aburrida
              posible: leer a la gente que está construyendo, ignorar a la que solo
              está prediciendo, y mantener un cuaderno de campo. Lo que parece obvio
              hoy va a parecer ingenuo en doce meses, y eso está bien. Es la primera
              vez en mucho tiempo que el oficio se siente abierto otra vez.
            </p>
            <p>
              Construir hoy es, en buena medida, escribir notas mientras corres.
              Estas son las mías.
            </p>

            <h2 id="conclusion">Conclusión</h2>
            <p>
              Si tuviera que dejarte con una sola idea: trata las herramientas nuevas
              con la misma seriedad con la que trataste a las viejas. Aprende sus
              hábitos, conoce sus humores, y no te enamores de ellas. Las máquinas
              que hoy nos sorprenden son, todavía, mucho más jóvenes que las
              preguntas que les estamos haciendo.
            </p>
          </div>
        </div>

        <div className="share-bar shell">
          <span className="label">Compartir este artículo</span>
          <div className="share-buttons">
            <a href="#" className="share-btn" aria-label="Compartir en Twitter">𝕏</a>
            <a href="#" className="share-btn" aria-label="Compartir en LinkedIn">in</a>
            <button
              className={`share-btn ${copied ? "copied" : ""}`}
              onClick={copyLink}
              aria-label="Copiar enlace"
              title={copied ? "Copiado" : "Copiar enlace"}
            >
              {copied ? "✓" : "⌘"}
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}

Object.assign(window, { Post });
