'use client'

import { motion } from 'framer-motion'
import { Linkedin, Zap, Target, Heart, Lightbulb, Users, Calendar, Rocket } from 'lucide-react'

export default function SobrePage() {
  const equipe = [
    {
      nome: 'Lucas Venuto',
      cargo: 'CEO & Brand Strategy',
      bio: 'Visionário em conectar pessoas e criar experiências únicas.',
      linkedin: '#',
    },
    {
      nome: 'Deivid Moretto',
      cargo: 'CTO & Product',
      bio: 'Especialista em tecnologia e experiência do usuário.',
      linkedin: '#',
    },
  ]

  const valores = [
    { icon: Lightbulb, title: 'Inovação', desc: 'Sempre buscando novas formas de conectar' },
    { icon: Heart, title: 'Diversão', desc: 'Acreditamos que eventos devem ser memoráveis' },
    { icon: Target, title: 'Transparência', desc: 'Comunicação clara e honesta sempre' },
    { icon: Users, title: 'Inclusão', desc: 'Todos são bem-vindos na nossa comunidade' },
    { icon: Zap, title: 'Energia', desc: 'Vibração positiva em tudo que fazemos' },
  ]

  const timeline = [
    { ano: '2024', evento: 'Ideia', desc: 'Nasce a visão da Link Up' },
    { ano: '2025', evento: 'MVP', desc: 'Lançamento da versão beta' },
    { ano: '2026', evento: 'Expansão', desc: 'Crescimento em toda América Latina' },
  ]

  return (
    <div className="pt-20">
      {/* Manifesto */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-8 text-gradient">
            Sobre a Link Up
          </h1>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Acreditamos que eventos não são apenas lugares — são pontos de conexão que mudam vidas.
            </p>
            <p className="text-2xl font-semibold text-primary">
              "We link people. We link vibes. We link up."
            </p>
            <p>
              A Link Up nasceu da necessidade de criar uma experiência mais humana e social 
              para descobrir e viver eventos. Em um mundo cada vez mais digital, queremos 
              reconectar as pessoas através de experiências reais.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold mb-4">Missão</h2>
              <p className="text-gray-300">
                Conectar pessoas e experiências reais por meio da tecnologia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
              <Rocket className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold mb-4">Visão</h2>
              <p className="text-gray-300">
                Ser a principal rede social de eventos da América Latina.
              </p>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-display text-center mb-12"
          >
            Valores
          </motion.h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {valores.map((valor, index) => (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform"
              >
                <valor.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">{valor.title}</h3>
                <p className="text-sm text-gray-400">{valor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Linha do Tempo */}
      <section className="py-20 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold font-display text-center mb-16"
        >
          Nossa Jornada
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={item.ano}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 mb-8"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-xl">
                  {item.ano}
                </div>
              </div>
              <div className="glass-effect p-6 rounded-xl flex-grow">
                <h3 className="text-xl font-bold mb-2">{item.evento}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-display text-center mb-16"
          >
            Equipe Fundadora
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {equipe.map((pessoa, index) => (
              <motion.div
                key={pessoa.nome}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-8 rounded-2xl text-center"
              >
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{pessoa.nome}</h3>
                <p className="text-primary mb-4">{pessoa.cargo}</p>
                <p className="text-gray-300 mb-4">{pessoa.bio}</p>
                <a
                  href={pessoa.linkedin}
                  className="inline-flex items-center gap-2 text-primary hover:text-neon-purple transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A Marca */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold font-display text-center mb-12">
            A Marca
          </h2>

          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Significado do Nome</h3>
              <p className="text-gray-300">
                "Link Up" representa a conexão — entre pessoas, entre eventos, entre momentos. 
                É um convite para se conectar, para criar vínculos reais através de experiências compartilhadas.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Identidade Visual</h3>
              <p className="text-gray-300 mb-4">
                Nossa identidade visual é construída sobre três pilares:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Conexão:</strong> Elementos que se unem e se conectam</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Energia:</strong> Cores vibrantes, especialmente o roxo, que transmite inovação e criatividade</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Modernidade:</strong> Design limpo e tecnológico, mas sempre humano</span>
                </li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-16 h-16 text-white" />
              </div>
              <p className="text-2xl font-bold font-display text-gradient">Link Up</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

