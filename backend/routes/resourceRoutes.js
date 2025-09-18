
const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');
const { verifyToken } = require('../middleware/authMiddleware');
const multer = require('multer');

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Protect all resource routes
router.use(verifyToken);

// Resource routes
router.get('/', resourceController.getResources); // Get all resources
router.post('/', upload.single('file'), resourceController.createResource); // Create resource with file upload
router.get('/:id', resourceController.getResourceById); // Get resource by ID
router.get('/:id/download', resourceController.downloadResourceFile); // Download resource file
router.put('/:id', resourceController.updateResource); // Update resource
router.delete('/:id', resourceController.deleteResource); // Delete resource

module.exports = router;
