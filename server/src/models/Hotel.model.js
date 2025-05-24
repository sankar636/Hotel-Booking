import mongoose from 'mongoose'

const hotelSchema = new mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    contact: {
        type: String
    },
    city: {
        type: String
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner'
    }
}, {timestamps: true})

export default mongoose.model('Hotel', hotelSchema)