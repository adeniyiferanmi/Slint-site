import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { DestinationGrid } from './DestinationGrid';
import { destinationCategories, destinations } from '../../data/destinations';

export function DestinationShowcase() {
  const [active, setActive] = useState('pilgrimage');
  const activeCategory = destinationCategories.find((c) => c.key === active);
  const items = destinations.filter((d) => d.category === active);

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            title="Where we’ll take you"
            intro="Seventeen destinations across three kinds of journey — each one planned by advisors who know it well." />
          
          <div role="tablist" aria-label="Destination categories" className="flex gap-1 self-start rounded-full bg-sky-100 p-1 lg:self-auto">
            {destinationCategories.map((c) => {
              const selected = c.key === active;
              return (
                <button
                  key={c.key}
                  role="tab"
                  type="button"
                  id={`tab-${c.key}`}
                  aria-selected={selected}
                  aria-controls="destination-panel"
                  onClick={() => setActive(c.key)}
                  className={`h-10 whitespace-nowrap rounded-full px-4 text-[15px] font-semibold transition-colors duration-150 sm:px-5 ${
                  selected ? 'bg-navy-900 text-white' : 'text-navy-800 hover:bg-white'}`
                  }>
                  
                  {c.label}
                </button>);

            })}
          </div>
        </div>

        <div id="destination-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}>
              
              <p className="mb-8 text-ink-muted">{activeCategory?.intro}</p>
              <DestinationGrid items={items} />
            </motion.div>
          </AnimatePresence>
        </div>

        <Link
          to="/destinations"
          className="mt-12 inline-flex items-center gap-2 font-semibold text-navy-800 transition-colors duration-150 hover:text-sky-600">
          
          See all destinations
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>);

}