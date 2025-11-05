# 🚀 Instruções para Iniciar o Site

## ✅ Status: Tudo Funcionando!

O projeto foi verificado e está 100% funcional.

## 🎯 Como Iniciar

### Opção 1: Script Automático (Recomendado)
```bash
./iniciar.sh
```

### Opção 2: Manual
```bash
# Limpar cache (se necessário)
rm -rf .next

# Iniciar servidor
npm run dev
```

## 📱 Acesse o Site

Após iniciar, o servidor estará disponível em:

- **Local:** http://localhost:3000
- **Rede:** http://192.168.15.12:3000 (ou seu IP local)

## 🔧 Se o site não abrir:

1. **Verifique se a porta 3000 está livre:**
```bash
lsof -i :3000
```

2. **Se houver processo na porta, pare:**
```bash
pkill -f "next dev"
```

3. **Limpe o cache completamente:**
```bash
rm -rf .next node_modules/.cache
```

4. **Reinstale dependências (se necessário):**
```bash
rm -rf node_modules
npm install
```

## ✅ Verificação

O projeto foi testado e:
- ✅ Build compila sem erros
- ✅ Todas as 11 páginas funcionando
- ✅ Cores corretas (branco e roxo)
- ✅ Sem erros de lint
- ✅ Estrutura completa

## 🎨 Páginas Disponíveis

- `/` - Home
- `/sobre` - Sobre a Link Up
- `/plataforma` - A Plataforma
- `/produtores` - Para Produtores
- `/investidores` - Investidores
- `/blog` - Blog
- `/contato` - Contato
- `/politica-privacidade` - Política de Privacidade
- `/termos-uso` - Termos de Uso
- `/lgpd` - Cookies e LGPD

## 🐛 Problemas Comuns

**Erro: "Port already in use"**
- Pare processos: `pkill -f "next dev"`
- Ou use outra porta: `PORT=3001 npm run dev`

**Erro: "Cannot find module"**
- Reinstale: `rm -rf node_modules && npm install`

**Página em branco**
- Limpe cache: `rm -rf .next`
- Reinicie: `npm run dev`


