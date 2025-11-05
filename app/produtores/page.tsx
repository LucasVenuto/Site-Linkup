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
  Target,
  Loader2
} from 'lucide-react'

export default function ProdutoresPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipoEvento: '',
    cidade: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

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

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }
    
    if (!formData.tipoEvento) {
      newErrors.tipoEvento = 'Selecione o tipo de evento'
    }
    
    if (!formData.cidade.trim()) {
      newErrors.cidade = 'Cidade é obrigatória'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Aqui você pode integrar com Formspree, Firebase ou outro serviço
      // Simulando chamada de API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ nome: '', email: '', tipoEvento: '', cidade: '' })
      setErrors({})
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
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
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-400">Obrigado! Entraremos em contato em breve.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                    <p className="text-red-400">Erro ao enviar formulário. Tente novamente.</p>
                  </div>
                )}

                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => {
                      setFormData({ ...formData, nome: e.target.value })
                      if (errors.nome) setErrors({ ...errors, nome: '' })
                    }}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.nome 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-white/20 focus:ring-primary'
                    }`}
                  />
                  {errors.nome && (
                    <p className="mt-1 text-sm text-red-400">{errors.nome}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (errors.email) setErrors({ ...errors, email: '' })
                    }}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-white/20 focus:ring-primary'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="tipoEvento" className="block text-sm font-medium mb-2">
                    Tipo de evento *
                  </label>
                  <select
                    id="tipoEvento"
                    required
                    value={formData.tipoEvento}
                    onChange={(e) => {
                      setFormData({ ...formData, tipoEvento: e.target.value })
                      if (errors.tipoEvento) setErrors({ ...errors, tipoEvento: '' })
                    }}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.tipoEvento 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-white/20 focus:ring-primary'
                    }`}
                  >
                    <option value="">Selecione...</option>
                    <option value="show">Show/Música</option>
                    <option value="festival">Festival</option>
                    <option value="workshop">Workshop/Cursos</option>
                    <option value="esporte">Esporte</option>
                    <option value="tech">Tech/Startup</option>
                    <option value="outro">Outro</option>
                  </select>
                  {errors.tipoEvento && (
                    <p className="mt-1 text-sm text-red-400">{errors.tipoEvento}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="cidade" className="block text-sm font-medium mb-2">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    id="cidade"
                    required
                    value={formData.cidade}
                    onChange={(e) => {
                      setFormData({ ...formData, cidade: e.target.value })
                      if (errors.cidade) setErrors({ ...errors, cidade: '' })
                    }}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.cidade 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-white/20 focus:ring-primary'
                    }`}
                  />
                  {errors.cidade && (
                    <p className="mt-1 text-sm text-red-400">{errors.cidade}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-primary text-white rounded-full hover:glow-effect transition-all font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar acesso
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
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

