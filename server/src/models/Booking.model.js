import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Hotel'
    },
    room: {
        type: mongoose.Types.ObjectId,
        ref:'Room'
    },
    checkInDate: {
        type: Date,
    },
    checkOutDate: {
        type: Date
    },
    totalPrice: {
        type: Number
    },
    guests: {
        type: Number
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    },
    paymentMetho: {
        type: String,
        enum:['Stripe','Pay At Hotel']
    },
    isPaid: {
        type: Boolean
    }
},{timestamps: true})

export default mongoose.model('Booking', bookingSchema)