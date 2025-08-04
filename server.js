const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

const sessions = {};


app.post("/whatsapp", (req, res) => {
  const from = req.body.From;
  const msg = req.body.Body.trim().toLowerCase();

  if (!sessions[from]) {
    sessions[from] = { step: 0 };
  }

  let reply = "";

  switch (sessions[from].step) {
    case 0:
      reply = "Hola 👋 Bienvenido a Clínica Bot. ¿Qué deseas hacer?\n1️⃣ Agendar cita\n2️⃣ Ver horarios\nEscribe el número.";
      sessions[from].step = 1;
      break;

    case 1:
      if (msg === "1") {
        reply = "Perfecto. ¿Para qué servicio?\n1️⃣ Medicina General\n2️⃣ Odontología";
        sessions[from].step = 2;
      } else if (msg === "2") {
        reply = "Nuestros horarios: Lunes a Viernes, 9am a 5pm.";
        sessions[from].step = 0;
      } else {
        reply = "Opción inválida. Escribe 1 o 2.";
      }
      break;

    case 2:
      sessions[from].service = msg === "1" ? "Medicina General" : "Odontología";
      reply = `Selecciona un horario:\n🕘 10am\n🕐 1pm\n🕓 4pm`;
      sessions[from].step = 3;
      break;

    case 3:
      sessions[from].time = msg;
      reply = `✅ Tu cita para *${sessions[from].service}* ha sido agendada a las *${msg}*. ¡Gracias!`;
      sessions[from] = { step: 0 }; // Resetear la sesión
      break;
  }

  const twiml = `<Response><Message>${reply}</Message></Response>`;
  res.set("Content-Type", "text/xml");
  res.send(twiml);
});

app.listen(PORT, () => {
  console.log(`Bot corriendo en http://localhost:${PORT}`);
});
