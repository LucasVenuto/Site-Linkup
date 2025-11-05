import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investidores — Link Up | Oportunidade de Investimento',
  description: 'Faça parte da revolução na forma como as pessoas descobrem e vivem eventos. Oportunidade de investimento pré-seed disponível.',
  keywords: 'investir link up, investimento, pré-seed, oportunidade investimento',
  openGraph: {
    title: 'Investidores — Link Up',
    description: 'Faça parte da revolução na forma como as pessoas descobrem e vivem eventos.',
    type: 'website',
  },
}

export default function InvestidoresLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

