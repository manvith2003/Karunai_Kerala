import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import crypto from "crypto";
//dotenv
import config from "../utils/ENV/env.utils.js";

// models
import User from "../models/User/user.models.js";

const generateAccessAndRefreshTokens = async(userId) => {
    try{
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});

        return {accessToken, refreshToken};
    }catch(error){
        return response.status(500).json({error: error.message, msg: "Something went wrong while generating tokens"});
    }
}

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: config.email.user,
        pass: config.email.password
    },
});

export const registerUser = async (request, response) => {
    try {
        const { email, password, role } = request.body;
        if(!(email && password && role)){
            return response.status(400).json({msg: 'All fields are required'});
        }
        let exist = await User.findOne({ email: request.body.email });
        if (exist) {
            return response.status(200).json({ msg: 'User already exists' });
        }

        const verificationToken = crypto.randomBytes(20).toString('hex');
        const verificationTokenExpiry = Date.now() + 3600000;

        const user = {
            email: email,
            password,
            role: role,
            verificationToken: verificationToken,
            verificationTokenExpiry: verificationTokenExpiry,
        };
        const newUser = new User(user);
        await newUser.save();

        const createdUser = await User.findById(newUser._id).select("-password -refreshToken");

        if(!createdUser){
            return response.status(500).json({msg: 'Something went wrong while user registration'})
        }

        const verificationLink = `http://localhost:8000/auth/verify/${verificationToken}`;
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: newUser.email,
            subject: 'Email Verification',
            text: `Click the following link to verify your email: ${verificationLink}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return response.status(500).json({ msg: 'Email could not be sent', error: error.message });
            }
            return response.status(200).json({ msg: 'Verification email sent', user: createdUser });
        });
    } catch (error) {
        console.error('Server error:', error);
        return response.status(500).json(error.message);
    }
};

export const verifyEmail = async (request, response) => {
    try {
        const { token } = request.params;//email verification token
        const user = await User.findOne({
            verificationToken: token,
            verificationTokenExpiry: { $gt: Date.now() },
        });
        if (!user) {
            return response.status(400).json({ msg: 'Token is invalid or has expired' });
        }
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiry = undefined;
        await user.save();
        return response.status(200).json({ msg: 'Email verified successfully' });
    } catch (error) {
        console.error('Server error:', error);
        return response.status(500).json(error.message);
    }
};

export const loginUser = async (request, response) => {
    try {
        const { email, password } = request.body;
        if(!(email && password)){
            return response.status(400).json({msg: "All fields are requierd"});
        }
        const user = await User.findOne({ email });
        if (!user) {
            return response.status(400).json({ msg: "User does not exist" });
        }
        if (!user.isVerified) {
            return response.status(400).json({ msg: "Email not verified" });
        }

        // Password matching
        const isPasswordValid = await user.isPasswordCorrect(password);
        if (!isPasswordValid) {
            return response.status(400).json({ msg: "Invalid user credetials" });
        }

        //access and refresh token
        const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id);

        const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true, 
            secure: true
        }

        if (!user.isDetailsFilled) {
            return response.status(400).cookie("accessToken", accessToken, options).cookie("refreshToken", refreshToken, options).json({ userData: loggedInUser, accessToken: accessToken, refreshToken: refreshToken, msg: "User details incomplete" });
        }

        return response.status(200).cookie("accessToken", accessToken, options).cookie("refreshToken", refreshToken, options).json({userData: loggedInUser, accessToken: accessToken, refreshToken: refreshToken,});
    } catch (error) {
        console.error('Server error:', error);
        return response.status(500).json(error.message);
    }
};

export const logoutUser = async(request, response)=>{
    await User.findByIdAndUpdate(request.user._id, {$set: {refreshToken: undefined}}, {new: true});
    const options = {
        httpOnly: true, 
        secure: true
    }

    return response.status(200).clearCookie("accessToken", options).clearCookie("refreshToken", options).json({msg: "User logged out successfully"});
}
