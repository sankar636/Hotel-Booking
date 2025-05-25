import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    username: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    image: {
        type: String
    },
    contact: {
        type: String
    },
    hotelsOwned: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hotel'
        }
    ],
}, { timestamps: true })

export default mongoose.model('User', userSchema)
