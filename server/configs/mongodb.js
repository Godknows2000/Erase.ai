import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected');
    });

    try {
        // Remove deprecated options
        await mongoose.connect(`${process.env.MONGODB_URI}/erase-ai`,{
            serverSelectionTimeoutMS: 15000,
        });
        console.log('Database connection established');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
