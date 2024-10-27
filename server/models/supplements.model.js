const mongoose = require('mongoose');
const SupplementSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: 'product name already exists',
        required: 'Name is required'
    },
    description: {
        type: String,
        trim: true,
        required: 'product description is required'
    },
    price: {
        type: Number        
    },
    updated: {
        type: Number
    },   
});

module.exports = mongoose.model('Supplement', SupplementSchema);
