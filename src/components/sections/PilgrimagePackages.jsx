import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { pilgrimagePackages } from '../../data/packages';

export function PilgrimagePackages() {
  return (
    <section className="bg-sky-50 py-20 lg:py-28">
      <Container>
        <SectionHeader
          title="Choose your pilgrimage"
          intro="Three distinct journeys, each planned by advisors who understand its rites and meaning." />
        
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pilgrimagePackages.map((p, i) =>
          <Reveal as="article" index={i} key={p.name} className={`flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <div className="aspect-[16/10] overflow-hidden bg-sky-100">
                <img src={p.image} alt={p.imageAlt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="text-sm font-semibold text-accent-purple">{p.tag}</span>
                <h3 className="mt-2 font-display text-3xl text-navy-900">{p.name}</h3>
                <p className="mt-3 text-ink-muted">{p.description}</p>
                <ul className="mt-5 space-y-2 border-t border-sky-200 pt-5">
                  {p.highlights.map((h) =>
                <li key={h} className="flex gap-3 text-[15px] text-navy-800">
                      <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-accent-purple" aria-hidden="true" />
                      {h}
                    </li>
                )}
                </ul>
                <Link
                to="#enquire"
                className="mt-auto inline-flex items-center gap-2 self-start pt-7 font-semibold text-navy-800 transition-colors duration-150 hover:text-accent-purple">
                
                  {p.cta}
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>);

}