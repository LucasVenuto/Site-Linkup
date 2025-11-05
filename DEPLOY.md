# Guia de Deploy no Vercel

## Opção 1: Deploy via GitHub (Recomendado)

### Passo 1: Criar repositório no GitHub
1. Acesse [github.com](https://github.com) e crie uma nova conta ou faça login
2. Crie um novo repositório (ex: `link-up-site`)
3. **NÃO** marque a opção de inicializar com README

### Passo 2: Fazer upload do código
No terminal, execute:

```bash
cd "/Users/adm/Library/Mobile Documents/com~apple~CloudDocs/Site Link UP"

# Inicializar git (se ainda não tiver)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit"

# Conectar ao repositório GitHub (substitua SEU_USUARIO e SEU_REPO)
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

### Passo 3: Deploy no Vercel
1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub
2. Clique em **"Add New Project"**
3. Importe o repositório que você acabou de criar
4. A Vercel detectará automaticamente que é um projeto Next.js
5. Clique em **"Deploy"** - não precisa alterar nenhuma configuração
6. Aguarde alguns minutos e seu site estará no ar!

---

## Opção 2: Deploy via CLI da Vercel

### Passo 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

### Passo 2: Fazer login
```bash
vercel login
```

### Passo 3: Deploy
```bash
cd "/Users/adm/Library/Mobile Documents/com~apple~CloudDocs/Site Link UP"
vercel
```

Siga as instruções no terminal. O primeiro deploy será em modo preview. Para fazer deploy em produção:

```bash
vercel --prod
```

---

## Configurações Automáticas

A Vercel detectará automaticamente:
- ✅ Framework: Next.js
- ✅ Build Command: `next build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

**Não precisa configurar nada manualmente!**

---

## Após o Deploy

- Seu site estará disponível em uma URL como: `https://seu-projeto.vercel.app`
- Você pode adicionar um domínio personalizado nas configurações do projeto
- Cada push no GitHub gerará automaticamente um novo deploy (se configurado)

---

## Dúvidas?

- Documentação: [vercel.com/docs](https://vercel.com/docs)
- Suporte: [vercel.com/support](https://vercel.com/support)

