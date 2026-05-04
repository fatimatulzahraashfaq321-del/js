import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://fatimatulzahraashfaq321_db_user:sZALoKlngWkJmEGW@learning-backend.ewraawh.mongodb.net/practice?appName=learning-backend");
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("Error:", err);
  }
};

export default connectDB;