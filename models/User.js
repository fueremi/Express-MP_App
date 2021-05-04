const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserRole'
    },
    is_active: {
        type: Number,
        min: 0,
        max: 1,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)