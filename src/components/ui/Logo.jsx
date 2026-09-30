import React from "react";

const LOGO_URL = "";

export function Logo({ size = "header" }) {
  if (size === "footer") {
    return (
      <span className="inline-flex rounded-2xl  shadow-soft">
        <img
          src="/download__3_-removebg-preview.png"
          alt="Slint Fly — Breaking Limits"
          className="h-40 w-auto"
        />
      </span>
    );
  }
  return (
    <img
      src="/download__2_-removebg-preview.png"
      alt="Slint Fly — Breaking Limits"
      className="h-25 w-auto sm:h-24"
    />
  );
}
