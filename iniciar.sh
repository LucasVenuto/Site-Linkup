#!/bin/bash

echo "🚀 Iniciando servidor Link Up..."
echo ""

# Limpar cache
echo "🧹 Limpando cache..."
rm -rf .next node_modules/.cache 2>/dev/null

# Obter IP
IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -1)

echo "📍 IP da máquina: $IP"
echo "📱 Acesse em: http://$IP:3000 ou http://localhost:3000"
echo ""
echo "🔄 Iniciando servidor..."
echo ""

# Iniciar
npm run dev


