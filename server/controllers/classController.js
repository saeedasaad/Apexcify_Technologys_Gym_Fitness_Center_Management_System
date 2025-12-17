// classController.js
const Class = require('../models/user');

exports.createClass = async (req, res) => {
  try {
    // Remove _id if it exists in payload
    const { _id, ...classData } = req.body;

    const newClass = new Class(classData);
    await newClass.save();

    res.status(201).json(newClass);
  } catch (error) {
    console.error('Error creating class:', error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};
