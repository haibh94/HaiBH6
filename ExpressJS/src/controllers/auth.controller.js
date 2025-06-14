const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.error('User already exists', 409);

    const hashed = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashed });

    res.success({ message: 'User registered' }, 201);
  } catch (err) {
    res.error('Server error', 500);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.error('Invalid credentials', 401);
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.success({ token });
  } catch (err) {
    res.error('Server error', 500);
  }
};