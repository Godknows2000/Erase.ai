import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';

const startServer = async () => {
    // App Config
    const PORT = process.env.PORT || 4000;
    const app = express();
    
    // Wait for DB connection
    await connectDB();

    // Initialize Middleware
    app.use(express.json());
    app.use(cors());

    // API routes
    app.get('/', (req, res) => res.status(200).send('API working'));
    app.use('/api/user', userRouter);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();  // Call the async function to start the server
