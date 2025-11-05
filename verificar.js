// Script de verificação rápida
const fs = require('fs')
const path = require('path')

console.log('🔍 Verificando estrutura do projeto...\n')

const arquivos = [
  'package.json',
  'next.config.js',
  'tsconfig.json',
  'tailwind.config.js',
  'postcss.config.js',
  'app/layout.tsx',
  'app/page.tsx',
  'app/globals.css',
  'components/Header.tsx',
  'components/Footer.tsx',
]

let erros = 0
arquivos.forEach(arquivo => {
  const caminho = path.join(__dirname, arquivo)
  if (fs.existsSync(caminho)) {
    console.log(`✅ ${arquivo}`)
  } else {
    console.log(`❌ ${arquivo} - NÃO ENCONTRADO`)
    erros++
  }
})

console.log(`\n${erros === 0 ? '✅ Todos os arquivos estão presentes!' : `❌ ${erros} arquivo(s) faltando`}`)

// Verificar páginas
const appDir = path.join(__dirname, 'app')
if (fs.existsSync(appDir)) {
  const paginas = fs.readdirSync(appDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() || dirent.name === 'page.tsx')
    .map(dirent => dirent.name)
  
  console.log(`\n📄 Páginas encontradas: ${paginas.length}`)
  paginas.forEach(pagina => console.log(`   - ${pagina}`))
}


