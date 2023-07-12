var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var todosCtrl = require('../controllers/todos');

/* GET users listing. */
// GET /todos
router.get('/', todosCtrl.index);
// GET /todos/new
router.get('/new', todosCtrl.new);
// GET /todos/:id
router.get('/:id', todosCtrl.show);
// GET /todos/:id/edit
router.get('/:id/edit', todosCtrl.edit);
// DELETE /
router.delete('/:id', todosCtrl.delete);
// PUT /todos/:id
router.put('/:id', todosCtrl.update);

// POST /todos
router.post('/', todosCtrl.create);

module.exports = router;
