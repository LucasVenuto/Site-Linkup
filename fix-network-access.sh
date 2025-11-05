#!/bin/bash

echo "🔧 Configurando acesso de rede para o servidor Next.js..."
echo ""

# Verificar se está rodando como root ou pedir sudo
if [ "$EUID" -ne 0 ]; then 
    echo "⚠️  Este script precisa de permissões de administrador"
    echo "📝 Execute no terminal: sudo ./fix-network-access.sh"
    echo ""
    echo "Ou execute manualmente:"
    echo ""
    echo "1. Abra 'Preferências do Sistema' > 'Segurança e Privacidade' > 'Firewall'"
    echo "2. Clique no cadeado e desbloqueie"
    echo "3. Clique em 'Opções de Firewall...'"
    echo "4. Adicione o Node.js ou desative temporariamente o firewall"
    echo ""
    exit 1
fi

# Verificar estado do firewall
FIREWALL_STATE=$(/usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate | grep -o "enabled\|disabled")

echo "🔥 Estado atual do Firewall: $FIREWALL_STATE"
echo ""

# Permitir Node.js no firewall
NODE_PATH=$(which node)
if [ -n "$NODE_PATH" ]; then
    echo "✅ Encontrado Node.js em: $NODE_PATH"
    /usr/libexec/ApplicationFirewall/socketfilterfw --add "$NODE_PATH"
    /usr/libexec/ApplicationFirewall/socketfilterfw --unblockapp "$NODE_PATH"
    echo "✅ Node.js adicionado e desbloqueado no firewall"
else
    echo "❌ Node.js não encontrado"
fi

echo ""
echo "✅ Configuração concluída!"
echo ""
echo "📱 Agora reinicie o servidor com: npm run dev"
echo "   E acesse de outros dispositivos: http://$(ifconfig | grep 'inet ' | grep -v 127.0.0.1 | awk '{print $2}' | head -1):3000"

