import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { FaqAccordion } from "./FaqAccordion";

export function FaqSection({
  title = "Frequently asked questions",
  intro,
  items,
}) {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeader title={title} intro={intro} />
          <p className="mt-6 text-ink-muted">
            Still unsure?
            <Link
              to="/contact"
              className="font-semibold text-navy-800 underline decoration-sky-300 underline-offset-4 hover:text-sky-600"
            >
              Ask an expert directly
            </Link>
            .
          </p>
        </div>
        <div className="lg:col-span-8">
          <FaqAccordion items={items} />
        </div>
      </Container>
    </section>
  );
}
