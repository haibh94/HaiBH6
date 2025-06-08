async function setupTTL() {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  const db = client.db('shop');
  const products = db.collection('products');

  await products.createIndex({ createdAt: 1 }, { expireAfterSeconds: 2592000 });

  console.log('TTL index set');
  await client.close();
}
setupTTL();