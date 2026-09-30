import React from 'react';
import { Container } from '../components/ui/Container';
import { ServiceTag } from '../components/ui/ServiceTag';
import { DestinationGrid } from '../components/destinations/DestinationGrid';
import { CtaBand } from '../components/sections/CtaBand';
import { destinationCategories, destinations } from '../data/destinations';

export function Destinations() {
  return (
    <>
      <section className="bg-sky-50 pb-12 pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <h1 className="max-w-3xl font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
            Destinations worth the journey
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-muted sm:text-xl">
            Seventeen places we know well, across pilgrimage, study abroad and leisure travel. Tap any destination to start an enquiry.
          </p>
          <nav aria-label="Jump to category" className="mt-8 flex flex-wrap gap-2">
            {destinationCategories.map((c) =>
            <a
              key={c.key}
              href={`#${c.key}`}
              className="inline-flex h-11 items-center rounded-full bg-white px-5 font-semibold text-navy-800 ring-1 ring-sky-200 transition-shadow duration-150 hover:ring-navy-900/30">
              
                {c.label}
              </a>
            )}
          </nav>
        </Container>
      </section>

      {destinationCategories.map((c) =>
      <section key={c.key} id={c.key} className="scroll-mt-20 border-b border-sky-100 py-16 last:border-0 lg:py-24">
          <Container>
            <div className="mb-10">
              <ServiceTag service={c.key} />
              <h2 className="mt-4 font-display text-3xl font-medium text-navy-900 sm:text-4xl">{c.heading}</h2>
              <p className="mt-2 text-lg text-ink-muted">{c.intro}</p>
            </div>
            <DestinationGrid items={destinations.filter((d) => d.category === c.key)} />
          </Container>
        </section>
      )}

      <CtaBand title="Not sure where to go? Let’s talk it through." />
    </>);

}