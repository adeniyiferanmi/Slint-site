import { useMemo, useState } from 'react';

export function useEnquiryForm(fields, formId) {
  const initial = useMemo(() => Object.fromEntries(fields.map((f) => [f.name, ''])), [fields]);
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const setValue = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const next = {};
    fields.forEach((f) => {
      const v = (values[f.name] ?? '').trim();
      if (f.required && !v) {
        next[f.name] = f.type === 'select' ? 'Please choose an option' : `Please enter your ${f.label.toLowerCase()}`;
      } else if (v && f.type === 'email' && !/^\S+@\S+\.\S+$/.test(v)) {
        next[f.name] = 'Please enter a valid email address';
      } else if (v && f.type === 'tel' && v.replace(/\D/g, '').length < 7) {
        next[f.name] = 'Please enter a valid phone or WhatsApp number';
      }
    });
    setErrors(next);
    return next;
  };

  const submit = async (e) => {
    e.preventDefault();
    const found = validate();
    const firstInvalid = fields.find((f) => found[f.name]);
    if (firstInvalid) {
      document.getElementById(`${formId}-${firstInvalid.name}`)?.focus();
      return;
    }
    setStatus('submitting');
    try {
      await new Promise((resolve) => window.setTimeout(resolve, 1100));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setStatus('idle');
  };

  return { values, errors, status, setValue, submit, reset };
}