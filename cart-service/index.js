const express = require('express');
const app = express();

app.use(express.json());

const carts = {};

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'cart' });
});

app.get('/cart/:userId', (req, res) => {
  res.json({
    userId: req.params.userId,
    items: carts[req.params.userId] || []
  });
});

app.listen(3003);