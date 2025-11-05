#!/bin/bash

echo "🔍 Verificando servidor Next.js..."
echo ""

# Verificar se está rodando
if lsof -i :3000 > /dev/null 2>&1; then
    echo "✅ Servidor está rodando na porta 3000"
else
    echo "❌ Servidor NÃO está rodando"
    exit 1
fi

# Verificar IP
IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -1)
echo "📍 IP da máquina: $IP"
echo ""

# Testar acesso local
echo "🧪 Testando acesso local..."
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200"; then
    echo "✅ Acesso local funcionando"
else
    echo "❌ Acesso local não funcionando"
fi

# Testar acesso via IP
echo "🧪 Testando acesso via IP..."
if curl -s -o /dev/null -w "%{http_code}" http://$IP:3000 | grep -q "200"; then
    echo "✅ Acesso via IP funcionando"
else
    echo "❌ Acesso via IP não funcionando"
fi

echo ""
echo "📱 Para acessar de outros dispositivos:"
echo "   http://$IP:3000"
echo ""
echo "💡 Dicas:"
echo "   - Certifique-se de que os dispositivos estão na mesma rede Wi-Fi"
echo "   - Tente desabilitar temporariamente o firewall do roteador"
echo "   - Verifique se o roteador não tem 'Client Isolation' ativado"

