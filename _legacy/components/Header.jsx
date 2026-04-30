function Header({ route, navigate }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const [theme, setTheme] = React.useState(isDark ? "dark" : "light");

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const links = [
    { id: "home", label: "Artículos" },
    { id: "topics", label: "Temas" },
    { id: "about", label: "Sobre mí" },
    { id: "archive", label: "Archivo" },
  ];

  const go = (id) => {
    setMobileOpen(false);
    navigate(id);
  };

  return (
    <>
      <div className="topstrip"></div>
      <header className="header shell">
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); go("home"); }}>
          <span className="brand-dot"></span>
          rauljcamacho.online
        </a>
        <nav className="nav">
          {links.map((l) => (
            <a
              key={l.id}
              href="#"
              className={route === l.id ? "active" : ""}
              onClick={(e) => { e.preventDefault(); go(l.id); }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            aria-label="Cambiar tema"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title="Cambiar tema"
          >
            {theme === "dark" ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
            )}
          </button>
          <button className="btn" onClick={() => go("home")}>Suscribirse</button>
          <button
            className={`hamburger ${mobileOpen ? "open" : ""}`}
            aria-label="Menú"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {links.map((l) => (
          <a key={l.id} href="#" onClick={(e) => { e.preventDefault(); go(l.id); }}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}

Object.assign(window, { Header });
