import mongoose from "mongoose";

const Connection = async(username, password)=>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.me3awz4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(URL);
        console.log("Connected successfully to DB");
    }catch(error){
        console.log("Error occured while connecting to DB", error);
    }
}

export default Connection;