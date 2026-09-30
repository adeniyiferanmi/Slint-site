import React from 'react';
import { Container } from '../components/ui/Container';
import { CtaButton } from '../components/ui/CtaButton';

export function NotFound() {
  return (
    <section className="bg-sky-50 py-28">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-semibold text-sky-600">Page not found</p>
        <h1 className="mt-3 font-display text-5xl font-medium text-navy-900">This route doesn’t exist.</h1>
        <p className="mt-4 text-lg text-ink-muted">But we can still help you get where you’re going.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CtaButton to="/" size="lg">Back to home</CtaButton>
          <CtaButton to="/contact" variant="secondary" size="lg">Talk to an Expert</CtaButton>
        </div>
      </Container>
    </section>);

}