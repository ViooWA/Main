const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk parsing JSON request body
app.use(express.json());

// Endpoint GET
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello, welcome to my API!' });
});

// Endpoint POST
app.post('/api/message', (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required.' });
  }
  res.json({ message: `Hello, ${name}. You said: "${message}"` });
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
