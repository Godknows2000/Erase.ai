import express from 'express';
import { clerkWebhooks } from '../controllers/UserController';

const userRouter = express.Router()

userRouter.post('/webhooks', clerkWebhooks)

export default userRouter