import React from 'react';
import { ChevronDownIcon } from 'lucide-react';

const baseInput =
'block w-full rounded-xl border bg-white px-4 text-base text-navy-900 placeholder:text-ink-soft transition-[border-color,box-shadow] duration-150 focus:outline-none focus:ring-2 focus:ring-sky-300';

export function FormField({ field, id, value, error, onChange }) {
  const errorId = `${id}-error`;
  const stateClass = error ? 'border-accent-red focus:border-accent-red' : 'border-sky-300 focus:border-sky-500';
  const common = {
    id,
    name: field.name,
    value,
    required: field.required,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined
  };

  return (
    <div className={field.half ? 'sm:col-span-1' : 'sm:col-span-2'}>
      <label htmlFor={id} className="mb-2 block text-[15px] font-semibold text-navy-900">
        {field.label}
        {field.required ?
        <span className="text-accent-red" aria-hidden="true"> *</span> :

        <span className="font-normal text-ink-soft"> (optional)</span>
        }
      </label>

      {field.type === 'textarea' ?
      <textarea
        {...common}
        rows={4}
        placeholder={field.placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${baseInput} ${stateClass} min-h-[120px] resize-y py-3`} /> :

      field.type === 'select' ?
      <div className="relative">
          <select
          {...common}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseInput} ${stateClass} h-12 appearance-none pr-11 ${value ? '' : 'text-ink-soft'}`}>
          
            <option value="" disabled>
              Select an option
            </option>
            {field.options?.map((o) =>
          <option key={o} value={o} className="text-navy-900">
                {o}
              </option>
          )}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
        </div> :

      <input
        {...common}
        type={field.type}
        inputMode={field.type === 'tel' ? 'tel' : undefined}
        autoComplete={field.autoComplete}
        placeholder={field.placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${baseInput} ${stateClass} h-12`} />

      }

      {error &&
      <p id={errorId} className="mt-1.5 text-sm font-medium text-accent-red">
          {error}
        </p>
      }
    </div>);

}