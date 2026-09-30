import React from "react";
import { Link } from "react-router-dom";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { SocialIcon } from "../icons/SocialIcon";
import { services } from "../../data/services";
import { businessHours, contact, offices, socials } from "../../data/contact";
import { whatsappLink } from "../../utils/links";

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Destinations", to: "/destinations" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const headingClass = "text-sm font-semibold text-white";
const linkClass =
  "text-sky-200 transition-colors duration-150 hover:text-white";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-sky-200">
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-4">
          <Logo size="footer" />
          <p className="mt-6 font-display text-2xl text-white">
            Breaking Limits.
          </p>
          <p className="mt-3 max-w-sm text-sky-200">
            A Nigerian travel partner for pilgrimage, study abroad, flights and
            tours guiding families and students with personal care for over a
            decade.
          </p>
          <ul className="mt-6 flex gap-2" aria-label="Social media">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-150 hover:bg-white/20"
                >
                  <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
          <nav aria-label="Services">
            <h2 className={headingClass}>Services</h2>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li key={s.key}>
                  <Link to={s.path} className={linkClass}>
                    {s.fullName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company">
            <h2 className={headingClass}>Company</h2>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className={headingClass}>Get in touch</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={contact.phoneHref}
                  className={`flex items-center gap-2 ${linkClass}`}
                >
                  <PhoneIcon className="h-4 w-4 shrink-0" aria-hidden="true" />{" "}
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contact.emailHref}
                  className={`flex items-center gap-2 break-all ${linkClass}`}
                >
                  <MailIcon className="h-4 w-4 shrink-0" aria-hidden="true" />{" "}
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${linkClass}`}
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" /> Chat on WhatsApp
                </a>
              </li>
            </ul>
            <h2 className={`${headingClass} mt-8`}>Business hours</h2>
            <dl className="mt-4 space-y-2 text-sm">
              {businessHours.map((h) => (
                <div key={h.days}>
                  <dt className="text-white">{h.days}</dt>
                  <dd>{h.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className={headingClass}>Offices</h2>
            <ul className="mt-4 space-y-5">
              {offices.map((o) => (
                <li key={o.city} className="flex gap-2">
                  <MapPinIcon
                    className="mt-1 h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block font-medium text-white">
                      {o.city}{" "}
                      <span className="font-normal text-sky-300">
                        · {o.label}
                      </span>
                    </span>
                    <span className="block text-sm">{o.state}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 pb-24 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:pb-6 sm:pr-24">
          <p>
            © {new Date().getFullYear()} Slint Fly Travel & Tours Ltd. All
            rights reserved.
          </p>
          <p className="text-sky-300">
            Breaking Limits · Government-licensed & accredited
          </p>
        </Container>
      </div>
    </footer>
  );
}
