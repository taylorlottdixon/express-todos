// controllers/todos.js
const Todo = require('../models/todo');

module.exports = {
    index,
    show
};

function index(req, res) {
    res.render('todos/index', {
        todos: Todo.getAll(),
        title: 'To-Do List',
    });
}

function show(req, res) {
    res.render('todos/show', {
      todo: Todo.getOne(req.params.id),
      title: 'To-Do Details',
    });
  }