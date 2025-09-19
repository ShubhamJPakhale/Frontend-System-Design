import express from "express";
import bodyParser from "body-parser";

// below imports are used to read .env file
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const app = express();
app.use(bodyParser.json());

app.all("/", (req, res) => {
  res.send(`I'm up!`);
});

const todosData = [
  { id: 1, task: "Buy groceries", completed: false },
  { id: 2, task: "Walk the dog", completed: true },
  { id: 3, task: "Read a book", completed: false },
];

// Read all the todos
app.get("/todos", (req, res) => {
  res.json(todosData);
});

// Add a new todo
app.post("/todos", (req, res) => {
  let { task, completed } = req.body;

  if (!task) {
    return res.status(400).send("Task is required field");
  }

  if (typeof task !== "string") {
    return res.status(400).send("Invalid data type for task");
  }

  if (completed && typeof completed !== "boolean") {
    return res.status(400).send("Invalid data type for completed");
  }

  const newTodo = {
    id: todosData.length ? todosData[todosData.length - 1].id + 1 : 1,
    task,
    completed: completed ? completed : false,
  };
  todosData.push(newTodo);
  res.status(201).json({ message: "Todo created successfully", todo: newTodo });
});

// update a todo
app.put("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const updatedTodo = req.body;

  const todoUpdateIndex = todosData.findIndex(
    (todoid) => todoid.id === parseInt(todoId)
  );
  if (todoUpdateIndex !== -1) {
    todosData[todoUpdateIndex] = {
      id: parseInt(todoId),
      ...updatedTodo,
    };
    res.json(todosData[todoUpdateIndex]);
  } else {
    res.status(404).send("Todo not found");
  }
});

// delete a todo
app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const todoIndexforDelete = todosData.findIndex(
    (todoid) => todoid.id === parseInt(todoId)
  );
  if (todoIndexforDelete !== -1) {
    const deletedTodo = todosData.splice(todoIndexforDelete, 1);
    res.json(deletedTodo[0]);
  } else {
    res.status(404).send("Todo not found");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
