import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("MONGO_URI is missing. Set it in server/.env");
    return;
  }

  try {
    const connection = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    console.error("The API will start, but contact submissions will fail until MongoDB is available.");
  }
};
