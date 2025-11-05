# 🌐 Link Up — Site Institucional

Site institucional da Link Up, plataforma social para eventos que conecta pessoas, cenas e experiências.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## 📁 Estrutura do Projeto

```
/
├── app/                    # Páginas do Next.js
│   ├── page.tsx           # Home
│   ├── sobre/             # Sobre a Link Up
│   ├── plataforma/        # A Plataforma
│   ├── produtores/        # Para Produtores
│   ├── investidores/      # Investidores/Imprensa
│   ├── blog/              # Blog/Conteúdo
│   ├── contato/           # Contato
│   ├── politica-privacidade/  # Política de Privacidade
│   ├── termos-uso/        # Termos de Uso
│   ├── lgpd/              # Cookies e LGPD
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Cabeçalho
│   └── Footer.tsx           # Rodapé
└── public/                # Arquivos estáticos
```

## 🎨 Design System

### Cores
- **Primary**: `#6A1B9A` (Roxo vibrante)
- **Neon Purple**: `#E91E63`
- **Background**: Preto com gradientes roxos

### Tipografia
- **Display**: Poppins (títulos)
- **Body**: Inter (texto)

### Componentes
- Glass effect (blur e transparência)
- Gradientes animados
- Animações suaves com Framer Motion

## 📝 Páginas

1. **Home** - Landing principal com hero, seções de apresentação e CTAs
2. **Sobre** - Manifesto, missão, visão, valores, equipe e marca
3. **Plataforma** - Recursos, diferenciais e mockups do app
4. **Produtores** - Benefícios e formulário de onboarding
5. **Investidores** - Informações corporativas e sala de imprensa
6. **Blog** - Estrutura de posts e newsletter
7. **Contato** - Formulário de contato
8. **Política & Termos** - Documentos legais

## 🔧 Configurações

### Formulários
Os formulários estão configurados para integração com serviços externos:
- Formspree
- Firebase
- Outros serviços de backend

### Integrações Sugeridas
- **Notion API** - Para blog dinâmico
- **Mailchimp** - Para newsletter
- **Analytics** - Google Analytics ou similar

## 🌐 Deploy

O projeto está configurado para deploy na Vercel:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📄 Licença

© 2025 Link Up. Todos os direitos reservados.

## 📧 Contato

Para mais informações, entre em contato:
- E-mail: contato@linkup.app
- Site: [linkup.app](https://linkup.app)

