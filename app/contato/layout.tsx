import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato — Link Up | Entre em contato conosco',
  description: 'Estamos aqui para ajudar. Entre em contato com a Link Up e responderemos o mais breve possível.',
  keywords: 'contato link up, suporte, ajuda',
  openGraph: {
    title: 'Contato — Link Up',
    description: 'Estamos aqui para ajudar. Entre em contato conosco.',
    type: 'website',
  },
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

