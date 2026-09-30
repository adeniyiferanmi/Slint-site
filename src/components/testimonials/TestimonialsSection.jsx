import React, { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { FixedBackground } from '../ui/FixedBackground';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '../../data/testimonials';
import { images } from '../../data/images';

export function TestimonialsSection({ title, intro, service, layout = 'grid' }) {
  const trackRef = useRef(null);
  const items = service ? testimonials.filter((t) => t.service === service) : testimonials;

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.85, behavior: 'smooth' });
  };

  const navButton =
  'flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-150 hover:bg-white hover:text-navy-900';

  return (
    <section className="relative isolate overflow-hidden bg-navy-900 py-20 lg:py-28">
      <FixedBackground image={images.cloudsBg} overlayClassName="bg-navy-950/55" />
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader title={title} intro={intro} tone="light" />
          {layout === 'carousel' &&
          <div className="flex gap-2">
              <button type="button" onClick={() => scroll(-1)} className={navButton} aria-label="Previous testimonials">
                <ArrowLeftIcon className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => scroll(1)} className={navButton} aria-label="Next testimonials">
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          }
        </div>

        {layout === 'carousel' ?
        <div
          ref={trackRef}
          tabIndex={0}
          aria-label="Client testimonials"
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-2 focus-visible:outline-none sm:-mx-8 sm:scroll-px-8 sm:px-8">
          
            {items.map((t, i) =>
          <Reveal key={t.id} index={i} className="w-[86%] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
                <TestimonialCard testimonial={t} />
              </Reveal>
          )}
          </div> :

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((t, i) =>
          <Reveal key={t.id} index={i}>
                <TestimonialCard testimonial={t} showTag={false} />
              </Reveal>
          )}
          </div>
        }
      </Container>
    </section>);

}