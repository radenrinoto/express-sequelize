const { Task } = require('../models');

exports.createTask = async (req, res) => {
  try {
    const data = req.body;
    await Task.create(data);

    res.status(201).json({ message: 'Success' })
  } catch (error) {
    console.log(error)
  }
}