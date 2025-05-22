import mongoose from 'mongoose'
const DB_NAME = 'hotelbooking'

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`)
        console.log('mongodb connected');        
    } catch (error) {
        console.log('MongoDB connected error', error);
        process.exit(1)
    }
}

export default connectDB