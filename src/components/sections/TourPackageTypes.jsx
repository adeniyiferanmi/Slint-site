import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { tourPackages } from '../../data/packages';

export function TourPackageTypes() {
  return (
    <section id="packages" className="scroll-mt-20 bg-navy-900 py-20 lg:py-28">
      <Container>
        <SectionHeader
          tone="light"
          title="Tour packages for every kind of traveller"
          intro="Pick a starting point — every package is tailored after we speak with you." />
        
        <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {tourPackages.map((p, i) =>
          <Reveal as="li" index={i} key={p.name} className="flex flex-col bg-navy-900 p-7 lg:p-8">
              {p.icon &&
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-orangeTint text-accent-orange">
                  <p.icon className="h-6 w-6" aria-hidden="true" />
                </span>
            }
              <span className="mt-6 text-sm font-semibold text-sky-300">{p.tag}</span>
              <h3 className="mt-1 text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-2 text-sky-100">{p.description}</p>
              <Link
              to="#enquire"
              className="mt-auto inline-flex items-center gap-2 self-start pt-6 font-semibold text-white transition-colors duration-150 hover:text-sky-300">
              
                {p.cta}
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          )}
        </ul>
      </Container>
    </section>);

}