import User from '../models/User.model.js';

export const authMiddleware = async (req, res, next) => {
    try {
        // console.log(req);
        res.status(401).json({success: false, message: req})
        if (!req.auth || !req.auth.userId) { // Ensure req.auth and userId are defined
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        const userId = req.auth.userId; // Safely access userId
        console.log('userId', userId);

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        req.user = user; // Attach user to request object
        next();
    } catch (error) {
        console.error('Auth Middleware Error:', error.message);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

