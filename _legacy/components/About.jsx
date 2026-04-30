function About() {
  return (
    <main className="about-wrap">
      <Reveal>
        <span className="eyebrow">Sobre mí</span>
      </Reveal>
      <Reveal delay={60}>
        <h1>Construyo cosas que piensan, escribo sobre cosas que cambian.</h1>
      </Reveal>

      <Reveal delay={120}>
        <Halftone
          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80"
          alt="Foto de Raul"
          className="about-photo"
        />
      </Reveal>

      <Reveal delay={180}>
        <div className="about-body">
          <p>
            Soy <strong>Raul J. Camacho</strong>. Llevo más de una década construyendo
            software, los últimos años casi todo el tiempo cerca de modelos de
            lenguaje, agentes y la pequeña revolución silenciosa que están provocando
            en el oficio.
          </p>
          <p>
            Este blog es, sobre todo, un cuaderno: un sitio donde dejo notas mientras
            corro, postales desde proyectos que aún no terminan, y la ocasional
            opinión incómoda. Si algo de lo que lees te parece útil, escríbeme. Si te
            parece equivocado, escríbeme también — la conversación es lo único que
            consistentemente me ayuda a pensar mejor.
          </p>
          <p>
            Vivo entre Madrid y la línea de comandos. Cuando no estoy escribiendo
            código o ensayos, estoy probablemente caminando, leyendo cosas que no
            tienen nada que ver con tecnología, o intentando entender por qué el café
            del barrio sabe distinto los martes.
          </p>
          <p>
            Puedes encontrarme en <a href="#" style={{ borderBottom: "1px solid currentColor" }}>Twitter</a>,
            en <a href="#" style={{ borderBottom: "1px solid currentColor" }}>GitHub</a>, o por
            correo en <a href="#" style={{ borderBottom: "1px solid currentColor" }}>hola@rauljcamacho.online</a>.
          </p>
        </div>
      </Reveal>
    </main>
  );
}

Object.assign(window, { About });
