import express from "express";

//controllers
import { details } from "../controllers/details.controller.js";
import { verifyJwtToken } from "../middlewares/jwtAuth.js";

const userDetailsRoute = express.Router();

userDetailsRoute.post('/userDetails', verifyJwtToken, details);

export default userDetailsRoute;