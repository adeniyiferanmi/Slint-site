import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { CtaButton } from '../ui/CtaButton';
import { ServiceTag } from '../ui/ServiceTag';
import { Reveal } from '../ui/Reveal';
import { services } from '../../data/services';

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          title="Four services. One team that knows you by name."
          intro="Whether it’s a sacred journey, a university place or a family holiday, you deal with the same trusted people from first call to homecoming." />
        
        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-28">
          {services.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={s.key} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
                <Reveal y={28} className={`relative lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}>
                  <span
                    className={`absolute -z-0 hidden h-full w-full rounded-3xl lg:block ${s.accent.bg} ${
                    flip ? '-left-5 top-5' : '-right-5 top-5'}`
                    }
                    aria-hidden="true" />
                  
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sky-100">
                    <img src={s.image} alt={s.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                    <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lift">
                      <s.icon className={`h-6 w-6 ${s.accent.text}`} aria-hidden="true" />
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={0.08} className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}>
                  <ServiceTag service={s.key} label={s.fullName} />
                  <h3 className="mt-5 font-display text-3xl font-medium leading-tight text-navy-900 sm:text-[2.5rem]">
                    {s.valueStatement}
                  </h3>
                  <p className="mt-4 text-lg text-ink-muted">{s.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {s.points.map((p) =>
                    <li key={p} className="flex gap-3 text-navy-800">
                        <span className={`mt-[11px] h-1 w-4 shrink-0 rounded-full ${s.accent.solid}`} aria-hidden="true" />
                        {p}
                      </li>
                    )}
                  </ul>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-7">
                    <CtaButton to={`${s.path}#enquire`} size="lg" className="w-full sm:w-auto">
                      {s.cta}
                    </CtaButton>
                    <Link
                      to={s.path}
                      className="group inline-flex items-center justify-center gap-1.5 py-2 font-semibold text-navy-800 transition-colors duration-150 hover:text-sky-600">
                      
                      Learn more
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </Reveal>
              </article>);

          })}
        </div>
      </Container>
    </section>);

}