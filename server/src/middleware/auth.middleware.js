import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "")

        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        const user = await User.findById(decoded._id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        req.user = user; // Attach user to request object
        next();
    } catch (error) {
        console.error('Auth Middleware Error:', error.message);
        res.status(401).json({ success: false, message: 'Unauthorized' });
    }
};

