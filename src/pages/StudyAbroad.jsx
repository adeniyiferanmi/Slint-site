import React from "react";
import { InfoIcon } from "lucide-react";
import { PageHero } from "../components/sections/PageHero";
import { ProcessSteps } from "../components/sections/ProcessSteps";
import { BenefitsList } from "../components/sections/BenefitsList";
import { ParallaxStatement } from "../components/sections/ParallaxStatement";
import { DestinationGrid } from "../components/destinations/DestinationGrid";
import { TestimonialsSection } from "../components/testimonials/TestimonialsSection";
import { FaqSection } from "../components/faq/FaqSection";
import { EnquirySection } from "../components/forms/EnquirySection";
import { Container } from "../components/ui/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { CtaButton } from "../components/ui/CtaButton";
import { ServiceTag } from "../components/ui/ServiceTag";
import { WhatsAppIcon } from "../components/icons/WhatsAppIcon";
import { images } from "../data/images";
import { destinations } from "../data/destinations";
import { studyBenefits, studyProcess } from "../data/features";
import { studyFaqs } from "../data/faqs";
import { studyFormFields } from "../data/forms";
import { whatsappLink } from "../utils/links";

const WA_MESSAGE =
  "Hello Slint Fly, I would like to start my study abroad journey.";

export function StudyAbroad() {
  const studyDestinations = destinations.filter((d) => d.category === "study");
  return (
    <>
      <PageHero
        image={images.heroStudy}
        imageAlt="Two Nigerian students walking on a leafy university campus"
        eyebrow={
          <ServiceTag service="study" label="Study Abroad Consultation" />
        }
        title="Study abroad, with a clear plan from day one."
        subtitle="Honest, end-to-end guidance — from choosing a country and course to applications, admission support and visa preparation."
        imagePosition="center 35%"
        actions={
          <>
            <CtaButton
              to="#enquire"
              variant="light"
              size="lg"
              className="w-full sm:w-auto"
            >
              Book a Free Consultation
            </CtaButton>
            <CtaButton
              href={whatsappLink(WA_MESSAGE)}
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon />}
              className="w-full sm:w-auto"
            >
              WhatsApp Us
            </CtaButton>
          </>
        }
      />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeader
              title="Guidance for the whole journey, not just the application"
              intro="We help you pick the right destination and course for your grades, goals and budget, prepare strong applications, and get ready for life abroad."
            />
          </div>
          <div className="lg:col-span-6 lg:pt-3">
            <div className="flex gap-4 rounded-2xl bg-sky-100 p-6">
              <InfoIcon
                className="mt-0.5 h-6 w-6 shrink-0 text-sky-600"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-navy-900">An honest promise</p>
                <p className="mt-1 text-ink-muted">
                  Admission and visa decisions rest with universities and
                  embassies no honest consultant can guarantee them. What we
                  promise is clarity, careful preparation and support at every
                  step.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 lg:pb-28">
        <Container>
          <h2 className="font-display text-3xl font-medium text-navy-900 sm:text-4xl">
            Where our students study
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-muted">
            Seven destinations we know well, each with its own strengths and
            requirements.
          </p>
          <div className="mt-10">
            <DestinationGrid items={studyDestinations} />
          </div>
        </Container>
      </section>

      <ProcessSteps
        id="process"
        title="How your consultation becomes an admission"
        intro="A clear four-stage journey, with your advisor alongside you throughout."
        steps={studyProcess}
      />

      <BenefitsList
        service="study"
        title="Less guesswork. More confidence."
        intro="Studying abroad involves a lot of moving parts. We make sure none of them catch you off guard."
        items={studyBenefits}
      />

      <ParallaxStatement
        image={images.uk}
        kicker="Study Abroad"
        statement="Your future campus is closer than it looks."
        ctaLabel="Book a Free Consultation"
        ctaTo="#enquire"
      />

      <FaqSection title="Study abroad questions" items={studyFaqs} />

      <TestimonialsSection title="From students and parents" service="study" />

      <EnquirySection
        formId="study-enquiry"
        title="Book your free consultation"
        intro="Share where you are now and where you’d like to go. An advisor will arrange a free, no-obligation consultation."
        fields={studyFormFields}
        submitLabel="Book a Free Consultation"
        teamLabel="Study abroad"
        whatsappLabel="Start Your Study Abroad Journey"
        whatsappMessage={WA_MESSAGE}
      />
    </>
  );
}
