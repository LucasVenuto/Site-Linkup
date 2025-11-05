'use client'

import { motion } from 'framer-motion'

export default function TermosUsoPage() {
  return (
    <div className="pt-20">
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-8 text-gradient">
            Termos de Uso
          </h1>
          
          <div className="glass-effect p-8 rounded-2xl space-y-6 text-gray-300">
            <p className="text-sm text-gray-400 mb-6">Última atualização: Janeiro de 2025</p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar a plataforma Link Up, você concorda em cumprir e estar vinculado 
                a estes Termos de Uso. Se você não concorda com qualquer parte destes termos, 
                não deve usar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Descrição do Serviço</h2>
              <p>
                A Link Up é uma plataforma social que conecta usuários a eventos, permitindo 
                descoberta, compartilhamento e participação em experiências. Oferecemos também 
                serviços para produtores de eventos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. Conta de Usuário</h2>
              <p className="mb-2">Ao criar uma conta, você concorda em:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer informações verdadeiras e atualizadas</li>
                <li>Manter a segurança de sua conta</li>
                <li>Ser responsável por todas as atividades em sua conta</li>
                <li>Notificar-nos imediatamente sobre uso não autorizado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Uso Aceitável</h2>
              <p className="mb-2">Você concorda em não:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Usar a plataforma para fins ilegais ou não autorizados</li>
                <li>Violar direitos de propriedade intelectual</li>
                <li>Transmitir vírus ou código malicioso</li>
                <li>Coletar dados de outros usuários sem autorização</li>
                <li>Interferir no funcionamento da plataforma</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Conteúdo do Usuário</h2>
              <p>
                Você mantém todos os direitos sobre o conteúdo que publica. Ao publicar, você 
                nos concede uma licença para usar, exibir e distribuir esse conteúdo na plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Pagamentos e Reembolsos</h2>
              <p>
                Para serviços pagos, os termos de pagamento e reembolso serão especificados no 
                momento da transação. Respeitamos políticas de reembolso conforme legislação aplicável.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">7. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo da plataforma, incluindo design, logos, textos e software, é 
                propriedade da Link Up ou de seus licenciadores e está protegido por leis de 
                propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">8. Limitação de Responsabilidade</h2>
              <p>
                A Link Up não se responsabiliza por danos indiretos, incidentais ou consequenciais 
                resultantes do uso ou incapacidade de usar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">9. Modificações</h2>
              <p>
                Reservamos o direito de modificar estes termos a qualquer momento. Notificaremos 
                sobre mudanças significativas e o uso continuado da plataforma constitui aceitação 
                dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">10. Encerramento</h2>
              <p>
                Podemos encerrar ou suspender sua conta a qualquer momento, por qualquer motivo, 
                incluindo violação destes termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">11. Lei Aplicável</h2>
              <p>
                Estes termos são regidos pelas leis do Brasil. Qualquer disputa será resolvida 
                nos tribunais competentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">12. Contato</h2>
              <p>
                Para questões sobre estes termos, entre em contato:
              </p>
              <p className="mt-2">
                E-mail: <a href="mailto:legal@linkup.app" className="text-primary hover:underline">legal@linkup.app</a>
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

