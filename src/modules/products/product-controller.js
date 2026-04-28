// Products Module
const products = [
  { id: 1, name: 'Smartphone', price: 599, category: 'Electronics' },
  { id: 2, name: 'Headphones', price: 99, category: 'Audio' },
  { id: 3, name: 'Charger', price: 19, category: 'Accessories' }
];

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find(p => p.id === id);
}

function searchProducts(query) {
  return products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase())
  );
}

module.exports = { products, getAllProducts, getProductById, searchProducts };
