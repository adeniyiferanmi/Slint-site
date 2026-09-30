import React from 'react';
import { Container } from '../ui/Container';
import { CtaButton } from '../ui/CtaButton';
import { FixedBackground } from '../ui/FixedBackground';
import { Reveal } from '../ui/Reveal';

export function ParallaxStatement({ image, kicker, statement, ctaLabel, ctaTo, position }) {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden py-24 lg:min-h-[80vh]">
      <FixedBackground image={image} position={position} overlayClassName="bg-navy-950/55" />
      <Container className="text-center">
        <Reveal>
          <p className="font-semibold text-sky-200">{kicker}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-[2.4rem] font-medium leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {statement}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mx-auto mt-8 flex h-1.5 w-24 overflow-hidden rounded-full" aria-hidden="true">
            <span className="flex-1 bg-accent-red" />
            <span className="flex-1 bg-accent-orangeBright" />
            <span className="flex-1 bg-accent-purple" />
          </div>
          {ctaLabel && ctaTo &&
          <CtaButton to={ctaTo} variant="light" size="lg" className="mt-10 w-full sm:w-auto">
              {ctaLabel}
            </CtaButton>
          }
        </Reveal>
      </Container>
    </section>);

}