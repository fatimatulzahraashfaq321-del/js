import mongoose, { model } from "mongoose"

const userSchema = new mongoose.Schema({

    name:{
       type : String,
       required :true

    },
    email:{
        type: String,
        requirerd : true
    },
    password:{
        type:  String,
        required :true
    },
     age:{
        type: Number,
        required: true
     }
});
const user= mongoose.model("user",userschema)

export default user