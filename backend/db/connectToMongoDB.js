import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectToMongoDB = async () => {
    try {
        const uri = process.env.MONGODB_URL;
        console.log('MongoDB URI:', uri);
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected to mongoDB");
    } catch (error) {
        console.log("error while connecting to MongoDB:", error.message);
    }
}

export default connectToMongoDB;
