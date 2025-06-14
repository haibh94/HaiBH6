async function setupIndex() {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  const db = client.db('shop');
  const products = db.collection('products');

  // Create compound index
  await products.createIndex({ category: 1, price: -1 });

  // Run query with explain
  const result = await products.find({ 
    category: 'electronics', 
    price: { $lt: 600 } 
  }).explain('executionStats');
  console.dir(result.executionStats, { depth: null });

  await client.close();
}
setupIndex();