const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const { validateTodo } = require('../validators/todo.validator');
const { createTodo, getTodos, updateTodo, deleteTodo } = require('../controllers/todo.controller');

router.use(auth);

router.post('/', validateTodo, createTodo);
router.get('/', getTodos);
router.put('/:id', validateTodo, updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;