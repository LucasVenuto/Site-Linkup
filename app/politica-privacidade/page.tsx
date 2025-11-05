'use client'

import { motion } from 'framer-motion'

export default function PoliticaPrivacidadePage() {
  return (
    <div className="pt-20">
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-8 text-gradient">
            Política de Privacidade
          </h1>
          
          <div className="glass-effect p-8 rounded-2xl space-y-6 text-gray-300">
            <p className="text-sm text-gray-400 mb-6">Última atualização: Janeiro de 2025</p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Introdução</h2>
              <p>
                A Link Up ("nós", "nosso" ou "empresa") está comprometida em proteger a privacidade 
                e os dados pessoais de nossos usuários. Esta Política de Privacidade descreve como 
                coletamos, usamos, armazenamos e protegemos suas informações pessoais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Dados Coletados</h2>
              <p className="mb-2">Coletamos os seguintes tipos de dados:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Informações de cadastro (nome, e-mail, telefone)</li>
                <li>Dados de localização (quando permitido)</li>
                <li>Informações de uso da plataforma</li>
                <li>Dados de preferências e interesses</li>
                <li>Informações de pagamento (processadas de forma segura)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. Uso dos Dados</h2>
              <p className="mb-2">Utilizamos seus dados para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Personalizar recomendações de eventos</li>
                <li>Enviar comunicações relevantes</li>
                <li>Garantir a segurança da plataforma</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Compartilhamento de Dados</h2>
              <p>
                Não vendemos seus dados pessoais. Podemos compartilhar informações apenas com:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Provedores de serviços que nos auxiliam na operação</li>
                <li>Autoridades legais quando exigido por lei</li>
                <li>Com seu consentimento explícito</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Seus Direitos (LGPD)</h2>
              <p className="mb-2">Você tem direito a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou incorretos</li>
                <li>Solicitar a exclusão de dados</li>
                <li>Revogar consentimento</li>
                <li>Solicitar portabilidade dos dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Segurança</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus 
                dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">7. Cookies</h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua experiência. Você 
                pode gerenciar suas preferências de cookies através das configurações do navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">8. Alterações</h2>
              <p>
                Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças 
                significativas através da plataforma ou por e-mail.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">9. Contato</h2>
              <p>
                Para questões sobre privacidade ou exercer seus direitos, entre em contato:
              </p>
              <p className="mt-2">
                E-mail: <a href="mailto:privacidade@linkup.app" className="text-primary hover:underline">privacidade@linkup.app</a>
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

