import React from 'react';
import { ClockIcon, LockIcon, PhoneIcon, ShieldCheckIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { CtaButton } from '../ui/CtaButton';
import { MapTexture } from '../ui/MapTexture';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { EnquiryForm } from './EnquiryForm';
import { contact } from '../../data/contact';
import { whatsappLink } from '../../utils/links';

const assurances = [
{ icon: ClockIcon, text: 'Replies within one working hour, Mon–Sat' },
{ icon: ShieldCheckIcon, text: 'Government-licensed & accredited agency' },
{ icon: LockIcon, text: 'Your details stay private — never shared' }];


export function EnquirySection({ formId, title, intro, fields, submitLabel, teamLabel, whatsappLabel, whatsappMessage }) {
  return (
    <section id="enquire" className="relative isolate scroll-mt-20 overflow-hidden bg-sky-50 py-20 lg:py-28">
      <MapTexture className="opacity-80" />
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader title={title} intro={intro} />
          <div className="mt-8 flex flex-col gap-3 sm:items-start">
            <CtaButton href={whatsappLink(whatsappMessage)} variant="whatsapp" size="lg" icon={<WhatsAppIcon />} className="w-full sm:w-auto">
              {whatsappLabel}
            </CtaButton>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 py-2 font-semibold text-navy-800 transition-colors duration-150 hover:text-sky-600 sm:justify-start">
              
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              Or call {contact.phoneDisplay}
            </a>
          </div>
          <ul className="mt-10 space-y-4 border-t border-sky-200 pt-8">
            {assurances.map((a) =>
            <li key={a.text} className="flex items-center gap-3 text-ink-muted">
                <a.icon className="h-5 w-5 shrink-0 text-sky-600" aria-hidden="true" />
                {a.text}
              </li>
            )}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-white p-6 shadow-soft sm:p-10">
            <EnquiryForm formId={formId} fields={fields} submitLabel={submitLabel} teamLabel={teamLabel} />
          </div>
        </div>
      </Container>
    </section>);

}