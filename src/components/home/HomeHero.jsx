import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../ui/Container";
import { CtaButton } from "../ui/CtaButton";
import { FlightPath } from "../ui/FlightPath";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { BoardingPass } from "./BoardingPass";
import { services } from "../../data/services";
import { images } from "../../data/images";
import { whatsappLink } from "../../utils/links";

const EASE = [0.23, 1, 0.32, 1];

export function HomeHero() {
  const reduce = useReducedMotion();
  const enter = (i) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay: 0.08 * i, ease: EASE },
  });

  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <img
        src={images.heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
      />

      <div
        className="absolute inset-0 -z-10 bg-navy-950/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 left-0 -z-10 w-full bg-navy-950/30 lg:w-3/5"
        aria-hidden="true"
      />
      <FlightPath />

      <Container className="relative grid items-center gap-12 pb-14 pt-16 sm:pt-20 lg:grid-cols-12 lg:pb-24 lg:pt-28">
        <div className="lg:col-span-7">
          <motion.h1
            {...enter(0)}
            className="font-display text-[2.7rem] font-medium leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]"
          >
            One trusted partner for every journey{" "}
            <span className="relative inline-block whitespace-nowrap">
              that matters.
              <svg
                viewBox="0 0 300 20"
                className="absolute -bottom-2 left-0 h-3 w-full"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M4 14 C 80 4, 200 4, 296 11"
                  fill="none"
                  stroke="#E53935"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: 0.4, ease: EASE }}
                />
              </svg>
            </span>
          </motion.h1>
          <motion.p
            {...enter(1)}
            className="mt-7 max-w-xl text-lg text-sky-100 sm:text-xl"
          >
            Pilgrimage, study abroad, flights and tours planned personally by a
            Nigerian team with more than 10 years of experience.
          </motion.p>
          <motion.div
            {...enter(2)}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
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
          </motion.div>
        </div>

        <motion.div
          className="relative hidden h-[440px] lg:col-span-5 lg:block"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3, ease: EASE }}
        >
          <div className="absolute right-0 top-4">
            <BoardingPass />
          </div>
          <div
            className="float-soft absolute bottom-6 left-0 flex max-w-[280px] items-center gap-3 rounded-2xl bg-white p-4 shadow-lift"
            style={{ animationDelay: "-3.5s" }}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-whatsapp-tint text-whatsapp-dark">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <p className="text-sm text-ink-muted">
              <span className="block font-semibold text-navy-900">
                Real people, real replies
              </span>
              Most WhatsApp enquiries answered within the hour.
            </p>
          </div>
        </motion.div>
      </Container>

      <div className="relative border-t border-white/15 bg-navy-950/50 backdrop-blur-sm">
        <Container className="flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:gap-8">
          <p className="shrink-0 font-semibold text-white">
            What are you planning?
          </p>
          <nav
            aria-label="Our services"
            className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap"
          >
            {services.map((s, i) => (
              <motion.div key={s.key} {...enter(3 + i * 0.5)}>
                <Link
                  to={s.path}
                  className={`flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-5 font-semibold transition-transform duration-150 ease-out hover:-translate-y-0.5 ${s.accent.text}`}
                >
                  <s.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  {s.tagLabel}
                </Link>
              </motion.div>
            ))}
          </nav>
        </Container>
      </div>
    </section>
  );
}
