import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
    username: {
        tyoe: String

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
},
    { timestamps: true })

export default mongoose.model("Owner", ownerSchema)