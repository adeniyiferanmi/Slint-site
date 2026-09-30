import React from "react";
import { PageHero } from "../components/sections/PageHero";
import { FeatureGrid } from "../components/sections/FeatureGrid";
import { AccreditationCallout } from "../components/sections/AccreditationCallout";
import { CtaBand } from "../components/sections/CtaBand";
import { Container } from "../components/ui/Container";
import { CtaButton } from "../components/ui/CtaButton";
import { WhatsAppIcon } from "../components/icons/WhatsAppIcon";
import { aboutValues } from "../data/features";
import { images } from "../data/images";
import { whatsappLink } from "../utils/links";

const facts = [
  { value: "10+", label: "years guiding Nigerian travellers" },
  { value: "1,000+", label: "pilgrims, students and families served" },
  { value: "3", label: "offices in Ibadan, Osogbo and Abeokuta" },
];

export function About() {
  return (
    <>
      <PageHero
        image={images.heroAbout}
        imageAlt="Slint Fly consultants advising a couple in the Ibadan office"
        eyebrow={
          <span className="text-sm font-semibold text-sky-300">
            About Slint Fly · Breaking Limits
          </span>
        }
        title="Breaking limits, one journey at a time."
        subtitle="We help Nigerians reach the places that matter most sacred sites, great universities and new horizons with personal care at every step."
        actions={
          <>
            <CtaButton
              to="/contact"
              variant="light"
              size="lg"
              className="w-full sm:w-auto"
            >
              Talk to an Expert
            </CtaButton>
            <CtaButton
              href={whatsappLink()}
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
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl">
              Travel that changes lives deserves more than a booking reference.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-ink-muted lg:col-span-7">
            <p>
              Slint Fly began in Ibadan more than a decade ago with a simple
              conviction: the journeys that shape our lives a first Hajj, a
              child’s place at a foreign university, a long-awaited family
              holiday should be handled by people who genuinely care how they
              turn out.
            </p>
            <p>
              Since then we have guided over 1,000 clients across pilgrimage,
              study abroad, flight ticketing and tours. Many came back for the
              next journey, and brought their families, congregations and
              colleagues with them.
            </p>
            <p>
              Today, from our head office in Ibadan and branches in Osogbo and
              Abeokuta, we remain what we set out to be: a Nigerian team you can
              visit, call or message, who will tell you the truth and then do
              the work.
            </p>
            <dl className="grid gap-6 border-t border-sky-200 pt-8 sm:grid-cols-3">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <span className="block font-display text-4xl text-navy-900">
                      {f.value}
                    </span>
                    <span className="mt-1 block text-base text-ink-muted">
                      {f.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <FeatureGrid
        title="What we stand for"
        intro="The values behind every trip we plan — and the reason clients keep coming back."
        items={aboutValues}
      />

      <AccreditationCallout />
      <CtaBand title="Let’s plan your next journey together." />
    </>
  );
}
