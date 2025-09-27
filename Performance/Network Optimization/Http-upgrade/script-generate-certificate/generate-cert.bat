@echo off
REM Check if certs folder exists, if not, create it
if not exist certs mkdir certs

REM Generate self-signed certificate using OpenSSL
openssl req -nodes -new -x509 ^
    -keyout certs\server.key ^
    -out certs\server.cert ^
    -subj "/C=US/ST=State/L=City/O=company/OU=Com/CN=www.testserver.local"

echo.
echo Self-signed certificate generated successfully in certs folder.
pause
