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
    default: 'Link Up — Conecte-se com o seu próximo evento',
    template: '%s | Link Up',
  },
  description: 'A Link Up conecta pessoas, cenas e experiências — tudo em um só lugar. Plataforma social para eventos.',
  keywords: 'eventos, rede social, plataforma de eventos, conexão, experiências',
  authors: [{ name: 'Link Up' }],
  creator: 'Link Up',
  metadataBase: new URL('https://linkup.app'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Link Up',
    title: 'Link Up — Conecte-se com o seu próximo evento',
    description: 'A Link Up conecta pessoas, cenas e experiências — tudo em um só lugar.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Link Up — Conecte-se com o seu próximo evento',
    description: 'A Link Up conecta pessoas, cenas e experiências — tudo em um só lugar.',
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

