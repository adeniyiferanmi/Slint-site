import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { services } from '../../data/services';

export function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();
  const isActive = location.pathname.startsWith('/services');

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="services-menu"
        onClick={() => setOpen((o) => !o)}
        className={`relative flex h-10 items-center gap-1 px-3 text-[15px] font-medium transition-colors duration-150 hover:text-navy-900 ${
        isActive ? 'text-navy-900' : 'text-ink-muted'}`
        }>
        
        Services
        <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ease-out ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        {isActive && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-navy-900" aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {open &&
        <div className="absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-3">
            <motion.div
            id="services-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="rounded-2xl border border-sky-200 bg-white p-2 shadow-lift">
            
              <ul>
                {services.map((s) =>
              <li key={s.key}>
                    <Link
                  to={s.path}
                  className="flex items-center gap-4 rounded-xl p-3 transition-colors duration-150 hover:bg-sky-50 focus-visible:bg-sky-50 focus-visible:outline-none">
                  
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${s.accent.bg} ${s.accent.text}`}>
                        <s.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-semibold text-navy-900">{s.fullName}</span>
                        <span className="block text-sm text-ink-muted">{s.menuBlurb}</span>
                      </span>
                    </Link>
                  </li>
              )}
              </ul>
            </motion.div>
          </div>
        }
      </AnimatePresence>
    </div>);

}