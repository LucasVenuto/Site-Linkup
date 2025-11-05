import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Link Up | Conteúdo sobre eventos e tecnologia',
  description: 'Conteúdo sobre eventos, tecnologia, lifestyle e tudo que move a cena. Tendências, dicas para produtores e histórias da cena.',
  keywords: 'blog eventos, tendências eventos, tecnologia eventos, dicas produtores',
  openGraph: {
    title: 'Blog — Link Up',
    description: 'Conteúdo sobre eventos, tecnologia, lifestyle e tudo que move a cena.',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

