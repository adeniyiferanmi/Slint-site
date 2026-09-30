import React from "react";
import { BriefcaseIcon } from "lucide-react";
import { PageHero } from "../components/sections/PageHero";
import { BenefitsList } from "../components/sections/BenefitsList";
import { EnquirySection } from "../components/forms/EnquirySection";
import { TestimonialCard } from "../components/testimonials/TestimonialCard";
import { Container } from "../components/ui/Container";
import { CtaButton } from "../components/ui/CtaButton";
import { ServiceTag } from "../components/ui/ServiceTag";
import { WhatsAppIcon } from "../components/icons/WhatsAppIcon";
import { images } from "../data/images";
import { flightBenefits } from "../data/features";
import { flightFormFields } from "../data/forms";
import { testimonials } from "../data/testimonials";
import { whatsappLink } from "../utils/links";

const WA_MESSAGE = "Hello Slint Fly, I need help with a flight ticket.";

export function FlightTickets() {
  const flightTestimonial = testimonials.find((t) => t.service === "flights");
  return (
    <>
      <PageHero
        image={images.heroFlights}
        imageAlt="Traveller relaxing in a calm airport lounge overlooking a parked aircraft"
        eyebrow={
          <ServiceTag service="flights" label="Flight Ticketing Assistance" />
        }
        title="Flight tickets, handled by people who pick up."
        subtitle="Domestic and international tickets without the hassle of self-service booking sites. Tell us where you’re going, we’ll find the right fare."
        actions={
          <>
            <CtaButton
              to="#enquire"
              variant="light"
              size="lg"
              className="w-full sm:w-auto"
            >
              Request a Flight Quote
            </CtaButton>
            <CtaButton
              href={whatsappLink(WA_MESSAGE)}
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon />}
              className="w-full sm:w-auto"
            >
              WhatsApp Us for Tickets
            </CtaButton>
          </>
        }
      />

      <BenefitsList
        service="flights"
        title="Why book through a person?"
        intro="Booking sites show you prices. We help you understand them — baggage, change rules, layovers and timing — before you commit."
        items={flightBenefits}
        aside={
          flightTestimonial && (
            <TestimonialCard testimonial={flightTestimonial} showTag={false} />
          )
        }
      />

      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="flex flex-col gap-8 rounded-3xl bg-navy-900 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-14">
            <div className="flex gap-5">
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-redTint text-accent-red sm:flex">
                <BriefcaseIcon className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-3xl text-white">
                  Travelling as a group or company?
                </h2>
                <p className="mt-2 max-w-xl text-sky-100">
                  We handle group and corporate ticketing — from church
                  delegations to staff travel with one point of contact and
                  consolidated quotes.
                </p>
              </div>
            </div>
            <CtaButton
              to="#enquire"
              variant="light"
              size="lg"
              className="w-full sm:w-auto"
            >
              Request a Group Quote
            </CtaButton>
          </div>
        </Container>
      </section>

      <EnquirySection
        formId="flight-enquiry"
        title="Request a flight quote"
        intro="Share your route and rough dates. We’ll reply with fare options — usually the same working day."
        fields={flightFormFields}
        submitLabel="Request a Flight Quote"
        teamLabel="Flight ticketing"
        whatsappLabel="WhatsApp Us for Tickets"
        whatsappMessage={WA_MESSAGE}
      />
    </>
  );
}
