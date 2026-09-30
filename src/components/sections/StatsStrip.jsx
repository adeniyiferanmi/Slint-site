import React from 'react';
import { ShieldCheckIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { CountUp } from '../ui/CountUp';
import { homeStats } from '../../data/features';

export function StatsStrip() {
  return (
    <section aria-label="Slint Fly at a glance" className="bg-navy-900">
      <Container className="py-2 lg:py-4">
        <dl className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
          {homeStats.map((stat) =>
          <div key={stat.label} className="flex flex-col justify-center gap-2 bg-navy-900 px-5 py-8 lg:px-8 lg:py-10">
              <dt className="order-2 text-[15px] text-sky-200">{stat.label}</dt>
              <dd className="order-1">
                {stat.kind === 'badge' ?
              <span className="inline-flex items-center gap-2 font-display text-3xl text-white lg:text-4xl">
                    <ShieldCheckIcon className="h-7 w-7 text-sky-300 lg:h-8 lg:w-8" aria-hidden="true" />
                    {stat.value}
                  </span> :

              <span className="font-display text-4xl text-white lg:text-5xl">
                    <CountUp value={stat.value} />
                  </span>
              }
              </dd>
            </div>
          )}
        </dl>
      </Container>
    </section>);

}