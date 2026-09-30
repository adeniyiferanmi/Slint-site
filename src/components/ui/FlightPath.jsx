import React from 'react';
import { useReducedMotion } from 'framer-motion';

const DEFAULT_PATH = 'M-60 560 C 240 520 380 280 640 260 S 1040 160 1280 30';
const PLANE =
'M14 0 L-4 -3 L-9 -12 L-13 -12 L-10 -3 L-17 -2.5 L-20 -7 L-23 -7 L-21 0 L-23 7 L-20 7 L-17 2.5 L-10 3 L-13 12 L-9 12 L-4 3 Z';

export function FlightPath({ className = '', path = DEFAULT_PATH, duration = 16 }) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true">
      
      <path
        d={path}
        fill="none"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="2"
        strokeDasharray="2 14"
        strokeLinecap="round"
        className="flight-dash" />
      
      {!reduce &&
      <g>
          <path d={PLANE} fill="#FFFFFF" transform="scale(1.25)" />
          <animateMotion dur={`${duration}s`} repeatCount="indefinite" rotate="auto" path={path} />
        </g>
      }
    </svg>);

}