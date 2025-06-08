const { MongoClient } = require('mongodb');

async function setup() {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  const db = client.db('shop');
  const products = db.collection('products');

  await products.insertMany([
    { _id: 1, name: 'Smartphone', category: 'electronics', price: 299, stock: 25, createdAt: new Date() },
    { _id: 2, name: 'Laptop', category: 'electronics', price: 999, stock: 10, createdAt: new Date() },
    { _id: 3, name: 'Desk Chair', category: 'furniture', price: 150, stock: 15, createdAt: new Date() },
    { _id: 4, name: 'Blender', category: 'appliances', price: 80, stock: 0, createdAt: new Date() }
  ]);

  console.log('Setup complete');
  await client.close();
}
setup();