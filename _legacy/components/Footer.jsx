function Footer() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState({ kind: "idle", msg: "" });
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus({ kind: "err", msg: "Escribe un correo" });
      return;
    }
    if (!isEmail(email)) {
      setStatus({ kind: "err", msg: "Ese correo no es válido" });
      return;
    }
    setStatus({ kind: "ok", msg: "¡Gracias! Revisa tu bandeja para confirmar." });
    setEmail("");
  };

  const cols = [
    { title: "Contenido", links: ["Artículos", "Temas", "Archivo", "RSS"] },
    { title: "Sobre", links: ["Sobre mí", "Newsletter", "Contacto"] },
    { title: "Social", links: ["Twitter / X", "GitHub", "LinkedIn"] },
  ];

  return (
    <footer className="footer shell">
      <div className="newsletter">
        <div>
          <h3>Suscríbete al newsletter</h3>
          <p>Una carta corta cada quince días sobre IA, desarrollo y cómo cambia la forma de trabajar. Sin spam.</p>
        </div>
        <div>
          <form onSubmit={submit} noValidate>
            <input
              type="email"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus({ kind: "idle", msg: "" }); }}
              className={status.kind === "err" ? "error" : ""}
              aria-label="Correo electrónico"
            />
            <button type="submit" className="btn btn-primary">Suscribirme</button>
          </form>
          {status.msg && (
            <div className={`form-msg ${status.kind === "ok" ? "ok" : ""}`}>{status.msg}</div>
          )}
        </div>
      </div>

      <div className="footer-cols">
        <div className="footer-col footer-brand">
          <div className="brand">
            <span className="brand-dot"></span>
            rauljcamacho.online
          </div>
          <p>Notas sobre inteligencia artificial, tecnología y la forma en que cambia el oficio de construir software.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title} className="footer-col">
            <h5>{c.title}</h5>
            <ul>{c.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© 2026 Raul J. Camacho. Todos los derechos reservados.</span>
        <span>Hecho con curiosidad y café.</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
