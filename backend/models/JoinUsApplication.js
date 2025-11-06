const mongoose = require('mongoose');

const joinUsApplicationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true
    },
    fieldOfStudies: {
        type: String,
        required: true,
        trim: true
    },
    degree: {
        type: String,
        required: true,
        enum: ['Bachelor', 'Master', 'PhD']
    },
    semester: {
        type: String,
        required: true
    },
    interest: {
        type: String,
        required: true,
        enum: ['Management', 'Chassis', 'Powertrain', 'Aerodynamics', 'Electronics', 'Business']
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'accepted', 'rejected'],
        default: 'pending'
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('JoinUsApplication', joinUsApplicationSchema);