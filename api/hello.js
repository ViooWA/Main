const express = require('express');
const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

module.exports = (req, res) => {
  app(req, res);
};