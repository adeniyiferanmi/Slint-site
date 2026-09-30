import React from 'react';
import { PlaneIcon } from 'lucide-react';
import { destinations } from '../../data/destinations';

export function DestinationMarquee() {
  const names = Array.from(new Set(destinations.map((d) => d.name)));
  const loop = [...names, ...names];

  return (
    <section aria-label={`Destinations we serve: ${names.join(', ')}`} className="marquee overflow-hidden border-b border-sky-100 bg-white py-6">
      <div className="marquee-track flex w-max items-center" aria-hidden="true">
        {loop.map((name, i) =>
        <span key={`${name}-${i}`} className="flex items-center gap-8 pr-8 font-display text-2xl text-navy-900 sm:text-3xl">
            {name}
            <PlaneIcon className="h-4 w-4 text-accent-red" />
          </span>
        )}
      </div>
    </section>);

}