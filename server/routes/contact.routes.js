import express from "express";

//controller
import { submitContactForm } from "../controllers/contact.controller.js";

const contactRoute = express.Router();

contactRoute.post("/contactUs", submitContactForm);

export default contactRoute;
