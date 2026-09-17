import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Propuesta verde | Restaurante El Pela',
  robots: { index: false, follow: false },
};

export default function PropuestaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
