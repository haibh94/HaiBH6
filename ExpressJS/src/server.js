require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(console.error);
