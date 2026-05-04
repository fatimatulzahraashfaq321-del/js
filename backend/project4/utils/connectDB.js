import mongoose from "mongoose";

const connectDB = ()=>{
    mongoose.connect("mongodb+srv://fatimatulzahraashfaq321_db_user:sZALoKlngWkJmEGW@learning-backend.ewraawh.mongodb.net/practice?appName=learning-backend")
    .then(()=>{
        console.log("MongoDB Connected")
    }).catch((err)=>{
        console.log("Error catch",err)
    })
}

export default connectDB