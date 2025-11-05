'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Download, 
  Mail, 
  Linkedin,
  BarChart3,
  Target,
  Rocket,
  Ticket
} from 'lucide-react'

export default function InvestidoresPage() {
  const indicadores = [
    { label: 'Usuários em early access', value: '500+', icon: Users },
    { label: 'Eventos cadastrados', value: '50+', icon: Calendar },
    { label: 'Taxa de engajamento', value: '85%', icon: TrendingUp },
  ]

  return (
    <div className="pt-16 bg-white text-gray-900">
      {/* Hero Investidores */}
      <section className="py-12 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 text-gradient">
            Investidores
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-6">
            Faça parte da revolução na forma como as pessoas descobrem e vivem eventos.
          </p>
        </motion.div>
      </section>

      {/* Apresentação */}
      <section className="py-12 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-xl mb-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold font-display mb-4 text-gray-900">Oportunidade de Investimento</h2>
              <div className="space-y-3 text-gray-700">
                <p className="text-base leading-relaxed">
                  A Link Up está na vanguarda de uma nova geração de plataformas sociais focadas em 
                  experiências reais. Com um mercado de eventos em crescimento constante e uma geração 
                  que valoriza conexões autênticas, estamos posicionados para capturar uma fatia 
                  significativa desse mercado.
                </p>
                <p className="text-base leading-relaxed">
                  Estamos buscando investidores estratégicos que compartilhem nossa visão de conectar 
                  pessoas através de experiências reais. Oferecemos a oportunidade de participar de 
                  uma rodada pré-seed.
                </p>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg border-2 border-primary">
                  <p className="text-base font-semibold text-primary">
                    Rodada pré-seed disponível — 5% de participação
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a
                href="mailto:invest@linkup.app?subject=Solicitação de Deck de Investimento"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-full hover:opacity-90 transition-opacity font-semibold"
              >
                <Download className="w-4 h-4" />
                Solicitar Deck (PDF)
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Indicadores */}
      <section className="py-12 container mx-auto px-4 bg-white">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-display text-center mb-10 text-gray-900"
        >
          Indicadores
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {indicadores.map((indicador, index) => (
            <motion.div
              key={indicador.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl text-center shadow-md border border-gray-100"
            >
              <indicador.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold font-display mb-2 text-gradient">
                {indicador.value}
              </div>
              <p className="text-gray-700 text-sm">{indicador.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modelo de Negócio */}
      <section className="py-12 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display text-center mb-10 text-gray-900"
          >
            Modelo de Negócio
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Ticket,
                title: 'Comissão de Ticketing',
                desc: 'Receita através de taxa sobre vendas de ingressos',
              },
              {
                icon: Target,
                title: 'Marketing Premium',
                desc: 'Anúncios e destaque para eventos parceiros',
              },
              {
                icon: BarChart3,
                title: 'Analytics e Insights',
                desc: 'Vendas de dados agregados e relatórios para produtores',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <item.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sala de Imprensa */}
      <section className="py-12 container mx-auto px-4 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold font-display text-center mb-8 text-gray-900">
            Sala de Imprensa
          </h2>

          <div className="bg-white p-6 rounded-xl space-y-6 shadow-md border border-gray-100">
            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Press Releases</h3>
              <p className="text-gray-700 mb-4 text-base">
                Acompanhe nossos comunicados oficiais e novidades.
              </p>
                  <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="text-sm text-gray-700">Release {i} — {new Date().toLocaleDateString('pt-BR')}</span>
                    <a 
                      href="mailto:imprensa@linkup.app?subject=Solicitação de Release"
                      className="text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      Solicitar PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Assets de Marca</h3>
              <p className="text-gray-700 mb-4 text-base">
                Logos, fotos oficiais e materiais de marca disponíveis para download.
              </p>
              <a
                href="mailto:imprensa@linkup.app?subject=Solicitação de Kit de Mídia"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm"
              >
                <Download className="w-4 h-4" />
                Solicitar kit de mídia
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contato */}
      <section className="py-12 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-display mb-4 text-gray-900">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Quer saber mais sobre oportunidades de investimento ou parceria?
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:invest@linkup.app"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full hover:bg-gray-50 transition-all font-medium text-sm shadow-md border border-gray-200 text-gray-900"
              >
                <Mail className="w-4 h-4" />
                invest@linkup.app
              </a>
              <a
                href="https://www.linkedin.com/company/linkup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Link Up"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full hover:bg-gray-50 transition-all font-medium text-sm shadow-md border border-gray-200 text-gray-900"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn da Equipe
              </a>
            </div>

            <div className="mt-8">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-full hover:opacity-90 transition-opacity font-semibold"
              >
                Formulário de Contato
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

