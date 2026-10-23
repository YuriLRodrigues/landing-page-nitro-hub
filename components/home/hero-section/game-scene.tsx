/** Seed fixa: as árvores saem sempre iguais (no servidor e no navegador). */
function seeded(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const trees = Array.from({ length: 46 }, (_, i) => {
  const x = i * 3.6 + seeded(i) * 1.8;
  const base = 70.5 + seeded(i + 99) * 1.5;
  const h = 2.6 + seeded(i + 7) * 3.6;
  const w = 1.4 + seeded(i + 31) * 0.9;
  return `${x.toFixed(2)},${base.toFixed(2)} ${(x + w).toFixed(2)},${(base - h).toFixed(2)} ${(x + w * 2).toFixed(2)},${base.toFixed(2)}`;
});

/**
 * Cena de fundo do "jogo": um vale com montanhas, neblina e água ao entardecer —
 * a mesma ideia da cena do benchmark de GPU do app. Só decoração.
 */
export function GameScene() {
  return (
    <svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0c0a19" />
          <stop offset="0.4" stopColor="#221a3f" />
          <stop offset="0.62" stopColor="#5a3f6f" />
          <stop offset="0.72" stopColor="#c08079" />
        </linearGradient>
        <radialGradient id="hero-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffd9ae" stopOpacity="0.75" />
          <stop offset="1" stopColor="#ffd9ae" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-fog" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c99bb4" stopOpacity="0" />
          <stop offset="0.7" stopColor="#c99bb4" stopOpacity="0.32" />
          <stop offset="1" stopColor="#c99bb4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a3560" />
          <stop offset="0.35" stopColor="#21183a" />
          <stop offset="1" stopColor="#09070f" />
        </linearGradient>
      </defs>

      <rect width="160" height="74" fill="url(#hero-sky)" />
      <circle cx="104" cy="63" r="30" fill="url(#hero-sun)" />
      <circle cx="104" cy="64" r="6.5" fill="#ffd9ae" opacity="0.9" />

      <polygon points="0,58 10,49 18,54 30,36 40,47 50,41 60,53 70,43 82,29 94,45 104,39 116,51 128,35 140,46 150,41 160,49 160,72 0,72" fill="#2c2346" opacity="0.92" />
      <rect y="50" width="160" height="22" fill="url(#hero-fog)" />
      <polygon points="0,69 14,63 26,66 40,59 54,65 68,61 80,67 96,62 110,66 124,60 138,65 150,62 160,65 160,73 0,73" fill="#19132d" />
      <g fill="#100c1e">
        {trees.map((points) => (
          <polygon key={points} points={points} />
        ))}
      </g>

      <rect y="72" width="160" height="28" fill="url(#hero-water)" />
      <line x1="0" y1="72" x2="160" y2="72" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="0.3" />
      <ellipse cx="104" cy="75.5" rx="11" ry="0.9" fill="#ffd9ae" opacity="0.4" />
      <ellipse cx="104" cy="79" rx="7" ry="0.6" fill="#ffd9ae" opacity="0.22" />
      <ellipse cx="104" cy="83" rx="4" ry="0.5" fill="#ffd9ae" opacity="0.14" />
    </svg>
  );
}
