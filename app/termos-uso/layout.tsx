import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso — Link Up',
  description: 'Termos de Uso da plataforma Link Up. Leia nossos termos e condições de uso.',
  robots: 'noindex, follow',
}

export default function TermosUsoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

