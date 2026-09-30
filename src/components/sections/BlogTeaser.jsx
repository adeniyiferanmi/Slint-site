import React from "react";
import { ArrowRightIcon, BookOpenIcon } from "lucide-react";
import { Container } from "../ui/Container";
import { CtaButton } from "../ui/CtaButton";

export function BlogTeaser() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="flex flex-col gap-6 rounded-3xl bg-sky-100 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <div className="flex gap-5">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-navy-800 sm:flex">
              <BookOpenIcon className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-3xl text-navy-900">
                Travel Insights
              </h2>
              <p className="mt-2 max-w-xl text-ink-muted">
                Visa updates, pilgrimage preparation guides and destination
                notes from our advisors launching soon.
              </p>
            </div>
          </div>
          <CtaButton
            to="/blog"
            variant="primary"
            iconRight={<ArrowRightIcon className="h-4 w-4" />}
            className="w-full sm:w-auto"
          >
            Visit Our Blog
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
