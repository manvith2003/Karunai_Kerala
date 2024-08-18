import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum: ['Admin', 'Contributor', 'Care Institution', 'Provider', 'Volunteer'],
        default: 'Contributor',
        required:true
    },
    isDetailsFilled:{
        type:Boolean,
        default:false
    },
    isVerified: {
        type:Boolean,
        default:false,
    },
    verificationToken: {
        type:String,
    },
    verificationTokenExpiry: {
        type:Date,
    },
    refreshToken:{
        type:String
    }
}, {timestamps: true})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

//custom methods
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        email: this.email,
        role: this.role
    }, 
    process.env.JWT_ACCESS_SECRETKEY,
    {
        expiresIn: process.env.JWT_ACCESS_EXPIRY
    })
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id: this._id,
    }, 
    process.env.JWT_REFRESH_SECRETKEY,
    {
        expiresIn: process.env.JWT_REFRESH_EXPIRY
    })
}

const User = mongoose.model('User', userSchema);

export default User;

