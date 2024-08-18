import express from "express";

//controllers
import { registerUser, loginUser, verifyEmail, logoutUser } from "../controllers/auth.controller.js";
import { verifyJwtToken } from "../middlewares/jwtAuth.js";


const authRoute = express.Router();

authRoute.post('/register', registerUser);
authRoute.post('/login', loginUser);
authRoute.get('/verify/:token', verifyEmail);
authRoute.post("/logout", verifyJwtToken, logoutUser);

export default authRoute;


