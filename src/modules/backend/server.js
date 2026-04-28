// Backend Module
const express = require('express');
const app = express();

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 599 }
  ]);
});

app.listen(3000, () => console.log('Server running on port 3000'));
