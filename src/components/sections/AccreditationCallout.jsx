import React from 'react';
import { CheckCircle2Icon, ShieldCheckIcon } from 'lucide-react';
import { Container } from '../ui/Container';

const credentials = [
'Registered with the Corporate Affairs Commission (CAC)',
'Licensed Nigerian travel agency',
'Accredited pilgrimage operator'];


export function AccreditationCallout({ variant = 'panel' }) {
  if (variant === 'compact') {
    return (
      <div className="flex gap-4 rounded-2xl bg-accent-purpleTint p-6">
        <ShieldCheckIcon className="h-8 w-8 shrink-0 text-accent-purple" aria-hidden="true" />
        <div>
          <p className="text-lg font-semibold text-navy-900">Licensed & registered</p>
          <p className="mt-1 text-ink-muted">
            Slint Fly is a government-licensed, accredited travel agency. Licence details are available on request before you commit.
          </p>
        </div>
      </div>);

  }

  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 rounded-3xl bg-navy-900 p-8 sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                <ShieldCheckIcon className="h-8 w-8 text-sky-300" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-sky-300">Verified operator</span>
            </div>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
              Government-licensed & accredited
            </h2>
            <p className="mt-4 max-w-xl text-lg text-sky-100">
              Your pilgrimage, studies and travel are too important to trust to an unregistered agent. Slint Fly operates fully licensed, and we’re happy to share our credentials before you commit to anything.
            </p>
          </div>
          <ul className="space-y-4 lg:col-span-5">
            {credentials.map((c) =>
            <li key={c} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-white">
                <CheckCircle2Icon className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
                {c}
              </li>
            )}
          </ul>
        </div>
      </Container>
    </section>);

}