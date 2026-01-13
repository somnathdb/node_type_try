import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        await mongoose.connect('')
        console.log('Database Successfully Connected')
    }catch(err){
        console.log('Internal Server Error')
    }
}