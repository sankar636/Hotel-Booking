import User from '../models/User.model.js';

export const getUserData = async (req, res) => {
    try {
        console.log("getUserData - req.user:", req.user); 
        const userId = req.user._id; 
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


export const logout = async (req, res) => {
    try {
        return res.clearCookie('token').status(200).json(
            {success:true, message: 'User logedout successfully'}
        )
    } catch (error) {
        console.error('Error logout user:', error.message);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

