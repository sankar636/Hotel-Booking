import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

const app = express();

// Apply JSON middleware early
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

// Other global middlewares
app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*', 
    credentials: true
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes); // Integrate userRoutes

// 🔐 Example protected route


// 🔧 Health check route
app.get('/', (req, res) => {
    res.send('✅ Server is running');
});

export { app };
