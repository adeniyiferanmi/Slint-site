import React from 'react';
import { PlaneIcon } from 'lucide-react';

export function BoardingPass() {
  return (
    <div
      aria-hidden="true"
      className="float-soft w-[360px] overflow-hidden rounded-3xl bg-white text-navy-900 shadow-lift"
      style={{ '--tilt': '-3deg' }}>
      
      <div className="flex items-center justify-between bg-navy-900 px-6 py-3.5 text-white">
        <span className="text-sm font-semibold">Slint Fly · Boarding pass</span>
        <PlaneIcon className="h-4 w-4 text-sky-300" />
      </div>
      <div className="flex items-end justify-between px-6 pb-5 pt-6">
        <div>
          <p className="text-xs font-semibold text-ink-soft">From</p>
          <p className="font-display text-5xl leading-none">IBA</p>
          <p className="mt-1 text-sm text-ink-muted">Ibadan</p>
        </div>
        <div className="relative mx-4 mb-9 flex-1 border-t-2 border-dashed border-sky-300">
          <PlaneIcon className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white text-sky-600" />
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold text-ink-soft">To</p>
          <p className="font-display text-5xl leading-none">ANY</p>
          <p className="mt-1 text-sm text-ink-muted">Wherever you dream</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 border-t border-dashed border-sky-200 px-6 py-4 text-sm">
        <div>
          <p className="text-xs text-ink-soft">Passenger</p>
          <p className="font-semibold">You</p>
        </div>
        <div>
          <p className="text-xs text-ink-soft">Service</p>
          <p className="font-semibold">Personal</p>
        </div>
        <div>
          <p className="text-xs text-ink-soft">Gate</p>
          <p className="font-semibold text-accent-red">No limits</p>
        </div>
      </div>
      <div className="flex h-3">
        <span className="flex-1 bg-accent-red" />
        <span className="flex-1 bg-accent-orangeBright" />
        <span className="flex-1 bg-accent-purple" />
        <span className="flex-1 bg-sky-500" />
      </div>
    </div>);

}