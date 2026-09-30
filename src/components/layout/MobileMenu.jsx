import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, PhoneIcon } from 'lucide-react';
import { CtaButton } from '../ui/CtaButton';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { services } from '../../data/services';
import { contact } from '../../data/contact';
import { whatsappLink } from '../../utils/links';

const linkClass = ({ isActive }) =>
`flex h-14 items-center border-b border-sky-100 text-lg font-medium ${isActive ? 'text-navy-900' : 'text-ink-muted'}`;

export function MobileMenu({ open }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        id="mobile-menu"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="fixed inset-x-0 bottom-0 top-[72px] z-50 overflow-y-auto bg-white lg:hidden">
        
          <nav aria-label="Mobile" className="px-5 pb-10 pt-2 sm:px-8">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <div className="border-b border-sky-100">
              <button
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((o) => !o)}
              className="flex h-14 w-full items-center justify-between text-lg font-medium text-ink-muted">
              
                Services
                <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ease-out ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              <AnimatePresence initial={false}>
                {servicesOpen &&
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden">
                
                    {services.map((s) =>
                <li key={s.key}>
                        <NavLink to={s.path} className="flex items-center gap-3 py-3 pl-1">
                          <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.accent.bg} ${s.accent.text}`}>
                            <s.icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <span className="font-semibold text-navy-900">{s.fullName}</span>
                        </NavLink>
                      </li>
                )}
                    <li className="h-2" aria-hidden="true" />
                  </motion.ul>
              }
              </AnimatePresence>
            </div>
            <NavLink to="/destinations" className={linkClass}>Destinations</NavLink>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>

            <div className="mt-8 flex flex-col gap-3">
              <CtaButton to="/contact" size="lg" className="w-full">Talk to an Expert</CtaButton>
              <CtaButton href={whatsappLink()} variant="whatsapp" size="lg" className="w-full" icon={<WhatsAppIcon />}>
                WhatsApp Us
              </CtaButton>
              <a href={contact.phoneHref} className="mt-2 flex items-center justify-center gap-2 py-2 font-semibold text-navy-800">
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </div>
          </nav>
        </motion.div>
      }
    </AnimatePresence>);

}