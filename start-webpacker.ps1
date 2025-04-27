Write-Host "✨ Configurando entorno para Webpacker (OpenSSL Legacy)..."

# Seteamos NODE_OPTIONS para evitar error en Node 20+
$env:NODE_OPTIONS="--openssl-legacy-provider"

Write-Host "🚀 Levantando Webpacker Dev Server..."
ruby bin\webpack-dev-server