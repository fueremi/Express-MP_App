const mongoose = require('mongoose');

const UserRoleSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('UserRole', UserRoleSchema)