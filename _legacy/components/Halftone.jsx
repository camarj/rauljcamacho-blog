// Halftone duotone image — applies SVG duotone filter + CSS dot overlay
// Hover reveals original colors
function Halftone({ src, alt, className = "", style = {}, ...rest }) {
  return (
    <div className={`halftone-wrap ${className}`} style={style} {...rest}>
      <img className="halftone-img" src={src} alt={alt || ""} loading="lazy" />
      <div className="halftone-overlay" aria-hidden="true"></div>
    </div>
  );
}

// Reveal on scroll — adds .in when intersecting
function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setShown(true), delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

Object.assign(window, { Halftone, Reveal });
