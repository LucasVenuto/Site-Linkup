'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { 
  Sparkles,
  Calendar,
  Users,
  Trophy,
  Smartphone,
  Bell,
  Search,
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  Star,
  Download,
  Globe,
  CheckCircle2
} from 'lucide-react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Mockup slides
  const mockupSlides = [
    { id: 1, title: 'Feed de Eventos', description: 'Descubra os melhores eventos da sua cidade' },
    { id: 2, title: 'Feed Social', description: 'Conecte-se com pessoas e compartilhe momentos' },
    { id: 3, title: 'Detalhes do Evento', description: 'Veja tudo sobre o evento e confirme presença' },
    { id: 4, title: 'Perfil', description: 'Seu perfil com conquistas e níveis' },
  ]

  // Testimonials
  const testimonials = [
    {
      name: 'Maria Silva',
      username: '@maria_silva',
      text: 'Melhor app para descobrir rolês! Sempre encontro os melhores eventos e ainda faço novos amigos.',
      rating: 5,
      avatar: '👩'
    },
    {
      name: 'João Santos',
      username: '@joao_santos',
      text: 'A gamificação é incrível! Fico sempre motivado a participar de mais eventos para subir de nível.',
      rating: 5,
      avatar: '👨'
    },
    {
      name: 'Ana Costa',
      username: '@ana_costa',
      text: 'Sistema de caronas é perfeito! Nunca mais fiquei sem carona para os eventos.',
      rating: 5,
      avatar: '👩‍🦰'
    },
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockupSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Stats counter state
  const [statsVisible, setStatsVisible] = useState(false)
  const [usersCount, setUsersCount] = useState(0)
  const [eventsCount, setEventsCount] = useState(0)
  const [postsCount, setPostsCount] = useState(0)
  const [groupsCount, setGroupsCount] = useState(0)

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          setStatsVisible(true)
          
          // Animate counters
          const animateCounter = (setter: (val: number) => void, end: number, duration: number = 2000) => {
            let start = 0
            const increment = end / (duration / 16)
            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                setter(end)
                clearInterval(timer)
              } else {
                setter(Math.floor(start))
              }
            }, 16)
          }

          animateCounter(setUsersCount, 10000)
          animateCounter(setEventsCount, 5000)
          animateCounter(setPostsCount, 2000)
          animateCounter(setGroupsCount, 500)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [statsVisible])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background-dark to-background-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.3),transparent_50%)]" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-gradient leading-tight"
              >
                🎉 Descubra os Melhores Rolês
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-300 mb-8"
              >
                A rede social que conecta você aos eventos mais incríveis da sua cidade. Confirme presença, encontre amigos e viva experiências únicas.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Link
                  href="/contato"
                  className="neon-button flex items-center justify-center gap-2 text-lg"
                >
                  <Download className="w-5 h-5" />
                  Baixar App
                </Link>
                <Link
                  href="/plataforma"
                  className="px-8 py-4 glass-effect text-white rounded-xl hover:bg-white/10 transition-all font-semibold text-lg flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Ver Demo
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Mockup Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden glass-card p-8">
                <div className="relative h-full bg-gradient-to-br from-primary/20 to-neon-purple/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-64 h-[500px] mx-auto bg-background-dark/50 rounded-[3rem] p-4 border-4 border-primary/30 shadow-neon">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-neon-purple/10 rounded-[2.5rem] flex items-center justify-center">
                        <div className="text-6xl mb-4">{mockupSlides[currentSlide].id === 1 ? '📅' : mockupSlides[currentSlide].id === 2 ? '👥' : mockupSlides[currentSlide].id === 3 ? '🎉' : '🏆'}</div>
                        <h3 className="text-xl font-bold mb-2">{mockupSlides[currentSlide].title}</h3>
                        <p className="text-gray-400">{mockupSlides[currentSlide].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Carousel Controls */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {mockupSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? 'bg-primary w-8' : 'bg-white/30'
                      }`}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            O Que Fazemos
          </h2>
          <p className="text-xl text-gray-300">
            Funcionalidades incríveis para transformar sua experiência com eventos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { 
              icon: Calendar, 
              title: 'Eventos em Destaque', 
              desc: 'Descubra festas e eventos próximos. Confirme presença e veja quem vai. Sistema de caronas integrado.',
              emoji: '🎉'
            },
            { 
              icon: Users, 
              title: 'Rede Social', 
              desc: 'Conecte-se com pessoas que curtem os mesmos eventos. Grupos temáticos, chat em grupo e mensagens diretas.',
              emoji: '👥'
            },
            { 
              icon: Trophy, 
              title: 'Gamificação', 
              desc: 'Níveis e XP, conquistas e badges, ranking semanal. Torne cada evento uma conquista.',
              emoji: '🏆'
            },
            { 
              icon: Smartphone, 
              title: 'PWA', 
              desc: 'Funciona offline, instale no celular, notificações push. Acesse de qualquer lugar.',
              emoji: '📱'
            },
            { 
              icon: Bell, 
              title: 'Notificações', 
              desc: 'Eventos próximos, amigos confirmaram presença, novas mensagens. Nunca perca nada.',
              emoji: '🔔'
            },
            { 
              icon: Search, 
              title: 'Busca Inteligente', 
              desc: 'Filtre por localização, gênero musical, data e horário. Encontre exatamente o que procura.',
              emoji: '🔍'
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card text-center"
            >
              <div className="text-5xl mb-4">{item.emoji}</div>
              <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-gradient-to-b from-background-dark to-primary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display text-center mb-16"
          >
            Como Funciona
          </motion.h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Cadastre', subtitle: 'Crie sua conta grátis', icon: CheckCircle2, desc: 'Cadastro rápido e fácil. Em poucos minutos você já está pronto para descobrir eventos incríveis.' },
                { step: '2', title: 'Explore', subtitle: 'Descubra eventos incríveis', icon: Search, desc: 'Navegue por eventos próximos, filtre por seus interesses e encontre os melhores rolês da cidade.' },
                { step: '3', title: 'Conecte', subtitle: 'Confirme presença e divirta-se', icon: Users, desc: 'Confirme sua presença, veja quem vai, organize caronas e conecte-se com pessoas incríveis.' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-4xl font-bold shadow-neon">
                      {item.step}
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2" />
                    )}
                  </div>
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-primary font-semibold mb-3">{item.subtitle}</p>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Screenshots */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Veja o App em Ação
          </h2>
          <p className="text-xl text-gray-300">
            Explore as principais telas do WeEvent
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl">
              <div className="relative h-[500px] bg-gradient-to-br from-primary/20 to-neon-purple/20 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-8xl mb-4">
                    {currentSlide === 0 ? '📅' : currentSlide === 1 ? '👥' : currentSlide === 2 ? '🎉' : '🏆'}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{mockupSlides[currentSlide].title}</h3>
                  <p className="text-gray-300">{mockupSlides[currentSlide].description}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + mockupSlides.length) % mockupSlides.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-white/20 transition-all"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % mockupSlides.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-white/20 transition-all"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {mockupSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    index === currentSlide 
                      ? 'bg-primary text-white' 
                      : 'glass-effect hover:bg-white/10'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                >
                  {mockupSlides[index].title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section id="stats-section" className="py-20 bg-gradient-to-r from-primary/20 to-neon-purple/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { count: usersCount, label: 'Usuários', icon: Users, suffix: '+' },
              { count: eventsCount, label: 'Eventos', icon: Calendar, suffix: '+' },
              { count: postsCount, label: 'Posts', icon: Sparkles, suffix: '+' },
              { count: groupsCount, label: 'Grupos', icon: Users, suffix: '+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold mb-2 text-gradient">
                  {stat.count.toLocaleString()}{stat.suffix}
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            O Que Dizem Nossos Usuários
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="testimonial-card"
            >
              <div className="flex items-start gap-4">
                <div className="text-6xl">{testimonials[currentTestimonial].avatar}</div>
                <div className="flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg italic text-gray-300 mb-4">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div>
                    <p className="font-bold">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-gray-400">{testimonials[currentTestimonial].username}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-primary w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-primary/20 to-background-dark" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Baixe agora e descubra os melhores eventos da sua cidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contato"
                className="neon-button flex items-center gap-2 text-lg min-w-[200px] justify-center"
              >
                <Download className="w-5 h-5" />
                App Store
              </Link>
              <Link
                href="/contato"
                className="neon-button flex items-center gap-2 text-lg min-w-[200px] justify-center"
              >
                <Download className="w-5 h-5" />
                Google Play
              </Link>
              <Link
                href="/plataforma"
                className="px-8 py-4 glass-effect text-white rounded-xl hover:bg-white/10 transition-all font-semibold text-lg flex items-center gap-2 min-w-[200px] justify-center"
              >
                <Globe className="w-5 h-5" />
                Usar no Navegador
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}