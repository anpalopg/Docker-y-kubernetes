const express = require('express');
const app = express();

app.use(express.json());

const products = [
  { id: 1, name: 'Laptop', price: 1200000 },
  { id: 2, name: 'Mouse', price: 45000 }
];

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'products' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'products' });
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(3002);