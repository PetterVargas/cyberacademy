'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';

export function ThemedImage({
  light,
  dark,
  alt,
  width,
  height,
  priority = true,
}: {
  light: string;
  dark: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ImageZoom
      src={resolvedTheme === 'dark' ? dark : light}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
    />
  );
}
