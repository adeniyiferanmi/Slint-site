import React from 'react';

/**
 * A background image that stays fixed to the viewport while the section scrolls over it
 * (the "background-attachment: fixed" effect). Uses a clip-path + position: fixed layer
 * so it also works on iOS Safari, where background-attachment: fixed is ignored.
 */
export function FixedBackground({ image, position = 'center', overlayClassName = 'bg-navy-950/60' }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 [clip-path:inset(0)]" aria-hidden="true">
      <div
        className="fixed inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${image})`, backgroundPosition: position }} />
      
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>);

}