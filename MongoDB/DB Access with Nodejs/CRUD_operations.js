const { MongoClient } = require('mongodb');

async function runCRUD() {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  const db = client.db('shop');
  const products = db.collection('products');

  // Add 2 new products
  await products.insertMany([
    {
      name: 'Tablet', 
      category: 'electronics', 
      price: 250, stock: 20, 
      createdAt: new Date() 
    },
    { 
      name: 'Coffee Maker', 
      category: 'appliances', 
      price: 120, stock: 5, 
      createdAt: new Date()
    }
  ]);

  // Find all electronics
  const electronics = await products.find({ category: 'electronics' }).toArray();
  console.table(electronics);

  // Find products priced between 100 and 500
  const midRange = await products.find({ 
    price: { $gte: 100, $lte: 500 }
  }).toArray();
  console.table(midRange);

  // Apply 10% discount to all electronics
  await products.updateMany(
    { category: 'electronics' },
    { $mul: { price: 0.9 } }
  );

  // Update stock to 40 for product with _id: 3
  await products.updateOne({ _id: 3 }, { $set: { stock: 40 } });

  // Remove products with stock = 0
  await products.deleteMany({ stock: 0 });

  await client.close();
}
runCRUD();