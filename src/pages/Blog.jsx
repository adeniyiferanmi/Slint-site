import React from 'react';
import { BookOpenIcon } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { CtaButton } from '../components/ui/CtaButton';
import { ServiceTag } from '../components/ui/ServiceTag';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { whatsappLink } from '../utils/links';

const upcoming = [
{ title: 'Your complete Hajj preparation checklist', service: 'pilgrimage' },
{ title: 'UK vs Canada: choosing where to study in 2027', service: 'study' },
{ title: 'When to book December flights out of Lagos', service: 'flights' },
{ title: 'A family guide to Zanzibar on a sensible budget', service: 'tours' }];


export function Blog() {
  return (
    <section className="bg-sky-50 py-20 lg:py-28">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-navy-800 shadow-soft">
            <BookOpenIcon className="h-7 w-7" aria-hidden="true" />
          </span>
          <p className="mt-8 text-sm font-semibold text-sky-600">Coming soon</p>
          <h1 className="mt-2 font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
            Travel Insights is on its way.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-muted">
            Practical guides from our advisors on pilgrimage, studying abroad, flights and holidays. Until it launches, our experts are happy to answer your questions directly.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton to="/contact" size="lg" className="w-full sm:w-auto">Talk to an Expert</CtaButton>
            <CtaButton href={whatsappLink()} variant="whatsapp" size="lg" icon={<WhatsAppIcon />} className="w-full sm:w-auto">WhatsApp Us</CtaButton>
          </div>
        </div>
        <div className="lg:col-span-6">
          <h2 className="text-lg font-semibold text-navy-900">First articles we’re writing</h2>
          <ul className="mt-5 divide-y divide-sky-200 border-y border-sky-200">
            {upcoming.map((a) =>
            <li key={a.title} className="flex flex-col gap-3 py-6">
                <div>
                  <ServiceTag service={a.service} />
                </div>
                <p className="font-display text-2xl leading-snug text-navy-900">{a.title}</p>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </section>);

}