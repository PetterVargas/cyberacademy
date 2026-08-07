import { ImageResponse } from 'next/og';
import { generate as DefaultImage } from 'fumadocs-ui/og';
import { appName } from '@/lib/shared';

export const revalidate = false;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <DefaultImage
      title="Prepárate para proteger el mundo"
      description="Aprende Ciberseguridad con el Kudo Framework de DivisionCero. Elige tu camino y empieza hoy."
      site={appName}
    />,
    size,
  );
}
