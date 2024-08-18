import mongoose from "mongoose";
import User from "../User/user.models.js";

const volunteerSchema = mongoose.Schema({
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
    ngoName: {
        type: String
    }
}, {timestamps: true})

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

export default Volunteer;