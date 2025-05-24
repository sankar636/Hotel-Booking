import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
    },
    roomType: {
        type: String,
        enum: ['Single Bed', 'Double Bed', 'Family Suite', 'Luxury Room'],
        default: 'Double Bed'
    },
    pricePerNight: {
        type: Number
    },
    amenities: {
        type: [String],
        enum: ["Room Service", "Mountain View", "Pool Access", 'Free Breakfast', 'Free WiFi']
    },
    images: {
        type: [String],
        required: true,
        validate: [arr => arr.length <= 4, 'Maximum of 4 images allowed']
    },
    isAvailable:{
        type: Boolean
    }

}, { timestamps: true })

export default mongoose.model('Room',roomSchema)

