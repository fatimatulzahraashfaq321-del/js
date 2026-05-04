import mongoose, { mongo } from "mongoose"

const connectDB = () =>{
 mongoose.connect("mongodb+srv://fatimatulzahraashfaq321_db_user:sZALoKlngWkJmEGW@learning-backend.ewraawh.mongodb.net/practice?appName=learning-backend")
    .then(()=>{
        console.log("mongoose connect")
    })
    .catch(()=>{
        console.log("error catch", err)
    })
}
export default connectDB