const nameField = { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name', placeholder: 'e.g. Adaeze Okonkwo' };
const phoneField = { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, autoComplete: 'tel', placeholder: 'e.g. 0803 000 0000' };
const emailField = { name: 'email', label: 'Email address', type: 'email', required: true, autoComplete: 'email', placeholder: 'you@example.com' };
const messageField = { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Anything else we should know?' };

export const pilgrimageFormFields = [
{ ...nameField, half: true },
{ ...phoneField, half: true },
{ name: 'pilgrimageType', label: 'Pilgrimage type', type: 'select', required: true, options: ['Hajj', 'Umrah', 'Holy Land Tour', 'Not sure yet'] },
{ name: 'travellers', label: 'Number travelling', type: 'text', half: true, placeholder: 'e.g. 2 adults, 1 elderly parent' },
{ name: 'timing', label: 'Preferred timing', type: 'text', half: true, placeholder: 'e.g. Hajj 2027, or December' },
messageField];


export const studyFormFields = [
nameField,
{ ...emailField, half: true },
{ ...phoneField, half: true },
{ name: 'destination', label: 'Preferred study destination', type: 'select', required: true, half: true, options: ['USA', 'United Kingdom', 'Canada', 'Europe (other)', 'Malta', 'Italy', 'Denmark', 'Not sure yet'] },
{ name: 'level', label: 'Education level', type: 'select', required: true, half: true, options: ['Secondary school (WAEC/NECO)', 'Undergraduate degree', 'Postgraduate / Master’s', 'Doctorate / PhD', 'Other'] },
{ name: 'course', label: 'Intended course or field', type: 'text', placeholder: 'e.g. Data Science, Nursing, Business' },
messageField];


export const flightFormFields = [
{ ...nameField, half: true },
{ ...phoneField, half: true },
{ name: 'from', label: 'Flying from', type: 'text', required: true, half: true, placeholder: 'e.g. Lagos' },
{ name: 'to', label: 'Flying to', type: 'text', required: true, half: true, placeholder: 'e.g. London' },
{ name: 'period', label: 'Approximate travel period', type: 'text', placeholder: 'e.g. mid-December, returning January' },
messageField];


export const tourFormFields = [
{ ...nameField, half: true },
{ ...phoneField, half: true },
{ name: 'destination', label: 'Destination interest', type: 'select', required: true, half: true, options: ['Kenya', 'Cape Town', 'Nairobi', 'Zanzibar', 'Egypt', 'Within Nigeria', 'Somewhere else'] },
{ name: 'groupType', label: 'Group type', type: 'select', required: true, half: true, options: ['Solo', 'Family', 'Group'] },
{ name: 'period', label: 'Preferred travel period', type: 'text', placeholder: 'e.g. Easter break, 7 nights' },
messageField];


export const contactFormFields = [
nameField,
{ ...emailField, half: true },
{ ...phoneField, half: true },
{ name: 'service', label: 'Service of interest', type: 'select', required: true, options: ['Pilgrimage', 'Study Abroad', 'Flights', 'Tours', 'Other'] },
{ ...messageField, required: true, placeholder: 'Tell us a little about your plans' }];