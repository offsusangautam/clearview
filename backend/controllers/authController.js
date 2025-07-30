import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const generateToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Register user/admin
export const registerUser = async (req, res) => {
  const { username, email, password, isAdmin } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ success: false, message: 'User already exists' });

    const user = new User({ username, email, password, isAdmin: isAdmin || false });
    await user.save();

    res.status(201).json({
      success: true,
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id, user.isAdmin),
      },
    });
  } catch (error) {
    console.error('REGISTER error:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Login user/admin
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ success: false, message: 'Invalid credentials' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid credentials' });

    res.status(200).json({
      success: true,
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id, user.isAdmin),
      },
    });
  } catch (error) {
    console.error('LOGIN error:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
  login(data.data);
console.log("Logged in user:", data.data);
navigate("/admin/dashboard");

};
