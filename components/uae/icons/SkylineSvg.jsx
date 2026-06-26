export default function SkylineSvg({ className }) {
  const W = 1200;
  const groundY = 260;
  const cx = 600;
  const spireTipY = 10;
  const spireBaseY = 90;

  /* ── Burj Khalifa stepped tiers ── */
  const burjTiers = [
    { x: 564, w: 72, top: 145 },
    { x: 570, w: 60, top: 118 },
    { x: 577, w: 46, top: 100 },
    { x: 584, w: 32, top: 85 },
    { x: 591, w: 18, top: spireBaseY },
  ];

  /* ── left flanking spire tower ── */
  const leftSpire = { x: 480, bodyW: 24, bodyH: 180, peakY: 28 };
  /* ── right flanking spire tower ── */
  const rightSpire = { x: 696, bodyW: 24, bodyH: 180, peakY: 28 };

  /*
   * Buildings: tightly packed, touching or nearly touching.
   * Heights are irregular — not a smooth ramp.
   * Far edges have small clusters; center area has tallest.
   */

  const leftBuildings = [
    /* far-left small cluster */
    { x: 68,  w: 16, h: 24 },
    { x: 86,  w: 18, h: 34 },
    { x: 106, w: 16, h: 28 },
    /* gap, then second small group */
    { x: 136, w: 22, h: 42 },
    { x: 160, w: 20, h: 52, roof: 'peak' },
    { x: 182, w: 24, h: 46 },
    /* growing */
    { x: 210, w: 26, h: 64, roof: 'peak' },
    { x: 238, w: 24, h: 56 },
    { x: 264, w: 28, h: 74 },
    { x: 294, w: 26, h: 68, roof: 'peak' },
    /* taller mid-range */
    { x: 322, w: 30, h: 90 },
    { x: 354, w: 28, h: 82, roof: 'peak' },
    { x: 384, w: 32, h: 110 },
    { x: 418, w: 28, h: 96, roof: 'peak' },
    { x: 448, w: 30, h: 130 },
  ];

  const rightBuildings = [
    /* tall right of centre */
    { x: 722, w: 30, h: 130 },
    { x: 754, w: 28, h: 96, roof: 'peak' },
    { x: 784, w: 32, h: 110 },
    { x: 818, w: 28, h: 82, roof: 'peak' },
    { x: 848, w: 30, h: 90 },
    /* diminishing */
    { x: 880, w: 26, h: 68, roof: 'peak' },
    { x: 908, w: 28, h: 74 },
    { x: 938, w: 24, h: 56 },
    { x: 964, w: 26, h: 64, roof: 'peak' },
    /* small groups */
    { x: 994, w: 24, h: 46 },
    { x: 1020, w: 20, h: 52, roof: 'peak' },
    { x: 1042, w: 22, h: 42 },
    /* far-right small cluster */
    { x: 1078, w: 16, h: 28 },
    { x: 1096, w: 18, h: 34 },
    { x: 1116, w: 16, h: 24 },
  ];

  /* ── control / observation tower (far right) ── */
  const controlTower = { x: 1140, shaftW: 8, shaftH: 52, discR: 12 };

  /* ── barjeel wind tower (far left) ── */
  const barjeel = { x: 36, shaftW: 16, shaftH: 44 };

  /* ── roof shapes ── */
  function renderRoof(b, y) {
    const { x, w, roof } = b;
    const mid = x + w / 2;
    if (roof === 'peak') {
      return (
        <path
          d={`M${x} ${y} L${mid} ${y - 16} L${x + w} ${y} Z`}
          fill="url(#skyline-gold)"
        />
      );
    }
    return null;
  }

  /* ── spire tower (flanking) ── */
  function renderSpireTower({ x, bodyW, bodyH, peakY }) {
    const bodyTop = groundY - bodyH;
    const mid = x + bodyW / 2;
    return (
      <g>
        {/* body */}
        <rect x={x} y={bodyTop} width={bodyW} height={bodyH} fill="url(#skyline-gold)" />
        {/* pointed top */}
        <path d={`M${mid} ${peakY} L${x + 3} ${bodyTop} H${x + bodyW - 3} Z`} fill="url(#skyline-gold)" />
        {/* finial */}
        <line x1={mid} y1={peakY} x2={mid} y2={peakY - 10} stroke="#faf3dc" strokeWidth="1" />
        <circle cx={mid} cy={peakY - 12} r="2.5" fill="#faf3dc" />
      </g>
    );
  }

  /* ── central Burj Khalifa ── */
  function renderBurj() {
    return (
      <g>
        {/* tiers */}
        {burjTiers.map((tier, i) => {
          const bottom = i === 0 ? groundY : burjTiers[i - 1].top;
          return (
            <rect
              key={`burj-${i}`}
              x={tier.x}
              y={tier.top}
              width={tier.w}
              height={bottom - tier.top}
              fill="url(#burj-tier-fill)"
            />
          );
        })}

        {/* spire */}
        <path
          d={`M594 ${spireBaseY} L${cx} ${spireTipY} L606 ${spireBaseY} Z`}
          fill="url(#burj-tier-fill)"
        />

        {/* tier glow bands */}
        {burjTiers.map((tier, i) => (
          <rect
            key={`glow-${i}`}
            x={tier.x - 4}
            y={tier.top - 4}
            width={tier.w + 8}
            height={5}
            fill="url(#tier-glow-band)"
            opacity="0.7"
            filter="url(#tier-band-glow)"
          />
        ))}

        {/* beacon */}
        <line x1={cx} y1={spireTipY} x2={cx} y2={spireTipY - 10} stroke="#faf3dc" strokeWidth="1" />
        <circle className="skyline-beacon" cx={cx} cy={spireTipY - 2} r="4.5" fill="#faf3dc" />

        {/* halo */}
        <circle cx={cx} cy={spireTipY + 4} r="12" fill="url(#spire-halo)" />
        <circle cx={cx} cy={spireTipY + 4} r="22" fill="none" stroke="#faf3dc" strokeWidth="0.5" opacity="0.15" />
      </g>
    );
  }

  /* ── barjeel ── */
  function renderBarjeel({ x, shaftW, shaftH }) {
    const shaftY = groundY - shaftH;
    const mid = x + shaftW / 2;
    const capY = shaftY - 12;
    return (
      <g>
        <rect x={x} y={shaftY} width={shaftW} height={shaftH} fill="url(#skyline-gold)" />
        <path d={`M${x - 2} ${shaftY} L${mid} ${capY} L${x + shaftW + 2} ${shaftY} Z`} fill="url(#skyline-gold-light)" />
        <line x1={mid} y1={capY} x2={mid} y2={capY - 10} stroke="#faf3dc" strokeWidth="0.8" />
        <circle cx={mid} cy={capY - 12} r="2" fill="#faf3dc" opacity="0.9" />
      </g>
    );
  }

  /* ── control tower ── */
  function renderControlTower({ x, shaftW, shaftH, discR }) {
    const shaftY = groundY - shaftH;
    const mid = x + shaftW / 2;
    const discCY = shaftY - 4;
    return (
      <g>
        <rect x={x} y={shaftY} width={shaftW} height={shaftH} fill="url(#skyline-gold)" />
        <ellipse cx={mid} cy={discCY} rx={discR} ry={discR * 0.4} fill="url(#skyline-gold)" />
        <line x1={mid} y1={discCY - discR * 0.4} x2={mid} y2={discCY - discR * 0.4 - 16} stroke="#faf3dc" strokeWidth="0.8" />
        <circle cx={mid} cy={discCY - discR * 0.4 - 18} r="2.2" fill="#faf3dc" opacity="0.85" />
      </g>
    );
  }

  /* ── building blocks ── */
  function renderBuildings(list) {
    return list.map((b) => {
      const y = groundY - b.h;
      return (
        <g key={`b-${b.x}`}>
          <rect x={b.x} y={y} width={b.w} height={b.h} fill="url(#skyline-gold)" />
          {renderRoof(b, y)}
        </g>
      );
    });
  }

  /* ── full silhouette ── */
  function renderAll(mirror = false) {
    const transform = mirror ? `translate(0, ${groundY * 2}) scale(1, -1)` : undefined;
    return (
      <g transform={transform} opacity={mirror ? 0.1 : 1}>
        {renderBarjeel(barjeel)}
        {renderControlTower(controlTower)}
        {renderBuildings(leftBuildings)}
        {renderBuildings(rightBuildings)}
        {renderSpireTower(leftSpire)}
        {renderSpireTower(rightSpire)}
        {renderBurj()}
      </g>
    );
  }

  return (
    <svg
      className={className}
      viewBox={`0 0 ${W} 290`}
      preserveAspectRatio="xMidYMax meet"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyline-gold" x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor="#faf3dc" />
          <stop offset="30%" stopColor="#d4b04a" />
          <stop offset="100%" stopColor="#5c4a14" />
        </linearGradient>

        <linearGradient id="skyline-gold-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf3dc" />
          <stop offset="100%" stopColor="#c9a227" />
        </linearGradient>

        <linearGradient id="burj-tier-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7efd8" />
          <stop offset="40%" stopColor="#d4b04a" />
          <stop offset="100%" stopColor="#3d3210" />
        </linearGradient>

        <linearGradient id="tier-glow-band" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff9ec" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e8d6a8" stopOpacity="0.2" />
        </linearGradient>

        <filter id="tier-band-glow" x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <radialGradient id="spire-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#faf3dc" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#c9a227" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
        </radialGradient>

        {/* large ambient glow — rounded "cloud" behind the central towers */}
        <radialGradient id="ambient-glow" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#253a5a" stopOpacity="1" />
          <stop offset="55%" stopColor="#1b2d4a" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#0e1a2e" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="reflection-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9a227" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* large ambient glow behind the central skyline */}
      <ellipse
        cx={cx}
        cy={80}
        rx={200}
        ry={100}
        fill="url(#ambient-glow)"
        opacity="0.85"
      />

      {/* ground line */}
      <path d={`M0 ${groundY} H${W}`} stroke="#c9a227" strokeWidth="0.5" opacity="0.18" />

      {renderAll(false)}
      {renderAll(true)}

      <rect x="0" y={groundY} width={W} height="30" fill="url(#reflection-fade)" />
    </svg>
  );
}
