import React from "react";

const LOGO_URL = "";

export function Logo({ size = "header" }) {
  if (size === "footer") {
    return (
      <span className="inline-flex rounded-2xl  shadow-soft">
        <img
          src="/WhatsApp Image 2026-10-02 at 1.08.08 PM.jpeg"
          alt="Slint Fly — Breaking Limits"
          className="h-40 w-auto rounded-2xl"
        />
      </span>
    );
  }
  return (
    <img
      src="/SLINT FLY LOGO.png"
      alt="Slint Fly — Breaking Limits"
      className="h-[90px] w-auto max-lg:h-20"
    />
  );
}
