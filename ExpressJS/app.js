const express = require('express');
const app = express();
const authRoutes = require('./src/routes/auth.routes');
const todoRoutes = require('./src/routes/todo.routes');
const response = require('./src/utils/response');

app.use(express.json());
app.use(response);

app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

module.exports = app;
