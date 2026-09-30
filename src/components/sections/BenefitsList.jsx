import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { getService } from '../../utils/links';

export function BenefitsList({ title, intro, items, service, aside, tinted = false }) {
  const s = getService(service);
  return (
    <section className={`py-20 lg:py-28 ${tinted ? 'bg-sky-50' : ''}`}>
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader title={title} intro={intro} />
          {aside && <div className="mt-10">{aside}</div>}
        </div>
        <ul className="divide-y divide-sky-200 border-y border-sky-200 lg:col-span-7">
          {items.map((item, i) =>
          <Reveal as="li" index={i} key={item.title} className="flex gap-5 py-7">
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${s.accent.bg} ${s.accent.text}`}>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-1.5 text-ink-muted">{item.description}</p>
              </div>
            </Reveal>
          )}
        </ul>
      </Container>
    </section>);

}