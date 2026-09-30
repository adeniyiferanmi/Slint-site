import React from 'react';
import { images } from '../../data/images';

export function MapTexture({ className = 'opacity-70' }) {
  return (
    <img
      src={images.mapTexture}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover mix-blend-multiply ${className}`} />);


}