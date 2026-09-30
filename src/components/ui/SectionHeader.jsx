import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function SectionHeader({ title, intro, eyebrow, align = 'left', tone = 'dark', as = 'h2', className = '' }) {
  const reduce = useReducedMotion();
  const Heading = as;
  const isCenter = align === 'center';
  return (
    <motion.div
      className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>
      
      {eyebrow && <div className="mb-4">{eyebrow}</div>}
      <span className={`mb-5 flex h-1 w-12 overflow-hidden rounded-full ${isCenter ? 'mx-auto' : ''}`} aria-hidden="true">
        <span className="flex-1 bg-accent-red" />
        <span className="flex-1 bg-accent-orangeBright" />
        <span className="flex-1 bg-accent-purple" />
      </span>
      <Heading
        className={`font-display text-[2rem] font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
        tone === 'light' ? 'text-white' : 'text-navy-900'}`
        }>
        
        {title}
      </Heading>
      {intro && <p className={`mt-4 text-lg ${tone === 'light' ? 'text-sky-100' : 'text-ink-muted'}`}>{intro}</p>}
    </motion.div>);

}