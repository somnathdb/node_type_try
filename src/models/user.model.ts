import mongoose,{Schema} from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})

export default mongoose.model<IUser>('users',userSchema)