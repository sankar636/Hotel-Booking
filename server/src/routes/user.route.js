import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { getUserData, getOwnerData } from '../controller/user.controller.js';

const router = express.Router();

router.get('/user',  getUserData);
router.get('/owner', authMiddleware, getOwnerData);

export default router;
