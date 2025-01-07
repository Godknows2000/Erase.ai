import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected');
    });

    try {
        // Remove deprecated options
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connection established');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Exit the application if the database connection fails
    }
};

export default connectDB;
