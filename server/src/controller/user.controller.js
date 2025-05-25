import User from '../models/User.model.js';

export const getUserData = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming `authMiddleware` attaches user to `req`
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.error('Error fetching user data:', error.message);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

export const getOwnerData = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming `authMiddleware` attaches user to `req`
        const owner = await User.findById(userId).populate('hotelsOwned');
        if (!owner || owner.role !== 'owner') {
            return res.status(404).json({ success: false, message: 'Owner not found or user is not an owner' });
        }
        res.status(200).json({ success: true, data: owner });
    } catch (error) {
        console.error('Error fetching owner data:', error.message);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};
