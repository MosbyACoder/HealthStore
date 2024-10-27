import mongoose from 'mongoose'
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
    quantity: {
        type: Number
        
    },   
});

export default mongoose.model('Supplement', SupplementSchema);
