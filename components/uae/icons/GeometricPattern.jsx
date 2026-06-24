export default function GeometricPattern({ className }) {
  const starPath =
    'M16 0 L18.8 9.2 L28 9.2 L20.6 14.9 L23.4 24 L16 18.4 L8.6 24 L11.4 14.9 L4 9.2 L13.2 9.2 Z';

  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern
          id="khatam-pattern"
          width="64"
          height="64"
          patternUnits="userSpaceOnUse"
        >
          <path d={starPath} fill="#c9a227" opacity="0.08" />
          <path
            d={starPath}
            transform="translate(32, 32)"
            fill="#c9a227"
            opacity="0.06"
          />
          <circle cx="32" cy="32" r="1.2" fill="#c9a227" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#khatam-pattern)" />
    </svg>
  );
}
