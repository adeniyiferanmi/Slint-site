import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '../ui/Container';
import { FlightPath } from '../ui/FlightPath';
import { FixedBackground } from '../ui/FixedBackground';

const EASE = [0.23, 1, 0.32, 1];

export function PageHero({ image, imageAlt, eyebrow, title, subtitle, actions, imagePosition = 'center' }) {
  const reduce = useReducedMotion();
  const enter = (i) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay: 0.07 * i, ease: EASE }
  });

  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <span className="sr-only" role="img" aria-label={imageAlt} />
      <FixedBackground image={image} position={imagePosition} overlayClassName="bg-navy-950/60" />
      <FlightPath path="M-60 480 C 300 560 520 200 820 220 S 1100 120 1280 90" duration={18} className="opacity-70" />
      <Container className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          {eyebrow && <motion.div {...enter(0)}>{eyebrow}</motion.div>}
          <motion.h1
            {...enter(1)}
            className="mt-5 font-display text-[2.5rem] font-medium leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            
            {title}
          </motion.h1>
          <motion.p {...enter(2)} className="mt-5 max-w-xl text-lg text-sky-100 sm:text-xl">
            {subtitle}
          </motion.p>
          {actions &&
          <motion.div {...enter(3)} className="mt-9 flex flex-col gap-3 sm:flex-row">
              {actions}
            </motion.div>
          }
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0 flex h-1.5" aria-hidden="true">
        <span className="flex-1 bg-accent-red" />
        <span className="flex-1 bg-accent-orangeBright" />
        <span className="flex-1 bg-accent-purple" />
        <span className="flex-1 bg-sky-500" />
      </div>
    </section>);

}