import express from 'express';
import { removeBackgroundImage } from '../controllers/ImageController.js';
import upload from '../middlewares/multer.js';
import authUser from '../middlewares/auth.js';

const imageRouter = express.Router()

imageRouter.post('/remove-background', upload.single('image'), authUser, removeBackgroundImage)

export default imageRouter