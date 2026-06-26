export default function SkylineSvg({ className }) {
  const groundY = 186;
  const cx = 600;
  const spireTipY = -12;
  const spireBaseY = 58;

  const burjTiers = [
    { x: 578, w: 44, top: 120 },
    { x: 582, w: 36, top: 100 },
    { x: 586, w: 28, top: 84 },
    { x: 590, w: 20, top: 70 },
    { x: 593, w: 14, top: spireBaseY },
  ];

  const barjeel = [
    { x: 68, shaftW: 26, shaftH: 54 },
    { x: 1106, shaftW: 26, shaftH: 54 },
  ];

  const leftBuildings = [
    { x: 232, w: 14, h: 36 },
    { x: 248, w: 15, h: 52, roof: 'peak' },
    { x: 265, w: 16, h: 42 },
    { x: 283, w: 16, h: 64 },
    { x: 301, w: 17, h: 48, roof: 'peak' },
    { x: 320, w: 17, h: 72 },
    { x: 339, w: 16, h: 56 },
    { x: 357, w: 16, h: 80, roof: 'peak' },
    { x: 375, w: 15, h: 62 },
    { x: 392, w: 15, h: 86 },
    { x: 409, w: 14, h: 70 },
    { x: 425, w: 14, h: 92, roof: 'peak' },
    { x: 441, w: 13, h: 74 },
    { x: 455, w: 13, h: 84 },
    { x: 469, w: 12, h: 66 },
    { x: 483, w: 12, h: 78, roof: 'peak' },
    { x: 497, w: 11, h: 86 },
    { x: 510, w: 11, h: 80, roof: 'peak' },
    { x: 523, w: 11, h: 76 },
    { x: 536, w: 11, h: 72, roof: 'peak' },
    { x: 544, w: 10, h: 68 },
  ];

  const rightBuildings = [
    { x: 646, w: 10, h: 68 },
    { x: 666, w: 11, h: 72, roof: 'peak' },
    { x: 667, w: 11, h: 76 },
    { x: 680, w: 11, h: 80, roof: 'peak' },
    { x: 693, w: 11, h: 86 },
    { x: 707, w: 12, h: 78, roof: 'peak' },
    { x: 721, w: 12, h: 66 },
    { x: 735, w: 13, h: 84 },
    { x: 750, w: 13, h: 74 },
    { x: 765, w: 14, h: 92, roof: 'peak' },
    { x: 781, w: 14, h: 70 },
    { x: 797, w: 15, h: 86 },
    { x: 814, w: 15, h: 62, roof: 'domeFinial' },
    { x: 831, w: 16, h: 80 },
    { x: 849, w: 16, h: 56, roof: 'peak' },
    { x: 867, w: 17, h: 72 },
    { x: 886, w: 17, h: 48, roof: 'peak' },
    { x: 905, w: 16, h: 64 },
    { x: 923, w: 16, h: 42 },
    { x: 941, w: 15, h: 52, roof: 'peak' },
    { x: 958, w: 14, h: 36 },
  ];

  const leftFlank = { x: 556, w: 14, bodyH: 102, peakY: 14 };
  const rightFlank = { x: 630, w: 14, bodyH: 102, peakY: 14 };

  function renderRoof(b, y) {
    const { x, w, roof } = b;
    const mid = x + w / 2;
    switch (roof) {
      case 'peak':
        return <path d={`M${x} ${y} L${mid} ${y - 9} L${x + w} ${y} Z`} fill="url(#skyline-gold)" />;
      case 'domeFinial':
        return (
          <>
            <path d={`M${x + 1} ${y} Q${mid} ${y - 13} ${x + w - 1} ${y} Z`} fill="url(#skyline-gold)" />
            <rect x={mid - 0.5} y={y - 20} width={1} height={7} fill="#faf3dc" opacity="0.95" />
            <circle cx={mid} cy={y - 21.5} r="1.6" fill="#faf3dc" />
          </>
        );
      default:
        return null;
    }
  }

  function renderFlankingTower({ x, w, bodyH, peakY }, mirror = false) {
    const bodyTop = groundY - bodyH;
    const mid = x + w / 2;
    return (
      <g key={`flank-${x}`}>
        <rect x={x} y={bodyTop} width={w} height={bodyH} fill="url(#skyline-gold)" />
        <path d={`M${mid} ${peakY} L${x + 2} ${bodyTop} H${x + w - 2} Z`} fill="url(#skyline-gold)" />
        {!mirror && (
          <>
            <line x1={mid} y1={peakY} x2={mid} y2={peakY - 6} stroke="#faf3dc" strokeWidth="0.85" />
            <circle cx={mid} cy={peakY - 7.5} r="1.8" fill="#faf3dc" />
          </>
        )}
      </g>
    );
  }

  function renderTierGlowBands() {
    return burjTiers.map((tier, i) => (
      <rect
        key={`tier-glow-${i}`}
        x={tier.x - 3}
        y={tier.top - 4}
        width={tier.w + 6}
        height={5}
        fill="url(#tier-glow-band)"
        opacity="0.82"
        filter="url(#tier-band-glow)"
      />
    ));
  }

  function renderCentralTower(showGlow = true) {
    return (
      <g>
        {showGlow && (
          <>
            <circle cx={cx} cy={spireTipY + 6} r="9" fill="url(#spire-halo)" />
            <circle cx={cx} cy={spireTipY + 6} r="16" fill="none" stroke="#faf3dc" strokeWidth="0.6" opacity="0.22" />
            <circle cx={cx} cy={spireTipY + 6} r="22" fill="none" stroke="#faf3dc" strokeWidth="0.45" opacity="0.1" />
          </>
        )}

        {burjTiers.map((tier, i) => {
          const bottom = i === 0 ? groundY : burjTiers[i - 1].top;
          return (
            <rect
              key={`burj-tier-${i}`}
              x={tier.x}
              y={tier.top}
              width={tier.w}
              height={bottom - tier.top}
              fill="url(#burj-tier-fill)"
            />
          );
        })}

        <path
          d={`M595 ${spireBaseY} L${cx} ${spireTipY} L605 ${spireBaseY} Z`}
          fill="url(#burj-tier-fill)"
        />

        {showGlow && renderTierGlowBands()}

        {showGlow && (
          <>
            <line x1={cx} y1={spireTipY} x2={cx} y2={spireTipY - 8} stroke="#faf3dc" strokeWidth="0.85" />
            <circle className="skyline-beacon" cx={cx} cy={spireTipY - 1} r="3.5" fill="#faf3dc" />
          </>
        )}
      </g>
    );
  }

  function renderBarjeel({ x, shaftW, shaftH }, mirror = false) {
    const shaftY = groundY - shaftH;
    const mid = x + shaftW / 2;
    const capY = shaftY - 12;
    return (
      <g key={`barjeel-${x}`} opacity={mirror ? 0.85 : 1}>
        <rect x={x} y={shaftY} width={shaftW} height={shaftH} fill="url(#skyline-gold)" />
        <path
          d={`M${x - 1} ${shaftY} L${mid} ${capY} L${x + shaftW + 1} ${shaftY} Z`}
          fill="url(#skyline-gold-light)"
        />
        {!mirror && (
          <>
            <line x1={mid} y1={capY - 1} x2={mid} y2={capY - 9} stroke="#faf3dc" strokeWidth="0.75" opacity="0.9" />
            <circle cx={mid} cy={capY - 10.5} r="2" fill="#faf3dc" opacity="0.95" />
          </>
        )}
      </g>
    );
  }

  function renderBuildings(list, mirror = false) {
    return list.map((b) => {
      const y = groundY - b.h;
      return (
        <g key={`${b.x}-${b.h}`}>
          <rect x={b.x} y={y} width={b.w} height={b.h} fill="url(#skyline-gold)" />
          {!mirror && renderRoof(b, y)}
        </g>
      );
    });
  }

  function renderSilhouette(mirror = false) {
    const transform = mirror ? `translate(0, ${groundY * 2}) scale(1, -1)` : undefined;
    return (
      <g transform={transform} opacity={mirror ? 0.12 : 1}>
        {barjeel.map((b) => renderBarjeel(b, mirror))}
        {renderBuildings(leftBuildings, mirror)}
        {renderBuildings(rightBuildings, mirror)}
        {renderFlankingTower(leftFlank, mirror)}
        {renderFlankingTower(rightFlank, mirror)}
        {renderCentralTower(!mirror)}
      </g>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 -16 1200 226"
      preserveAspectRatio="xMidYMax meet"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyline-gold" x1="0" y1="0" x2="0.12" y2="1">
          <stop offset="0%" stopColor="#faf3dc" />
          <stop offset="28%" stopColor="#d4b04a" />
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
          <stop offset="0%" stopColor="#fff9ec" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#e8d6a8" stopOpacity="0.25" />
        </linearGradient>
        <filter id="tier-band-glow" x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="1.1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="spire-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#faf3dc" stopOpacity="0.85" />
          <stop offset="35%" stopColor="#c9a227" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="reflection-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9a227" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path d={`M0 ${groundY} H1200`} stroke="#c9a227" strokeWidth="0.5" opacity="0.2" />

      {renderSilhouette(false)}
      {renderSilhouette(true)}

      <rect x="0" y={groundY} width="1200" height="24" fill="url(#reflection-fade)" />
    </svg>
  );
}
