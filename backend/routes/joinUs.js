const express = require('express');
const router = express.Router();
const JoinUsApplication = require('../models/JoinUsApplication');

// POST - Create new application
router.post('/', async (req, res) => {
    try {
        const application = new JoinUsApplication(req.body);
        await application.save();
        
        res.status(201).json({
            success: true,
            message: 'Application submitted successfully!',
            data: application
        });
    } catch (error) {
        console.error('Error submitting application:', error);
        res.status(400).json({
            success: false,
            message: 'Failed to submit application',
            error: error.message
        });
    }
});

// GET - Get all applications (for admin dashboard)
router.get('/', async (req, res) => {
    try {
        const applications = await JoinUsApplication.find()
            .sort({ submittedAt: -1 });
        
        res.status(200).json({
            success: true,
            count: applications.length,
            data: applications
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch applications',
            error: error.message
        });
    }
});

// GET - Get single application by ID
router.get('/:id', async (req, res) => {
    try {
        const application = await JoinUsApplication.findById(req.params.id);
        
        if (!application) {
            return res.status(404).json({
                success: false,
                message: 'Application not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: application
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch application',
            error: error.message
        });
    }
});

// PATCH - Update application status
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const application = await JoinUsApplication.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );
        
        if (!application) {
            return res.status(404).json({
                success: false,
                message: 'Application not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Status updated successfully',
            data: application
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to update status',
            error: error.message
        });
    }
});

module.exports = router;