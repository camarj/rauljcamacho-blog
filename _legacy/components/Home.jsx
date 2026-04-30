function Home({ navigate }) {
  return (
    <main>
      <section className="home-hero shell">
        <Reveal>
          <div className="eyebrow">rauljcamacho.online · Notas</div>
        </Reveal>
        <Reveal delay={80}>
          <h1>Cuaderno de campo sobre IA, tecnología y el oficio de construir.</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="lede">
            Escribo desde el lado donde se ensucia el código. Ensayos, postales y notas
            crudas sobre cómo está cambiando la forma en que trabajamos con máquinas
            que ya casi piensan.
          </p>
        </Reveal>
      </section>

      <section className="post-list shell">
        {POSTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60} className="post-row">
            <div>
              <div className="date">{p.date}</div>
              <div className="meta-tags">
                {p.tags.map((t) => <span key={t} className="pill">{t}</span>)}
              </div>
            </div>

            <div>
              <a
                href="#"
                className="post-title"
                onClick={(e) => { e.preventDefault(); navigate("post", p.slug); }}
              >
                {p.title}
              </a>
              <p className="post-excerpt">{p.excerpt}</p>
              <a
                href="#"
                className="read-more"
                onClick={(e) => { e.preventDefault(); navigate("post", p.slug); }}
              >
                Leer artículo →
              </a>
            </div>

            <Halftone
              src={p.image}
              alt={p.title}
              className="thumb"
              onClick={() => navigate("post", p.slug)}
            />
          </Reveal>
        ))}
      </section>
    </main>
  );
}

Object.assign(window, { Home });
