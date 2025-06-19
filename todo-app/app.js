const express = require('express');
const app = express();

let todos = [];

app.use(express.json());

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = req.body.todo;
  if (todo) {
    todos.push(todo);
    res.status(201).json({ message: 'Todo added!' });
  } else {
    res.status(400).json({ error: 'Missing todo!' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`TODO app running at http://localhost:${PORT}`);
});

