const Task = require('../models/task');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json({ message: 'Task created successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
    } else {
      res.status(200).json(task);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
    } else {
      res.status(200).json(task);
    }
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndRemove(req.params.taskId);
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
    } else {
      res.status(204).end();
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};