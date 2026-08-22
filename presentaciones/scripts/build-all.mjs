import { execFileSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const decks = JSON.parse(readFileSync(join(root, "decks.json"), "utf-8"));
const outDir = join(root, "dist");

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const deck of decks) {
  console.log(`\n▲ Building "${deck.title}" (${deck.entry})`);
  execFileSync(
    "pnpm",
    [
      "exec",
      "slidev",
      "build",
      deck.entry,
      "--out",
      join(outDir, deck.slug),
      "--base",
      `/${deck.slug}/`,
      "--router-mode",
      "hash",
    ],
    { cwd: root, stdio: "inherit" },
  );
}

const baseUrl = "https://cyberacademy.divisioncero.com";
const signUpUrl = "https://app.divisioncero.com/auth/sign-up";
const githubUrl = "https://github.com/PetterVargas/cyberacademy";

const guardianItems = [
  ["/cor", "COR — Coherencia Organizacional"],
  ["/cip", "CIP — Identidad y Puntos Finales"],
  ["/cif", "CIF — Infraestructura"],
  ["/cap", "CAP — Aplicaciones"],
  ["/ccn", "CCN — Continuidad del Negocio"],
  ["/adr", "ADR — Detección y Respuesta"],
  ["/thp", "THP — Talento Humano"],
  ["/dia", "DIA — Datos e IA"],
];

const guardianMenu = guardianItems
  .map(([path, label]) => `<a href="${baseUrl}${path}">${label}</a>`)
  .join("\n");

const navbar = `
  <nav class="navbar">
    <div class="nav-inner">
      <a class="brand" href="${baseUrl}">
        <svg width="22" height="22" viewBox="0 0 790 790" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path transform="translate(746,1)" d="m0 0 13 2 9 4 6 4 8 9 5 11 1 10v591l-1 17-4 10-8 10-8 5-21 7-69 19-212 58-59 16-5 1h-14l-45-12-62-17-117-32-62-17-58-16-16-5-8-4-8-7-6-10-2-6-1-7-1-233v-97l1-233 1-46 4-11 6-8 7-6 10-5 3-1h12l28 7 44 12 73 20 149 41 47 13 11 2 50-14 47-13 225-62zm-39 92-35 9-65 18-166 46-35 10-14 2-31-8-229-63-47-13h-3l-1 177v336l8 3 47 13 132 37 107 30 17 5 8-1 128-35 135-37 37-10 8-3 1-515z" fill="currentColor"/>
          <path transform="translate(149,219)" d="m0 0h490l14 7 9 9 6 12 2 15v15l-1 20-1 1h-470v221l12 3 119 33 50 14 17 4 13-4 68-19 119-33 69-19 4 1v57l-3 10-6 9-5 5-7 5-27 8-214 60-9 2h-9l-122-34-82-23-42-12-10-6-7-8-6-12-2-11v-291l2-10 7-14 7-7 10-6z" fill="var(--logo-accent)"/>
        </svg>
        <span>CyberAcademy</span>
      </a>
      <input type="checkbox" id="nav-toggle" class="nav-toggle">
      <label for="nav-toggle" class="nav-burger" aria-label="Abrir menú">
        <span></span><span></span><span></span>
      </label>
      <div class="nav-links">
        <a href="${baseUrl}/cursos">Cursos</a>
        <a href="${baseUrl}/cyberusuario">CyberUsuario</a>
        <div class="dropdown">
          <button class="dropdown-trigger" type="button">CyberGuardián</button>
          <div class="dropdown-panel">
            ${guardianMenu}
          </div>
        </div>
      </div>
      <div class="nav-actions">
        <a class="icon-link" href="${githubUrl}" target="_blank" rel="noopener" aria-label="Github">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
        <a class="cta-button" href="${signUpUrl}" target="_blank" rel="noopener">Co-creemos</a>
      </div>
    </div>
  </nav>`;

const accents = [
  "#22d3ee",
  "#a78bfa",
  "#fbbf24",
  "#34d399",
  "#fb7185",
  "#60a5fa",
];

const cards = decks
  .map((deck, i) => {
    const accent = accents[i % accents.length];
    return `
      <a class="card" href="./${deck.slug}/" style="--accent: ${accent}">
        <div class="card-body">
          <h2>${deck.title}</h2>
          <p>${deck.description}</p>
        </div>
        <div class="card-footer">
          <span class="cta">Abrir presentación <span class="arrow">→</span></span>
        </div>
      </a>`;
  })
  .join("\n");

