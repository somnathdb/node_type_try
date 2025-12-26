import { IUser } from "../interfaces/user.interface";
import userModel from "../models/user.model";

export class userRepository{
    create(data:IUser){
        return userModel.create(data)
    }
}