import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Link Up',
  description: 'Política de Privacidade da Link Up. Saiba como coletamos, usamos e protegemos seus dados pessoais.',
  robots: 'noindex, follow',
}

export default function PoliticaPrivacidadeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

