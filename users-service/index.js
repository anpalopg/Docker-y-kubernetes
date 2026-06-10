const express = require('express');
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: 'Camilo Angarita', email: 'camilo@email.com' },
  { id: 2, name: 'Andrea López', email: 'andrea@email.com' },
  { id: 3, name: 'Cesar Montoya', email: 'cesar@email.com' }
];

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'users' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'users' });
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3001, () => {
  console.log('Users Service ejecutándose');
});