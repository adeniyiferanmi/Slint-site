import React from 'react';
import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-navy-900 text-white hover:bg-navy-700',
  secondary: 'border border-navy-900/20 bg-white text-navy-900 hover:border-navy-900',
  whatsapp: 'bg-whatsapp-dark text-white hover:bg-whatsapp-darker',
  light: 'bg-white text-navy-900 hover:bg-sky-100',
  outlineLight: 'border border-white/50 text-white hover:bg-white/10'
};

const sizes = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-[52px] px-7 text-base'
};

export function CtaButton({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconRight,
  className = '',
  type = 'button',
  disabled,
  onClick,
  ariaLabel
}) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[background-color,border-color,color,transform] duration-150 ease-out active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 disabled:cursor-not-allowed disabled:opacity-70 ${variants[variant]} ${sizes[size]} ${className}`;
  const content =
  <>
      {icon}
      {children}
      {iconRight}
    </>;


  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>);

  }

  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}>
        
        {content}
      </a>);

  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>);

}