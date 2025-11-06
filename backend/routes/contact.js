const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

// POST - Create new contact message
router.post('/', async (req, res) => {
    try {
        const message = new ContactMessage(req.body);
        await message.save();
        
        res.status(201).json({
            success: true,
            message: 'Message sent successfully!',
            data: message
        });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(400).json({
            success: false,
            message: 'Failed to send message',
            error: error.message
        });
    }
});

// GET - Get all messages (for admin dashboard)
router.get('/', async (req, res) => {
    try {
        const messages = await ContactMessage.find()
            .sort({ submittedAt: -1 });
        
        res.status(200).json({
            success: true,
            count: messages.length,
            data: messages
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch messages',
            error: error.message
        });
    }
});

// PATCH - Update message status
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const message = await ContactMessage.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );
        
        if (!message) {
            return res.status(404).json({
                success: false,
                message: 'Message not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Status updated successfully',
            data: message
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