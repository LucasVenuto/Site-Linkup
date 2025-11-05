'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  TrendingUp, 
  Users, 
  BarChart3, 
  Ticket, 
  ArrowRight,
  CheckCircle,
  Zap,
  Target
} from 'lucide-react'

export default function ProdutoresPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipoEvento: '',
    cidade: '',
  })

  const beneficios = [
    {
      icon: TrendingUp,
      title: 'Alcance Orgânico',
      desc: 'Alcance através de conexões reais e compartilhamento social.',
    },
    {
      icon: Target,
      title: 'Engajamento Direcionado',
      desc: 'Conecte-se com o público-alvo certo para o seu evento.',
    },
    {
      icon: BarChart3,
      title: 'Dados e Insights',
      desc: 'Obtenha informações valiosas sobre o comportamento dos frequentadores.',
    },
    {
      icon: Ticket,
      title: 'Ticketing Integrado',
      desc: 'Gestão simplificada de vendas e ingressos em uma única plataforma.',
    },
  ]

  const passos = [
    { step: '1', title: 'Cadastre seu evento', desc: 'Adicione informações e programação' },
    { step: '2', title: 'Adicione a programação', desc: 'Defina horários e atividades' },
    { step: '3', title: 'Ative o link up social', desc: 'Conecte-se com o público e comece a vender' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode integrar com Formspree, Firebase ou outro serviço
    console.log('Form submitted:', formData)
    alert('Obrigado! Entraremos em contato em breve.')
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
            Transforme seus eventos em experiências sociais.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            A Link Up conecta seu evento a um público engajado, gerando mais vendas e presença real.
          </p>
        </motion.div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display text-center mb-16"
          >
            Benefícios para Produtores
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={beneficio.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform"
              >
                <beneficio.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{beneficio.title}</h3>
                <p className="text-gray-300">{beneficio.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Começar */}
      <section className="py-20 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold font-display text-center mb-16"
        >
          Como Começar
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {passos.map((passo, index) => (
              <motion.div
                key={passo.step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {passo.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{passo.title}</h3>
                <p className="text-gray-400">{passo.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Onboarding */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass-effect p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl font-bold font-display text-center mb-8">
                Solicitar Acesso à Versão para Produtores
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="tipoEvento" className="block text-sm font-medium mb-2">
                    Tipo de evento
                  </label>
                  <select
                    id="tipoEvento"
                    required
                    value={formData.tipoEvento}
                    onChange={(e) => setFormData({ ...formData, tipoEvento: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecione...</option>
                    <option value="show">Show/Música</option>
                    <option value="festival">Festival</option>
                    <option value="workshop">Workshop/Cursos</option>
                    <option value="esporte">Esporte</option>
                    <option value="tech">Tech/Startup</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cidade" className="block text-sm font-medium mb-2">
                    Cidade
                  </label>
                  <input
                    type="text"
                    id="cidade"
                    required
                    value={formData.cidade}
                    onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-primary text-white rounded-full hover:glow-effect transition-all font-semibold text-lg flex items-center justify-center gap-2"
                >
                  Solicitar acesso
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold font-display mb-6">
            Pronto para aumentar o alcance do seu evento?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se aos produtores que já estão usando a Link Up para conectar-se com mais pessoas.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

