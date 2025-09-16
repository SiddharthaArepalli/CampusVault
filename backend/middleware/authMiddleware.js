// Authentication, validation, etc.
const jwt = require('jsonwebtoken');
const User = require('../models/User');

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

exports.verifyToken = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return res.status(401).json({ message: 'No token provided.' });
	}
	const token = authHeader.split(' ')[1];
	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		const user = await User.findById(decoded.userId).select('-password');
		if (!user) {
			return res.status(401).json({ message: 'User not found.' });
		}
		req.user = user;
		next();
	} catch (err) {
		return res.status(401).json({ message: 'Invalid or expired token.' });
	}
};
