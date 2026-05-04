import User from "../models/user.model.js";


const registerUser = async (req, res)=>{

  const {name , email,password}= req.body;

  if(!name || !email || !password){
    return res.status(400).json({
      message:"All Fields Are Required"
    })
  }

  try {
    
    const existingUser = await User.findOne({email})

    if(existingUser){
       return res.status(400).json({
      message:"User Already Exists"
    })  
    }

    const newUser = await User.create({name,email,password})

    if(!newUser){
       return res.status(500).json({
      message:"User is Not Created"
    })
    }

    return res.status(201).json({
      message:"User Created Successfully",
      newUser
    })

  } catch (error) {
    return res.status(500).json({
      message:"Something went Wrong",
      error
    })
  }


}

const loginUser = async(req, res)=>{
  const {name , email,password}= req.body;

  if(!name || !email || !password){
    return res.status(400).json({
      message:"All Fields Are Required"
    })
  }

  try {

     const existingUser = await User.findOne({email})

    if(!existingUser){
       return res.status(400).json({
      message:"User Does Not Exists"
    })
    }

    return res.status(201).json({
      message:"User Loggedin Successfully",
      existingUser
    })
    
  } catch (error) {
     return res.status(500).json({
      message:"Something went Wrong",
      error
    })
  }
}

export {registerUser, loginUser}