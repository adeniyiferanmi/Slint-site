import React from "react";
import { PageHero } from "../components/sections/PageHero";
import { TourPackageTypes } from "../components/sections/TourPackageTypes";
import { BenefitsList } from "../components/sections/BenefitsList";
import { ParallaxStatement } from "../components/sections/ParallaxStatement";
import { DestinationGrid } from "../components/destinations/DestinationGrid";
import { TestimonialsSection } from "../components/testimonials/TestimonialsSection";
import { EnquirySection } from "../components/forms/EnquirySection";
import { Container } from "../components/ui/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { CtaButton } from "../components/ui/CtaButton";
import { ServiceTag } from "../components/ui/ServiceTag";
import { images } from "../data/images";
import { destinations } from "../data/destinations";
import { tourBenefits } from "../data/features";
import { tourFormFields } from "../data/forms";

const WA_MESSAGE = "Hello Slint Fly, I would like help planning a trip.";

export function TourPackages() {
  const tourDestinations = destinations.filter((d) => d.category === "tours");
  return (
    <>
      <PageHero
        image={images.heroTours}
        imageAlt="Nigerian family laughing on a safari vehicle with giraffes in the distance"
        eyebrow={
          <ServiceTag service="tours" label="Tour & Vacation Packages" />
        }
        title="Curated trips, from family holidays to group getaways."
        subtitle="Local and international tours planned around your people, pace and budget with support reachable the whole way."
        actions={
          <>
            <CtaButton
              to="#enquire"
              variant="light"
              size="lg"
              className="w-full sm:w-auto"
            >
              Plan My Trip
            </CtaButton>
            <CtaButton
              to="#packages"
              variant="outlineLight"
              size="lg"
              className="w-full sm:w-auto"
            >
              Explore Tour Packages
            </CtaButton>
          </>
        }
      />

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            title="Destinations our travellers love"
            intro="From safaris to spice islands — each trip is built with trusted local partners and tailored to how you like to travel."
          />

          <div className="mt-12">
            <DestinationGrid items={tourDestinations} />
          </div>
        </Container>
      </section>

      <ParallaxStatement
        image={images.kenya}
        kicker="Tour Packages"
        statement="Some views are worth the whole journey."
        ctaLabel="Plan My Trip"
        ctaTo="#enquire"
      />

      <TourPackageTypes />

      <BenefitsList
        service="tours"
        title="Holidays that feel planned for you — because they are"
        intro="We listen first, then build a trip that fits. No generic brochures."
        items={tourBenefits}
      />

      <TestimonialsSection
        title="From travellers who went with us"
        service="tours"
      />

      <EnquirySection
        formId="tour-enquiry"
        title="Plan your trip with us"
        intro="Tell us where you’re dreaming of and who’s coming. We’ll send tailored options and an estimated budget."
        fields={tourFormFields}
        submitLabel="Plan My Trip"
        teamLabel="Tours"
        whatsappLabel="Chat About a Trip"
        whatsappMessage={WA_MESSAGE}
      />
    </>
  );
}
