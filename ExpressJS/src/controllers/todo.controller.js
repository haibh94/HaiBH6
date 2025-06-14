const Todo = require('../models/todo.model');

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({ ...req.body, user: req.userId });
    res.success(todo, 201);
  } catch (err) {
    res.error('Failed to create todo', 500);
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.userId });
    res.success(todos);
  } catch (err) {
    res.error('Failed to fetch todos', 500);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const updated = await Todo.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );
    if (!updated) return res.error('Todo not found', 404);
    res.success(updated);
  } catch (err) {
    res.error('Failed to update todo', 500);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deleted = await Todo.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!deleted) return res.error('Todo not found', 404);
    res.success({ message: 'Todo deleted' });
  } catch (err) {
    res.error('Failed to delete todo', 500);
  }
};