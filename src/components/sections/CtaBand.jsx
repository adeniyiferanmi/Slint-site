import React from 'react';
import { Container } from '../ui/Container';
import { CtaButton } from '../ui/CtaButton';
import { FlightPath } from '../ui/FlightPath';
import { FixedBackground } from '../ui/FixedBackground';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { images } from '../../data/images';
import { whatsappLink } from '../../utils/links';

export function CtaBand({
  title = 'Wherever you’re headed, let’s plan it properly.',
  subtitle = 'Speak with a Slint Fly expert today — by phone, at our offices, or on WhatsApp. No forms to pay, no pressure.'
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      <FixedBackground image={images.ctaBand} overlayClassName="bg-navy-950/70" />
      <FlightPath path="M-60 420 C 260 300 520 460 780 300 S 1080 80 1280 120" duration={14} />
      <Container className="relative flex flex-col gap-10 py-24 lg:flex-row lg:items-end lg:justify-between lg:py-36">
        <div className="max-w-2xl">
          <h2 className="font-display text-[2.1rem] font-medium leading-[1.1] tracking-tight text-white sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg text-sky-100">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <CtaButton to="/contact" variant="light" size="lg" className="w-full sm:w-auto">
            Talk to an Expert
          </CtaButton>
          <CtaButton href={whatsappLink()} variant="whatsapp" size="lg" icon={<WhatsAppIcon />} className="w-full sm:w-auto">
            WhatsApp Us
          </CtaButton>
        </div>
      </Container>
    </section>);

}