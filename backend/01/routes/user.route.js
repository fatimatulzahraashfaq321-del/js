import { Router } from "express";
import { registerUser } from "../../01/controllers/user.controller.js";

const regist = Router ()

    userRouter.post("/register",registerUser)

export default registerUser