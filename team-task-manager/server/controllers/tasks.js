const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description, projectId, assignedTo, dueDate } = req.body;

  try {
    const newTask = new Task({
      title,
      description,
      projectId,
      assignedTo,
      dueDate,
    });

    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.params.projectId })
      .populate('assignedTo', ['name', 'email']);
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateTaskStatus = async (req, res) => {
  const { status } = req.body;

  try {
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    // Allow admin or assigned user to update status
    if (req.user.role !== 'Admin' && task.assignedTo.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
    }

    task.status = status;
    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.assignTask = async (req, res) => {
    const { userId } = req.body;
    try {
        let task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        task.assignedTo = userId;
        await task.save();
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
