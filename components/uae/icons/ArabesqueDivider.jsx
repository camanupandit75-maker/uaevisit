export default function ArabesqueDivider({ className = '' }) {
  return (
    <span className={`divider-shimmer ${className}`.trim()} aria-hidden="true">
      <svg
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
      >
        <path
          d="M0 6 H70 C78 6 82 2 90 2 C98 2 102 6 110 6 C118 6 122 10 130 10 C138 10 142 6 150 6 H200"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.7"
        />
        <circle cx="100" cy="6" r="2.5" fill="currentColor" opacity="0.85" />
        <path
          d="M94 6 C96 3 98 3 100 6 C102 9 104 9 106 6"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </span>
  );
}
