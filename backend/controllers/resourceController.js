// Download resource file by ID
exports.downloadResourceFile = async (req, res) => {
	try {
		const resource = await Resource.findById(req.params.id);
		if (!resource || !resource.fileData || !resource.fileName || !resource.fileType) {
			return res.status(404).json({ error: 'File not found' });
		}
		res.set({
			'Content-Type': resource.fileType,
			'Content-Disposition': `attachment; filename="${resource.fileName}"`
		});
		res.send(resource.fileData);
	} catch (err) {
		res.status(500).json({ error: 'Failed to download file' });
	}
};


const Resource = require('../models/Resource');

// Get all resources
exports.getResources = async (req, res) => {
	try {
		const resources = await Resource.find();
		res.json(resources);
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch resources' });
	}
};

// Create resource (supports academic and normal)
exports.createResource = async (req, res) => {
	try {
		const { type, year, semester, subjectTitle, domain, title } = req.body;
		let fileUrl = null;
		let fileData = null;
		let fileName = null;
		let fileType = null;

		// Debug: log req.file and req.body
		console.log('Resource upload:', {
		  file: req.file,
		  body: req.body
		});

		// Handle file upload (assume file is sent as multipart/form-data)
		if (req.file) {
			fileName = req.file.originalname;
			fileType = req.file.mimetype;
			fileData = req.file.buffer;
			console.log('File received:', fileName, fileType, fileData ? fileData.length : 0);
		} else {
			console.log('No file received');
		}

		// If using fileUrl (e.g., cloud storage), set fileUrl from req.body
		if (req.body.fileUrl) {
			fileUrl = req.body.fileUrl;
		}

		const resource = new Resource({
			type,
			year,
			semester,
			subjectTitle,
			domain,
			title,
			fileUrl,
			fileData,
			fileName,
			fileType,
			uploadedBy: req.user._id
		});
		await resource.save();
		console.log('Resource saved:', resource._id);
		res.status(201).json(resource);
	} catch (err) {
		res.status(500).json({ error: 'Failed to create resource' });
	}
};

exports.getResourceById = (req, res) => {
	res.json({ message: `Get resource by ID ${req.params.id} (placeholder)` });
};

exports.updateResource = (req, res) => {
	res.json({ message: `Update resource ${req.params.id} (placeholder)` });
};

exports.deleteResource = (req, res) => {
	res.json({ message: `Delete resource ${req.params.id} (placeholder)` });
};
