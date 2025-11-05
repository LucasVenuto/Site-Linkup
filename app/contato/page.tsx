'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MessageSquare, Send, Zap } from 'lucide-react'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipo: '',
    mensagem: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Integração com Formspree, Firebase ou outro serviço
    console.log('Form submitted:', formData)
    alert('Obrigado pelo contato! Responderemos em breve.')
    setFormData({ nome: '', email: '', tipo: '', mensagem: '' })
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
              <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-2">
                  Nome completo *
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
                  E-mail *
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
                <label htmlFor="tipo" className="block text-sm font-medium mb-2">
                  Tipo de contato *
                </label>
                <select
                  id="tipo"
                  required
                  value={formData.tipo}
                  onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecione...</option>
                  <option value="usuario">Usuário</option>
                  <option value="produtor">Produtor</option>
                  <option value="imprensa">Imprensa</option>
                  <option value="investidor">Investidor</option>
                  <option value="geral">Geral</option>
                </select>
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
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-primary text-white rounded-full hover:glow-effect transition-all font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar mensagem
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

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-400">Em breve</p>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Discord</h3>
              <p className="text-sm text-gray-400">Em breve</p>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}

