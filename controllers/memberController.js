const Member = require('../models/Member');

// Get all members
const getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching members' });
  }
};

// Get a random member
const getRandomMember = async (req, res) => {
  try {
    const count = await Member.countDocuments();
    if (count === 0) return res.status(404).json({ error: 'No members found' });

    const random = Math.floor(Math.random() * count);
    const member = await Member.findOne().skip(random);
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching random member' });
  }
};

// Create a new member
const createMember = async (req, res) => {
  const { author, text, email } = req.body;
  if (!text || !author) {
    return res.status(400).json({ error: 'Both text and author are required' });
  }

  try {
    const newMember = new Member({ text, author, email });
    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating member' });
  }
};

// Delete a member by ID
const deleteMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.json({ message: 'Member deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting member' });
  }
};

module.exports = {
  getAllMembers,
  getRandomMember,
  createMember,
  deleteMember
};
