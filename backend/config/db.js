
// DB & environment configs
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://campusvaultsnist:campusvault@cluster0.vvbaadc.mongodb.net/';

const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB connected successfully');
	} catch (error) {
		console.error('MongoDB connection error:', error);
		process.exit(1);
	}
};

module.exports = connectDB;
