const Nugget = require('../models/Nugget');

// Get all nuggets
const getAllNuggets = async (req, res) => {
  try {
    const nuggets = await Nugget.find();
    res.json(nuggets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching nuggets' });
  }
};

// Get random nugget
const getRandomNugget = async (req, res) => {
  try {
    const count = await Nugget.countDocuments();
    const random = Math.floor(Math.random() * count);
    const nugget = await Nugget.findOne().skip(random);
    if (!nugget) return res.status(404).json({ message: 'No nuggets found' });
    res.json(nugget);
  } catch (error) {
    res.status(500).json({ message: 'Error getting random nugget' });
  }
};

// Create new nugget
const createNugget = async (req, res) => {
  const { content, author } = req.body;
  if (!content || !author) {
    return res.status(400).json({ message: 'Both content and author are required' });
  }

  try {
    const nugget = new Nugget({ content, author });
    await nugget.save();
    res.status(201).json(nugget);
  } catch (error) {
    res.status(500).json({ message: 'Error creating nugget' });
  }
};

// Delete a nugget by nuggetId
const deleteNugget = async (req, res) => {
  try {
    const nugget = await Nugget.findOneAndDelete({ nuggetId: req.params.id });
    if (!nugget) {
      return res.status(404).json({ message: 'Nugget not found' });
    }
    res.json({ message: 'Nugget deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting nugget' });
  }
};

module.exports = {
  getAllNuggets,
  getRandomNugget,
  createNugget,
  deleteNugget
};
