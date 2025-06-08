use performanceDB;
db.products.drop();

for (let i = 1; i <= 10000; i++) {
  db.products.insertOne({
    name: "Product " + i,
    category: i % 2 === 0 ? "electronics" : "clothing",
    manufacturer: "Brand" + (i % 50),
    price: Math.floor(Math.random() * 1000),
    description: "This is a great product number " + i,
  });
}