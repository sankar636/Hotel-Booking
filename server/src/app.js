import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import clerkWebHook from './controller/clerkWebHook.js';
import { requireAuth } from '@clerk/express';

const app = express();

// Middleware: Log all incoming requests
app.use((req, res, next) => {
    console.log(`📥 ${req.method} ${req.url}`);
    next();
});

// ✅ Clerk webhook route (must use express.raw)
app.post(
    '/api/register',
    express.raw({ type: 'application/json' }),
    clerkWebHook
);

// Other global middlewares AFTER webhook
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// 🔐 Example protected route
app.get('/api/protected', requireAuth(), (req, res) => {
    res.json({
        message: 'Protected route accessed',
        userId: req.auth.userId
    });
});

// 🔧 Health check route
app.get('/', (req, res) => {
    res.send('✅ Server is running');
});

export { app };
