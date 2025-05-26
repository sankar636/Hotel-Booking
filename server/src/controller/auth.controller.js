import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

export const register = async (req, res) => {
    try {
        const { username, email, password, role,contact } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }

        
        const user = await User.create({ username, email, password, role, contact });

        if(!user){
            return res.status(400).json({ success: false, message: 'User Not created' });
        }
        
        const token = await user.generateAuthToken();
        res.status(201).json({ success: true, message: 'User registered successfully', data: {user,token} });
    } catch (error) {
        console.error('Register Error:', error.message);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

export const login = async (req, res) => {
    try {
        console.log('Request Body:', req.body); 
        const { email, password } = req.body;

        if (!email) {
            return res.status(404).json({ success: false, message: 'Email required'})
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const isValidPassword = await user.isPasswordCorrect(password)
        if (!isValidPassword) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const token = await user.generateAuthToken()

        res.cookie('token', token,
            { httpOnly: true, }
        )

        res.status(200).json({ success: true, token, user });
    } catch (error) {
        console.error('Login Error:', error.message);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};


