const todos = [
  {id: 125223, todo: 'Feed Dogs', done: true},
  {id: 127904, todo: 'Learn Express', done: false},
  {id: 139608, todo: 'Buy Milk', done: false}
];
	
module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function getAll() {
  return todos;
}

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  // The Array.prototype.find iterator method is
  // ideal for finding objects within an array
  return todos.find(todo => todo.id === id);
}

function create(todo) {
  // Add the id
  todo.id = Date.now() % 1000000;
  // New todos wouldn't be done :)
  todo.done = false;
  todos.push(todo);
}

function deleteOne(id) {
  // All properties attached to req.params are strings!
  id = parseInt(id);
  // Find the index based on the id of the todo object
  const idx = todos.findIndex(todo => todo.id === id);
  todos.splice(idx, 1);
}

function update(id, updatedTodo) {
  id = parseInt(id);
  const todo = todos.find(todo => todo.id === id);
  Object.assign(todo, updatedTodo)
}