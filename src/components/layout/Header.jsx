import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import { Logo } from "../ui/Logo";
import { CtaButton } from "../ui/CtaButton";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { ServicesDropdown } from "./ServicesDropdown";
import { MobileMenu } from "./MobileMenu";
import { whatsappLink } from "../../utils/links";

const navClass = ({ isActive }) =>
  `relative flex h-10 items-center px-3 text-[15px] font-medium transition-colors duration-150 hover:text-navy-900 ${
    isActive
      ? "text-navy-900 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-navy-900"
      : "text-ink-muted"
  }`;

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled || menuOpen ? "shadow-[0_1px_0_rgba(11,31,58,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[90px] w-full max-w-site items-center justify-between gap-3 px-4 sm:px-8">
        <Link
          to="/"
          aria-label="Slint Fly — home"
          className="shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
        >
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center lg:flex">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <ServicesDropdown />
          <NavLink to="/destinations" className={navClass}>
            Destinations
          </NavLink>
          <NavLink to="/blog" className={navClass}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <CtaButton
            to="/contact"
            size="sm"
            className="px-3.5 sm:h-11 sm:px-5 sm:text-[15px]"
          >
            Talk to an Expert
          </CtaButton>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp-tint text-whatsapp-dark transition-colors duration-150 hover:bg-whatsapp hover:text-white lg:hidden"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy-900 transition-colors duration-150 hover:bg-sky-100 lg:hidden"
          >
            {menuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <MobileMenu open={menuOpen} />
    </header>
  );
}
