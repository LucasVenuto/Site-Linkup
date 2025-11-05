'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Zap, 
  Users, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  TrendingUp,
  MapPin,
  Share2,
  Ticket,
  Target,
  BarChart3
} from 'lucide-react'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(106,27,154,0.3),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 text-gradient">
              Conecte-se com o seu próximo evento.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              A Link Up conecta pessoas, cenas e experiências — tudo em um só lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/plataforma"
                className="px-8 py-4 bg-gradient-primary text-white rounded-full hover:glow-effect transition-all font-semibold text-lg flex items-center justify-center gap-2"
              >
                Explore a Plataforma
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/produtores"
                className="px-8 py-4 glass-effect text-white rounded-full hover:bg-white/20 transition-all font-semibold text-lg"
              >
                Para Produtores
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-neon-purple/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* O que é a Link Up */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            O que é a <span className="text-gradient">Link Up</span>
          </h2>
          <p className="text-xl text-gray-300">
            Somos uma plataforma social para eventos que transforma a forma como você descobre, 
            compartilha e vive experiências.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Users, title: 'Conexão', desc: 'Conecte-se com pessoas que compartilham seus interesses' },
            { icon: Compass, title: 'Descoberta', desc: 'Descubra eventos perfeitos através de inteligência artificial' },
            { icon: Sparkles, title: 'Experiência', desc: 'Viva momentos únicos com quem realmente importa' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect p-8 rounded-2xl text-center hover:scale-105 transition-transform"
            >
              <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display text-center mb-16"
          >
            Como Funciona
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Descubra', icon: Compass },
                { step: '2', title: 'Conecte-se', icon: Users },
                { step: '3', title: 'Vá junto', icon: MapPin },
                { step: '4', title: 'Compartilhe', icon: Share2 },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem é */}
      <section className="py-20 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-display text-center mb-16"
        >
          Para Quem é
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Usuários</h3>
            <p className="text-gray-300 mb-4">Quem vive a cena</p>
            <p className="text-sm text-gray-400">
              Descubra eventos personalizados, conecte-se com amigos, organize caronas e 
              compartilhe suas experiências com uma comunidade engajada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <Target className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Produtores</h3>
            <p className="text-gray-300 mb-4">Quem faz acontecer</p>
            <p className="text-sm text-gray-400">
              Amplie o alcance do seu evento, conecte-se com o público certo, gerencie 
              vendas e obtenha insights valiosos sobre seus frequentadores.
            </p>
            <Link
              href="/produtores"
              className="inline-flex items-center gap-2 mt-4 text-primary hover:text-neon-purple transition-colors font-medium"
            >
              Conheça a solução <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Chamada para Produtores */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-neon-purple/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Produz eventos?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Conecte-se a um novo público e aumente seu alcance.
            </p>
            <Link
              href="/produtores"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-full hover:glow-effect transition-all font-semibold text-lg"
            >
              Conheça a solução para produtores
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold">+50 eventos conectados nas primeiras semanas</span>
          </div>
          <p className="text-gray-400 text-sm">
            Junte-se aos early adopters que já estão transformando a forma como vivem eventos
          </p>
        </motion.div>

        {/* Placeholder para logos de parceiros */}
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-32 h-16 glass-effect rounded-lg flex items-center justify-center">
              <span className="text-xs text-gray-400">Evento {i}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/20 to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Join the <span className="text-gradient">wave</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Faça parte da revolução na forma como as pessoas descobrem e vivem eventos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="px-8 py-4 bg-gradient-primary text-white rounded-full hover:glow-effect transition-all font-semibold text-lg"
              >
                Quero participar
              </Link>
              <Link
                href="/investidores"
                className="px-8 py-4 glass-effect text-white rounded-full hover:bg-white/20 transition-all font-semibold text-lg"
              >
                Quero investir
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

