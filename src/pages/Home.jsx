import React from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { DestinationMarquee } from '../components/home/DestinationMarquee';
import { StatsStrip } from '../components/sections/StatsStrip';
import { FeatureGrid } from '../components/sections/FeatureGrid';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { BlogTeaser } from '../components/sections/BlogTeaser';
import { CtaBand } from '../components/sections/CtaBand';
import { ParallaxStatement } from '../components/sections/ParallaxStatement';
import { DestinationShowcase } from '../components/destinations/DestinationShowcase';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { FaqSection } from '../components/faq/FaqSection';
import { homeProcess, whyChooseUs } from '../data/features';
import { homeFaqs } from '../data/faqs';
import { images } from '../data/images';

export function Home() {
  return (
    <>
      <HomeHero />
      <StatsStrip />
      <DestinationMarquee />
      <ServicesOverview />
      <ParallaxStatement
        image={images.zanzibar}
        kicker="Breaking Limits"
        statement="The world is wider than you think. Let’s go see it — together."
        ctaLabel="Talk to an Expert"
        ctaTo="/contact" />
      
      <FeatureGrid
        title="Why families and students choose Slint Fly"
        intro="We’re not an aggregator. We’re the people who answer your call, remember your plans and see them through."
        items={whyChooseUs} />
      
      <ProcessSteps
        title="How it works"
        intro="Four simple steps from first message to a trip that’s fully taken care of."
        steps={homeProcess} />
      
      <DestinationShowcase />
      <TestimonialsSection
        title="In our clients’ words"
        intro="Pilgrims, students, families and business travellers on working with us."
        layout="carousel" />
      
      <BlogTeaser />
      <FaqSection items={homeFaqs} intro="Quick answers to what people ask us most." />
      <CtaBand />
    </>);

}