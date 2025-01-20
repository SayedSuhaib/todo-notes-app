import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected!!');
    } catch(err) {
        console.log('MongoDB connection failed:: ', err);
        process.exit(1);
    }
};