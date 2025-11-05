# 🔧 Solução para Acesso de Rede

Se o site funciona no Mac mas não em outros dispositivos, siga estes passos:

## Solução 1: Configurar Firewall do macOS

1. Abra **Preferências do Sistema** (ou **Configurações do Sistema** no macOS mais recente)
2. Vá em **Segurança e Privacidade** > **Firewall**
3. Clique no **cadeado** 🔒 no canto inferior esquerdo e digite sua senha
4. Clique em **Opções de Firewall...**
5. Procure por **Node.js** ou **node** na lista
6. Se encontrar, certifique-se de que está configurado como **Permitir conexões de entrada**
7. Se não encontrar, clique em **+** e adicione o Node.js:
   - O caminho geralmente é: `/usr/local/bin/node` ou `/opt/homebrew/bin/node`
   - Ou encontre com: `which node` no terminal

**OU** desative temporariamente o firewall para testar:
- Na mesma tela, desmarque **Bloquear todas as conexões de entrada**

## Solução 2: Via Terminal (Mais Rápido)

Execute no terminal:

```bash
sudo ./fix-network-access.sh
```

Isso configurará automaticamente o firewall.

## Solução 3: Verificar Compartilhamento de Arquivos

1. Preferências do Sistema > **Compartilhamento**
2. Certifique-se de que pelo menos uma opção está marcada (isso habilita serviços de rede)

## Solução 4: Testar com Servidor Simples

Se ainda não funcionar, teste com um servidor HTTP simples:

```bash
# Pare o Next.js (Ctrl+C)
# Execute este comando:
python3 -m http.server 8000 --bind 0.0.0.0
```

Depois acesse de outro dispositivo: `http://192.168.15.12:8000`

Se isso funcionar, o problema é específico do Next.js. Se não funcionar, o problema é do firewall/roteador.

## Solução 5: Verificar Roteador

Alguns roteadores têm "Client Isolation" ou "AP Isolation" que bloqueia comunicação entre dispositivos:

1. Acesse as configurações do roteador (geralmente 192.168.1.1 ou 192.168.0.1)
2. Procure por "Client Isolation", "AP Isolation" ou "Isolamento de Clientes"
3. **Desative** essa opção

## Teste Rápido

Após fazer as alterações, execute:

```bash
./test-server.sh
```

Isso verificará se tudo está funcionando.

## IP da Sua Máquina

Seu IP atual: **192.168.15.12**

Acesse de outros dispositivos: `http://192.168.15.12:3000`

---

**Nota:** Depois de configurar, reinicie o servidor:
```bash
npm run dev
```

