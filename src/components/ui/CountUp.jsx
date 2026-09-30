import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

export function CountUp({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const match = value.match(/^([\d,]+)(.*)$/);
  const target = match ? parseInt(match[1].replace(/,/g, ''), 10) : null;
  const suffix = match ? match[2] : '';
  const [display, setDisplay] = useState(target === null || reduce ? value : `0${suffix}`);

  useEffect(() => {
    if (!inView || target === null || reduce) return undefined;
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => setDisplay(`${Math.round(v).toLocaleString('en-US')}${suffix}`)
    });
    return () => controls.stop();
  }, [inView, target, suffix, reduce]);

  return (
    <span ref={ref} aria-label={value}>
      {display}
    </span>);

}