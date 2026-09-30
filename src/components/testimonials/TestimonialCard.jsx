import React from "react";
import { ServiceTag } from "../ui/ServiceTag";

export function TestimonialCard({ testimonial, showTag = true }) {
  const initials = testimonial.name
    .replace(/^(Alhaja|Pastor|Mallam|Mrs\.|Mr\.|The)\s/, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <figure className="flex h-full flex-col rounded-3xl border border-sky-200 bg-white p-7 lg:p-8">
      {showTag && (
        <div>
          <ServiceTag service={testimonial.service} />
        </div>
      )}
      <blockquote
        className={`font-display text-xl leading-snug text-navy-900 ${showTag ? "mt-6" : ""}`}
      >
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-8">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white"
          aria-hidden="true"
        >
          {initials}
        </span>
        <span>
          <span className="block font-semibold text-navy-900">
            {testimonial.name}
          </span>
          <span className="block text-sm text-ink-muted">
            {testimonial.detail}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
