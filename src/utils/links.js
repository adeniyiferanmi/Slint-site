import { contact } from '../data/contact';
import { services } from '../data/services';

export const DEFAULT_WHATSAPP_MESSAGE = 'Hello Slint Fly, I would like to speak with a travel expert.';

export function whatsappLink(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getService(key) {
  const found = services.find((s) => s.key === key);
  if (!found) throw new Error(`Unknown service: ${key}`);
  return found;
}