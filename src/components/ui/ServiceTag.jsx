import React from 'react';
import { getService } from '../../utils/links';

export function ServiceTag({ service, label }) {
  const s = getService(service);
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${s.accent.bg} ${s.accent.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.accent.solid}`} aria-hidden="true" />
      {label ?? s.tagLabel}
    </span>);

}