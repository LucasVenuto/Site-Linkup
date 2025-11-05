#!/bin/bash

echo "🚀 Iniciando servidor Next.js com acesso de rede..."
echo ""

# Obter IP
IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -1)

echo "📍 Seu IP: $IP"
echo "📱 Acesse de outros dispositivos: http://$IP:3000"
echo ""
echo "⚠️  Se outros dispositivos não conseguirem acessar:"
echo "   1. Abra: Preferências do Sistema > Segurança > Firewall"
echo "   2. Clique em 'Opções de Firewall...'"
echo "   3. Adicione Node.js ou desative temporariamente o firewall"
echo ""
echo "🔄 Iniciando servidor..."
echo ""

# Exportar variáveis para garantir acesso de rede
export NODE_OPTIONS='--host 0.0.0.0'
export HOSTNAME='0.0.0.0'

# Iniciar Next.js
npm run dev

