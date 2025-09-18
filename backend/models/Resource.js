
const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
	type: {
		type: String,
		enum: ['academic', 'normal'],
		required: true
	},
	// Academic resource fields
	year: String,
	semester: String,
	subjectTitle: String,
	// Normal resource fields
	domain: String,
	title: String,
	// File storage (for now, store as URL or Buffer)
	fileUrl: String, // If storing as URL
	fileData: Buffer, // If storing as binary
	fileName: String,
	fileType: String,
	uploadedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Resource', resourceSchema);
