import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const tags = { div: motion.div, li: motion.li, article: motion.article };

export function Reveal({ children, as = 'div', index = 0, delay = 0, y = 18, className }) {
  const reduce = useReducedMotion();
  const Comp = tags[as];
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.3, delay: delay + Math.min(index, 6) * 0.06, ease: [0.23, 1, 0.32, 1] }}>
      
      {children}
    </Comp>);

}