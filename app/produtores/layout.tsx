import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Para Produtores — Link Up | Amplie o alcance do seu evento',
  description: 'Transforme seus eventos em experiências sociais. A Link Up conecta seu evento a um público engajado, gerando mais vendas e presença real.',
  keywords: 'produtores eventos, vender ingressos, marketing eventos, alcance eventos',
  openGraph: {
    title: 'Para Produtores — Link Up',
    description: 'Transforme seus eventos em experiências sociais. Amplie o alcance e aumente as vendas.',
    type: 'website',
  },
}

export default function ProdutoresLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

