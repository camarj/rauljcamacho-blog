function Tweaks() {
  const [tw, setTweak] = useTweaks(/*EDITMODE-BEGIN*/{
    "halftoneSize": 3,
    "halftoneDensity": 55,
    "duotoneHue": 0,
    "duotoneIntensity": 100,
    "darkMode": false
  }/*EDITMODE-END*/);

  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--halftone-size", tw.halftoneSize + "px");
    r.style.setProperty("--halftone-density", (tw.halftoneDensity / 100).toString());

    // Recompute duotone filter values
    const intensity = tw.duotoneIntensity / 100;
    const hue = tw.duotoneHue;
    // Base navy in HSL: ~ 224, 53%, 18%  →  rgb 0.082, 0.137, 0.278
    // shift hue, then convert
    const baseH = 224 + hue;
    const shadow = hslToRgb(baseH, 0.53, 0.18);
    const highlight = hslToRgb(baseH - 10, 0.20, 0.88);
    // Mix toward midgray by (1 - intensity)
    const mix = (c) => c.map((v) => v + (0.5 - v) * (1 - intensity));
    const sh = mix(shadow);
    const hi = mix(highlight);

    let filter = document.getElementById("duotone-navy");
    if (filter) {
      const fts = filter.querySelectorAll("feFuncR, feFuncG, feFuncB");
      fts[0].setAttribute("tableValues", `${sh[0].toFixed(3)} ${hi[0].toFixed(3)}`);
      fts[1].setAttribute("tableValues", `${sh[1].toFixed(3)} ${hi[1].toFixed(3)}`);
      fts[2].setAttribute("tableValues", `${sh[2].toFixed(3)} ${hi[2].toFixed(3)}`);
    }

    r.setAttribute("data-theme", tw.darkMode ? "dark" : "light");
  }, [tw]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Filtro duotone">
        <TweakSlider label="Intensidad" value={tw.duotoneIntensity} min={0} max={100}
          onChange={(v) => setTweak("duotoneIntensity", v)} unit="%" />
        <TweakSlider label="Desplazamiento de hue" value={tw.duotoneHue} min={-60} max={120}
          onChange={(v) => setTweak("duotoneHue", v)} unit="°" />
      </TweakSection>

      <TweakSection title="Halftone">
        <TweakSlider label="Tamaño del punto" value={tw.halftoneSize} min={2} max={10} step={1}
          onChange={(v) => setTweak("halftoneSize", v)} unit="px" />
        <TweakSlider label="Densidad" value={tw.halftoneDensity} min={0} max={100}
          onChange={(v) => setTweak("halftoneDensity", v)} unit="%" />
      </TweakSection>

      <TweakSection title="Tema">
        <TweakToggle label="Modo oscuro" value={tw.darkMode}
          onChange={(v) => setTweak("darkMode", v)} />
      </TweakSection>
    </TweaksPanel>
  );
}

function hslToRgb(h, s, l) {
  h = ((h % 360) + 360) % 360;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;
  if (h < 60)      [r, g, b] = [c, x, 0];
  else if (h < 120)[r, g, b] = [x, c, 0];
  else if (h < 180)[r, g, b] = [0, c, x];
  else if (h < 240)[r, g, b] = [0, x, c];
  else if (h < 300)[r, g, b] = [x, 0, c];
  else             [r, g, b] = [c, 0, x];
  return [r + m, g + m, b + m];
}

Object.assign(window, { Tweaks });
