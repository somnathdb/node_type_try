import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://rest-api:34eace700b79730481c17bab7e2657e1@cluster0-shard-00-00.uouvd.mongodb.net:27017,cluster0-shard-00-01.uouvd.mongodb.net:27017,cluster0-shard-00-02.uouvd.mongodb.net:27017/testDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')
        console.log('Database Successfully Connected')
    }catch(err){
        console.log('Internal Server Error')
    }
}