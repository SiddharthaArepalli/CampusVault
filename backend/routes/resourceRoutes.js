const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');
const { verifyToken } = require('../middleware/authMiddleware');

// Protect all resource routes
router.use(verifyToken);

// Example resource routes (add your actual handlers)
router.get('/', resourceController.getResources); // Get all resources
router.post('/', resourceController.createResource); // Create resource
router.get('/:id', resourceController.getResourceById); // Get resource by ID
router.put('/:id', resourceController.updateResource); // Update resource
router.delete('/:id', resourceController.deleteResource); // Delete resource

module.exports = router;
