import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/Blog", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (conn) {
      console.log("MongoDB connection Successfull!!");
    }
  } catch (error) {
    console.log("Error in connection", error);
  }
};
