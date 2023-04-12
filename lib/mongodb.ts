import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Something went wrong: Invalid Environment Variable');
}

export const connectToMongoDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI);

    return connection;
  } catch (error) {
    console.log(error, 'Error connecting to Database');
  }
};