const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Presentaciones · CyberAcademy</title>
<link rel="icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-16EPG4H9SD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-16EPG4H9SD');
</script>
<style>
  :root {
    color-scheme: light dark;
    --bg: #060a14;
    --bg-soft: #0b1120;
    --surface: rgba(255, 255, 255, 0.04);
    --surface-border: rgba(255, 255, 255, 0.08);
    --text: #e7ecf7;
    --text-dim: #93a0b8;
    --kicker: #38bdf8;
    --logo-accent: #ffffff;
  }
  @media (prefers-color-scheme: light) {
    :root {
      --bg: #eef2f9;
      --bg-soft: #ffffff;
      --surface: #ffffff;
      --surface-border: #e2e8f0;
      --text: #0f172a;
      --text-dim: #55617a;
      --kicker: #0284c7;
      --logo-accent: #4DAE84;
    }
  }
  * { box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 0 1.5rem 4rem;
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    color: var(--text);
    background:
      radial-gradient(60rem 30rem at 15% -10%, rgba(56, 189, 248, 0.16), transparent 60%),
      radial-gradient(50rem 28rem at 110% 10%, rgba(167, 139, 250, 0.14), transparent 60%),
      radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px) 0 0/28px 28px,
      var(--bg);
    background-attachment: fixed;
  }
  .navbar {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 20;
    background: color-mix(in srgb, var(--bg-soft) 78%, transparent);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--surface-border);
    margin: 0 -1.5rem;
  }
  .nav-inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0.9rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    font-weight: 800;
    font-size: 1rem;
    color: var(--text);
    text-decoration: none;
    flex-shrink: 0;
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex: 1;
  }
  .nav-links > a, .dropdown-trigger {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-dim);
    text-decoration: none;
    background: none;
    border: none;
    padding: 0;
    font-family: inherit;
    cursor: pointer;
  }
  .nav-links > a:hover, .dropdown-trigger:hover { color: var(--text); }
  .dropdown { position: relative; }
  .dropdown-panel {
    display: none;
    position: absolute;
    top: calc(100% + 0.9rem);
    left: 50%;
    transform: translateX(-50%);
    min-width: 300px;
    background: var(--bg-soft);
    border: 1px solid var(--surface-border);
    border-radius: 12px;
    padding: 0.5rem;
    box-shadow: 0 20px 40px -20px rgba(0,0,0,0.4);
  }
  .dropdown-panel a {
    display: block;
    padding: 0.55rem 0.75rem;
    border-radius: 8px;
    font-size: 0.85rem;
    color: var(--text-dim);
    text-decoration: none;
  }
  .dropdown-panel a:hover { background: var(--surface); color: var(--text); }
  .dropdown:hover .dropdown-panel,
  .dropdown:focus-within .dropdown-panel { display: block; }
  .nav-actions { display: flex; align-items: center; gap: 1rem; flex-shrink: 0; }
  .icon-link { color: var(--text-dim); display: inline-flex; }
  .icon-link:hover { color: var(--text); }
  .cta-button {
    background: var(--kicker);
    color: #04121c;
    font-weight: 700;
    font-size: 0.85rem;
    padding: 0.45rem 0.9rem;
    border-radius: 8px;
    text-decoration: none;
    white-space: nowrap;
  }
  .nav-toggle, .nav-burger { display: none; }
  @media (max-width: 780px) {
    .nav-links {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
      background: var(--bg-soft);
      border-bottom: 1px solid var(--surface-border);
      padding: 0.5rem 1.5rem 1rem;
    }
    .nav-links > a, .dropdown { width: 100%; padding: 0.6rem 0; }
    .dropdown-panel { position: static; transform: none; box-shadow: none; margin-top: 0.3rem; }
    .nav-toggle:checked ~ .nav-links { display: flex; }
    .nav-burger {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4px;
      width: 1.6rem;
      height: 1.6rem;
      cursor: pointer;
      margin-left: auto;
    }
    .nav-burger span { width: 100%; height: 2px; background: var(--text); border-radius: 2px; }
    .nav-actions .cta-button { display: none; }
  }
  header { text-align: center; max-width: 40rem; margin-top: 4rem; }
  header h1 {
    margin: 0 0 0.6rem;
    font-size: clamp(1.9rem, 3.5vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
  }
  header p { margin: 0; color: var(--text-dim); font-size: 1rem; }
  .grid {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    width: 100%;
    max-width: 760px;
  }
  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1.1rem 1.4rem;
    border-radius: 14px;
    border: 1px solid var(--surface-border);
    background: var(--surface);
    backdrop-filter: blur(12px);
    text-decoration: none;
    color: inherit;
    overflow: hidden;
    transition: transform 0.15s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }
  .card::before {
    content: '';
    position: absolute;
    inset: 0 auto 0 0;
    width: 3px;
    background: linear-gradient(180deg, var(--accent), transparent);
  }
  .card:hover {
    transform: translateX(4px);
    border-color: var(--accent);
    box-shadow: 0 12px 30px -14px color-mix(in srgb, var(--accent) 35%, transparent);
  }
  .card-body { min-width: 0; }
  .card h2 { margin: 0 0 0.3rem; font-size: 1.05rem; font-weight: 700; letter-spacing: -0.01em; }
  .card p {
    margin: 0;
    font-size: 0.85rem;
    color: var(--text-dim);
    line-height: 1.5;
  }
  .card-footer {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .cta {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--accent);
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    white-space: nowrap;
  }
  .arrow { transition: transform 0.2s ease; }
  .card:hover .arrow { transform: translateX(3px); }
  footer { color: var(--text-dim); font-size: 0.8rem; }
  @media (max-width: 640px) {
    .card { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
    .card-footer { align-self: flex-end; }
  }
</style>
</head>
<body>
  ${navbar}
  <header>
    <h1>Presentaciones</h1>
    <p>Elige la presentación que deseas iniciar</p>
  </header>
  <div class="grid">
    ${cards}
  </div>
  <footer>${decks.length} presentación${decks.length === 1 ? "" : "es"} disponible${decks.length === 1 ? "" : "s"}</footer>
</body>
</html>
`;

writeFileSync(join(outDir, "index.html"), html);

for (const icon of ["favicon.ico", "favicon-32x32.png", "favicon-16x16.png"]) {
  copyFileSync(join(root, "public", icon), join(outDir, icon));
}

console.log(
  `\n✓ Índice generado en dist/index.html con ${decks.length} presentación(es).`,
);
