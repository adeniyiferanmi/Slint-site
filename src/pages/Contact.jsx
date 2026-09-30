import React from "react";
import {
  ArrowUpRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { Container } from "../components/ui/Container";
import { WhatsAppIcon } from "../components/icons/WhatsAppIcon";
import { EnquiryForm } from "../components/forms/EnquiryForm";
import { businessHours, contact, mapEmbedUrl, offices } from "../data/contact";
import { contactFormFields } from "../data/forms";
import { whatsappLink } from "../utils/links";

const channels = [
  {
    label: "Call us",
    value: contact.phoneDisplay,
    href: contact.phoneHref,
    icon: <PhoneIcon className="h-5 w-5" aria-hidden="true" />,
    tone: "bg-sky-100 text-navy-800",
    external: false,
  },
  {
    label: "Chat on WhatsApp",
    value: "Usually replies within the hour",
    href: whatsappLink(),
    icon: <WhatsAppIcon className="h-5 w-5" />,
    tone: "bg-whatsapp-tint text-whatsapp-dark",
    external: true,
  },
  {
    label: "Email us",
    value: contact.email,
    href: contact.emailHref,
    icon: <MailIcon className="h-5 w-5" aria-hidden="true" />,
    tone: "bg-sky-100 text-navy-800",
    external: false,
  },
];

export function Contact() {
  const [headOffice, ...branches] = offices;
  return (
    <>
      <section className="bg-sky-50 pb-20 pt-14 lg:pb-28 lg:pt-20">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
              Talk to an expert
            </h1>
            <p className="mt-5 text-lg text-ink-muted sm:text-xl">
              Tell us what you’re planning a pilgrimage, studies, a flight or a
              holiday and a Slint Fly advisor will get back to you personally.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div
              id="enquire"
              className="scroll-mt-24 rounded-3xl bg-white p-6 shadow-soft sm:p-10 lg:col-span-7"
            >
              <h2 className="mb-6 text-xl font-semibold text-navy-900">
                Send us an enquiry
              </h2>
              <EnquiryForm
                formId="contact-enquiry"
                fields={contactFormFields}
                submitLabel="Send Enquiry"
                teamLabel="Customer care"
              />
            </div>

            <div className="lg:col-span-5">
              <h2 className="text-xl font-semibold text-navy-900">
                Prefer to reach us directly?
              </h2>
              <ul className="mt-5 space-y-3">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-sky-200 transition-shadow duration-150 hover:ring-navy-900/30"
                    >
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${c.tone}`}
                      >
                        {c.icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-navy-900">
                          {c.label}
                        </span>
                        <span className="block truncate text-ink-muted">
                          {c.value}
                        </span>
                      </span>
                      <ArrowUpRightIcon
                        className="h-5 w-5 shrink-0 text-ink-soft transition-colors duration-150 group-hover:text-navy-900"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-navy-900">
                  <ClockIcon
                    className="h-5 w-5 text-sky-600"
                    aria-hidden="true"
                  />
                  Business hours
                </h2>
                <dl className="mt-4 divide-y divide-sky-200 border-y border-sky-200">
                  {businessHours.map((h) => (
                    <div
                      key={h.days}
                      className="flex justify-between gap-4 py-3"
                    >
                      <dt className="text-navy-900">{h.days}</dt>
                      <dd className="text-right text-ink-muted">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="overflow-hidden rounded-3xl bg-sky-100 lg:col-span-7">
            <iframe
              title={`Map of Slint Fly ${headOffice.label}, ${headOffice.city}`}
              src={mapEmbedUrl}
              className="h-[320px] w-full border-0 sm:h-[420px] lg:h-full lg:min-h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-medium text-navy-900 sm:text-4xl">
              Visit our offices
            </h2>
            <div className="mt-8">
              <p className="text-sm font-semibold text-sky-600">
                {headOffice.label}
              </p>
              <h3 className="mt-1 font-display text-2xl text-navy-900">
                {headOffice.city}, {headOffice.state}
              </h3>
              <p className="mt-2 flex gap-2 text-ink-muted">
                <MapPinIcon
                  className="mt-1 h-4 w-4 shrink-0"
                  aria-hidden="true"
                />
                {headOffice.address}
              </p>
            </div>
            <ul className="mt-8 space-y-6 border-t border-sky-200 pt-8">
              {branches.map((b) => (
                <li key={b.city}>
                  <p className="text-sm font-semibold text-sky-600">
                    {b.label}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-navy-900">
                    {b.city}, {b.state}
                  </h3>
                  <p className="mt-1 flex gap-2 text-ink-muted">
                    <MapPinIcon
                      className="mt-1 h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    {b.address}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
