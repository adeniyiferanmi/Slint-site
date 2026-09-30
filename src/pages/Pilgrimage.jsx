import React from "react";
import { PageHero } from "../components/sections/PageHero";
import { PilgrimagePackages } from "../components/sections/PilgrimagePackages";
import { BenefitsList } from "../components/sections/BenefitsList";
import { AccreditationCallout } from "../components/sections/AccreditationCallout";
import { ParallaxStatement } from "../components/sections/ParallaxStatement";
import { TestimonialsSection } from "../components/testimonials/TestimonialsSection";
import { FaqSection } from "../components/faq/FaqSection";
import { EnquirySection } from "../components/forms/EnquirySection";
import { Container } from "../components/ui/Container";
import { CtaButton } from "../components/ui/CtaButton";
import { ServiceTag } from "../components/ui/ServiceTag";
import { WhatsAppIcon } from "../components/icons/WhatsAppIcon";
import { images } from "../data/images";
import { pilgrimageBenefits } from "../data/features";
import { pilgrimageFaqs } from "../data/faqs";
import { pilgrimageFormFields } from "../data/forms";
import { whatsappLink } from "../utils/links";

const WA_MESSAGE =
  "Hello Slint Fly, I would like to speak with a pilgrimage advisor.";

const traditions = [
  {
    title: "Hajj & Umrah",
    text: "For Muslim pilgrims, we manage visas, flights, accommodation close to the Haram, ground transport in Makkah and Madinah, and pre-departure briefings on the rites so every moment can be given to worship.",
  },
  {
    title: "Holy Land pilgrimage",
    text: "For Christian pilgrims, we plan faith journeys through Israel, Jordan, Egypt, Rome and Greece, with experienced guides, time for prayer and reflection, and itineraries built around churches and congregations.",
  },
];

export function Pilgrimage() {
  return (
    <>
      <PageHero
        image={images.heroPilgrimage}
        imageAlt="The old city of Jerusalem at dawn with pilgrims walking in the distance"
        eyebrow={
          <ServiceTag service="pilgrimage" label="Hajj, Umrah & Holy Land" />
        }
        title="Sacred journeys, guided with care."
        subtitle="Organised with religious sensitivity for each tradition, so you can focus on worship — not logistics."
        actions={
          <>
            <CtaButton
              to="#enquire"
              variant="light"
              size="lg"
              className="w-full sm:w-auto"
            >
              Enquire About Pilgrimage
            </CtaButton>
            <CtaButton
              href={whatsappLink(WA_MESSAGE)}
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon />}
              className="w-full sm:w-auto"
            >
              Talk to a Pilgrimage Advisor
            </CtaButton>
          </>
        }
      />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[2rem] font-medium leading-[1.12] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
              Two traditions. The same depth of respect.
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              We guide both Islamic and Christian pilgrimages, and plan each
              with people who understand what the journey means.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:col-span-7">
            {traditions.map((t) => (
              <div
                key={t.title}
                className="border-l-2 border-accent-purple pl-6"
              >
                <h3 className="text-xl font-semibold text-navy-900">
                  {t.title}
                </h3>
                <p className="mt-3 text-ink-muted">{t.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PilgrimagePackages />

      <BenefitsList
        service="pilgrimage"
        title="Peace of mind from first call to homecoming"
        intro="Pilgrimage is a once-in-a-lifetime journey for many. We treat it that way."
        items={pilgrimageBenefits}
        aside={<AccreditationCallout variant="compact" />}
      />

      <ParallaxStatement
        image={images.umrah}
        kicker="Hajj · Umrah · Holy Land"
        statement="Every step of a sacred journey, guided with care."
        ctaLabel="Enquire About Pilgrimage"
        ctaTo="#enquire"
      />

      <FaqSection title="Pilgrimage questions" items={pilgrimageFaqs} />

      <TestimonialsSection
        title="From pilgrims who travelled with us"
        service="pilgrimage"
      />

      <EnquirySection
        formId="pilgrimage-enquiry"
        title="Enquire about your pilgrimage"
        intro="Tell us a little about your plans. A pilgrimage advisor will reply with options, costs and a document checklist."
        fields={pilgrimageFormFields}
        submitLabel="Enquire About Pilgrimage"
        teamLabel="Pilgrimage"
        whatsappLabel="Talk to a Pilgrimage Advisor"
        whatsappMessage={WA_MESSAGE}
      />
    </>
  );
}
