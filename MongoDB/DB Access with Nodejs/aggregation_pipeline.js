async function aggregationPipeline() {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  const db = client.db('shop');
  const products = db.collection('products');

  const pipeline = [
    {
      $group: {
        _id: '$category',
        totalStock: { $sum: '$stock' },
        avgPrice: { $avg: '$price' }
      }
    },
    { $match: { avgPrice: { $gt: 500 } } },
    { $sort: { totalStock: -1 } }
  ];

  const results = await products.aggregate(pipeline).toArray();
  console.table(results);

  await client.close();
}
aggregationPipeline();