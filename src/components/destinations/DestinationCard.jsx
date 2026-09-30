import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { getService } from '../../utils/links';

export function DestinationCard({ destination, featured = false }) {
  const service = getService(destination.category);
  return (
    <article className="group flex h-full flex-col">
      <div className={`relative overflow-hidden rounded-2xl bg-sky-100 ${featured ? 'aspect-[4/3] sm:aspect-[8/3]' : 'aspect-[4/3]'}`}>
        <img
          src={destination.image}
          alt={`${destination.name} — ${destination.blurb}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
        
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="font-display text-2xl text-navy-900">{destination.name}</h3>
        <p className="mt-1 text-ink-muted">{destination.blurb}</p>
        <Link
          to={`${service.path}#enquire`}
          className="mt-auto inline-flex items-center gap-1.5 self-start pt-3 font-semibold text-navy-800 transition-colors duration-150 hover:text-sky-600"
          aria-label={`Enquire about ${destination.name}`}>
          
          Enquire
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>);

}