import Link from 'next/link'
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-display text-gradient mb-4">Link Up</h3>
            <p className="text-sm text-gray-400 mb-4">
              Conectando pessoas, cenas e experiências.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/linkup" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn da Link Up"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/linkup" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram da Link Up"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/linkup" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter da Link Up"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@linkup.app" 
                aria-label="E-mail de contato"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/sobre" className="hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/plataforma" className="hover:text-primary transition-colors">
                  A Plataforma
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/produtores" className="hover:text-primary transition-colors">
                  Para Produtores
                </Link>
              </li>
              <li>
                <Link href="/investidores" className="hover:text-primary transition-colors">
                  Investidores
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Conteúdo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/politica-privacidade" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-uso" className="hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/lgpd" className="hover:text-primary transition-colors">
                  Cookies e LGPD
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Link Up. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

