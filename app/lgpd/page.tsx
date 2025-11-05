'use client'

import { motion } from 'framer-motion'

export default function LGDPPage() {
  return (
    <div className="pt-20">
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-8 text-gradient">
            Cookies e LGPD
          </h1>
          
          <div className="glass-effect p-8 rounded-2xl space-y-6 text-gray-300">
            <p className="text-sm text-gray-400 mb-6">Última atualização: Janeiro de 2025</p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">1. O que são Cookies</h2>
              <p>
                Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você 
                visita nosso site. Eles nos ajudam a melhorar sua experiência, analisar o uso do 
                site e personalizar conteúdo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Tipos de Cookies que Utilizamos</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Cookies Essenciais</h3>
                  <p className="text-sm">
                    Necessários para o funcionamento básico do site. Não podem ser desativados.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Cookies de Desempenho</h3>
                  <p className="text-sm">
                    Coletam informações sobre como você usa o site para melhorar a experiência.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Cookies de Funcionalidade</h3>
                  <p className="text-sm">
                    Permitem que o site lembre de suas preferências e personalizações.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Cookies de Marketing</h3>
                  <p className="text-sm">
                    Usados para rastrear visitantes e exibir anúncios relevantes (quando aplicável).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. Gerenciamento de Cookies</h2>
              <p>
                Você pode gerenciar suas preferências de cookies através das configurações do seu 
                navegador. Note que desabilitar alguns cookies pode afetar a funcionalidade do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. LGPD - Lei Geral de Proteção de Dados</h2>
              <p className="mb-4">
                A Link Up está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018). 
                Respeitamos seus direitos e protegemos seus dados pessoais.
              </p>
              
              <div>
                <h3 className="font-bold mb-2">Seus Direitos sob a LGPD:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Confirmação da existência de tratamento de dados</li>
                  <li>Acesso aos dados</li>
                  <li>Correção de dados incompletos ou desatualizados</li>
                  <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                  <li>Portabilidade dos dados</li>
                  <li>Eliminação de dados tratados com consentimento</li>
                  <li>Informação sobre compartilhamento de dados</li>
                  <li>Revogação do consentimento</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Base Legal para Tratamento</h2>
              <p className="mb-2">Tratamos seus dados pessoais com base em:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Consentimento do titular</li>
                <li>Execução de contrato</li>
                <li>Legítimo interesse</li>
                <li>Cumprimento de obrigação legal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Encarregado de Proteção de Dados (DPO)</h2>
              <p>
                Para questões relacionadas à proteção de dados, entre em contato com nosso 
                Encarregado de Proteção de Dados:
              </p>
              <p className="mt-2">
                E-mail: <a href="mailto:lgpd@linkup.app" className="text-primary hover:underline">lgpd@linkup.app</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">7. Alterações</h2>
              <p>
                Esta política pode ser atualizada periodicamente. Recomendamos revisar esta página 
                regularmente para estar ciente de mudanças.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">8. Contato</h2>
              <p>
                Para exercer seus direitos ou ter dúvidas sobre cookies e LGPD:
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

