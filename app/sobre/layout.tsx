import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre — Link Up | Conheça nossa história e missão',
  description: 'Conheça a Link Up: nossa missão, visão, valores e equipe. Acreditamos que eventos não são apenas lugares — são pontos de conexão.',
  keywords: 'sobre link up, missão, visão, valores, equipe, história',
  openGraph: {
    title: 'Sobre — Link Up',
    description: 'Conheça a Link Up: nossa missão, visão, valores e equipe.',
    type: 'website',
  },
}

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

