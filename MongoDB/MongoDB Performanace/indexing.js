db.products.createIndex({ category: 1 });
db.products.createIndex({ category: 1, price: -1 });
db.products.createIndex({ description: "text" });