import { Request,Response } from "express";
import { userService } from "../services/user.service";

const userServices = new userService();

export class userController{
    static async userCreate(req:Request,res:Response){
        try{
            let result = await userServices.create(req.body)
            res.status(201).json({message:"User Created",data:result})
        }catch(err){
            res.status(500).json({message:"Internal Server Error",error:err})
        }
    }
}