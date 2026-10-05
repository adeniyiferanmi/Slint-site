import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

export function useEnquiryForm(fields, formId) {
  const initial = useMemo(
    () => Object.fromEntries(fields.map((f) => [f.name, ""])),
    [fields],
  );

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const enquiryTemplateId = import.meta.env.VITE_EMAILJS_ENQUIRY_TEMPLATE_ID;
  const autoReplyTemplateId = import.meta.env
    .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

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
      const v = (values[f.name] ?? "").trim();

      if (f.required && !v) {
        next[f.name] =
          f.type === "select"
            ? "Please choose an option"
            : `Please enter your ${f.label.toLowerCase()}`;
      } else if (v && f.type === "email" && !/^\S+@\S+\.\S+$/.test(v)) {
        next[f.name] = "Please enter a valid email address";
      } else if (v && f.type === "tel" && v.replace(/\D/g, "").length < 7) {
        next[f.name] = "Please enter a valid phone or WhatsApp number";
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

    setStatus("submitting");

    try {
      const templateParams = {
        formId,

        fullName: values.name || "",
        email: values.email || "",
        phone: values.phone || "",
        service: values.service || "",
        message: values.message || "",

        enquiryDetails: fields
          .map((f) => {
            const value = values[f.name]?.trim();

            if (!value) return null;

            return `${f.label}: ${value}`;
          })
          .filter(Boolean)
          .join("\n"),
      };

      await emailjs.send(
        serviceId,
        enquiryTemplateId,
        templateParams,
        publicKey,
      );

      await emailjs.send(
        serviceId,
        autoReplyTemplateId,
        templateParams,
        publicKey,
      );

      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setStatus("idle");
  };

  return {
    values,
    errors,
    status,
    setValue,
    submit,
    reset,
  };
}
