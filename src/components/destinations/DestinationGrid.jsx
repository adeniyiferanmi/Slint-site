import React from 'react';
import { DestinationCard } from './DestinationCard';
import { Reveal } from '../ui/Reveal';

export function DestinationGrid({ items }) {
  const cols = items.length % 3 === 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-4';
  return (
    <div className={`grid gap-x-6 gap-y-10 sm:grid-cols-2 ${cols}`}>
      {items.map((d, i) =>
      <Reveal key={d.id} index={i} className={`h-full ${i === 0 ? 'sm:col-span-2' : ''}`}>
          <DestinationCard destination={d} featured={i === 0} />
        </Reveal>
      )}
    </div>);

}