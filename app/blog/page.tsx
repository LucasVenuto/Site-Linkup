'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

export default function BlogPage() {
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const categorias = [
    'Tendências de Eventos',
    'Tecnologia & Experiência',
    'Histórias da Cena',
    'Dicas para Produtores',
    'Novidades da Link Up',
  ]

  const posts = [
    {
      id: 1,
      categoria: 'Tendências de Eventos',
      titulo: 'O futuro dos eventos pós-pandemia',
      resumo: 'Como a tecnologia está transformando a forma como vivemos eventos e experiências sociais.',
      data: '15 Jan 2025',
      leitura: '5 min',
    },
    {
      id: 2,
      categoria: 'Tecnologia & Experiência',
      titulo: 'Como a IA está revolucionando a descoberta de eventos',
      resumo: 'Entenda como algoritmos de recomendação podem conectar você aos eventos perfeitos.',
      data: '10 Jan 2025',
      leitura: '7 min',
    },
    {
      id: 3,
      categoria: 'Histórias da Cena',
      titulo: 'Conectando pessoas através da música',
      resumo: 'Histórias reais de conexões que aconteceram em eventos e mudaram vidas.',
      data: '5 Jan 2025',
      leitura: '4 min',
    },
    {
      id: 4,
      categoria: 'Dicas para Produtores',
      titulo: 'Como aumentar o alcance do seu evento',
      resumo: 'Estratégias práticas para conectar seu evento com o público certo.',
      data: '1 Jan 2025',
      leitura: '6 min',
    },
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Integração com Mailchimp ou outro serviço
    console.log('Newsletter signup:', newsletterEmail)
    alert('Obrigado por se inscrever!')
    setNewsletterEmail('')
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 text-gradient">
            Blog
          </h1>
          <p className="text-xl text-white">
            Conteúdo sobre eventos, tecnologia, lifestyle e tudo que move a cena.
          </p>
        </motion.div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gradient-to-r from-primary/20 to-neon-purple/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Fique por dentro da cena.</h2>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Seu e-mail"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-primary text-white rounded-full hover:glow-effect transition-all font-semibold flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Assinar
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className="px-4 py-2 glass-effect rounded-full text-sm hover:bg-white/20 transition-all"
            >
              {categoria}
            </button>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform"
            >
              <div className="mb-4">
                <span className="text-xs text-primary font-semibold">{post.categoria}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white">{post.titulo}</h2>
              <p className="text-white mb-4 text-sm">{post.resumo}</p>
              <div className="flex items-center justify-between text-sm text-white/70 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.data}</span>
                </div>
                <span>{post.leitura} de leitura</span>
              </div>
              <button
                onClick={() => alert('Em breve: artigo completo disponível')}
                className="inline-flex items-center gap-2 text-primary hover:text-neon-purple font-medium"
              >
                Ler mais
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-display mb-4 text-white">
              Quer contribuir com conteúdo?
            </h2>
            <p className="text-white mb-8">
              Estamos sempre abertos a colaborações e histórias interessantes sobre eventos e experiências.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-full hover:glow-effect transition-all font-semibold"
            >
              Entre em contato
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

