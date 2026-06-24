export default function SkylineSvg({ className }) {
  const groundY = 185;

  /** Rect from baseline upward: x, width, height */
  const towers = [
    { x: 148, w: 22, h: 48 },
    { x: 188, w: 26, h: 62 },
    { x: 232, w: 28, h: 76 },
    { x: 278, w: 30, h: 90 },
    { x: 326, w: 32, h: 104 },
    { x: 376, w: 34, h: 118 },
    { x: 428, w: 36, h: 132 },
    // hero tower — tallest, slightly left of centre
    { x: 478, w: 52, h: 158, hero: true },
    { x: 542, w: 38, h: 140 },
    { x: 592, w: 34, h: 122 },
    { x: 638, w: 32, h: 106 },
    { x: 682, w: 30, h: 90 },
    { x: 724, w: 28, h: 76 },
    { x: 764, w: 26, h: 62 },
    { x: 802, w: 24, h: 50 },
    { x: 838, w: 22, h: 40 },
    { x: 872, w: 20, h: 34 },
  ];

  const barjeel = [
    { x: 72, shaftW: 10, shaftH: 58, finialY: 112 },
    { x: 1080, shaftW: 10, shaftH: 54, finialY: 118 },
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 1200 200"
      preserveAspectRatio="xMidYMax meet"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyline-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8d6a8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      <path
        d={`M0 ${groundY} H1200`}
        stroke="#c9a227"
        strokeWidth="0.8"
        opacity="0.35"
      />

      {/* Wind-towers (barjeel) — outline / muted sand, distinct from gradient towers */}
      <g stroke="#c9a227" strokeWidth="1" opacity="0.72">
        {barjeel.map(({ x, shaftW, shaftH, finialY }) => {
          const shaftY = groundY - shaftH;
          const cx = x + shaftW / 2;
          return (
            <g key={x}>
              <rect
                x={x}
                y={shaftY}
                width={shaftW}
                height={shaftH}
                fill="rgba(232, 214, 168, 0.18)"
                stroke="#e8d6a8"
                strokeWidth="0.9"
              />
              <path
                d={`M${x} ${shaftY} H${x + shaftW} L${cx} ${finialY} Z`}
                fill="none"
                stroke="#e8d6a8"
                strokeWidth="0.8"
              />
              <rect
                x={cx - 2}
                y={finialY - 10}
                width={4}
                height={8}
                fill="none"
                stroke="#e8d6a8"
                strokeWidth="0.7"
              />
              <line
                x1={cx}
                y1={finialY - 10}
                x2={cx}
                y2={finialY - 18}
                stroke="#c9a227"
                strokeWidth="0.6"
                opacity="0.65"
              />
              <circle
                cx={cx}
                cy={finialY - 19}
                r="1.8"
                fill="#e8d6a8"
                opacity="0.55"
              />
            </g>
          );
        })}
      </g>

      {/* Gold-gradient towers — heights taper from hero outward */}
      <g fill="url(#skyline-gold)" stroke="#c9a227" strokeWidth="0.7" opacity="0.85">
        {towers.map(({ x, w, h, hero }) => {
          const y = groundY - h;
          return (
            <g key={`${x}-${h}`}>
              <rect x={x} y={y} width={w} height={h} />
              {hero ? (
                <>
                  <rect x={x + w * 0.38} y={y - 14} width={w * 0.24} height={14} opacity="0.65" />
                  <path
                    className="skyline-beacon"
                    d={`M${x + w / 2} ${y - 28} L${x + w * 0.38} ${y - 14} H${x + w * 0.62} Z`}
                    opacity="0.85"
                  />
                </>
              ) : (
                h > 70 && (
                  <rect
                    x={x + w * 0.32}
                    y={y + 8}
                    width={w * 0.36}
                    height={Math.min(18, h * 0.14)}
                    opacity="0.45"
                  />
                )
              )}
            </g>
          );
        })}
      </g>

      <path
        d="M520 185 V120 C520 95 545 75 580 68 C615 75 640 95 640 120 V185"
        stroke="#c9a227"
        strokeWidth="1"
        fill="none"
        opacity="0.25"
      />
    </svg>
  );
}
