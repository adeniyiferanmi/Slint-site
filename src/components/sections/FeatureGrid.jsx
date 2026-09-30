import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { MapTexture } from '../ui/MapTexture';

export function FeatureGrid({ title, intro, items, aside }) {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 lg:py-28">
      <MapTexture className="opacity-60" />
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeader title={title} intro={intro} />
            {aside && <div className="mt-8">{aside}</div>}
          </div>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {items.map((item, i) =>
          <Reveal
            as="li"
            key={item.title}
            index={i}
            className={`flex flex-col rounded-3xl p-7 lg:p-8 ${
            i === 0 ? 'bg-navy-900 text-white' : 'bg-white/90 ring-1 ring-sky-200 backdrop-blur-sm'} ${
            i % 2 === 1 ? 'sm:mt-10' : ''}`}>
            
              <span
              className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
              i === 0 ? 'bg-white/10 text-sky-300' : 'bg-sky-100 text-sky-600'}`
              }>
              
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className={`mt-6 text-xl font-semibold ${i === 0 ? 'text-white' : 'text-navy-900'}`}>{item.title}</h3>
              <p className={`mt-2 ${i === 0 ? 'text-sky-100' : 'text-ink-muted'}`}>{item.description}</p>
            </Reveal>
          )}
        </ul>
      </Container>
    </section>);

}