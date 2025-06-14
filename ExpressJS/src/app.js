const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.routes');
const todoRoutes = require('./routes/todo.routes');
const response = require('./utils/response');

app.use(express.json());
app.use(response);

app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

module.exports = app;