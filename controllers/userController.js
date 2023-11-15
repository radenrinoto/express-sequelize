const { User, Profile, User_Profiles } = require('../models');

exports.getUser = async (req, res) => {
  try {
    const response = await User.findAll({
      include: User_Profiles
    });
    res.status(200).json({ data: response, message: 'Success' })
  } catch (error) {
    console.log(error);
  }
}

exports.getUserTask = async (req, res) => {
  try {
    const response = await User.findAll({
      include: 'userTask'
    });
    res.status(200).json({ data: response, message: 'Success' })
  } catch (error) {
    console.log(error);
  }
}

exports.createUser = async (req, res) => {
  try {
    const newData = req.body;
    console.log(newData);
    await User.create(newData, {
      include: Profile
    })
    const response = await User.findAll({
      include: Profile
    })
    res.status(201).json({ data: response, message: 'Success' })
  } catch (error) {
    console.log(error)
  }
}