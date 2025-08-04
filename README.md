# 🤖 WhatsApp Chatbot para Agendar Citas

Este proyecto es un bot de WhatsApp creado con **Node.js**, que permite a negocios como clínicas, barberías o talleres **automatizar la agenda de citas** a través de mensajes.

Funciona con la **API de WhatsApp de Twilio** y puede desplegarse localmente usando **ngrok**.

---

## 📋 Características

- Menú interactivo vía WhatsApp
- Agenda citas con selección de servicio y horario
- Respuestas automáticas
- Persistencia temporal en memoria (puede ampliarse a Firebase, MongoDB, etc.)

---

## ⚙️ Tecnologías

- Node.js + Express
- Twilio Sandbox para WhatsApp
- Ngrok para exponer el servidor localmente

---

## 🚀 Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/luise02/Chatbot.git
cd Chatbot

2. Instala dependencias
npm install
3. Inicia el servidor
node server.js
🌐 Configurar Ngrok
1. Instala y autentica ngrok
npx ngrok config add-authtoken TU_AUTHTOKEN
Regístrate en https://ngrok.com para obtener tu token gratis.

2. Expon el servidor
npx ngrok http 3000
Guarda la URL que aparece como:
https://abcd1234.ngrok.io

📲 Conectar con Twilio
Regístrate en https://www.twilio.com/

Ve a: Messaging > Try it out > WhatsApp Sandbox

Asocia tu número enviando el código que te da Twilio

Pega la URL de ngrok como webhook de mensajes entrantes:
https://abcd1234.ngrok.io/whatsapp
🧪 Prueba
Envía un mensaje desde WhatsApp al número sandbox de Twilio.
Deberías recibir un mensaje como:
Hola 👋 Bienvenido a Clínica Bot. ¿Qué deseas hacer?
1️⃣ Agendar cita
2️⃣ Ver horarios
📦 Estructura del Proyecto
📁 chatbot/
├── server.js        # Lógica principal del bot
├── package.json     # Dependencias
💡 Ideas para mejorar
Integración con Google Sheets o Firebase

Dashboard web para administrar citas

Motor de NLP con OpenAI o Wit.ai

Mensajes programados de recordatorio

🧑‍💻 Autor
Desarrollado por Luis López
Ingeniero de Software enfocado en soluciones automatizadas para empresas.
