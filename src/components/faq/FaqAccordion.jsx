import React, { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';

export function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div className="border-t border-sky-200">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={item.question} className="border-b border-sky-200">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left text-lg font-semibold text-navy-900 transition-colors duration-150 hover:text-navy-700">
                
                {item.question}
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-900/20 transition-transform duration-200 ease-out ${
                  open ? 'rotate-45 bg-navy-900 text-white' : ''}`
                  }
                  aria-hidden="true">
                  
                  <PlusIcon className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open &&
              <motion.div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden">
                
                  <p className="max-w-2xl pb-6 pr-12 text-ink-muted">{item.answer}</p>
                </motion.div>
              }
            </AnimatePresence>
          </div>);

      })}
    </div>);

}