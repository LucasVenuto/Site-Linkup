'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MessageSquare, Send, Zap, Loader2, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipo: '',
    mensagem: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

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
    
    if (!formData.tipo) {
      newErrors.tipo = 'Selecione o tipo de contato'
    }
    
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Mensagem é obrigatória'
    } else if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = 'Mensagem deve ter pelo menos 10 caracteres'
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
      // Integração com Formspree, Firebase ou outro serviço
      // Simulando chamada de API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ nome: '', email: '', tipo: '', mensagem: '' })
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
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-300">
            Estamos aqui para ajudar. Envie sua mensagem e responderemos o mais breve possível.
          </p>
        </motion.div>
      </section>

      {/* Formulário */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 md:p-12 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-400">Obrigado pelo contato! Responderemos em breve.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-red-400">Erro ao enviar mensagem. Tente novamente.</p>
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
                <label htmlFor="tipo" className="block text-sm font-medium mb-2">
                  Tipo de contato *
                </label>
                <select
                  id="tipo"
                  required
                  value={formData.tipo}
                  onChange={(e) => {
                    setFormData({ ...formData, tipo: e.target.value })
                    if (errors.tipo) setErrors({ ...errors, tipo: '' })
                  }}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.tipo 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-white/20 focus:ring-primary'
                  }`}
                >
                  <option value="">Selecione...</option>
                  <option value="usuario">Usuário</option>
                  <option value="produtor">Produtor</option>
                  <option value="imprensa">Imprensa</option>
                  <option value="investidor">Investidor</option>
                  <option value="geral">Geral</option>
                </select>
                {errors.tipo && (
                  <p className="mt-1 text-sm text-red-400">{errors.tipo}</p>
                )}
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  required
                  rows={6}
                  value={formData.mensagem}
                  onChange={(e) => {
                    setFormData({ ...formData, mensagem: e.target.value })
                    if (errors.mensagem) setErrors({ ...errors, mensagem: '' })
                  }}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 resize-none ${
                    errors.mensagem 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-white/20 focus:ring-primary'
                  }`}
                />
                {errors.mensagem && (
                  <p className="mt-1 text-sm text-red-400">{errors.mensagem}</p>
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
                    <Send className="w-5 h-5" />
                    Enviar mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Outros Canais */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display text-center mb-12"
          >
            Outros Canais
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.a
              href="mailto:contato@linkup.app"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">E-mail</h3>
              <p className="text-sm text-gray-400">contato@linkup.app</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform"
              aria-label="WhatsApp em breve"
            >
              <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-400">Em breve</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform"
              aria-label="Discord em breve"
            >
              <Zap className="w-10 h-10 text-primary mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-bold mb-2">Discord</h3>
              <p className="text-sm text-gray-400">Em breve</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

