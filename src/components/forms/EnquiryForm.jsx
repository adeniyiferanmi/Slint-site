import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircleIcon, CheckIcon, Loader2Icon } from 'lucide-react';
import { FormField } from './FormField';
import { CtaButton } from '../ui/CtaButton';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { useEnquiryForm } from '../../hooks/useEnquiryForm';
import { whatsappLink } from '../../utils/links';

export function EnquiryForm({ formId, fields, submitLabel, teamLabel }) {
  const { values, errors, status, setValue, submit, reset } = useEnquiryForm(fields, formId);
  const firstName = (values.name ?? '').trim().split(' ')[0];

  const followUpMessage = [
  `Hello Slint Fly, I just sent a ${teamLabel.toLowerCase()} enquiry on your website.`,
  ...fields.
  filter((f) => f.type !== 'textarea' && values[f.name]?.trim()).
  map((f) => `${f.label}: ${values[f.name].trim()}`)].
  join('\n');

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === 'success' ?
      <motion.div
        key="success"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
        role="status"
        className="py-6 text-center sm:py-10">
        
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp-tint text-whatsapp-dark">
            <CheckIcon className="h-7 w-7" aria-hidden="true" />
          </span>
          <h3 className="mt-6 font-display text-3xl text-navy-900">Thank you{firstName ? `, ${firstName}` : ''}.</h3>
          <p className="mx-auto mt-3 max-w-md text-ink-muted">
            Your enquiry is with our {teamLabel.toLowerCase()} team. An expert will contact you on{' '}
            <span className="font-semibold text-navy-900">{values.phone || 'your number'}</span> within one working hour (Mon–Sat).
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton href={whatsappLink(followUpMessage)} variant="whatsapp" icon={<WhatsAppIcon />} className="w-full sm:w-auto">
              Continue on WhatsApp
            </CtaButton>
            <CtaButton variant="secondary" onClick={reset} className="w-full sm:w-auto">
              Send another enquiry
            </CtaButton>
          </div>
        </motion.div> :

      <motion.form
        key="form"
        id={formId}
        noValidate
        onSubmit={submit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="grid gap-5 sm:grid-cols-2">
        
          {status === 'error' &&
        <div role="alert" className="flex gap-3 rounded-xl bg-accent-redTint p-4 text-accent-red sm:col-span-2">
              <AlertCircleIcon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <p className="text-[15px] font-medium">We couldn’t send your enquiry. Please try again, or message us on WhatsApp.</p>
            </div>
        }
          {fields.map((f) =>
        <FormField
          key={f.name}
          field={f}
          id={`${formId}-${f.name}`}
          value={values[f.name] ?? ''}
          error={errors[f.name]}
          onChange={(v) => setValue(f.name, v)} />

        )}
          <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <CtaButton type="submit" size="lg" disabled={status === 'submitting'} className="w-full sm:w-auto">
              {status === 'submitting' ?
            <>
                  <Loader2Icon className="h-5 w-5 animate-spin" aria-hidden="true" />
                  Sending…
                </> :

            submitLabel
            }
            </CtaButton>
            <p className="text-sm text-ink-soft">No payment required. We only use your details to reply.</p>
          </div>
        </motion.form>
      }
    </AnimatePresence>);

}