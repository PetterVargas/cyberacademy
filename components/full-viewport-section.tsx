'use client';

import { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef, type ReactNode } from 'react';

// useLayoutEffect warns during SSR; fall back to useEffect there. On the
// client we want the layout version so the size correction below happens
// before paint instead of after, avoiding a visible resize jump.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Measured height of the announcement banner (fixed at 3rem by fumadocs'
// <Banner>) + the nav bar below it, on a first-time visit (banner
// visible) — verified identical at mobile/tablet/desktop widths. Used as
// the static (pre-hydration) fallback so it already matches what the
// layout-effect below computes, instead of starting taller and visibly
// shrinking into place once JS runs (that mismatch was making the
// already-shifted hero text appear to "jump" into its final position on
// load). Returning visitors who dismissed the banner will still see a
// small one-time correction, since its height then collapses to 0.
const BANNER_AND_NAV_HEIGHT_PX = 104;

/**
 * Sizes itself to exactly fill the remaining space in the first screen —
 * `100vh` minus whatever sits above it in normal flow (the announcement
 * banner + nav). Those use fumadocs CSS vars (`--header-height`,
 * `--footer-height`) that aren't actually defined for `HomeLayout`, so a
 * plain `min-h-screen` here would stack on top of the banner/nav and push
 * the hero content below the first screen instead of filling it.
 *
 * Forwards its ref to the underlying `<section>` so callers that need the
 * DOM node (e.g. to scope a gsap.context()) can still get it.
 */
export const FullViewportSection = forwardRef<HTMLElement, { children: ReactNode; className?: string }>(
  function FullViewportSection({ children, className }, forwardedRef) {
    const ref = useRef<HTMLElement>(null);

    useImperativeHandle(forwardedRef, () => ref.current as HTMLElement);

    useIsomorphicLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      const update = () => {
        const top = el.getBoundingClientRect().top + window.scrollY;
        el.style.minHeight = `calc(100vh - ${top}px)`;
      };

      update();
      window.addEventListener('resize', update);
      return () => window.removeEventListener('resize', update);
    }, []);

    return (
      <section
        ref={ref}
        className={className}
        style={{ minHeight: `calc(100vh - ${BANNER_AND_NAV_HEIGHT_PX}px)` }}
      >
        {children}
      </section>
    );
  },
);
