import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookies e LGPD — Link Up',
  description: 'Informações sobre cookies e conformidade com a LGPD na plataforma Link Up.',
  robots: 'noindex, follow',
}

export default function LGDPLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

