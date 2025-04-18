'use client';

import Link from 'next/link';

import { cn } from '@/common/utils';

const Wrapper = ({ href, children }) =>
  href ? (
    <Link href={href} target="_blank">
      {children}
    </Link>
  ) : (
    children
  );

const RainbowButton = ({ children, className, ...props }) => {
  return (
    <Wrapper href={props?.href}>
      <button
        className={cn(
          'animate-rainbow focus-visible:ring-ring group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-white transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
          'before:animate-rainbow before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]',
          'bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]',
          className
        )}
        {...props}
      >
        {children}
      </button>
    </Wrapper>
  );
};

export default RainbowButton;
