import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { clerkMiddleware } from '@clerk/express'

import clerkWebHooks from './controller/clerkWebHook.js'

const app = express()


app.use(clerkMiddleware())

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: '16kb'
}))
app.use(express.urlencoded({
    extended:true,
    limit: "16kb"
}))

app.use(express.static("public"))
app.use(cookieParser())


//Api to listen clerk webhook
app.use('/api/clerk',clerkWebHooks)

app.get('/', (req, res) => {
    res.send('Server Started');
});

export { app }
