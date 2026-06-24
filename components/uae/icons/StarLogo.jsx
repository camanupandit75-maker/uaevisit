/** Eight-point star (khatam) — non-figurative geometric mark */
export default function StarLogo({ className, size = 28 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 2 L18 10 L26 8 L20 14 L28 16 L20 18 L26 24 L18 22 L16 30 L14 22 L6 24 L12 18 L4 16 L12 14 L6 8 L14 10 Z"
        fill="currentColor"
        opacity="0.92"
      />
      <circle cx="16" cy="16" r="2.5" fill="var(--ink, #0e1b2a)" opacity="0.4" />
    </svg>
  );
}
