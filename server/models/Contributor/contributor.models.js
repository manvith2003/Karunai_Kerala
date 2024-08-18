import mongoose from "mongoose";
import User from "../User/user.models.js";

const contributorSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    panNumber:{
        type:String,
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        default:"India",
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
}, {timestamps:true})

const Contributor = mongoose.model('Contributor', contributorSchema);

export default Contributor;