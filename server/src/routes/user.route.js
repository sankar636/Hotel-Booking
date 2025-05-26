import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { getUserData, logout } from '../controller/user.controller.js';

const router = express.Router();

router.get('/userProfile',authMiddleware,  getUserData);
router.post('/logout',authMiddleware, logout)

export default router;
