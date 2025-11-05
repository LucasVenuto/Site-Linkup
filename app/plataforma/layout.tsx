import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Plataforma — Link Up | Recursos e Diferenciais',
  description: 'Conheça os recursos da plataforma Link Up: Event Score, integração social, mapa interativo, ticketing integrado e muito mais.',
  keywords: 'plataforma link up, recursos, event score, ticketing, mapa eventos',
  openGraph: {
    title: 'A Plataforma — Link Up',
    description: 'Conheça os recursos da plataforma Link Up: Event Score, integração social, mapa interativo.',
    type: 'website',
  },
}

export default function PlataformaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

