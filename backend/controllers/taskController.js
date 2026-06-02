const { v4: uuidv4 } = require("uuid");
const { readTasks, writeTasks } = require("../utils/fileHelper");

exports.getTasks = (req, res) => {
  const tasks = readTasks();

  tasks.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  res.json(tasks);
};

exports.createTask = (req, res) => {
  const { title, description, dueDate } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  const tasks = readTasks();

  const newTask = {
    id: uuidv4(),
    title,
    description: description || "",
    dueDate: dueDate || "",
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(newTask);

  writeTasks(tasks);

  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const tasks = readTasks();

  const task = tasks.find(
    (t) => t.id === req.params.id
  );

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  Object.assign(task, req.body);

  writeTasks(tasks);

  res.json(task);
};

exports.deleteTask = (req, res) => {
  const tasks = readTasks();

  const filtered = tasks.filter(
    (t) => t.id !== req.params.id
  );

  writeTasks(filtered);

  res.json({
    message: "Task deleted",
  });
};