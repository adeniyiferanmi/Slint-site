import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { MapTexture } from '../ui/MapTexture';

export function ProcessSteps({ title, intro, steps, id }) {
  return (
    <section id={id} className="relative isolate scroll-mt-24 overflow-hidden bg-sky-50 py-20 lg:py-28">
      <MapTexture className="opacity-80" />
      <Container>
        <SectionHeader title={title} intro={intro} />
        <ol className="mt-14 grid gap-8 lg:grid-cols-4">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <Reveal as="li" index={i} key={step.title} className="group relative flex gap-5 lg:block">
                {!isLast &&
                <>
                    <span className="absolute bottom-[-2rem] left-6 top-12 w-px border-l-2 border-dashed border-sky-300 lg:hidden" aria-hidden="true" />
                    <span className="absolute left-14 right-[-1.5rem] top-6 hidden border-t-2 border-dashed border-sky-300 lg:block" aria-hidden="true" />
                  </>
                }
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-lg text-white ring-4 ring-sky-50">
                  {i + 1}
                </span>
                <div className="pb-2 lg:mt-6 lg:pr-4">
                  <h3 className="text-xl font-semibold text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-ink-muted">{step.description}</p>
                </div>
              </Reveal>);

          })}
        </ol>
      </Container>
    </section>);

}