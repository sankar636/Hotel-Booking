import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requierd: true
    },
    email: {
        type: String,
        unique: true,
        requierd: true
    },
    password: {
        type: String,
        required: true
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
    }] // Only applicable for owners
}, { timestamps: true });

userSchema.pre(
    'save',
    async function (next) {
        if(!this.isModified('password')) return next()
        this.password = await bcrypt.hash(this.password, 8)
        next()
    }
)

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({_id: this._id},process.env.JWT_SECRET, {expiresIn: '24h'})
}

export default mongoose.model('User', userSchema);
