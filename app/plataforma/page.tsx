'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Sparkles, 
  Users, 
  MapPin, 
  UserCircle, 
  Ticket, 
  ArrowRight,
  Smartphone,
  Zap,
  TrendingUp,
  Share2
} from 'lucide-react'

export default function PlataformaPage() {
  const recursos = [
    {
      icon: Sparkles,
      title: 'Descoberta Inteligente',
      desc: 'Event Score — nossa tecnologia de recomendação que combina afinidade e social proof para sugerir eventos perfeitos para você.',
      feature: 'Event Score',
    },
    {
      icon: Users,
      title: 'Integração Social',
      desc: 'Conecte-se com amigos, organize caronas, crie grupos e descubra quem mais está indo para o mesmo evento.',
      feature: 'Amigos, caronas, grupos',
    },
    {
      icon: MapPin,
      title: 'Mapa e Geolocalização',
      desc: 'Visualize eventos próximos a você, descubra lugares novos e planeje sua rota com integração de mapas.',
      feature: 'Mapa interativo',
    },
    {
      icon: UserCircle,
      title: 'Perfil Social',
      desc: 'Seu perfil é mais que um perfil — é um feed de experiências, check-ins, badges e memórias compartilhadas.',
      feature: 'Feed, check-in, badges',
    },
    {
      icon: Ticket,
      title: 'Ticketing Integrado',
      desc: 'Compre ingressos diretamente na plataforma, sem sair do app. Tudo em um só lugar.',
      feature: 'Compra integrada',
    },
  ]

  const diferenciais = [
    {
      icon: TrendingUp,
      title: 'Tecnologia de Recomendação',
      desc: 'Algoritmos avançados que aprendem seus gostos e sugerem eventos ideais.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      desc: 'Desenvolvido pensando primeiro em mobile, garantindo uma experiência fluida em qualquer dispositivo.',
    },
    {
      icon: Share2,
      title: 'Design Social e Intuitivo',
      desc: 'Interface pensada para conectar pessoas, com compartilhamento fácil e interações naturais.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Overview */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 text-gradient">
            A Plataforma
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            A Link Up é a plataforma social que conecta você ao seu próximo evento 
            antes mesmo de ele acontecer.
          </p>
          
          {/* Mockup do App */}
          <div className="relative max-w-md mx-auto">
            <div className="glass-effect p-8 rounded-3xl">
              <div className="bg-gradient-to-br from-primary to-neon-purple rounded-2xl p-12 aspect-[9/16] flex flex-col items-center justify-center">
                <Smartphone className="w-24 h-24 text-white mb-4" />
                <p className="text-white text-center font-semibold">Preview do App</p>
                <p className="text-white/80 text-sm mt-2">Em breve</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon-purple/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>
      </section>

      {/* Recursos Principais */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display text-center mb-16"
          >
            Recursos Principais
          </motion.h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {recursos.map((recurso, index) => (
              <motion.div
                key={recurso.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-8 rounded-2xl hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <recurso.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{recurso.title}</h3>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                        {recurso.feature}
                      </span>
                    </div>
                    <p className="text-gray-300">{recurso.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-display text-center mb-16"
        >
          Diferenciais
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {diferenciais.map((diferencial, index) => (
            <motion.div
              key={diferencial.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-8 rounded-2xl text-center hover:scale-105 transition-transform"
            >
              <diferencial.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{diferencial.title}</h3>
              <p className="text-gray-300">{diferencial.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Scroll Reveal - Mockups */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-display text-center mb-16"
          >
            Uma Olhada no App
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-effect p-6 rounded-2xl"
              >
                <div className="bg-gradient-to-br from-primary/30 to-neon-purple/30 rounded-xl aspect-[9/16] flex items-center justify-center">
                  <Smartphone className="w-16 h-16 text-white/50" />
                </div>
                <p className="text-center text-sm text-gray-400 mt-4">Tela {i}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada para Beta */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-black to-neon-purple/30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Quer ser um dos primeiros a testar?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Inscreva-se para o beta fechado e tenha acesso antecipado à plataforma.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-full hover:glow-effect transition-all font-semibold text-lg"
            >
              Inscreva-se para o beta fechado
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

