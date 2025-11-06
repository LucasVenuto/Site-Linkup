import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: {
    default: 'WeEvent — Descubra os Melhores Rolês',
    template: '%s | WeEvent',
  },
  description: 'A rede social que conecta você aos eventos mais incríveis da sua cidade. Confirme presença, encontre amigos e viva experiências únicas.',
  keywords: 'eventos, festas, rolês, rede social, plataforma de eventos, gamificação, caronas, eventos próximos',
  authors: [{ name: 'WeEvent' }],
  creator: 'WeEvent',
  metadataBase: new URL('https://weevent.app'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'WeEvent',
    title: 'WeEvent — Descubra os Melhores Rolês',
    description: 'A rede social que conecta você aos eventos mais incríveis da sua cidade.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeEvent — Descubra os Melhores Rolês',
    description: 'A rede social que conecta você aos eventos mais incríveis da sua cidade.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

