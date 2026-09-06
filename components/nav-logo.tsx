'use client';

import Link from 'fumadocs-core/link';
import type { ComponentProps } from 'react';
import { appName } from '@/lib/shared';

/**
 * Rendered via `nav.title` as a function (fumadocs-ui `NavOptions.title`), which is the
 * only way to attach a `title` attribute to the nav logo link — the ReactNode form is
 * wrapped in a Link fumadocs controls and doesn't forward extra props. Must live in a
 * client-component module so the function itself is a valid client reference when the
 * (server) layout config spreads it as a prop into fumadocs' client-side layouts.
 */
export function NavLogo({ href = '/', className, ...props }: ComponentProps<'a'>) {
  return (
    <Link
      href={href}
      title={`${appName} — Inicio`}
      className={className}
      {...props}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 790 790"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo"
      >
        <path
          className="dark:fill-white"
          transform="translate(746,1)"
          d="m0 0 13 2 9 4 6 4 8 9 5 11 1 10v591l-1 17-4 10-8 10-8 5-21 7-69 19-212 58-59 16-5 1h-14l-45-12-62-17-117-32-62-17-58-16-16-5-8-4-8-7-6-10-2-6-1-7-1-233v-97l1-233 1-46 4-11 6-8 7-6 10-5 3-1h12l28 7 44 12 73 20 149 41 47 13 11 2 50-14 47-13 225-62zm-39 92-35 9-65 18-166 46-35 10-14 2-31-8-229-63-47-13h-3l-1 177v336l8 3 47 13 132 37 107 30 17 5 8-1 128-35 135-37 37-10 8-3 1-515z"
          fill="currentColor"
        />
        <path
          className="dark:fill-white"
          transform="translate(149,219)"
          d="m0 0h490l14 7 9 9 6 12 2 15v15l-1 20-1 1h-470v221l12 3 119 33 50 14 17 4 13-4 68-19 119-33 69-19 4 1v57l-3 10-6 9-5 5-7 5-27 8-214 60-9 2h-9l-122-34-82-23-42-12-10-6-7-8-6-12-2-11v-291l2-10 7-14 7-7 10-6z"
          fill="#4DAE84"
        />
      </svg>
      {appName}
    </Link>
  );
}
