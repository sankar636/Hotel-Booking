import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    image: {
        type: String,
    },
    contact: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'owner'], // Define roles
        default: 'user',
    },
   recentSearchedCities: [{
    type: String,
    required: true
   }] // Only applicable for owners
}, { timestamps: true });

export default mongoose.model('User', userSchema);
