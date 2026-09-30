import React from 'react';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { whatsappLink } from '../../utils/links';

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Slint Fly on WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-[transform,background-color] duration-150 ease-out hover:bg-whatsapp-dark active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900 sm:bottom-6 sm:right-6">
      
      <WhatsAppIcon className="h-7 w-7" />
    </a>);

}