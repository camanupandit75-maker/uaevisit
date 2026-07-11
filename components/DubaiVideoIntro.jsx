'use client';

import { useEffect, useRef, useState } from 'react';

const VIDEOS = [
  'https://res.cloudinary.com/deivg8apm/video/upload/v1783739947/grok-video-c3058c10-1668-49bb-8125-1e3e5a5d3ce3_tvdhiw.mp4',
  'https://res.cloudinary.com/deivg8apm/video/upload/v1783739957/grok-video-c3058c10-1668-49bb-8125-1e3e5a5d3ce3_1_zhyzri.mp4',
];

const INTRO_SECONDS = 16;
const RING_RADIUS = 40;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS; // ≈ 251

export default function DubaiVideoIntro({ onDismiss }) {
  const [fading, setFading] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(INTRO_SECONDS);
  const [videoIndex, setVideoIndex] = useState(0);
  const timerRef = useRef(null);
  const countdownRef = useRef(null);
  const videoRef = useRef(null);

  const clearTimers = () => {
    clearTimeout(timerRef.current);
    clearInterval(countdownRef.current);
  };

  const startFadeOut = () => {
    if (fading) return;
    clearTimers();
    setFading(true);
    // After the 1000ms fade, call onDismiss to unmount
    setTimeout(() => onDismiss(), 1000);
  };

  useEffect(() => {
    // Hard 16-second ceiling — fire fade regardless of video length
    timerRef.current = setTimeout(startFadeOut, INTRO_SECONDS * 1000);

    countdownRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdownRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearTimers();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
  }, []);

  // Ensure the second clip starts immediately after src switches
  useEffect(() => {
    if (videoIndex === 0) return;
    const el = videoRef.current;
    if (!el) return;
    el.play().catch(() => {});
  }, [videoIndex]);

  const dashOffset = RING_CIRCUMFERENCE * (1 - secondsLeft / INTRO_SECONDS);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#000',
        opacity: fading ? 0 : 1,
        transition: fading ? 'opacity 1000ms ease' : 'none',
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      {/* Video — full cover; two clips in sequence */}
      <video
        ref={videoRef}
        src={VIDEOS[videoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={() => {
          if (videoIndex === 0) {
            setVideoIndex(1);
            return;
          }
          clearTimers();
          startFadeOut();
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 30%',
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Centered text — fades up */}
      <div
        className="emirate-video-intro-text"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            color: '#C9A227',
            fontSize: '0.875rem',
            letterSpacing: '0.2em',
            marginBottom: '0.75rem',
            fontFamily: "var(--font-body, 'Hanken Grotesk', sans-serif)",
          }}
        >
          دبي
        </p>
        <h1
          style={{
            color: '#fff',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontFamily: "var(--font-display, 'Marcellus', serif)",
            fontWeight: 400,
            margin: 0,
          }}
        >
          Dubai
        </h1>
      </div>

      {/* Countdown clock — bottom right */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '2.5rem',
          width: 96,
          height: 96,
        }}
      >
        <svg width="96" height="96" viewBox="0 0 96 96">
          <circle cx="48" cy="48" r="46" fill="rgba(0,0,0,0.55)" />
          <circle
            cx="48"
            cy="48"
            r={RING_RADIUS}
            fill="none"
            stroke="#C9A227"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 48 48)"
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
          <text
            x="48"
            y="48"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#fff"
            fontSize="28"
            fontWeight="700"
            fontFamily="var(--font-body, 'Hanken Grotesk', sans-serif)"
          >
            {secondsLeft}
          </text>
        </svg>
      </div>

      {/* Skip button — top right pill */}
      <button
        type="button"
        onClick={() => {
          clearTimers();
          startFadeOut();
        }}
        style={{
          position: 'fixed',
          top: '1.25rem',
          right: '1.5rem',
          background: 'rgba(0,0,0,0.6)',
          border: '1px solid rgba(255,255,255,0.4)',
          borderRadius: '9999px',
          padding: '0.75rem 1.75rem',
          minHeight: 44,
          cursor: 'pointer',
          color: '#fff',
          fontSize: '1rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          fontFamily: "var(--font-body, 'Hanken Grotesk', sans-serif)",
          transition: 'background 200ms ease, border-color 200ms ease',
          zIndex: 10000,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.6)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
        }}
      >
        SKIP →
      </button>
    </div>
  );
}
